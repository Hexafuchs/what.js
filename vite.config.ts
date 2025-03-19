/// <reference types="vitest" />
import path from 'path';
import { defineConfig } from 'vite';
import packageJson from './package.json';
import dts from 'vite-plugin-dts';

const getPackageName = () => {
  return packageJson.name.replace(/(\.js)$/, '').replace(/(\.ts)$/, '');
};

const getPackageNameCamelCase = () => {
  try {
    return packageJson.name.replace(/-./g, char => char[1].toUpperCase());
  } catch {
    throw new Error('Name property in package.json is missing.');
  }
};

const fileName = {
  es: `${getPackageName()}.mjs`,
  cjs: `${getPackageName()}.cjs`,
  iife: `${getPackageName()}.iife.js`,
};

const formats = Object.keys(fileName) as Array<keyof typeof fileName>;

export default defineConfig({
  base: './',
  build: {
    outDir: './build/dist',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: getPackageNameCamelCase(),
      formats,
      fileName: format => fileName[format],
    },
  },
  plugins: [dts()],
  test: {
    globals: true,
    coverage: {
      exclude: ['**/vite-env.d.ts', '**/dts-bundle-generator.config.ts', '**/docs/**'],
    },
  }
});
