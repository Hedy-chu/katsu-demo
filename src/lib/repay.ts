import { ethers } from 'ethers';

import { signer, tokenContract, dataProviderContract, poolContract, POOL_ADDRESS, DAI_ADDRESS } from '@/utils/config';
import { generatePermit } from '@/utils/generatePermit';
import { RateMode } from '@/utils/types';

export async function repay() {
  const owner = signer.address;
  const spender = POOL_ADDRESS;
  const amount = ethers.parseUnits('11', 18);
  const deadline = Math.floor(Date.now() / 1000) + 3600;

  const permit = await generatePermit(tokenContract, owner, spender, amount, deadline);
  console.log('permit:', permit);
  const { currentVariableDebt } = await dataProviderContract.getUserReserveData(DAI_ADDRESS, owner);
  console.log('currentVariableDebt:', currentVariableDebt);

  const tx = await poolContract.repayWithPermit(
    DAI_ADDRESS,
    amount,
    RateMode.Variable,
    owner,
    deadline,
    permit.v,
    permit.r,
    permit.s,
  );
  const receipt = await tx.wait();
  if (receipt.status === 1) {
    console.log('tx hash:', tx.hash);
  }
}
