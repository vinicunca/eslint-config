import type { TypedFlatConfigItem } from '../types';

import { ERROR } from '../flags';
import { pluginComments } from '../plugins';

export async function comments(): Promise<Array<TypedFlatConfigItem>> {
  return [
    {
      name: 'vinicunca:eslint-comments',

      plugins: {
        'eslint-comments': pluginComments,
      },

      rules: {
        'eslint-comments/no-aggregating-enable': ERROR,

        'eslint-comments/no-duplicate-disable': ERROR,

        'eslint-comments/no-unlimited-disable': ERROR,

        'eslint-comments/no-unused-enable': ERROR,
      },
    },
  ];
}
