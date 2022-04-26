const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  extends: [
    './react.eslint.js',
    './vue.eslint.js',
  ],
});
