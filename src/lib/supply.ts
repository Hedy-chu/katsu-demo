import { ethers } from 'ethers';

import { signer, POOL_ADDRESS, DAI_ADDRESS, tokenContract, poolContract } from '@/utils/config';
import { generatePermit } from '@/utils/generatePermit';

// supply process
/*
Check whether the token supports erc20permit（DOMAIN_SEPARATOR）
supports:supplyWithPermit
not supports:supply
*/

export async function supplyWithPermit() {
  const owner = signer.address;
  const spender = POOL_ADDRESS;
  const amount = ethers.parseUnits('100.0', 8);
  // const amount = 0;
  const referralCode = 0;
  const deadline = Math.floor(Date.now() / 1000) + 3600;

  const permit = await generatePermit(tokenContract, owner, spender, amount, deadline);
  let tx;

  try {
    tx = await poolContract.supplyWithPermit(
      DAI_ADDRESS,
      amount,
      owner,
      referralCode,
      deadline,
      permit.v,
      permit.r,
      permit.s,
    );
    console.log('tx hash:', tx.hash);

    const receipt = await tx.wait();
    console.log('receipt:', receipt.blockNumber);
  } catch (err: any) {
    console.log('err:', err);
    const revertReason = err.reason || err.data?.message || err.message;

    if (revertReason?.includes('INVALID_SIGNATURE')) {
      throw new Error('The signature is invalid, please re-sign or check the parameters');
    } else if (revertReason?.includes('26')) {
      throw new Error(`INVALID_AMOUNT`);
    }
  }
}
