import { ethers } from 'ethers';

import {
  signer,
  WMON_ADDRESS,
  wrappedTokenGatewayContract,
  WRAPPED_TOKEN_GATEWAYV3_ADDRESS,
  dataProviderContract,
  aTokenAbi,
} from '../utils/config';
import { generatePermit } from '../utils/generatePermit';

export async function withdrawIPWithPermit() {
  const owner = signer.address;
  const spender = WRAPPED_TOKEN_GATEWAYV3_ADDRESS;
  const amount = ethers.parseEther('1');
  // const amount = 0;
  const deadline = Math.floor(Date.now() / 1000) + 3600;

  const { aTokenAddress } = await dataProviderContract.getReserveTokensAddresses(WMON_ADDRESS);
  const wipAToken = new ethers.Contract(aTokenAddress, aTokenAbi, signer) as any;
  const aTokensBalance = await wipAToken.balanceOf(owner);
  console.log('aTokensBalance:', aTokensBalance.toString());

  //   const approveTx = await wipAToken.approve(WRAPPED_TOKEN_GATEWAYV3_ADDRESS, MAX_UINT_AMOUNT);
  //   console.log('approveTx hash:', approveTx.hash);

  const permit = await generatePermit(wipAToken, owner, spender, amount, deadline);
  try {
    const tx = await wrappedTokenGatewayContract.withdrawIPWithPermit(
      WMON_ADDRESS,
      amount,
      owner,
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
