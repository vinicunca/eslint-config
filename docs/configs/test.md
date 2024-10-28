# Test

List of rules that are related to test / spec files.

## Setup

<EslintList package="test/setup" />

## Base Rules

<EslintList package="test/rules" />

## Custom Overrides

If you want to override or add more rules you can pass it to the `overrides` property.
For example:

```js [eslint.config.js]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint(
  {
    test: {
      overrides: {
        'test/consistent-test-it': 'off',
      }
    }
  }
);
```
