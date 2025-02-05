import { ethers, toBigInt } from 'ethers';

import { borrow } from '@/lib/borrow';
import { supplyWithPermit } from '@/lib/supply';
import {
  signer,
  USDC_ADDRESS,
  DAI_ADDRESS,
  WETH_ADDRESS,
  POOL_ADDRESS,
  poolContract,
  tokenContract,
  wethContract,
  oracleContract,
  dataProviderContract,
  daiPriceAggregatoContract,
  CLOSE_FACTOR_HF_THRESHOLD,
  MAX_LIQUIDATION_CLOSE_FACTOR,
  DEFAULT_LIQUIDATION_CLOSE_FACTOR,
  FACTOR,
  HEALTH_FACTOR_LIQUIDATION_THRESHOLD,
} from '@/utils/config';

const borrower = '0xbfb8b84886d6277c997a01f58a29647ef832159c';
export async function preLiquidation() {
  // supply
  const amountUSDCtoDeposit = ethers.parseEther('100');
  const supplyUsdc = await supplyWithPermit(USDC_ADDRESS, amountUSDCtoDeposit);
  console.log('supplyUsdc tx:', supplyUsdc);
  const amountETHtoDeposit = ethers.parseEther('0.06775');
  const supplyWeth = await supplyWithPermit(WETH_ADDRESS, amountETHtoDeposit);
  console.log('supplyWeth tx:', supplyWeth);

  // check health factor
  const userGlobalData = await poolContract.getUserAccountData(signer.address);
  const daiPrice = await oracleContract.getAssetPrice(DAI_ADDRESS);
  console.log('userGlobalData:', userGlobalData);
  console.log('userGlobalData.healthFactor:', userGlobalData.healthFactor);
  console.log('daiPrice:', daiPrice);

  // borrow
  console.log('userGlobalData.availableBorrowsBase:', userGlobalData.availableBorrowsBase);
  console.log(toBigInt(userGlobalData.availableBorrowsBase));
  const borrowAmount = (toBigInt(userGlobalData.availableBorrowsBase) * 5000n) / 10000n / daiPrice;
  const daiDecimals = await tokenContract.decimals();
  const amountDAIToBorrow = ethers.parseUnits(borrowAmount.toString(), daiDecimals);
  const borrowTx = await borrow(DAI_ADDRESS, amountDAIToBorrow);
  console.log('borrowTx:', borrowTx);

  // drop HF < 1
  const daiUpdatePriceTx = await daiPriceAggregatoContract.updatePrice(ethers.parseUnits('2', 8));
  console.log('daiUpdatePriceTx:', daiUpdatePriceTx.hash);
  const userGlobalDataBefore = await poolContract.getUserAccountData(borrower);
  console.log('userGlobalDataBefore.healthFactor:', userGlobalDataBefore.healthFactor);
}

export async function liquidation() {
  const approveTx = await tokenContract.approve(POOL_ADDRESS, ethers.MaxUint256);
  console.log('approveTx:', approveTx.hash);

  const daiBalance = await tokenContract.balanceOf(signer.address);
  if (daiBalance <= 0) {
    // check other reserve
  }

  const userReserveDataBefore = await dataProviderContract.getUserReserveData(DAI_ADDRESS, borrower);
  console.log('userReserveDataBefore:', userReserveDataBefore);

  const userGlobalDataBefore = await poolContract.getUserAccountData(borrower);
  const hf = userGlobalDataBefore.healthFactor;
  console.log('userGlobalDataBefore.healthFactor:', hf);

  // get closeFactor
  const closeFactor = hf > CLOSE_FACTOR_HF_THRESHOLD ? DEFAULT_LIQUIDATION_CLOSE_FACTOR : MAX_LIQUIDATION_CLOSE_FACTOR;
  const maxLiquidatableDebt =
    (toBigInt(userReserveDataBefore.currentVariableDebt) * BigInt(closeFactor)) / BigInt(FACTOR);
  console.log(`currentVariableDebt: ${userReserveDataBefore.currentVariableDebt},closeFactor: ${closeFactor}`);

  // get liquidate collateral
  // get each reserve currentATokenBalance balance
  // reserve must isUsingAsCollateral true
  const userWethReserveData = await dataProviderContract.getUserReserveData(WETH_ADDRESS, borrower);
  const userWethBalance = userWethReserveData.currentATokenBalance;
  // if (userWethBalance <= 0 || userWethBalance.usageAsCollateralEnabled === false) {
  //  check other collateral
  // }
  // Calculate amountToLiquidate
  const daiPrice = await oracleContract.getAssetPrice(DAI_ADDRESS);
  const wethPrice = await oracleContract.getAssetPrice(WETH_ADDRESS);

  const daiDecimals = await tokenContract.decimals();
  const wethDecimals = await wethContract.decimals();

  let amountToLiquidate =
    (maxLiquidatableDebt / daiDecimals) * daiPrice > (userWethBalance / wethDecimals) * wethPrice
      ? ((userWethBalance / wethDecimals) * wethPrice) / daiPrice
      : maxLiquidatableDebt;
  console.log(
    `maxLiquidatableDebt: ${maxLiquidatableDebt}, daiPrice: ${daiPrice}, userWethBalance: ${userWethBalance}, wethPrice: ${wethPrice}`,
  );
  console.log('amountToLiquidate:', amountToLiquidate.toString());

  amountToLiquidate = daiBalance < amountToLiquidate ? daiBalance : amountToLiquidate;

  const liquidationTx = await poolContract.liquidationCall(
    WETH_ADDRESS,
    DAI_ADDRESS,
    borrower,
    amountToLiquidate,
    false,
  );
  console.log('liquidationTx:', liquidationTx.hash);

  const userReserveDataAfter = await dataProviderContract.getUserReserveData(DAI_ADDRESS, borrower);
  console.log('userReserveDataAfter:', userReserveDataAfter);
  const userGlobalDataAfter = await poolContract.getUserAccountData(borrower);

  console.log('userGlobalDataAfter.healthFactor:', userGlobalDataAfter.healthFactor);
  if (userGlobalDataAfter.healthFactor >= HEALTH_FACTOR_LIQUIDATION_THRESHOLD) {
    // return;
  } else {
    // check other debtToken
    // liquidate again
  }
}
