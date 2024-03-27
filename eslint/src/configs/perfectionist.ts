import type { FlatConfigItem } from '../types';

import { ERROR, OFF } from '../flags';
import { pluginPerfectionist } from '../plugins';

/**
 * Optional perfectionist plugin for props and items sorting.
 *
 * @see https://github.com/azat-io/eslint-plugin-perfectionist
 */
export async function perfectionist(): Promise<Array<FlatConfigItem>> {
  return [
    {
      name: 'vinicunca:perfectionist',
      plugins: {
        perfectionist: pluginPerfectionist,
      },

      rules: {
        ...pluginPerfectionist.configs['recommended-natural'].rules,

        'perfectionist/sort-imports': [
          ERROR,
          {
            'groups': [
              'type',
              ['builtin', 'external'],
              'internal-type',
              'internal',
              ['parent-type', 'sibling-type', 'index-type'],
              ['parent', 'sibling', 'index'],
              'object',
              'unknown',
            ],
            'internal-pattern': [
              '~/**',
              '~~/**',
            ],
            'newlines-between': 'always',
            'order': 'asc',
            'type': 'natural',
          },
        ],

        'perfectionist/sort-vue-attributes': [OFF],
      },
    },
  ];
}
