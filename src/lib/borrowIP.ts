import { ethers } from 'ethers';

import {
  signer,
  wrappedTokenGatewayContract,
  POOL_ADDRESS,
  dataProviderContract,
  WIP_ADDRESS,
  variableDebtTokenAbi,
  WRAPPED_TOKEN_GATEWAYV3_ADDRESS,
} from '@/utils/config';
import { RateMode } from '@/utils/types';

export async function borrowIP() {
  const borrowSize = ethers.parseEther('1');
  const { variableDebtTokenAddress } = await dataProviderContract.getReserveTokensAddresses(WIP_ADDRESS);
  const varDebtToken = new ethers.Contract(variableDebtTokenAddress, variableDebtTokenAbi, signer) as any;

  const approveTx = await varDebtToken.approveDelegation(WRAPPED_TOKEN_GATEWAYV3_ADDRESS, borrowSize);
  console.log('approveTx hash:', approveTx.hash);

  const tx = await wrappedTokenGatewayContract.borrowIP(POOL_ADDRESS, borrowSize, RateMode.Variable, '0');
  console.log('tx hash:', tx.hash);
}
