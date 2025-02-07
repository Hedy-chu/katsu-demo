import { ethers } from 'ethers';

import { signer, POOL_ADDRESS, poolContract, erc20Abi } from '@/utils/config';
import { generatePermit } from '@/utils/generatePermit';

// supply process
/*
Check whether the token supports erc20permit（DOMAIN_SEPARATOR）
supports:supplyWithPermit
not supports:supply
*/

export async function supplyWithPermit(tokenAddress: string, amount: bigint) {
  const owner = signer.address;
  const spender = POOL_ADDRESS;
  const referralCode = 0;
  const deadline = Math.floor(Date.now() / 1000) + 3600;
  const tokenContract = new ethers.Contract(tokenAddress, erc20Abi, signer) as any;

  const permit = await generatePermit(tokenContract, owner, spender, amount, deadline);
  let tx;

  try {
    tx = await poolContract.supplyWithPermit(
      tokenAddress,
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
    if (!receipt) {
      throw new Error('Transaction failed - no receipt');
    }
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
