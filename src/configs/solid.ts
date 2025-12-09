import type { OptionsFiles, OptionsHasTypeScript, OptionsOverrides, OptionsTypeScriptWithTypes, TypedFlatConfigItem } from '../types';

import { ERROR, OFF, WARN } from '../flags';
import { GLOB_JSX, GLOB_TSX } from '../globs';
import { interopDefault, toArray } from '../utils';

export async function solid(
  options: OptionsFiles & OptionsHasTypeScript & OptionsOverrides & OptionsTypeScriptWithTypes = {},
): Promise<Array<TypedFlatConfigItem>> {
  const {
    files = [GLOB_JSX, GLOB_TSX],
    overrides = {},
    typescript = true,
  } = options;

  const tsconfigPath = options?.tsconfigPath
    ? toArray(options.tsconfigPath)
    : undefined;

  const isTypeAware = !!tsconfigPath;

  const [
    pluginSolid,
    parserTs,
  ] = await Promise.all([
    interopDefault(import('eslint-plugin-solid')),
    interopDefault(import('@typescript-eslint/parser')),
  ] as const);

  return [
    {
      name: 'vinicunca/solid/setup',
      plugins: {
        solid: pluginSolid,
      },
    },

    {
      files,

      languageOptions: {
        parser: parserTs,
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          ...isTypeAware ? { project: tsconfigPath } : {},
        },
        sourceType: 'module',
      },

      name: 'vinicunca/solid/rules',

      rules: {
        // reactivity
        'solid/components-return-once': WARN,
        'solid/event-handlers': [ERROR, {
          // if true, don't warn on ambiguously named event handlers like `onclick` or `onchange`
          ignoreCase: false,
          // if true, warn when spreading event handlers onto JSX. Enable for Solid < v1.6.
          warnOnSpread: false,
        }],
        // these rules are mostly style suggestions
        'solid/imports': ERROR,
        // identifier usage is important
        'solid/jsx-no-duplicate-props': ERROR,
        'solid/jsx-no-script-url': ERROR,
        'solid/jsx-no-undef': ERROR,
        'solid/jsx-uses-vars': ERROR,
        'solid/no-destructure': ERROR,
        // security problems
        'solid/no-innerhtml': [ERROR, { allowStatic: true }],
        'solid/no-react-deps': ERROR,
        'solid/no-react-specific-props': ERROR,
        'solid/no-unknown-namespaces': ERROR,
        'solid/prefer-for': ERROR,
        'solid/reactivity': WARN,
        'solid/self-closing-comp': ERROR,
        'solid/style-prop': [ERROR, { styleProps: ['style', 'css'] }],
        ...typescript
          ? {
              'solid/jsx-no-undef': [ERROR, { typescriptEnabled: true }],
              'solid/no-unknown-namespaces': OFF,
            }
          : {},
        // overrides
        ...overrides,
      },
    },
  ];
}
