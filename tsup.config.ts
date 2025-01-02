// eslint-disable-next-line import/no-extraneous-dependencies
import { esbuildDecorators } from '@anatine/esbuild-decorators';
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  treeshake: true,
  tsconfig: './tsconfig.build.json',
  splitting: false,
  esbuildPlugins: [esbuildDecorators()],
});
