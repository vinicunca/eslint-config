import type { TypedFlatConfigItem } from '../types';

import { ERROR } from '../flags';
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
        'perfectionist/sort-exports': [
          ERROR,
          { order: 'asc', type: 'natural' },
        ],

        'perfectionist/sort-imports': [
          ERROR,
          {
            groups: [
              'type',
              ['parent-type', 'sibling-type', 'index-type', 'internal-type'],

              'builtin',
              'external',
              'internal',
              ['parent', 'sibling', 'index'],
              'side-effect',
              'object',
              'unknown',
            ],
            newlinesBetween: 'ignore',
            order: 'asc',
            type: 'natural',
          },
        ],
        'perfectionist/sort-named-exports': [
          ERROR,
          { order: 'asc', type: 'natural' },
        ],
        'perfectionist/sort-named-imports': [
          ERROR,
          { order: 'asc', type: 'natural' },
        ],
      },
    },
  ];
}
