import type { FlatConfigItem, StylisticConfig } from '../types';

import { ALWAYS, CONSISTENT, ERROR, NEVER, OFF } from '../flags';
import { GLOB_JSX, GLOB_TSX } from '../globs';
import { pluginVinicunca } from '../plugins';
import { interopDefault } from '../utils';

const STYLISTIC_CONFIG_DEFAULTS: StylisticConfig = {
  indent: 2,
  jsx: true,
  quotes: 'single',
  semi: true,
};

export async function stylistic(options: StylisticConfig = {}): Promise<FlatConfigItem[]> {
  const {
    indent,
    quotes,
    semi,
  } = {
    ...STYLISTIC_CONFIG_DEFAULTS,
    ...options,
  };

  const pluginStylistic = await interopDefault(import('@stylistic/eslint-plugin'));

  return [
    {
      name: 'vinicunca:stylistic',

      plugins: {
        style: pluginStylistic,
        vinicunca: pluginVinicunca,
      },

      rules: {
        'curly': [ERROR, 'all'],

        'style/array-bracket-newline': [ERROR, CONSISTENT],

        'style/array-bracket-spacing': [ERROR, NEVER],

        'style/array-element-newline': [ERROR, CONSISTENT],

        'style/arrow-parens': [ERROR, ALWAYS],

        'style/arrow-spacing': [ERROR, { after: true, before: true }],

        'style/block-spacing': [ERROR, ALWAYS],

        'style/brace-style': [ERROR],

        'style/comma-dangle': [ERROR, 'always-multiline'],

        'style/comma-spacing': [ERROR, { after: true, before: false }],

        'style/comma-style': [ERROR, 'last'],

        'style/computed-property-spacing': [ERROR, NEVER, { enforceForClassMembers: true }],

        'style/dot-location': [ERROR, 'property'],

        'style/eol-last': ERROR,

        'style/func-call-spacing': [ERROR, NEVER],

        'style/indent': [ERROR, indent, {
          ArrayExpression: 1,
          CallExpression: { arguments: 1 },
          FunctionDeclaration: { body: 1, parameters: 1 },
          FunctionExpression: { body: 1, parameters: 1 },
          ImportDeclaration: 1,
          MemberExpression: 1,
          ObjectExpression: 1,
          SwitchCase: 1,
          VariableDeclarator: 1,
          flatTernaryExpressions: false,
          ignoreComments: false,
          ignoredNodes: [
            'TemplateLiteral *',
            'JSXElement',
            'JSXElement > *',
            'JSXAttribute',
            'JSXIdentifier',
            'JSXNamespacedName',
            'JSXMemberExpression',
            'JSXSpreadAttribute',
            'JSXExpressionContainer',
            'JSXOpeningElement',
            'JSXClosingElement',
            'JSXFragment',
            'JSXOpeningFragment',
            'JSXClosingFragment',
            'JSXText',
            'JSXEmptyExpression',
            'JSXSpreadChild',
            'TSTypeParameterInstantiation',
            'FunctionExpression > .params[decorators.length > 0]',
            'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
            'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
          ],
          offsetTernaryExpressions: true,
          outerIIFEBody: 1,
        }],

        'style/indent-binary-ops': [ERROR, indent],

        'style/key-spacing': [ERROR, { afterColon: true, beforeColon: false }],

        'style/keyword-spacing': [ERROR, { after: true, before: true }],

        'style/lines-between-class-members': [ERROR, ALWAYS, { exceptAfterSingleLine: true }],

        'style/max-statements-per-line': [ERROR, { max: 1 }],

        'style/member-delimiter-style': [ERROR],

        'style/multiline-ternary': [ERROR, 'always-multiline'],

        'style/new-parens': ERROR,

        'style/no-extra-parens': [ERROR, 'functions'],

        'style/no-floating-decimal': ERROR,

        'style/no-mixed-operators': [ERROR, {
          allowSamePrecedence: true,
          groups: [
            ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
            ['&&', '||'],
            ['in', 'instanceof'],
          ],
        }],

        'style/no-mixed-spaces-and-tabs': ERROR,

        'style/no-multi-spaces': ERROR,

        'style/no-multiple-empty-lines': [ERROR, { max: 1, maxBOF: 0, maxEOF: 1 }],

        'style/no-tabs': ERROR,

        'style/no-trailing-spaces': ERROR,

        'style/no-whitespace-before-property': ERROR,

        'style/object-curly-newline': [ERROR, { consistent: true, multiline: true }],

        'style/object-curly-spacing': [ERROR, ALWAYS],

        'style/object-property-newline': [ERROR, { allowMultiplePropertiesPerLine: true }],

        'style/operator-linebreak': [ERROR, 'before'],

        'style/padded-blocks': [ERROR, { blocks: NEVER, classes: NEVER, switches: NEVER }],

        'style/quote-props': [ERROR, 'consistent-as-needed'],

        'style/quotes': [ERROR, quotes],

        'style/rest-spread-spacing': [ERROR, NEVER],

        'style/semi': [ERROR, semi ? ALWAYS : NEVER],

        'style/semi-spacing': [ERROR, { after: true, before: false }],

        'style/space-before-blocks': [ERROR, ALWAYS],

        'style/space-before-function-paren': [ERROR, {
          anonymous: NEVER,
          asyncArrow: ALWAYS,
          named: NEVER,
        }],

        'style/space-in-parens': [ERROR, NEVER],

        'style/space-infix-ops': ERROR,

        'style/space-unary-ops': [ERROR, { nonwords: false, words: true }],

        'style/spaced-comment': [ERROR, 'always', {
          block: {
            balanced: true,
            exceptions: ['*'],
            markers: ['!'],
          },
          line: {
            exceptions: ['/', '#'],
            markers: ['/'],
          },
        }],

        'style/template-curly-spacing': ERROR,

        'style/template-tag-spacing': [ERROR, NEVER],

        'style/type-annotation-spacing': [ERROR, {}],

        'style/wrap-iife': [ERROR, 'any', {
          functionPrototypeMethods: true,
        }],

        'style/yield-star-spacing': [ERROR, 'both'],

        'vinicunca/consistent-list-newline': ERROR,

        'vinicunca/if-newline': ERROR,

        'vinicunca/top-level-function': ERROR,
      },
    },

    {
      files: [GLOB_JSX, GLOB_TSX],

      rules: {
        'vinicunca/consistent-list-newline': OFF,
      },
    },
  ];
}
