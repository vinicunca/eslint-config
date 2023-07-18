module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    '@vinicunca/eslint-config-ts',
  ],
  settings: {
    react: {
      version: '17.0',
    },
  },
  rules: {
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-key': 'off',
    'react/jsx-indent': ['error', 2],
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-curly-spacing': ['error', {
      when: 'always',
      spacing: {
        objectLiterals: 'never',
      },
      children: true,
    }],
  },
};
