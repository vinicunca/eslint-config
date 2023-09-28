import { type FlatESLintConfigItem } from 'eslint-define-config';
import { ERROR } from '../flags';
import { pluginComments } from '../plugins';

export function comments(): FlatESLintConfigItem[] {
  return [
    {
      plugins: {
        'eslint-comments': pluginComments,
      },
    },
    {
      rules: {
        'eslint-comments/no-aggregating-enable': ERROR,

        'eslint-comments/no-duplicate-disable': ERROR,

        'eslint-comments/no-unlimited-disable': ERROR,

        'eslint-comments/no-unused-enable': ERROR,

      },
    },
  ];
}
