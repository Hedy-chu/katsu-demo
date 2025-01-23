import { ethers } from 'ethers';

import {
  WIP_ATOKEN,
  CRV_ADDRESS,
  CRV_ORACLE,
  PULL_REWARDS_TRANSFER_STRATEGY,
  DAI_ATOKEN,
  REW_ADDRESS,
  REW_ORACLE,
} from './config';

interface RewardsConfigInput {
  emissionPerSecond: bigint;
  totalSupply: bigint;
  distributionEnd: number;
  asset: string;
  reward: string;
  transferStrategy: string;
  rewardOracle: string;
}

export const config: RewardsConfigInput[] = [
  {
    emissionPerSecond: 1000n,
    totalSupply: ethers.parseEther('1000'),
    distributionEnd: 1742706798,
    asset: WIP_ATOKEN,
    reward: CRV_ADDRESS,
    transferStrategy: PULL_REWARDS_TRANSFER_STRATEGY,
    rewardOracle: CRV_ORACLE,
  },
  {
    emissionPerSecond: 2000n,
    totalSupply: ethers.parseEther('2000'),
    distributionEnd: 1769136107,
    asset: DAI_ATOKEN,
    reward: REW_ADDRESS,
    transferStrategy: PULL_REWARDS_TRANSFER_STRATEGY,
    rewardOracle: REW_ORACLE,
  },
];
