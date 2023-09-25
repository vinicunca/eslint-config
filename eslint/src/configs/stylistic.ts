import type { FlatESLintConfigItem } from 'eslint-define-config';
import { packages } from '@eslint-stylistic/metadata';
import { pluginStylisticJs, pluginStylisticTs, pluginTs } from '../plugins';
import { ALWAYS, CONSISTENT, ERROR, NEVER, OFF } from '../flags';

const tsPackage = packages.find((i) => i.shortId === 'ts')!;

export const javascriptStylistic: FlatESLintConfigItem[] = [
  {
    plugins: {
      style: pluginStylisticJs,
    },

    rules: {
      'comma-dangle': [ERROR, 'always-multiline'],

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

      'style/func-call-spacing': [ERROR, NEVER],

      'style/indent': [ERROR, 2, {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: { parameters: 1, body: 1 },
        FunctionExpression: { parameters: 1, body: 1 },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
        ignoredNodes: ['TemplateLiteral *', 'JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
        offsetTernaryExpressions: true,
      }],

      'style/key-spacing': [ERROR, { beforeColon: false, afterColon: true }],

      'style/keyword-spacing': [ERROR, { before: true, after: true }],

      'style/lines-between-class-members': [ERROR, ALWAYS, { exceptAfterSingleLine: true }],

      'style/multiline-ternary': [ERROR, 'always-multiline'],

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

      'style/rest-spread-spacing': [ERROR, NEVER],

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

      'style/yield-star-spacing': [ERROR, 'both'],

      'vinicunca/consistent-list-newline': ERROR,
      'vinicunca/if-newline': ERROR,
    },
  },
];

export const typescriptStylistic: FlatESLintConfigItem[] = [
  {
    plugins: {
      'style-ts': pluginStylisticTs,
      'ts': pluginTs as any,
    },
    rules: {
      ...stylisticJsToTS(javascriptStylistic[0].rules!),

      'comma-dangle': OFF,
      'ts/comma-dangle': [ERROR, 'always-multiline'],

      'quotes': OFF,
      'ts/quotes': [ERROR, 'single'],

      'semi': OFF,
      'ts/semi': [ERROR, ALWAYS],

      'style-ts/member-delimiter-style': [ERROR],
      'style-ts/type-annotation-spacing': [ERROR, {}],

    },
  },
];

function stylisticJsToTS(input: Record<string, any>) {
  return {
    // turn off all stylistic rules from style
    ...Object.fromEntries(
      Object.entries(input)
        .map(([key]) => {
          if (!key.startsWith('style/')) {
            return null!;
          };
          const basename = key.replace('style/', '');
          if (tsPackage.rules.find((i) => i.name === basename)) {
            return [key, OFF];
          };
          return null!;
        })
        .filter(Boolean),
    ),
    // rename all stylistic rules from style to style/ts
    ...Object.fromEntries(
      Object.entries(input)
        .map(([key, value]) => {
          if (!key.startsWith('style/')) {
            return null!;
          };
          const basename = key.replace('style/', '');
          return tsPackage.rules.find((i) => i.name === basename)
            ? [`style-ts/${basename}`, value]
            : null!;
        })
        .filter(Boolean),
    ),
  };
}
