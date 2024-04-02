import type { OptionsUnoCSS, TypedFlatConfigItem } from '../types';

import { interopDefault } from '../utils';

export async function unocss(
  options: OptionsUnoCSS = {},
): Promise<Array<TypedFlatConfigItem>> {
  const {
    attributify = false,
    strict = false,
  } = options;

  const [
    pluginUnoCSS,
  ] = await Promise.all([
    interopDefault(import('@unocss/eslint-plugin')),
  ] as const);

  return [
    {
      name: 'vinicunca/unocss',
      plugins: {
        unocss: pluginUnoCSS,
      },
      rules: {
        'unocss/order': 'warn',
        ...attributify
          ? {
              'unocss/order-attributify': 'warn',
            }
          : {},
        ...strict
          ? {
              'unocss/blocklist': 'error',
            }
          : {},
      },
    },
  ];
}
