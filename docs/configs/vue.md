# Vue

List of rules that are related to Vue files.

## Setup

::: tip Typescript Support

Please visit the [Typescript configuration](/configs/typescript#configuration) page for more information.

:::

<EslintList package="vue/setup" />

## Base Rules

<EslintList package="vue/rules" is-filterable />

## Custom Overrides

If you want to override or add more rules you can pass it to the `overrides` property.
For example:

```js [eslint.config.js]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint(
  {
    vue: {
      overrides: {
        'vue/arrow-spacing': 'off',
      }
    }
  }
);
```
