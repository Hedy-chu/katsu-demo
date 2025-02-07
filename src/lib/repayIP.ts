import { ethers } from 'ethers';

import { signer, wrappedTokenGatewayContract, POOL_ADDRESS, MAX_UINT_AMOUNT } from '@/utils/config';
import { RateMode } from '@/utils/types';

export async function repayIP() {
  const owner = signer.address;
  const repaySize = ethers.parseEther('0.1');
  const tx = await wrappedTokenGatewayContract.repayETH(POOL_ADDRESS, MAX_UINT_AMOUNT, RateMode.Variable, owner, {
    value: repaySize,
  });
  console.log('tx hash:', tx.hash);
}
