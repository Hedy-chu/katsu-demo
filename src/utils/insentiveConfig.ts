import { ethers } from 'ethers';

import {
  CRV_ADDRESS,
  CRV_ORACLE,
  PULL_REWARDS_TRANSFER_STRATEGY,
  WMON_VARIABLEDEBT_TOKEN,
  DAI_VARIABLEDEBT_TOKEN,
  WMON_ATOKEN,
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
    emissionPerSecond: ethers.parseEther('0.0001'),
    totalSupply: ethers.parseEther('10000'),
    distributionEnd: 1742706798,
    asset: WMON_VARIABLEDEBT_TOKEN,
    reward: REW_ADDRESS,
    transferStrategy: PULL_REWARDS_TRANSFER_STRATEGY,
    rewardOracle: REW_ORACLE,
  },
  {
    emissionPerSecond: ethers.parseEther('0.0001'),
    totalSupply: ethers.parseEther('10000'),
    distributionEnd: 1742706798,
    asset: DAI_VARIABLEDEBT_TOKEN,
    reward: REW_ADDRESS,
    transferStrategy: PULL_REWARDS_TRANSFER_STRATEGY,
    rewardOracle: REW_ORACLE,
  },
  {
    emissionPerSecond: ethers.parseEther('0.0001'),
    totalSupply: ethers.parseEther('10000'),
    distributionEnd: 1769136107,
    asset: DAI_ATOKEN,
    reward: CRV_ADDRESS,
    transferStrategy: PULL_REWARDS_TRANSFER_STRATEGY,
    rewardOracle: CRV_ORACLE,
  },
  {
    emissionPerSecond: ethers.parseEther('0.0001'),
    totalSupply: ethers.parseEther('10000'),
    distributionEnd: 1769136107,
    asset: WMON_ATOKEN,
    reward: CRV_ADDRESS,
    transferStrategy: PULL_REWARDS_TRANSFER_STRATEGY,
    rewardOracle: CRV_ORACLE,
  },
];
