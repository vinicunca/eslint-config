# Markdown

List of rules that are related to markdown files.

## Setup

<EslintList package="markdown/setup" />

## Base Rules

<EslintList package="markdown/disables" />

## Custom Overrides

If you want to override or add more rules you can pass it to the `overrides` property.
For example:

```js [eslint.config.js]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint(
  {
    markdown: {
      overrides: {
        'no-undef': 'error',
      }
    },
  }
);
```
