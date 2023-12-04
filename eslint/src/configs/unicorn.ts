import type { FlatConfigItem, OptionsOverrides } from '../types';

import { ERROR } from '../flags';
import { pluginUnicorn } from '../plugins';

export async function unicorn(
  options: OptionsOverrides = {},
): Promise<FlatConfigItem[]> {
  const {
    overrides = {},
  } = options;

  return [
    {
      name: 'vinicunca:unicorn',

      plugins: {
        unicorn: pluginUnicorn,
      },

      rules: {
        'unicorn/error-message': ERROR,

        'unicorn/escape-case': ERROR,

        'unicorn/no-instanceof-array': ERROR,

        'unicorn/no-new-array': ERROR,

        'unicorn/no-new-buffer': ERROR,

        'unicorn/number-literal-case': ERROR,

        'unicorn/prefer-dom-node-text-content': ERROR,

        'unicorn/prefer-includes': ERROR,

        'unicorn/prefer-node-protocol': ERROR,

        'unicorn/prefer-number-properties': ERROR,

        'unicorn/prefer-string-starts-ends-with': ERROR,

        'unicorn/prefer-type-error': ERROR,

        'unicorn/throw-new-error': ERROR,

        ...overrides,
      },
    },
  ];
}
