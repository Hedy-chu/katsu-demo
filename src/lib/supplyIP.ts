import { ethers } from 'ethers';

import { signer, wrappedTokenGatewayContract, POOL_ADDRESS, provider } from '@/utils/config';

export async function supplyIP() {
  const owner = signer.address;
  const depositSize = ethers.parseEther('4');
  const tx = await wrappedTokenGatewayContract.depositIP(POOL_ADDRESS, owner, '0', {
    value: depositSize,
  });
  console.log('tx hash:', tx.hash);
  const balanceWei = await provider.getBalance(owner);
  const balanceEth = ethers.formatEther(balanceWei);
  console.log('current balance:', balanceEth, 'IP');
}
