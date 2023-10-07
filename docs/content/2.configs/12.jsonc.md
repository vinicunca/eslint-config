---
navigation:
  icon: i-carbon:json
---

# JSONC

List of rules that are related to [JSON](https://json.org/), [JSONC](https://github.com/microsoft/node-jsonc-parser) and [JSON5](https://json5.org/) files.

## Setup

:docs-configs{ :configs="configs" }

## Basic

:docs-configs{ :configs="configs" :index="1" }

## Custom Overrides

If you want to override or add more rules you can pass it to the `overrides` property.
For example:

```js [eslint.config.js]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint({
  options: {
    overrides: {
      jsonc: {
        'jsonc/array-bracket-spacing': 'off',
      }
    }
  },
});
```
