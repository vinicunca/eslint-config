import { type FlatESLintConfigItem } from 'eslint-define-config';
import { pluginNode } from '../plugins';
import { ERROR, NEVER, OFF } from '../flags';

export function node(): FlatESLintConfigItem[] {
  return [
    {
      plugins: {
        node: pluginNode,
      },
    },

    {
      rules: {
        'node/handle-callback-err': [ERROR, '^(err|error)$'],

        'node/no-callback-literal': OFF,

        'node/no-deprecated-api': ERROR,

        'node/no-exports-assign': ERROR,

        'node/no-new-require': ERROR,

        'node/no-path-concat': ERROR,

        'node/prefer-global/buffer': [ERROR, NEVER],

        'node/prefer-global/process': [ERROR, NEVER],

        'node/process-exit-as-throw': ERROR,
      },
    },
  ];
}
