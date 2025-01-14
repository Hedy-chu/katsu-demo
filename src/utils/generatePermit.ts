import { ethers } from 'ethers';

import { provider, signer } from '@/utils/config';

interface Permit {
  owner: string;
  spender: string;
  value: ethers.BigNumberish;
  nonce: number;
  deadline: number;
  v: number;
  r: string;
  s: string;
}

export async function generatePermit(
  token: ethers.Contract,
  owner: string,
  spender: string,
  value: ethers.BigNumberish,
  deadline: number,
): Promise<Permit> {
  const daiContract = token as any;
  const nonceBigInt: bigint = await daiContract.nonces(owner);
  const nonce: number = Number(nonceBigInt);

  const name: string = await daiContract.name();
  //   const version: string = await token.version();
  const version: string = ethers.toUtf8String(await daiContract.EIP712_REVISION()); // mainnet use version func
  const { chainId } = await provider.getNetwork();
  const tokenAddress = await token.getAddress();

  const domain = {
    name,
    version,
    chainId,
    verifyingContract: tokenAddress,
  };

  const types = {
    Permit: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'nonce', type: 'uint256' },
      { name: 'deadline', type: 'uint256' },
    ],
  };

  const valueStruct = {
    owner,
    spender,
    value,
    nonce,
    deadline,
  };

  const signature = await signer.signTypedData(domain, types, valueStruct);
  const sig = ethers.Signature.from(signature);

  return {
    owner,
    spender,
    value,
    nonce,
    deadline,
    v: sig.v,
    r: sig.r,
    s: sig.s,
  };
}
