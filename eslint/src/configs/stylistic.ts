import { pluginStylistic, pluginVinicunca } from '../plugins';
import { ALWAYS, CONSISTENT, ERROR, NEVER } from '../flags';
import type { ConfigItem } from '../types';

export function stylistic(): ConfigItem[] {
  return [
    {
      name: 'vinicunca:stylistic',

      plugins: {
        vinicunca: pluginVinicunca,
        style: pluginStylistic,
      },

      rules: {
        'curly': [ERROR, 'all'],

        'style/array-bracket-newline': [ERROR, CONSISTENT],

        'style/array-bracket-spacing': [ERROR, NEVER],

        'style/array-element-newline': [ERROR, CONSISTENT],

        'style/arrow-spacing': [ERROR, { before: true, after: true }],

        'style/block-spacing': [ERROR, ALWAYS],

        'style/brace-style': [ERROR],

        'style/comma-spacing': [ERROR, { before: false, after: true }],

        'style/comma-style': [ERROR, 'last'],

        'style/computed-property-spacing': [ERROR, NEVER, { enforceForClassMembers: true }],

        'style/dot-location': [ERROR, 'property'],

        'style/eol-last': ERROR,

        'style/func-call-spacing': [ERROR, NEVER],

        'style/indent': [ERROR, 2, {
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

        'style/key-spacing': [ERROR, { beforeColon: false, afterColon: true }],

        'style/keyword-spacing': [ERROR, { before: true, after: true }],

        'style/lines-between-class-members': [ERROR, ALWAYS, { exceptAfterSingleLine: true }],

        'style/max-statements-per-line': [ERROR, { max: 1 }],

        'style/member-delimiter-style': [ERROR],

        'style/multiline-ternary': [ERROR, 'always-multiline'],

        'style/new-parens': ERROR,

        'style/no-extra-parens': [ERROR, 'functions'],

        'style/no-floating-decimal': ERROR,

        'style/no-mixed-operators': [ERROR, {
          groups: [
            ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
            ['&&', '||'],
            ['in', 'instanceof'],
          ],
          allowSamePrecedence: true,
        }],

        'style/no-mixed-spaces-and-tabs': ERROR,

        'style/no-multi-spaces': ERROR,

        'style/no-multiple-empty-lines': [ERROR, { max: 1, maxBOF: 0, maxEOF: 1 }],

        'style/no-tabs': ERROR,

        'style/no-trailing-spaces': ERROR,

        'style/no-whitespace-before-property': ERROR,

        'style/object-curly-newline': [ERROR, { multiline: true, consistent: true }],

        'style/object-curly-spacing': [ERROR, ALWAYS],

        'style/object-property-newline': [ERROR, { allowMultiplePropertiesPerLine: true }],

        'style/operator-linebreak': [ERROR, 'before'],

        'style/padded-blocks': [ERROR, { blocks: NEVER, switches: NEVER, classes: NEVER }],

        'style/quote-props': [ERROR, 'consistent-as-needed'],

        'style/quotes': [ERROR, 'single'],

        'style/rest-spread-spacing': [ERROR, NEVER],

        'style/semi': [ERROR, ALWAYS],

        'style/semi-spacing': [ERROR, { before: false, after: true }],

        'style/space-before-blocks': [ERROR, ALWAYS],

        'style/space-before-function-paren': [ERROR, {
          anonymous: NEVER,
          named: NEVER,
          asyncArrow: ALWAYS,
        }],

        'style/space-in-parens': [ERROR, NEVER],

        'style/space-infix-ops': ERROR,

        'style/space-unary-ops': [ERROR, { words: true, nonwords: false }],

        'style/spaced-comment': [ERROR, 'always', {
          line: {
            markers: ['/'],
            exceptions: ['/', '#'],
          },
          block: {
            markers: ['!'],
            exceptions: ['*'],
            balanced: true,
          },
        }],

        'style/template-curly-spacing': ERROR,

        'style/template-tag-spacing': [ERROR, NEVER],

        'style/type-annotation-spacing': [ERROR, {}],

        'style/wrap-iife': [ERROR, 'any', {
          functionPrototypeMethods: true,
        }],

        'style/yield-star-spacing': [ERROR, 'both'],

        'style/comma-dangle': [ERROR, 'always-multiline'],

        'vinicunca/consistent-list-newline': ERROR,

        'vinicunca/if-newline': ERROR,

        'vinicunca/top-level-function': ERROR,
      },
    },
  ];
}
