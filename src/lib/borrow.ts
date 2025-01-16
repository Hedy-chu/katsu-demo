import { parseUnits } from 'ethers';

import { DAI_ADDRESS, signer, poolContract, tokenContract } from '@/utils/config';
import { RateMode } from '@/utils/types';

export async function borrow(amount: bigint) {
  const userAccountData = await poolContract.getUserAccountData(signer.address);
  const decimals = await tokenContract.decimals();
  const { availableBorrowsBase } = userAccountData;

  const availableBorrows = parseUnits(availableBorrowsBase.toString(), decimals) / parseUnits('1', 8);
  console.log('availableBorrows:', availableBorrows.toString());
  if (availableBorrows < amount) {
    throw new Error('Insufficient available borrows');
  }
  const tx = await poolContract.borrow(DAI_ADDRESS, amount, RateMode.Variable, 0, signer.address);
  console.log('tx hash:', tx.hash);
}
