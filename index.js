const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  extends: [
    './react.eslint.js',
    './vue.eslint.js',

    /**
     * Make sure to put prettier last, so it gets the chance to override other configs.
     * 
     * @see https://github.com/prettier/eslint-config-prettier
     */
    'plugin:prettier/recommended',
  ],
});
