// src/config.ts
import * as fs from 'fs';
import * as path from 'path';

import * as dotenv from 'dotenv';
import { ethers } from 'ethers';

dotenv.config();

export const RPC_URL = process.env.RPC_URL || '';
export const PRIVATE_KEY = process.env.PRIVATE_KEY || '';
export const POOL_ADDRESS = process.env.POOL_ADDRESS || '';
export const DAI_ADDRESS = process.env.DAI_ADDRESS || '';
export const UI_POOL_DATA_PROVIDER_ADDRESS = process.env.UI_POOL_DATA_PROVIDER_ADDRESS || '';
export const DATA_PROVIDER_ADDRESS = process.env.DATA_PROVIDER_ADDRESS || '';
export const ORACLE_ADDRESS = process.env.ORACLE_ADDRESS || '';

if (!RPC_URL || !PRIVATE_KEY) {
  throw new Error('Please set RPC_URL and PRIVATE_KEY in your .env file');
}

export const provider = new ethers.JsonRpcProvider(RPC_URL);
export const signer = new ethers.Wallet(PRIVATE_KEY, provider);

const poolAbiPath = path.join(__dirname, '..', 'abi', 'Pool.json');
const erc20AbiPath = path.join(__dirname, '..', 'abi', 'MintableERC20.json');
const uiPoolDataProviderV3Path = path.join(__dirname, '..', 'abi', 'UiPoolDataProviderV3.json');
const aaveProtocolDataProviderPath = path.join(__dirname, '..', 'abi', 'AaveProtocolDataProvider.json');
const oraclePath = path.join(__dirname, '..', 'abi', 'AaveOracle.json');

export const poolAbi = JSON.parse(fs.readFileSync(poolAbiPath, 'utf8'));
export const erc20Abi = JSON.parse(fs.readFileSync(erc20AbiPath, 'utf8'));
export const uiPoolDataProviderV3Abi = JSON.parse(fs.readFileSync(uiPoolDataProviderV3Path, 'utf8'));
export const aaveProtocolDataProviderAbi = JSON.parse(fs.readFileSync(aaveProtocolDataProviderPath, 'utf8'));
export const oracleAbi = JSON.parse(fs.readFileSync(oraclePath, 'utf8'));

export const tokenContract = new ethers.Contract(DAI_ADDRESS, erc20Abi, signer) as any;
export const poolContract = new ethers.Contract(POOL_ADDRESS, poolAbi, signer) as any;
export const oracleContract = new ethers.Contract(ORACLE_ADDRESS, oracleAbi, signer) as any;
export const dataProviderContract = new ethers.Contract(
  DATA_PROVIDER_ADDRESS,
  aaveProtocolDataProviderAbi,
  signer,
) as any;
export const uiPoolDataProviderV3 = new ethers.Contract(
  UI_POOL_DATA_PROVIDER_ADDRESS,
  uiPoolDataProviderV3Abi,
  signer,
) as any;
