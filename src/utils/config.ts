// src/config.ts
import * as fs from 'fs';
import * as path from 'path';

import * as dotenv from 'dotenv';
import { ethers } from 'ethers';

dotenv.config();

export const MAX_UINT_AMOUNT = '115792089237316195423570985008687907853269984665640564039457584007913129639935';

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
export const RPC_URL = process.env.RPC_URL || '';
export const PRIVATE_KEY = process.env.PRIVATE_KEY || '';
export const POOL_ADDRESS = process.env.POOL_ADDRESS || '';
export const DAI_ADDRESS = process.env.DAI_ADDRESS || '';
export const WIP_ADDRESS = process.env.WIP_ADDRESS || '';
export const UI_POOL_DATA_PROVIDER_ADDRESS = process.env.UI_POOL_DATA_PROVIDER_ADDRESS || '';
export const DATA_PROVIDER_ADDRESS = process.env.DATA_PROVIDER_ADDRESS || '';
export const ORACLE_ADDRESS = process.env.ORACLE_ADDRESS || '';
export const WRAPPED_TOKEN_GATEWAYV3_ADDRESS = process.env.WRAPPED_TOKEN_GATEWAYV3_ADDRESS || '';
export const POOL_ADDRESSES_PROVIDER = process.env.POOL_ADDRESSES_PROVIDER || '';
export const FAUCET_ADDRESS = process.env.FAUCET_ADDRESS || '';
export const REWARDS_CONTROLLER_ADDRESS = process.env.REWARDS_CONTROLLER_ADDRESS || '';
export const EMISSION_MANAGER = process.env.EMISSION_MANAGER || '';
export const PULL_REWARDS_TRANSFER_STRATEGY = process.env.PULL_REWARDS_TRANSFER_STRATEGY || '';
export const CRV_ADDRESS = process.env.CRV_ADDRESS || '';
export const REW_ADDRESS = process.env.REW_ADDRESS || '';
export const CRV_ORACLE = process.env.CRV_ORACLE || '';
export const REW_ORACLE = process.env.REW_ORACLE || '';
export const WIP_ATOKEN = process.env.WIP_ATOKEN || '';
export const DAI_ATOKEN = process.env.DAI_ATOKEN || '';
export const UI_INCENTIVEDATA_PROVIDER = process.env.UI_INCENTIVEDATA_PROVIDER || '';

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
const wrappedTokenGatewayV3Path = path.join(__dirname, '..', 'abi', 'WrappedTokenGatewayV3.json');
const variableDebtTokenPath = path.join(__dirname, '..', 'abi', 'VariableDebtToken.json');
const aTokenPath = path.join(__dirname, '..', 'abi', 'AToken.json');
const faucetPath = path.join(__dirname, '..', 'abi', 'Faucet.json');
const rewardsControllerPath = path.join(__dirname, '..', 'abi', 'RewardsController.json');
const emissionManagerPath = path.join(__dirname, '..', 'abi', 'EmissionManager.json');
const uiIncentiveDataProviderV3Path = path.join(__dirname, '..', 'abi', 'UiIncentiveDataProviderV3.json');

export const poolAbi = JSON.parse(fs.readFileSync(poolAbiPath, 'utf8'));
export const erc20Abi = JSON.parse(fs.readFileSync(erc20AbiPath, 'utf8'));
export const uiPoolDataProviderV3Abi = JSON.parse(fs.readFileSync(uiPoolDataProviderV3Path, 'utf8'));
export const aaveProtocolDataProviderAbi = JSON.parse(fs.readFileSync(aaveProtocolDataProviderPath, 'utf8'));
export const oracleAbi = JSON.parse(fs.readFileSync(oraclePath, 'utf8'));
export const wrappedTokenGatewayV3Abi = JSON.parse(fs.readFileSync(wrappedTokenGatewayV3Path, 'utf8'));
export const variableDebtTokenAbi = JSON.parse(fs.readFileSync(variableDebtTokenPath, 'utf8'));
export const aTokenAbi = JSON.parse(fs.readFileSync(aTokenPath, 'utf8'));
export const faucetAbi = JSON.parse(fs.readFileSync(faucetPath, 'utf8'));
export const emissionManagerAbi = JSON.parse(fs.readFileSync(emissionManagerPath, 'utf8'));
export const rewardsControllerAbi = JSON.parse(fs.readFileSync(rewardsControllerPath, 'utf8'));
export const uiIncentiveDataProviderV3Abi = JSON.parse(fs.readFileSync(uiIncentiveDataProviderV3Path, 'utf8'));

export const tokenContract = new ethers.Contract(DAI_ADDRESS, erc20Abi, signer) as any;
export const wipContract = new ethers.Contract(WIP_ADDRESS, erc20Abi, signer) as any;
export const poolContract = new ethers.Contract(POOL_ADDRESS, poolAbi, signer) as any;
export const oracleContract = new ethers.Contract(ORACLE_ADDRESS, oracleAbi, signer) as any;
export const faucetContract = new ethers.Contract(FAUCET_ADDRESS, faucetAbi, signer) as any;
export const emissionManagerContract = new ethers.Contract(EMISSION_MANAGER, emissionManagerAbi, signer) as any;
export const uiIncentiveDataProviderV3Contract = new ethers.Contract(
  UI_INCENTIVEDATA_PROVIDER,
  uiIncentiveDataProviderV3Abi,
  signer,
) as any;
export const rewardsControllerContract = new ethers.Contract(
  REWARDS_CONTROLLER_ADDRESS,
  rewardsControllerAbi,
  signer,
) as any;
export const wrappedTokenGatewayContract = new ethers.Contract(
  WRAPPED_TOKEN_GATEWAYV3_ADDRESS,
  wrappedTokenGatewayV3Abi,
  signer,
) as any;
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
