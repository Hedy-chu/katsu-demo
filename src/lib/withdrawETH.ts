import { ethers } from 'ethers';

import {
  signer,
  dataProviderContract,
  WMON_ADDRESS,
  aTokenAbi,
  WRAPPED_TOKEN_GATEWAYV3_ADDRESS,
  MAX_UINT_AMOUNT,
  wrappedTokenGatewayContract,
  POOL_ADDRESS,
  provider,
} from '@/utils/config';

export async function withdrawETH() {
  const owner = signer.address;

  const { aTokenAddress } = await dataProviderContract.getReserveTokensAddresses(WMON_ADDRESS);
  const wethAToken = new ethers.Contract(aTokenAddress, aTokenAbi, signer) as any;
  const aTokensBalance = await wethAToken.balanceOf(owner);
  console.log('aTokensBalance:', aTokensBalance.toString());

  const approveTx = await wethAToken.approve(WRAPPED_TOKEN_GATEWAYV3_ADDRESS, MAX_UINT_AMOUNT);
  const approveReceipt = await approveTx.wait();
  if (approveReceipt.status === 1) {
    console.log('approveTx hash:', approveTx.hash);
  }

  const withdrawSize = aTokensBalance;
  const tx = await wrappedTokenGatewayContract.withdrawETH(POOL_ADDRESS, withdrawSize, owner);
  const withdrawReceipt = await tx.wait();
  if (withdrawReceipt.status === 1) {
    console.log('tx hash:', tx.hash);
  }

  const balanceWei = await provider.getBalance(owner);
  const balanceEth = ethers.formatEther(balanceWei);
  console.log('current balance:', balanceEth, 'ETH');
}
