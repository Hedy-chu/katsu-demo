import { ethers } from 'ethers';

import {
  signer,
  wrappedTokenGatewayContract,
  POOL_ADDRESS,
  dataProviderContract,
  WMON_ADDRESS,
  variableDebtTokenAbi,
  WRAPPED_TOKEN_GATEWAYV3_ADDRESS,
} from '@/utils/config';
import { RateMode } from '@/utils/types';

export async function borrowETH() {
  const borrowSize = ethers.parseEther('0.01');
  const { variableDebtTokenAddress } = await dataProviderContract.getReserveTokensAddresses(WMON_ADDRESS);
  const varDebtToken = new ethers.Contract(variableDebtTokenAddress, variableDebtTokenAbi, signer) as any;

  const approveTx = await varDebtToken.approveDelegation(WRAPPED_TOKEN_GATEWAYV3_ADDRESS, borrowSize);
  console.log('approveTx hash:', approveTx.hash);
  const approveReceipt = await approveTx.wait();
  if (approveReceipt.status === 1) {
    console.log('approveTx hash:', approveTx.hash);
  }

  const borrowTx = await wrappedTokenGatewayContract.borrowETH(POOL_ADDRESS, borrowSize, RateMode.Variable, '0');
  const borrowReceipt = await borrowTx.wait();
  if (borrowReceipt.status === 1) {
    console.log('borrowTx hash:', borrowTx.hash);
  }
}
