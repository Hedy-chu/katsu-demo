import { faucetContract } from '@/utils/config';

export async function faucet(token: string, user: string, amount: bigint) {
  console.log(`Faucet ${token} to ${user} ${amount}`);
  const faucetTx = await faucetContract.mint(token, user, amount);
  const xx = await faucetContract.isPermissioned();
  console.log(xx);
  console.log(faucetTx.hash);
}
