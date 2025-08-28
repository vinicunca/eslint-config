import type { OptionsUnoCSS, TypedFlatConfigItem } from '../types';

import { ERROR, WARN } from '../flags';
import { interopDefault } from '../utils';

export async function unocss(
  options: OptionsUnoCSS = {},
): Promise<Array<TypedFlatConfigItem>> {
  const {
    attributify = false,
    strict = false,
    configPath,
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
      settings: {
        unocss: {
          configPath,
        },
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
    },
  ];
}
