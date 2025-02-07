import { Contract, parseEther } from 'ethers';

import { PULL_REWARDS_TRANSFER_STRATEGY, erc20Abi, signer, emissionManagerContract } from '@/utils/config';
import { config } from '@/utils/insentiveConfig';

export const CRV_ADDRESS = process.env.CRV_ADDRESS || '';
export const REW_ADDRESS = process.env.REW_ADDRESS || '';
export const WIP_ATOKEN = process.env.WIP_ATOKEN || '';
export const DAI_ATOKEN = process.env.DAI_ATOKEN || '';
export const configIncentiveAssets = async () => {
  // step1: set emission admin
  const tx1 = await emissionManagerContract.setEmissionAdmin(CRV_ADDRESS, signer.address);
  const tx2 = await emissionManagerContract.setEmissionAdmin(REW_ADDRESS, signer.address);
  const tx1Receipt = await tx1.wait();
  const tx2Receipt = await tx2.wait();
  await tx2.wait();
  if (tx1Receipt.status === 1 && tx2Receipt.status === 1) {
    console.log('set emission admin success');
    console.log('tx1 hash:', tx1.hash);
    console.log('tx2 hash:', tx2.hash);
  }

  // step2: configure assets
  console.log('configInsentiveAssets');
  const tx = await emissionManagerContract.configureAssets(config);
  const configReceipt = await tx.wait();
  if (configReceipt.status === 1) {
    console.log('configure assets success');
    console.log('tx hash:', tx.hash);
  }

  // step3: approve reward token to PullRewardsTransferStrategy
  const rewContract = new Contract(REW_ADDRESS, erc20Abi, signer) as any;
  const crvContract = new Contract(CRV_ADDRESS, erc20Abi, signer) as any;
  const approve1 = await rewContract.approve(PULL_REWARDS_TRANSFER_STRATEGY, parseEther('30000'));
  const approve2 = await crvContract.approve(PULL_REWARDS_TRANSFER_STRATEGY, parseEther('30000'));
  const approve1Receipt = await approve1.wait();
  const approve2Receipt = await approve2.wait();
  if (approve1Receipt.status === 1 && approve2Receipt.status === 1) {
    console.log('approve success');
    console.log('approve1 hash:', approve1.hash);
    console.log('approve2 hash:', approve2.hash);
  }
};
