import { ethers } from 'ethers';

import { signer, wrappedTokenGatewayContract, POOL_ADDRESS, provider } from '@/utils/config';

export async function supplyETH() {
  const owner = signer.address;
  const depositSize = ethers.parseEther('1');
  const tx = await wrappedTokenGatewayContract.depositETH(POOL_ADDRESS, owner, '0', {
    value: depositSize,
  });
  const receipt = await tx.wait();
  if (receipt.status === 1) {
    console.log('tx hash:', tx.hash);
  }
  const balanceWei = await provider.getBalance(owner);
  const balanceEth = ethers.formatEther(balanceWei);
  console.log('current balance:', balanceEth, 'ETH');
}
