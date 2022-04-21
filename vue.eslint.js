const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  extends: ['plugin:vue/vue3-recommended', './typescript.eslint.js'],

  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],

  rules: {
    'vue/max-attributes-per-line': ['warn', { singleline: 5 }],
    'vue/html-self-closing': 'off',
    'vue/no-v-html': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',

    'vue/component-tags-order': ['error', {
      order: ['script', 'template', 'style'],
    }],
  },
});
