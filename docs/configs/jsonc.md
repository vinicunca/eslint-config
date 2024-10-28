# JSONC

List of rules that are related to [JSON](https://json.org/), [JSONC](https://github.com/microsoft/node-jsonc-parser) and [JSON5](https://json5.org/) files.

## Setup

<EslintList package="jsonc/setup" />

## Base Rules

<EslintList package="jsonc/rules" />

## Custom Overrides

If you want to override or add more rules you can pass it to the `overrides` property.
For example:

```js [eslint.config.js]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint(
  {
    jsonc: {
      overrides: {
        'jsonc/array-bracket-spacing': 'off',
      }
    },
  }
);
```
