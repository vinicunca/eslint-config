import type { OptionsUnoCSS, TypedFlatConfigItem } from '../types';

import { ERROR, WARN } from '../flags';
import { ensurePackages, interopDefault } from '../utils';

export async function unocss(
  options: OptionsUnoCSS = {},
): Promise<Array<TypedFlatConfigItem>> {
  const {
    attributify = false,
    configPath,
    strict = false,
  } = options;

  await ensurePackages([
    '@unocss/eslint-plugin',
  ]);

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
        'unocss/order': WARN,
        ...attributify
          ? {
              'unocss/order-attributify': WARN,
            }
          : {},
        ...strict
          ? {
              'unocss/blocklist': ERROR,
            }
          : {},
      },
      settings: {
        unocss: {
          configPath,
        },
      },
    },
  ];
}
