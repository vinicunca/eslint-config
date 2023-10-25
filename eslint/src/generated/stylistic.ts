import type {
  EslintRules,
  MergeIntersection,
  ReactRules,
  TypeScriptRules,
  Unprefix,
} from '@antfu/eslint-define-config';

type MergedRules = MergeIntersection<
  EslintRules &
  Unprefix<ReactRules, 'react/'> &
  Unprefix<TypeScriptRules, '@typescript-eslint/'>
>;

export type StylisticRules = Pick<MergedRules, 'array-bracket-newline' | 'array-bracket-spacing' | 'array-element-newline' | 'arrow-spacing' | 'block-spacing' | 'block-spacing' | 'brace-style' | 'brace-style' | 'comma-dangle' | 'comma-dangle' | 'comma-spacing' | 'comma-spacing' | 'comma-style' | 'computed-property-spacing' | 'dot-location' | 'eol-last' | 'func-call-spacing' | 'func-call-spacing' | 'function-call-argument-newline' | 'function-paren-newline' | 'generator-star-spacing' | 'implicit-arrow-linebreak' | 'indent' | 'indent' | 'jsx-child-element-spacing' | 'jsx-closing-bracket-location' | 'jsx-closing-tag-location' | 'jsx-curly-brace-presence' | 'jsx-curly-newline' | 'jsx-curly-spacing' | 'jsx-equals-spacing' | 'jsx-first-prop-new-line' | 'jsx-indent' | 'jsx-indent-props' | 'jsx-max-props-per-line' | 'jsx-newline' | 'jsx-one-expression-per-line' | 'jsx-props-no-multi-spaces' | 'jsx-quotes' | 'jsx-sort-props' | 'jsx-space-before-closing' | 'jsx-tag-spacing' | 'jsx-wrap-multilines' | 'key-spacing' | 'key-spacing' | 'keyword-spacing' | 'keyword-spacing' | 'linebreak-style' | 'lines-around-comment' | 'lines-around-comment' | 'lines-around-directive' | 'lines-between-class-members' | 'lines-between-class-members' | 'max-len' | 'max-statements-per-line' | 'member-delimiter-style' | 'multiline-ternary' | 'new-parens' | 'newline-after-var' | 'newline-before-return' | 'newline-per-chained-call' | 'no-confusing-arrow' | 'no-extra-parens' | 'no-extra-semi' | 'no-floating-decimal' | 'no-mixed-operators' | 'no-mixed-spaces-and-tabs' | 'no-multi-spaces' | 'no-multiple-empty-lines' | 'no-spaced-func' | 'no-tabs' | 'no-trailing-spaces' | 'no-whitespace-before-property' | 'nonblock-statement-body-position' | 'object-curly-newline' | 'object-curly-spacing' | 'object-curly-spacing' | 'object-property-newline' | 'one-var-declaration-per-line' | 'operator-linebreak' | 'padded-blocks' | 'padding-line-between-statements' | 'padding-line-between-statements' | 'quote-props' | 'quotes' | 'quotes' | 'rest-spread-spacing' | 'semi' | 'semi' | 'semi-spacing' | 'semi-style' | 'space-before-blocks' | 'space-before-blocks' | 'space-before-function-paren' | 'space-before-function-paren' | 'space-in-parens' | 'space-infix-ops' | 'space-infix-ops' | 'space-unary-ops' | 'spaced-comment' | 'switch-colon-spacing' | 'template-curly-spacing' | 'template-tag-spacing' | 'type-annotation-spacing' | 'wrap-iife' | 'wrap-regex' | 'yield-star-spacing'>;
