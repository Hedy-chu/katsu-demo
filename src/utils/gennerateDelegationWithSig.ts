import { ethers } from 'ethers';

import { provider, signer } from '@/utils/config';

interface DelegationWithSig {
  delegatee: string;
  value: ethers.BigNumberish;
  nonce: number;
  deadline: number;
  v: number;
  r: string;
  s: string;
}

export async function generateDelegationPermit(
  token: ethers.Contract,
  owner: string,
  delegatee: string,
  value: ethers.BigNumberish,
  deadline: number,
): Promise<DelegationWithSig> {
  const tokenContract = token as any;
  const nonceBigInt: bigint = await tokenContract.nonces(owner);
  const nonce: number = Number(nonceBigInt);

  const name: string = await tokenContract.name();
  const version: string = ethers.toUtf8String(await tokenContract.EIP712_REVISION()); // mainnet use version func
  const { chainId } = await provider.getNetwork();
  const tokenAddress = await token.getAddress();

  const domain = {
    name,
    version,
    chainId,
    verifyingContract: tokenAddress,
  };

  const types = {
    DelegationWithSig: [
      { name: 'delegatee', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'nonce', type: 'uint256' },
      { name: 'deadline', type: 'uint256' },
    ],
  };

  const valueStruct = {
    delegatee,
    value,
    nonce,
    deadline,
  };

  const signature = await signer.signTypedData(domain, types, valueStruct);
  const sig = ethers.Signature.from(signature);

  return {
    delegatee,
    value,
    nonce,
    deadline,
    v: sig.v,
    r: sig.r,
    s: sig.s,
  };
}
