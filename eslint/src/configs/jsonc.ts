import type { FlatESLintConfigItem } from 'eslint-define-config';
import { GLOB_JSON, GLOB_JSON5, GLOB_JSONC } from '../globs';
import { parserJsonc, pluginJsonc } from '../plugins';
import { ERROR, NEVER } from '../flags';

export const jsonc: FlatESLintConfigItem[] = [
  {
    files: [GLOB_JSON, GLOB_JSON5, GLOB_JSONC],

    languageOptions: {
      parser: parserJsonc,
    },

    plugins: {
      jsonc: pluginJsonc as any,
    },

    rules: {
      ...pluginJsonc.configs['recommended-with-jsonc'].rules as any,

      'jsonc/array-bracket-spacing': [ERROR, NEVER],

      'jsonc/comma-dangle': [ERROR, NEVER],

      'jsonc/comma-style': [ERROR, 'last'],

      'jsonc/indent': [ERROR, 2],

      'jsonc/key-spacing': [ERROR, { afterColon: true, beforeColon: false }],

      'jsonc/no-octal-escape': ERROR,

      'jsonc/object-curly-newline': [ERROR, { consistent: true, multiline: true }],

      'jsonc/object-curly-spacing': [ERROR, 'always'],

      'jsonc/object-property-newline': [ERROR, { allowMultiplePropertiesPerLine: true }],
    },
  },
];
