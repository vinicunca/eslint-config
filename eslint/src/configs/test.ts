import type { FlatConfigItem, OptionsFiles, OptionsIsInEditor, OptionsOverrides } from '../types';

import { ERROR, OFF } from '../flags';
import { GLOB_TESTS } from '../globs';
import { interopDefault } from '../utils';

export async function test(
  options: OptionsFiles & OptionsIsInEditor & OptionsOverrides = {},
): Promise<FlatConfigItem[]> {
  const {
    files = GLOB_TESTS,
    isInEditor = false,
    overrides = {},
  } = options;

  const [
    pluginVitest,
    pluginNoOnlyTests,
  ] = await Promise.all([
    interopDefault(import('eslint-plugin-vitest')),
    // @ts-expect-error missing types
    interopDefault(import('eslint-plugin-no-only-tests')),
  ] as const);

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
      files,

      name: 'vinicunca:test:rules',

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
