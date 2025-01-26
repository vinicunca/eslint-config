import type { OptionsFiles, OptionsIsInEditor, OptionsOverrides, TypedFlatConfigItem } from '../types';

import { ERROR, OFF, WARN } from '../flags';
import { GLOB_TESTS } from '../globs';
import { interopDefault } from '../utils';

// Hold the reference so we don't redeclare the plugin on each call
let _pluginTest: any;

export async function test(
  options: OptionsFiles & OptionsIsInEditor & OptionsOverrides = {},
): Promise<Array<TypedFlatConfigItem>> {
  const {
    files = GLOB_TESTS,
    isInEditor = false,
    overrides = {},
  } = options;

  const [
    pluginVitest,
    pluginNoOnlyTests,
  ] = await Promise.all([
    interopDefault(import('@vitest/eslint-plugin')),
    // @ts-expect-error missing types
    interopDefault(import('eslint-plugin-no-only-tests')),
  ] as const);

  _pluginTest = _pluginTest || {
    ...pluginVitest,
    rules: {
      ...pluginVitest.rules,
      // extend `test/no-only-tests` rule
      ...pluginNoOnlyTests.rules,
    },
  };

  return [
    {
      name: 'vinicunca/test/setup',

      plugins: {
        test: _pluginTest,
      },
    },

    {
      files,

      name: 'vinicunca/test/rules',

      rules: {
        'node/prefer-global/process': OFF,
        'sonar/no-duplicate-string': OFF,

        'test/consistent-test-it': [ERROR, { fn: 'it', withinDescribe: 'it' }],
        'test/no-identical-title': ERROR,
        'test/no-only-tests': isInEditor ? WARN : ERROR,
        'test/prefer-hooks-in-order': ERROR,
        'test/prefer-lowercase-title': ERROR,

        ...overrides,
      },
    },
  ];
}
