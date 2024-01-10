import type { FlatConfigItem, OptionsStylistic } from '../types';

import { WARN } from '../flags';
import { interopDefault } from '../utils';

export async function jsdoc(options: OptionsStylistic = {}): Promise<FlatConfigItem[]> {
  const {
    stylistic = true,
  } = options;

  return [
    {
      name: 'vinicunca:jsdoc',

      plugins: {
        jsdoc: await interopDefault(import('eslint-plugin-jsdoc')),
      },

      rules: {
        'jsdoc/check-access': WARN,

        'jsdoc/check-alignment': WARN,

        'jsdoc/check-param-names': WARN,

        'jsdoc/check-property-names': WARN,

        'jsdoc/check-types': WARN,

        'jsdoc/empty-tags': WARN,

        'jsdoc/implements-on-classes': WARN,

        'jsdoc/multiline-blocks': WARN,

        'jsdoc/no-defaults': WARN,

        'jsdoc/no-multi-asterisks': WARN,

        'jsdoc/no-types': WARN,

        'jsdoc/require-param-name': WARN,

        'jsdoc/require-property': WARN,

        'jsdoc/require-property-description': WARN,

        'jsdoc/require-property-name': WARN,

        'jsdoc/require-returns-check': WARN,

        'jsdoc/require-returns-description': WARN,

        'jsdoc/require-yields-check': WARN,

        'jsdoc/valid-types': WARN,

        ...stylistic
          ? {
              'jsdoc/check-alignment': 'warn',
              'jsdoc/multiline-blocks': 'warn',
            }
          : {},
      },
    },
  ];
}
