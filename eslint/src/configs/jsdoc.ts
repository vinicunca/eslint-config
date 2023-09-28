import { type FlatESLintConfigItem } from 'eslint-define-config';
import { pluginJsdoc } from '../plugins';
import { WARN } from '../flags';

export function jsdoc(): FlatESLintConfigItem[] {
  return [
    {
      plugins: {
        jsdoc: pluginJsdoc,
      },
    },

    {
      rules: {
        'jsdoc/check-access': WARN,

        'jsdoc/check-alignment': WARN,

        'jsdoc/check-param-names': WARN,

        'jsdoc/check-property-names': WARN,

        'jsdoc/check-types': WARN,

        'jsdoc/empty-tags': WARN,

        'jsdoc/implements-on-classes': WARN,

        'jsdoc/multiline-blocks': WARN,

        'jsdoc/no-defaults': WARN,

        'jsdoc/no-multi-asterisks': WARN,

        'jsdoc/no-types': WARN,

        'jsdoc/require-param-name': WARN,

        'jsdoc/require-property': WARN,

        'jsdoc/require-property-description': WARN,

        'jsdoc/require-property-name': WARN,

        'jsdoc/require-returns-check': WARN,

        'jsdoc/require-returns-description': WARN,

        'jsdoc/require-yields-check': WARN,

        'jsdoc/valid-types': WARN,
      },
    },
  ];
}
