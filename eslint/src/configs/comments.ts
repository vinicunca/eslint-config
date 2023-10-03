import { ERROR } from '../flags';
import { pluginComments } from '../plugins';
import { type FlatESLintConfigItem } from '../types';

export function comments(): FlatESLintConfigItem[] {
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
