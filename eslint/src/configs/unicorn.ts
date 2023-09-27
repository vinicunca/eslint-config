import { type FlatESLintConfigItem } from 'eslint-define-config';
import { type OptionsOverrides } from '../types';
import { pluginUnicorn } from '../plugins';
import { ERROR } from '../flags';

export function unicorn(
  options: OptionsOverrides = {},
): FlatESLintConfigItem[] {
  const {
    overrides = {},
  } = options;

  return [
    {
      plugins: {
        unicorn: pluginUnicorn,
      },
    },

    {
      rules: {
      // Pass error message when throwing errors
        'unicorn/error-message': ERROR,
        // Uppercase regex escapes
        'unicorn/escape-case': ERROR,
        // Array.isArray instead of instanceof
        'unicorn/no-instanceof-array': ERROR,
        // Ban `new Array` as `Array` constructor's params are ambiguous
        'unicorn/no-new-array': ERROR,
        // Prevent deprecated `new Buffer()`
        'unicorn/no-new-buffer': ERROR,
        // Keep regex literals safe!
        'unicorn/no-unsafe-regex': ERROR,
        // Lowercase number formatting for octal, hex, binary (0x1ERROR instead of 0X1ERROR)
        'unicorn/number-literal-case': ERROR,
        // includes over indexOf when checking for existence
        'unicorn/prefer-includes': ERROR,
        // Prefer using the node: protocol
        'unicorn/prefer-node-protocol': ERROR,
        // Prefer using number properties like `Number.isNaN` rather than `isNaN`
        'unicorn/prefer-number-properties': ERROR,
        // String methods startsWith/endsWith instead of more complicated stuff
        'unicorn/prefer-string-starts-ends-with': ERROR,
        // textContent instead of innerText
        'unicorn/prefer-text-content': ERROR,
        // Enforce throwing type error when throwing error while checking typeof
        'unicorn/prefer-type-error': ERROR,
        // Use new when throwing error
        'unicorn/throw-new-error': ERROR,

        ...overrides,
      },
    },
  ];
}
