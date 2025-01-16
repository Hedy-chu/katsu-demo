import { ethers } from 'ethers';

import { signer, wrappedTokenGatewayContract, POOL_ADDRESS, MAX_UINT_AMOUNT } from '@/utils/config';
import { RateMode } from '@/utils/types';

export async function repayIP() {
  const owner = signer.address;
  const repaySize = ethers.parseEther('1.5');
  const tx = await wrappedTokenGatewayContract.repayIP(POOL_ADDRESS, MAX_UINT_AMOUNT, RateMode.Variable, owner, {
    value: repaySize,
  });
  console.log('tx hash:', tx.hash);
}
