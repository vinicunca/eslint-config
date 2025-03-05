import type { OptionsFiles, OptionsHasTypeScript, OptionsOverrides, OptionsStylistic, OptionsVue, TypedFlatConfigItem } from '../types';
import { isBoolean } from '@vinicunca/perkakas';

import { mergeProcessors } from 'eslint-merge-processors';

import { ALWAYS, ERROR, NEVER, OFF, WARN } from '../flags';
import { GLOB_VUE } from '../globs';
import { interopDefault } from '../utils';

export async function vue(
  options: OptionsFiles & OptionsHasTypeScript & OptionsOverrides & OptionsStylistic & OptionsVue = {},
): Promise<Array<TypedFlatConfigItem>> {
  const {
    files = [GLOB_VUE],
    overrides = {},
    stylistic = true,
  } = options;

  const sfcBlocks = options.sfcBlocks === true
    ? {}
    : options.sfcBlocks ?? {};

  const {
    indent = 2,
  } = isBoolean(stylistic) ? {} : stylistic;

  const [
    pluginVue,
    parserVue,
    processorVueBlocks,
  ] = await Promise.all([
    interopDefault(import('eslint-plugin-vue')),
    interopDefault(import('vue-eslint-parser')),
    interopDefault(import('eslint-processor-vue-blocks')),
  ] as const);

  return [
    {
      name: 'vinicunca/vue/setup',

      plugins: {
        vue: pluginVue,
      },

      // This allows Vue plugin to work with auto imports
      // https://github.com/vuejs/eslint-plugin-vue/pull/2422
      languageOptions: {
        globals: {
          computed: 'readonly',
          defineEmits: 'readonly',
          defineExpose: 'readonly',
          defineProps: 'readonly',
          onMounted: 'readonly',
          onUnmounted: 'readonly',
          reactive: 'readonly',
          ref: 'readonly',
          shallowReactive: 'readonly',
          shallowRef: 'readonly',
          toRef: 'readonly',
          toRefs: 'readonly',
          watch: 'readonly',
          watchEffect: 'readonly',
        },
      },
    },

    {
      files,

      languageOptions: {
        parser: parserVue,

        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          extraFileExtensions: ['.vue'],
          parser: options.typescript
            ? await interopDefault(import('@typescript-eslint/parser')) as any
            : null,
          sourceType: 'module',
        },
      },

      name: 'vinicunca/vue/rules',

      processor: sfcBlocks === false
        ? pluginVue.processors['.vue']
        : mergeProcessors([
            pluginVue.processors['.vue'],
            processorVueBlocks({
              ...sfcBlocks,
              blocks: {
                styles: true,
                ...sfcBlocks.blocks,
              },
            }),
          ]),

      rules: {
        ...pluginVue.configs.base.rules as any,

        ...pluginVue.configs['flat/essential'].map((c) => c.rules).reduce((acc, c) => ({ ...acc, ...c }), {}) as any,
        ...pluginVue.configs['flat/strongly-recommended'].map((c) => c.rules).reduce((acc, c) => ({ ...acc, ...c }), {}) as any,
        ...pluginVue.configs['flat/recommended'].map((c) => c.rules).reduce((acc, c) => ({ ...acc, ...c }), {}) as any,

        'node/prefer-global/process': OFF,

        'vue/block-order': [ERROR, {
          order: ['script', 'template', 'style'],
        }],

        'vue/component-name-in-template-casing': [ERROR, 'PascalCase'],

        'vue/component-options-name-casing': [ERROR, 'PascalCase'],

        'vue/custom-event-name-casing': [ERROR, 'camelCase'],

        'vue/define-macros-order': [ERROR, {
          order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'],
        }],

        'vue/dot-location': [ERROR, 'property'],

        'vue/dot-notation': [ERROR, { allowKeywords: true }],

        'vue/eqeqeq': [ERROR, 'smart'],

        'vue/html-indent': [ERROR, indent],

        'vue/max-attributes-per-line': [ERROR],

        'vue/multi-word-component-names': OFF,

        'vue/no-constant-condition': WARN,

        'vue/no-dupe-keys': OFF,

        'vue/no-empty-pattern': ERROR,

        'vue/no-extra-parens': [ERROR, 'functions'],

        'vue/no-irregular-whitespace': ERROR,

        'vue/no-loss-of-precision': ERROR,

        'vue/no-restricted-syntax': [
          ERROR,
          'DebuggerStatement',
          'LabeledStatement',
          'WithStatement',
        ],

        'vue/no-restricted-v-bind': [ERROR, '/^v-/'],

        // reactivity transform
        'vue/no-setup-props-reactivity-loss': OFF,

        'vue/no-sparse-arrays': ERROR,

        'vue/no-unused-refs': ERROR,

        'vue/no-useless-v-bind': ERROR,

        'vue/no-v-html': OFF,

        'vue/no-v-text-v-html-on-component': OFF,

        'vue/object-shorthand': [ERROR, ALWAYS, {
          avoidQuotes: true,
          ignoreConstructors: false,
        }],

        'vue/prefer-import-from-vue': OFF,

        'vue/prefer-separate-static-class': ERROR,

        'vue/prefer-template': ERROR,

        'vue/require-default-prop': OFF,

        'vue/require-prop-types': OFF,

        'vue/space-infix-ops': ERROR,

        'vue/space-unary-ops': [ERROR, {
          nonwords: false,
          words: true,
        }],

        ...stylistic
          ? {
              'vue/array-bracket-spacing': [ERROR, NEVER],

              'vue/arrow-spacing': [ERROR, {
                after: true,
                before: true,
              }],

              'vue/block-spacing': [ERROR, ALWAYS],

              'vue/block-tag-newline': [ERROR, {
                multiline: ALWAYS,
                singleline: ALWAYS,
              }],

              'vue/brace-style': [ERROR, 'stroustrup', { allowSingleLine: true }],

              'vue/comma-dangle': [ERROR, 'always-multiline'],

              'vue/comma-spacing': [ERROR, {
                after: true,
                before: false,
              }],

              'vue/comma-style': [ERROR, 'last'],

              'vue/html-comment-content-spacing': [ERROR, ALWAYS, {
                exceptions: ['-'],
              }],

              'vue/key-spacing': [ERROR, {
                afterColon: true,
                beforeColon: false,
              }],

              'vue/keyword-spacing': [ERROR, {
                after: true,
                before: true,
              }],

              'vue/object-curly-newline': [ERROR, { consistent: true, multiline: true }],

              'vue/object-curly-spacing': [ERROR, ALWAYS],

              'vue/object-property-newline': [ERROR, { allowMultiplePropertiesPerLine: true }],

              'vue/operator-linebreak': [ERROR, 'before'],

              'vue/padding-line-between-blocks': [ERROR, ALWAYS],

              'vue/quote-props': [ERROR, 'consistent-as-needed'],

              'vue/space-in-parens': [ERROR, NEVER],

              'vue/template-curly-spacing': ERROR,
            }
          : {},

        ...overrides,
      },
    },
  ];
}
