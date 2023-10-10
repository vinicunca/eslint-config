import { pluginNoOnlyTests, pluginVitest } from '../plugins';
import { GLOB_TESTS } from '../globs';
import { ERROR, OFF } from '../flags';
import type { ConfigItem, OptionsIsInEditor, OptionsOverrides } from '../types';

export function test(
  options: OptionsIsInEditor & OptionsOverrides = {},
): ConfigItem[] {
  const {
    isInEditor = false,
    overrides = {},
  } = options;

  return [
    {
      name: 'vinicunca:test:setup',

      plugins: {
        test: {
          ...pluginVitest,
          rules: {
            ...pluginVitest.rules,
            // extend `test/no-only-tests` rule
            ...pluginNoOnlyTests.rules,
          },
        },
      },
    },

    {
      name: 'vinicunca:test:rules',

      files: GLOB_TESTS,

      rules: {
        'test/consistent-test-it': [ERROR, { fn: 'it', withinDescribe: 'it' }],
        'test/no-identical-title': ERROR,
        'test/no-only-tests': isInEditor ? OFF : ERROR,
        'test/prefer-hooks-in-order': ERROR,
        'test/prefer-lowercase-title': ERROR,

        ...overrides,
      },
    },
  ];
}
