import { type FlatESLintConfigItem } from 'eslint-define-config';
import { type OptionsOverrides } from 'src';
import { ERROR, NEVER, OFF } from '../flags';
import { pluginReact, pluginReactHooks } from '../plugins';

export function react(
  options: OptionsOverrides = {},
): FlatESLintConfigItem[] {
  const {
    overrides = {},
  } = options;

  return [
    {
      plugins: {
        'react': pluginReact,
        'react-hooks': pluginReactHooks,
      },
    },

    {
      settings: {
        react: {
          version: 'detect',
        },
      },

      rules: {
        ...pluginReact.configs.recommended.rules,
        ...pluginReactHooks.configs.recommended.rules,

        // Specify whether double or single quotes should be used in JSX attributes
        // https://eslint.org/docs/rules/jsx-quotes
        'jsx-quotes': [ERROR, 'prefer-double'],

        // Enforce boolean attributes notation in JSX
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
        'react/jsx-boolean-value': [ERROR, NEVER, { always: [] }],

        // Validate closing bracket location in JSX
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
        'react/jsx-closing-bracket-location': [ERROR, 'line-aligned'],

        // Validate closing tag location in JSX
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
        'react/jsx-closing-tag-location': ERROR,

        // Enforce or disallow spaces inside of curly braces in JSX attributes
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
        'react/jsx-curly-spacing': [ERROR, {
          when: 'always',
          spacing: {
            objectLiterals: NEVER,
          },
          children: true,
        }],

        // Validate props indentation in JSX
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
        'react/jsx-indent-props': [ERROR, 2],

        // Validate JSX has key prop when in array or iterator
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
        // Turned off because it has too many false positives
        'react/jsx-key': OFF,

        // Limit maximum of props on a single line in JSX
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
        'react/jsx-max-props-per-line': [ERROR, { maximum: 1, when: 'multiline' }],

        // Prevent duplicate props in JSX
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
        'react/jsx-no-duplicate-props': [ERROR, { ignoreCase: true }],

        // Prevent usage of unwrapped JSX strings
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
        'react/jsx-no-literals': [OFF, { noStrings: true }],

        // Enforce PascalCase for user-defined JSX components
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
        'react/jsx-pascal-case': [ERROR, {
          allowAllCaps: true,
          ignore: [],
        }],

        // Enforce props alphabetical sorting
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
        'react/jsx-sort-props': [OFF, {
          ignoreCase: true,
          callbacksLast: false,
          shorthandFirst: false,
          shorthandLast: false,
          noSortAlphabetically: false,
          reservedFirst: true,
        }],

        // Enforce defaultProps declarations alphabetical sorting
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-sort-default-props.md
        'react/jsx-sort-default-props': [OFF, {
          ignoreCase: true,
        }],

        // Prevent usage of dangerous JSX properties
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md
        'react/no-danger': 'warn',

        // Prevent extra closing tags for components without children
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
        'react/self-closing-comp': ERROR,

        // Prevent missing parentheses around multilines JSX
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-wrap-multilines.md
        'react/jsx-wrap-multilines': [ERROR, {
          declaration: 'parens-new-line',
          assignment: 'parens-new-line',
          return: 'parens-new-line',
          arrow: 'parens-new-line',
          condition: 'parens-new-line',
          logical: 'parens-new-line',
          prop: 'parens-new-line',
        }],

        // Require that the first prop in a JSX element be on a new line when the element is multiline
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
        'react/jsx-first-prop-new-line': [ERROR, 'multiline-multiprop'],

        // Enforce spacing around jsx equals signs
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
        'react/jsx-equals-spacing': [ERROR, NEVER],

        // Enforce JSX indentation
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
        'react/jsx-indent': [ERROR, 2],

        // Require style prop value be an object or var
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
        'react/style-prop-object': ERROR,

        // Validate whitespace in and around the JSX opening and closing brackets
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-tag-spacing.md
        'react/jsx-tag-spacing': [ERROR, {
          closingSlash: NEVER,
          beforeSelfClosing: 'always',
          afterOpening: NEVER,
          beforeClosing: NEVER,
        }],

        // Enforces consistent naming for boolean props
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/boolean-prop-naming.md
        'react/boolean-prop-naming': [OFF, {
          propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
          rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
          message: '',
        }],

        // Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
        'react/jsx-curly-brace-presence': [ERROR, { props: NEVER, children: NEVER }],

        // One JSX Element Per Line
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-one-expression-per-line.md
        'react/jsx-one-expression-per-line': [ERROR, { allow: 'single-child' }],

        // Enforce consistent usage of destructuring assignment of props, state, and context
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/destructuring-assignment.md
        'react/destructuring-assignment': [ERROR, 'always'],

        // Ensures inline tags are not rendered without spaces between them
        'react/jsx-child-element-spacing': OFF,

        // Validate JSX maximum depth
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/abe8381c0d6748047224c430ce47f02e40160ed0/docs/rules/jsx-max-depth.md
        'react/jsx-max-depth': OFF,

        // Disallow multiple spaces between inline JSX props
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/ac102885765be5ff37847a871f239c6703e1c7cc/docs/rules/jsx-props-no-multi-spaces.md
        'react/jsx-props-no-multi-spaces': ERROR,

        // Enforce linebreaks in curly braces in JSX attributes and expressions.
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
        'react/jsx-curly-newline': [ERROR, {
          multiline: 'consistent',
          singleline: 'consistent',
        }],

        // Enforce a new line after jsx elements and expressions
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/e2eaadae316f9506d163812a09424eb42698470a/docs/rules/jsx-newline.md
        'react/jsx-newline': ERROR,

        ...overrides,
      },
    },
  ];
}
