import { GLOB_VUE } from '../globs';
import { parserTs, parserVue, pluginVue } from '../plugins';
import { ALWAYS, ERROR, NEVER, OFF, WARN } from '../flags';
import { type FlatESLintConfigItem, type OptionsHasTypeScript, type OptionsOverrides } from '../types';

export function vue(
  options: OptionsHasTypeScript & OptionsOverrides = {},
): FlatESLintConfigItem[] {
  const {
    overrides = {},
  } = options;

  return [
    {
      name: 'vinicunca:vue:setup',

      plugins: {
        vue: pluginVue,
      },
    },

    {
      name: 'vinicunca:vue:rules',

      files: [GLOB_VUE],

      languageOptions: {
        parser: parserVue,

        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          extraFileExtensions: ['.vue'],
          parser: options.typescript ? parserTs as any : null,
          sourceType: 'module',
        },
      },

      processor: pluginVue.processors['.vue'],

      rules: {
        ...pluginVue.configs.base.rules as any,

        ...pluginVue.configs['vue3-essential'].rules as any,

        ...pluginVue.configs['vue3-strongly-recommended'].rules as any,

        ...pluginVue.configs['vue3-recommended'].rules as any,

        'node/prefer-global/process': OFF,

        'vue/array-bracket-spacing': [ERROR, NEVER],

        'vue/arrow-spacing': [ERROR, {
          after: true,
          before: true,
        }],

        'vue/block-order': [ERROR, {
          order: ['script', 'template', 'style'],
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

        'vue/component-name-in-template-casing': [ERROR, 'PascalCase'],

        'vue/component-options-name-casing': [ERROR, 'PascalCase'],

        'vue/custom-event-name-casing': [ERROR, 'camelCase'],

        'vue/define-macros-order': [ERROR, {
          order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'],

        }],

        'vue/dot-location': [ERROR, 'property'],

        'vue/dot-notation': [ERROR, { allowKeywords: true }],

        'vue/eqeqeq': [ERROR, 'smart'],

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

        'vue/max-attributes-per-line': OFF,

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

        'vue/object-curly-newline': [ERROR, { multiline: true, consistent: true }],

        'vue/object-curly-spacing': [ERROR, ALWAYS],

        'vue/object-property-newline': [ERROR, { allowMultiplePropertiesPerLine: true }],

        'vue/object-shorthand': [ERROR, ALWAYS, {
          avoidQuotes: true,
          ignoreConstructors: false,
        }],

        'vue/operator-linebreak': [ERROR, 'before'],

        'vue/padding-line-between-blocks': [ERROR, ALWAYS],

        'vue/prefer-import-from-vue': OFF,

        'vue/prefer-separate-static-class': ERROR,

        'vue/prefer-template': ERROR,

        'vue/quote-props': [ERROR, 'consistent-as-needed'],

        'vue/require-default-prop': OFF,

        'vue/require-prop-types': OFF,

        'vue/space-in-parens': [ERROR, NEVER],

        'vue/space-infix-ops': ERROR,

        'vue/space-unary-ops': [ERROR, {
          nonwords: false,
          words: true,
        }],

        'vue/template-curly-spacing': ERROR,

        ...overrides,
      },
    },
  ];
}
