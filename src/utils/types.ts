export enum RateMode {
  None = '0',
  Stable = '1',
  Variable = '2',
}

export interface AggregatedReserveData {
  underlyingAsset: string;
  variableRateSlope1: string;
  variableRateSlope2: string;
  optimalUsageRatio: string;
}
