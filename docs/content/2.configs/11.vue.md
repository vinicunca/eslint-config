---
navigation:
  icon: i-logos:vue
---

# Vue

List of rules that are related to Vue files.

## Setup

::docs-alert{type="tip" title="Typescript Support"}

Please visit the [Typescript configuration](/configs/typescript#configuration) page for more information.

::

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
      vue: {
        'vue/arrow-spacing': 'off',
      }
    }
  },
});
```
