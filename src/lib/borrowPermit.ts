import { ethers } from 'ethers';

import {
  signer,
  dataProviderContract,
  WMON_ADDRESS,
  variableDebtTokenAbi,
  WRAPPED_TOKEN_GATEWAYV3_ADDRESS,
} from '@/utils/config';
import { generateDelegationPermit } from '@/utils/gennerateDelegationWithSig';

export async function borrowPermit() {
  const { variableDebtTokenAddress } = await dataProviderContract.getReserveTokensAddresses(WMON_ADDRESS);
  const varDebtToken = new ethers.Contract(variableDebtTokenAddress, variableDebtTokenAbi, signer) as any;
  const deadline = Math.floor(Date.now() / 1000) + 36000;

  const permit = await generateDelegationPermit(
    varDebtToken,
    signer.address,
    WRAPPED_TOKEN_GATEWAYV3_ADDRESS,
    200000, // permit amount
    deadline,
  );
  const approveTx = await varDebtToken.delegationWithSig(
    signer.address,
    WRAPPED_TOKEN_GATEWAYV3_ADDRESS,
    200000, // permit amount
    deadline,
    permit.v,
    permit.r,
    permit.s,
  );
  const receipt = await approveTx.wait();
  if (receipt.status === 1) {
    console.log('approveTx hash:', approveTx.hash);
  }
}
