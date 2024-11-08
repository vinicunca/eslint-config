import { isBoolean } from '@vinicunca/perkakas';

import type { OptionsFiles, OptionsHasTypeScript, OptionsOverrides, OptionsStylistic, TypedFlatConfigItem } from '../types';

import { ERROR, OFF } from '../flags';
import { GLOB_SVELTE } from '../globs';
import { interopDefault } from '../utils';

export async function svelte(
  options: OptionsFiles & OptionsHasTypeScript & OptionsOverrides & OptionsStylistic = {},
): Promise<Array<TypedFlatConfigItem>> {
  const {
    files = [GLOB_SVELTE],
    overrides = {},
    stylistic = true,
  } = options;

  const {
    indent = 2,
    quotes = 'single',
  } = isBoolean(stylistic) ? {} : stylistic;

  const [
    pluginSvelte,
    parserSvelte,
  ] = await Promise.all([
    interopDefault(import('eslint-plugin-svelte')),
    interopDefault(import('svelte-eslint-parser')),
  ] as const);

  return [
    {
      name: 'vinicunca/svelte/setup',

      plugins: {
        svelte: pluginSvelte,
      },
    },
    {
      files,

      languageOptions: {
        parser: parserSvelte,
        parserOptions: {
          extraFileExtensions: ['.svelte'],
          parser: options.typescript
            ? await interopDefault(import('@typescript-eslint/parser')) as any
            : null,
        },
      },

      name: 'vinicunca/svelte/rules',

      processor: pluginSvelte.processors['.svelte'],

      rules: {
        'import/no-mutable-exports': OFF,
        'no-undef': OFF, // incompatible with most recent (attribute-form) generic types RFC
        'no-unused-vars': [ERROR, {
          args: 'none',
          caughtErrors: 'none',
          ignoreRestSiblings: true,
          vars: 'all',
          varsIgnorePattern: '^(\\$\\$Props$|\\$\\$Events$|\\$\\$Slots$)',
        }],

        'svelte/comment-directive': ERROR,
        'svelte/no-at-debug-tags': 'warn',
        'svelte/no-at-html-tags': ERROR,
        'svelte/no-dupe-else-if-blocks': ERROR,
        'svelte/no-dupe-style-properties': ERROR,
        'svelte/no-dupe-use-directives': ERROR,
        'svelte/no-dynamic-slot-name': ERROR,
        'svelte/no-export-load-in-svelte-module-in-kit-pages': ERROR,
        'svelte/no-inner-declarations': ERROR,
        'svelte/no-not-function-handler': ERROR,
        'svelte/no-object-in-text-mustaches': ERROR,
        'svelte/no-reactive-functions': ERROR,
        'svelte/no-reactive-literals': ERROR,
        'svelte/no-shorthand-style-property-overrides': ERROR,
        'svelte/no-unknown-style-directive-property': ERROR,
        'svelte/no-unused-svelte-ignore': ERROR,
        'svelte/no-useless-mustaches': ERROR,
        'svelte/require-store-callbacks-use-set-param': ERROR,
        'svelte/system': ERROR,
        'svelte/valid-each-key': ERROR,

        'unused-imports/no-unused-vars': [
          ERROR,
          {
            args: 'after-used',
            argsIgnorePattern: '^_',
            vars: 'all',
            varsIgnorePattern: '^(_|\\$\\$Props$|\\$\\$Events$|\\$\\$Slots$)',
          },
        ],

        ...stylistic
          ? {
              'style/indent': OFF, // superseded by svelte/indent
              'style/no-trailing-spaces': OFF, // superseded by svelte/no-trailing-spaces
              'svelte/derived-has-same-inputs-outputs': ERROR,
              'svelte/html-closing-bracket-spacing': ERROR,
              // quotes only supports single and double quotes but in options we have backtick as well
              'svelte/html-quotes': [ERROR, { prefer: quotes as any }],
              'svelte/indent': [ERROR, { alignAttributesVertically: true, indent }],
              'svelte/mustache-spacing': ERROR,
              'svelte/no-spaces-around-equal-signs-in-attribute': ERROR,
              'svelte/no-trailing-spaces': ERROR,
              'svelte/spaced-html-comment': ERROR,
            }
          : {},

        ...overrides,
      },
    },
  ];
}
