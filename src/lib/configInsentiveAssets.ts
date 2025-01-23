import { emissionManagerContract } from '@/utils/config';
import { config } from '@/utils/insentiveConfig';

export const CRV_ADDRESS = process.env.CRV_ADDRESS || '';
export const REW_ADDRESS = process.env.REW_ADDRESS || '';
export const WIP_ATOKEN = process.env.WIP_ATOKEN || '';
export const DAI_ATOKEN = process.env.DAI_ATOKEN || '';
export const configInsentiveAssets = async () => {
  // await emissionManagerContract.setEmissionAdmin(CRV_ADDRESS, signer.address);
  // await emissionManagerContract.setEmissionAdmin(REW_ADDRESS, signer.address);
  console.log('configInsentiveAssets');
  console.log('config:', config);
  const tx = await emissionManagerContract.configureAssets(config);
  console.log('tx hash:', tx.hash);
};
