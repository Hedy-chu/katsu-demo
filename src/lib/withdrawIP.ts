import { ethers } from 'ethers';

import {
  signer,
  dataProviderContract,
  WIP_ADDRESS,
  aTokenAbi,
  WRAPPED_TOKEN_GATEWAYV3_ADDRESS,
  MAX_UINT_AMOUNT,
  wrappedTokenGatewayContract,
  POOL_ADDRESS,
  provider,
} from '@/utils/config';

export async function withdrawIP() {
  const owner = signer.address;

  const { aTokenAddress } = await dataProviderContract.getReserveTokensAddresses(WIP_ADDRESS);
  const wipAToken = new ethers.Contract(aTokenAddress, aTokenAbi, signer) as any;
  const aTokensBalance = await wipAToken.balanceOf(owner);
  console.log('aTokensBalance:', aTokensBalance.toString());

  const approveTx = await wipAToken.approve(WRAPPED_TOKEN_GATEWAYV3_ADDRESS, MAX_UINT_AMOUNT);
  console.log('approveTx hash:', approveTx.hash);

  const withdrawSize = aTokensBalance;
  const tx = await wrappedTokenGatewayContract.withdrawIP(POOL_ADDRESS, withdrawSize, owner);
  console.log('tx hash:', tx.hash);

  const balanceWei = await provider.getBalance(owner);
  const balanceEth = ethers.formatEther(balanceWei);
  console.log('current balance:', balanceEth, 'IP');
}
