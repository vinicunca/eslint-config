import type { OptionsFiles, OptionsHasTypeScript, OptionsOverrides, OptionsStylistic, OptionsVue, TypedFlatConfigItem } from '../types';
import { isBoolean } from '@vinicunca/perkakas';

import { mergeProcessors } from 'eslint-merge-processors';

import { ALWAYS, ERROR, NEVER, OFF, WARN } from '../flags';
import { GLOB_VUE } from '../globs';
import { ensurePackages, interopDefault } from '../utils';

export async function vue(
  options: OptionsFiles & OptionsHasTypeScript & OptionsOverrides & OptionsStylistic & OptionsVue = {},
): Promise<Array<TypedFlatConfigItem>> {
  const {
    files = [GLOB_VUE],
    overrides = {},
    stylistic = true,
    a11y = false,
  } = options;

  const sfcBlocks = options.sfcBlocks === true
    ? {}
    : options.sfcBlocks ?? {};

  const {
    indent = 2,
  } = isBoolean(stylistic) ? {} : stylistic;

  if (a11y) {
    await ensurePackages([
      'eslint-plugin-vuejs-accessibility',
    ]);
  }

  const [
    pluginVue,
    parserVue,
    processorVueBlocks,
    pluginVueA11y,
  ] = await Promise.all([
    interopDefault(import('eslint-plugin-vue')),
    interopDefault(import('vue-eslint-parser')),
    interopDefault(import('eslint-processor-vue-blocks')),
    ...a11y ? [interopDefault(import('eslint-plugin-vuejs-accessibility'))] : [],
  ] as const);

  return [
    {
      name: 'vinicunca/vue/setup',

      plugins: {
        vue: pluginVue,
        ...a11y ? { 'vue-a11y': pluginVueA11y } : {},
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

        'vue/custom-event-name-casing': [
          ERROR,
          'camelCase',
          {
            ignores: [
              '/^[a-z]+(?:-[a-z]+)*:[a-z]+(?:-[a-z]+)*$/u',
            ],
          },
        ],

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

        ...a11y
          ? {
              'vue-a11y/alt-text': ERROR,
              'vue-a11y/anchor-has-content': ERROR,
              'vue-a11y/aria-props': ERROR,
              'vue-a11y/aria-role': ERROR,
              'vue-a11y/aria-unsupported-elements': ERROR,
              'vue-a11y/click-events-have-key-events': ERROR,
              'vue-a11y/form-control-has-label': ERROR,
              'vue-a11y/heading-has-content': ERROR,
              'vue-a11y/iframe-has-title': ERROR,
              'vue-a11y/interactive-supports-focus': ERROR,
              'vue-a11y/label-has-for': ERROR,
              'vue-a11y/media-has-caption': WARN,
              'vue-a11y/mouse-events-have-key-events': ERROR,
              'vue-a11y/no-access-key': ERROR,
              'vue-a11y/no-aria-hidden-on-focusable': ERROR,
              'vue-a11y/no-autofocus': WARN,
              'vue-a11y/no-distracting-elements': ERROR,
              'vue-a11y/no-redundant-roles': ERROR,
              'vue-a11y/no-role-presentation-on-focusable': ERROR,
              'vue-a11y/no-static-element-interactions': ERROR,
              'vue-a11y/role-has-required-aria-props': ERROR,
              'vue-a11y/tabindex-no-positive': WARN,
            }
          : {},

        ...overrides,
      },
    },
  ];
}
