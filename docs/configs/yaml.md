# YAML

List of rules that are related to `yaml` files.

## Setup

<EslintList package="yaml/setup" />

## Base Rules

<EslintList package="yaml/rules" />

## Custom Overrides

If you want to override or add more rules you can pass it to the `overrides` property.
For example:

```js [eslint.config.js]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint(
  {
    yaml: {
      overrides: {
        'yaml/block-mapping': 'off',
      }
    }
  }
);
```
