import type { TypedFlatConfigItem } from '../types';

import { ERROR, OFF } from '../flags';
import { pluginPerfectionist } from '../plugins';

/**
 * Optional perfectionist plugin for props and items sorting.
 *
 * @see https://github.com/azat-io/eslint-plugin-perfectionist
 */
export async function perfectionist(): Promise<Array<TypedFlatConfigItem>> {
  return [
    {
      name: 'vinicunca/perfectionist/rules',
      plugins: {
        perfectionist: pluginPerfectionist,
      },

      rules: {
        ...pluginPerfectionist.configs['recommended-natural'].rules,

        'perfectionist/sort-imports': [
          ERROR,
          {
            internalPattern: [
              '~/**',
              '~~/**',
            ],
            type: 'natural',
          },
        ],

        'perfectionist/sort-vue-attributes': [OFF],
      },
    },
  ];
}
