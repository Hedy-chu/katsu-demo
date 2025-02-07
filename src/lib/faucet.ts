import { parseEther } from 'ethers';

import { faucetContract } from '@/utils/config';

export async function faucet(token: string, user: string, amount: bigint) {
  console.log(`Faucet ${token} to ${user} ${amount}`);
  const faucetTx = await faucetContract.mint(token, user, amount);
  const faucetReceipt = await faucetTx.wait();
  if (faucetReceipt.status === 1) {
    console.log('Faucet success');
  }
  console.log(faucetTx.hash);
}

export async function preFaucet() {
  const setLimit = await faucetContract.setMaximumMintAmount(parseEther('100000'));
  const receipt = await setLimit.wait();
  if (receipt.status === 1) {
    console.log('Set limit success');
  }
}
