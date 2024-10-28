# Javascript

List of rules that are related to JavaScript.

## Base Rules

<EslintList package="javascript/rules" is-filterable />

## Script Disables

<EslintList package="javascript/disables" />

## Custom Overrides

If you want to override or add more rules you can pass it to the `overrides` property.
For example:

```js [eslint.config.js]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint(
  {
    javascript: {
      overrides: {
        eqeqeq: 'off',
      }
    }
  }
);
```
