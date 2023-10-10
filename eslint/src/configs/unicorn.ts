import type { ConfigItem, OptionsOverrides } from '../types';
import { pluginUnicorn } from '../plugins';
import { ERROR } from '../flags';

export function unicorn(
  options: OptionsOverrides = {},
): ConfigItem[] {
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

        'unicorn/prefer-includes': ERROR,

        'unicorn/prefer-node-protocol': ERROR,

        'unicorn/prefer-number-properties': ERROR,

        'unicorn/prefer-string-starts-ends-with': ERROR,

        'unicorn/prefer-dom-node-text-content': ERROR,

        'unicorn/prefer-type-error': ERROR,

        'unicorn/throw-new-error': ERROR,

        ...overrides,
      },
    },
  ];
}
