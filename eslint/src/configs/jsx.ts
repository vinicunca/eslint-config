import type { TypedFlatConfigItem } from '../types';

import { GLOB_JSX, GLOB_TSX } from '../globs';

export async function jsx(): Promise<Array<TypedFlatConfigItem>> {
  return [
    {
      files: [GLOB_JSX, GLOB_TSX],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      name: 'vinicunca/jsx/setup',
    },
  ];
}
