import {
  uiIncentiveDataProviderV3Contract,
  DAI_ADDRESS,
  POOL_ADDRESSES_PROVIDER,
  uiPoolDataProviderV3,
} from '@/utils/config';
import { normalizeBN, normalize, valueToBigNumber } from '@/utils/math';
import { AggregatedReserveData, AggregatedReserveIncentiveData, RewardInfo } from '@/utils/types';

const SECONDS_PER_YEAR = valueToBigNumber(31536000);

export async function calculateDAIIncentiveAPR() {
  const reservesIncentivesData: AggregatedReserveIncentiveData[] =
    await uiIncentiveDataProviderV3Contract.getReservesIncentivesData(POOL_ADDRESSES_PROVIDER);
  const [reservesData] = await uiPoolDataProviderV3.getReservesData(POOL_ADDRESSES_PROVIDER);
  const daiInfo = reservesData.find(
    (reserve: AggregatedReserveData) => reserve.underlyingAsset.toLowerCase() === DAI_ADDRESS.toLowerCase(),
  );
  const daiIncentivesData = reservesIncentivesData.find(
    (reserve) => reserve.underlyingAsset.toLowerCase() === DAI_ADDRESS.toLowerCase(),
  );
  const rewardTokenInfos: RewardInfo[] = [];
  if (!daiIncentivesData || !daiInfo) {
    console.error('Error: DAI incentives data or DAI info not found');
    return;
  }
  if (daiIncentivesData.aIncentiveData.rewardsTokenInformation.length > 0) {
    rewardTokenInfos.push(...daiIncentivesData.aIncentiveData.rewardsTokenInformation);
  }
  if (daiIncentivesData.sIncentiveData.rewardsTokenInformation.length > 0) {
    rewardTokenInfos.push(...daiIncentivesData.sIncentiveData.rewardsTokenInformation);
  }
  calculateAssetIncentiveAPR(rewardTokenInfos, daiInfo);
}

export async function calculateAssetIncentiveAPR(rewardTokenInfos: RewardInfo[], assetInfo: AggregatedReserveData) {
  let totalRewardValuePerYear = 0;
  rewardTokenInfos.forEach(({ emissionPerSecond, rewardTokenDecimals, rewardPriceFeed, priceFeedDecimals }) => {
    const rewardTokenPriceInMarketReferenceCurrency = normalize(rewardPriceFeed.toString(), Number(priceFeedDecimals));
    const emissionPerSecondNormalized = normalizeBN(
      emissionPerSecond.toString(),
      Number(rewardTokenDecimals),
    ).multipliedBy(rewardTokenPriceInMarketReferenceCurrency);
    const emissionPerYear = emissionPerSecondNormalized.multipliedBy(SECONDS_PER_YEAR);
    totalRewardValuePerYear += emissionPerYear.toNumber();
  });

  const totalSupplyNormalized = normalizeBN(
    assetInfo.availableLiquidity.toString(),
    Number(assetInfo.decimals),
  ).multipliedBy(assetInfo.priceInMarketReferenceCurrency);
  const totalMarketValue = totalSupplyNormalized.toNumber();

  if (totalMarketValue === 0) {
    return '0';
  }

  const apr = totalRewardValuePerYear / totalMarketValue;
  console.log(`APR for ${assetInfo.underlyingAsset} is ${apr}`);
  return apr;
}
