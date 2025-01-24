import { Contract, parseEther } from 'ethers';

import { erc20Abi, signer, PULL_REWARDS_TRANSFER_STRATEGY } from '@/utils/config';
// import { config } from '@/utils/insentiveConfig';

export const CRV_ADDRESS = process.env.CRV_ADDRESS || '';
export const REW_ADDRESS = process.env.REW_ADDRESS || '';
export const WIP_ATOKEN = process.env.WIP_ATOKEN || '';
export const DAI_ATOKEN = process.env.DAI_ATOKEN || '';
export const configInsentiveAssets = async () => {
  // step1: set emission admin
  // await emissionManagerContract.setEmissionAdmin(CRV_ADDRESS, signer.address);
  // await emissionManagerContract.setEmissionAdmin(REW_ADDRESS, signer.address);

  // step2: configure assets
  // console.log('configInsentiveAssets');
  // console.log('config:', config);
  // const tx = await emissionManagerContract.configureAssets(config);
  // console.log('tx hash:', tx.hash);

  // step3: approve reward token to PullRewardsTransferStrategy
  const rewContract = new Contract(REW_ADDRESS, erc20Abi, signer) as any;
  const crvContract = new Contract(CRV_ADDRESS, erc20Abi, signer) as any;
  const approve1 = await rewContract.approve(PULL_REWARDS_TRANSFER_STRATEGY, parseEther('5000'));
  const approve2 = await crvContract.approve(PULL_REWARDS_TRANSFER_STRATEGY, parseEther('5000'));
  console.log('approve1 hash:', approve1.hash);
  console.log('approve2 hash:', approve2.hash);
};
