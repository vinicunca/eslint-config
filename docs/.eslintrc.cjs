const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  extends: ['@vinicunca/eslint-config'],

  rules: {
    'sonarjs/cognitive-complexity': 'off',
  },

  overrides: [
    {
      files: ['**/*.md/*.*'],
      rules: {
        'jsonc/indent': 'off',
      },
    },
  ],
});
