---
navigation:
  icon: i-simple-icons:markdown
---

# Markdown

List of rules that are related to markdown files.

## Setup

:docs-configs{ :configs="configs" }

## Basic

:docs-configs{ :configs="configs" :index="2" }

## Custom Overrides

If you want to override or add more rules you can pass it to the `overrides` property.
For example:

```js [eslint.config.js]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint({
  options: {
    overrides: {
      markdown: {
        'no-undef': 'error',
      }
    }
  },
});
```
