---
navigation:
  icon: i-logos:javascript
---

# Javascript

List of rules that are related to JavaScript.

## Basic

:docs-configs{ :configs="configs" } 

## Script Overrides

:docs-configs{ :configs="configs" :index="1" }


## Custom Overrides

If you want to override or add more rules you can pass it to the `overrides` property.
For example:

```js [eslint.config.js]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint({
  options: {
    overrides: {
      javascript: {
        eqeqeq: 'off',
      }
    }
  },
});
```
