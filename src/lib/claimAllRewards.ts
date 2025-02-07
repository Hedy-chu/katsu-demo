import { rewardsControllerContract, POOL_ADDRESSES_PROVIDER, uiIncentiveDataProviderV3Contract } from '@/utils/config';
import { AggregatedReserveIncentiveData } from '@/utils/types';

export async function claimAllReward() {
  const asset: string[] = []; // asset 数组
  const reservesIncentivesData: AggregatedReserveIncentiveData[] =
    await uiIncentiveDataProviderV3Contract.getReservesIncentivesData(POOL_ADDRESSES_PROVIDER);
  reservesIncentivesData.forEach((incentivesData) => {
    if (incentivesData.aIncentiveData?.rewardsTokenInformation.length > 0) {
      asset.push(incentivesData.aIncentiveData.tokenAddress);
    }
    if (incentivesData.vIncentiveData?.rewardsTokenInformation.length > 0) {
      asset.push(incentivesData.vIncentiveData.tokenAddress);
    }
    if (incentivesData.sIncentiveData?.rewardsTokenInformation.length > 0) {
      asset.push(incentivesData.sIncentiveData.tokenAddress);
    }
  });
  // REW_ADDRESS reward token address
  console.log('asset:', asset);
  const tx = await rewardsControllerContract.claimAllRewardsToSelf(asset);
  const receipt = await tx.wait();
  if (receipt.status === 1) {
    console.log('tx hash:', tx.hash);
  }
}
