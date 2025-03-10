import type { TypedFlatConfigItem } from '../types';
import { ERROR } from '../flags';

import { interopDefault } from '../utils';

export async function pnpm(): Promise<Array<TypedFlatConfigItem>> {
  return [
    {
      files: [
        'package.json',
        '**/package.json',
      ],
      languageOptions: {
        parser: await interopDefault(import('jsonc-eslint-parser')),
      },
      name: 'vinicunca/pnpm/rules',
      plugins: {
        pnpm: await interopDefault(import('eslint-plugin-pnpm')),
      },
      rules: {
        'pnpm/enforce-catalog': ERROR,
        'pnpm/prefer-workspace-settings': ERROR,
        'pnpm/valid-catalog': ERROR,
      },
    },
  ];
}
