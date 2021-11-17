const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  extends: ['plugin:react/recommended', './typescript.eslint.js'],

  settings: {
    react: {
      version: '17.0',
    },
  },

  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/no-unknown-property': ['error', { ignore: ['class'] }],
  },
});
