import type { TypedFlatConfigItem } from '../types';
import { ERROR } from '../flags';

import { interopDefault } from '../utils';

export async function pnpm(): Promise<Array<TypedFlatConfigItem>> {
  const [
    pluginPnpm,
    yamlParser,
    jsoncParser,
  ] = await Promise.all([
    interopDefault(import('eslint-plugin-pnpm')),
    interopDefault(import('yaml-eslint-parser')),
    interopDefault(import('jsonc-eslint-parser')),
  ]);

  return [
    {
      files: [
        'package.json',
        '**/package.json',
      ],
      languageOptions: {
        parser: jsoncParser,
      },
      name: 'vinicunca/pnpm/package.json',
      plugins: {
        pnpm: pluginPnpm,
      },
      rules: {
        'pnpm/json-enforce-catalog': ERROR,
        'pnpm/json-prefer-workspace-settings': ERROR,
        'pnpm/json-valid-catalog': ERROR,
      },
    },
    {
      files: ['pnpm-workspace.yaml'],
      languageOptions: {
        parser: yamlParser,
      },
      name: 'vinicunca/pnpm/pnpm-workspace-yaml',
      plugins: {
        pnpm: pluginPnpm,
      },
      rules: {
        'pnpm/yaml-no-duplicate-catalog-item': ERROR,
        'pnpm/yaml-no-unused-catalog-item': ERROR,
      },
    },
  ];
}
