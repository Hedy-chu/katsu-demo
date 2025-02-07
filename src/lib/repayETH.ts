import { ethers } from 'ethers';

import { signer, wrappedTokenGatewayContract, POOL_ADDRESS, MAX_UINT_AMOUNT } from '@/utils/config';
import { RateMode } from '@/utils/types';

export async function repayETH() {
  const owner = signer.address;
  const repaySize = ethers.parseEther('0.1');
  const tx = await wrappedTokenGatewayContract.repayETH(POOL_ADDRESS, MAX_UINT_AMOUNT, RateMode.Variable, owner, {
    value: repaySize,
  });
  const receipt = await tx.wait();
  if (receipt.status === 1) {
    console.log('tx hash:', tx.hash);
  }
}
