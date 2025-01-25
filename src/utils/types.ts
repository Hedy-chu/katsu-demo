export enum RateMode {
  None = '0',
  Stable = '1',
  Variable = '2',
}

export interface AggregatedReserveData {
  underlyingAsset: string;
  decimals: number;
  availableLiquidity: string;
  priceInMarketReferenceCurrency: string;
  variableRateSlope1: string;
  variableRateSlope2: string;
  optimalUsageRatio: string;
}

export interface AggregatedReserveIncentiveData {
  underlyingAsset: string;
  aIncentiveData: IncentiveData;
  vIncentiveData: IncentiveData;
  sIncentiveData: IncentiveData;
}

export interface IncentiveData {
  tokenAddress: string;
  incentiveControllerAddress: string;
  rewardsTokenInformation: RewardInfo[];
}

export interface RewardInfo {
  rewardTokenSymbol: string;
  rewardTokenAddress: string;
  rewardOracleAddress: string;
  emissionPerSecond: bigint;
  incentivesLastUpdateTimestamp: bigint;
  tokenIncentivesIndex: bigint;
  emissionEndTimestamp: bigint;
  rewardPriceFeed: bigint;
  rewardTokenDecimals: number;
  precision: number;
  priceFeedDecimals: number;
}
