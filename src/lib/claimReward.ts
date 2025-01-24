import {
  rewardsControllerContract,
  REW_ADDRESS,
  uiIncentiveDataProviderV3Contract,
  DAI_ADDRESS,
  POOL_ADDRESSES_PROVIDER,
} from '@/utils/config';
import { AggregatedReserveIncentiveData } from '@/utils/types';

export async function claimReward() {
  const asset: string[] = []; // asset 数组
  const reservesIncentivesData: AggregatedReserveIncentiveData[] =
    await uiIncentiveDataProviderV3Contract.getReservesIncentivesData(POOL_ADDRESSES_PROVIDER);

  const daiIncentivesData = reservesIncentivesData.find(
    (reserve) => reserve.underlyingAsset.toLocaleLowerCase === DAI_ADDRESS.toLocaleLowerCase,
  );
  if (!daiIncentivesData) {
    throw new Error('DAI incentives data not found');
  }
  if (daiIncentivesData.aIncentiveData?.rewardsTokenInformation?.length > 0) {
    asset.push(daiIncentivesData.aIncentiveData.tokenAddress);
  }

  if (daiIncentivesData.vIncentiveData?.rewardsTokenInformation.length > 0) {
    asset.push(daiIncentivesData.vIncentiveData.tokenAddress);
  }

  if (daiIncentivesData.sIncentiveData?.rewardsTokenInformation.length > 0) {
    asset.push(daiIncentivesData.sIncentiveData.tokenAddress);
  }

  console.log('asset:', asset);

  const amount = 10000; // claim amount  Pass MAX_UINT to claim the entire unclaimed reward balance
  // REW_ADDRESS reward token address

  const txToSelf = await rewardsControllerContract.claimRewardsToSelf(asset, amount, REW_ADDRESS);
  console.log('txToSelf hash:', txToSelf.hash);
}
