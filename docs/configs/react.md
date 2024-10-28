# React

List of rules that are related to React.

## Setup

<EslintList package="react/setup" />

## Base Rules

<EslintList package="react/rules" />

## Custom Overrides

If you want to override or add more rules you can pass it to the `overrides` property.
For example:

```js [eslint.config.js]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint(
  {
    react: {
      overrides: {
        'react/jsx-key': 'error',
      }
    }
  }
);
```
