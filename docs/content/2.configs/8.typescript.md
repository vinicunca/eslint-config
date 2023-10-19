---
navigation:
  icon: i-logos:typescript-icon
---

# Typescript

List of rules that are related to Typescript.

## Configuration

You can add additional options to the `typescript` property in the `options` object.

::docs-alert{type="tip"}

By default `typescript` is enabled if you have it installed within your `package.json` file. You can disable all typescript functionality by setting `enabled` to `false`.

::


```js [eslint.config.js]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint({
  options: {
    typescript: {
      enabled: false, // if you want to turn off typescript
    }
  },
});
```

::docs-alert{type="tip" title="Type Aware"}

You can optionally enable the [type aware rules](https://typescript-eslint.io/linting/typed-linting/) by passing `tsconfigPath` to the options object.

::

```js [eslint.config.js]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint({
  options: {
    typescript: {
      tsconfigPath: ['tsconfig.eslint.json'],
    }
  },
});
```

## Setup Plugins

:docs-configs{ :configs="configs" }

## Basic

:docs-configs{ :configs="configs" :index="1" }

## Overrides `d.ts`

:docs-configs{ :configs="configs" :index="2" }

## Overrides Test Files

:docs-configs{ :configs="configs" :index="3" }

## Overrides Javascript Files

:docs-configs{ :configs="configs" :index="4" }


## Custom Overrides

If you want to override or add more rules you can pass it to the `overrides` property.
For example:

```js [eslint.config.js]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint({
  options: {
    overrides: {
      typescript: {
        'ts/consistent-type-definitions': 'off',
      }
    }
  },
});
```
