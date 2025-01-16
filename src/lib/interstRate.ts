import { formatUnits } from 'ethers';

import { DAI_ADDRESS, uiPoolDataProviderV3, POOL_ADDRESSES_PROVIDER } from '@/utils/config';
import { AggregatedReserveData } from '@/utils/types';

export const getInterstRate = async () => {
  // POOL_ADDRESSES_PROVIDER is：PoolAddressesProvider-story
  const [aggregatedReserveData] = await uiPoolDataProviderV3.getReservesData(POOL_ADDRESSES_PROVIDER);
  const reserve = aggregatedReserveData.find(
    (data: AggregatedReserveData) => data.underlyingAsset.toLowerCase() === DAI_ADDRESS.toLowerCase(),
  );
  console.log(reserve);
  console.log(reserve.underlyingAsset);
  console.log(formatUnits(reserve.variableRateSlope1, 27)); // 0.04 => 4% is the inflection point of the ordinate, and the corresponding abscissa is optimalUsageRatio
  console.log(formatUnits(reserve.variableRateSlope2, 27)); // 0.75 => 75% It is the end of the ordinate, and the corresponding abscissa is 100%.
  console.log(formatUnits(reserve.optimalUsageRatio, 27)); // 0.8 => 80% is the inflection point of the abscissa, and the corresponding ordinate is variableRateSlope1
};
