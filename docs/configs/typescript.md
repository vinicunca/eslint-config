# Typescript

List of rules that are related to Typescript.

## Configuration

You can add additional options to the `typescript` property in the `options` object.

<div class="tip custom-block pt-2">

By default `typescript` is enabled if you have it installed within your `package.json` file. You can disable all typescript functionality by setting it to `false`.

</div>

```js [eslint.config.js]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint(
  {
    typescript: false, // if you want to turn off typescript
  }
);
```

::: tip Type Aware

You can optionally enable the [type aware rules](https://typescript-eslint.io/linting/typed-linting/) by passing the options object to the `typescript` config.

:::

```js [eslint.config.js]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint(
  {
    typescript: {
      tsconfigPath: 'tsconfig.json',
    },
  }
);
```

## Setup Plugins

<EslintList package="typescript/setup" />

## Base Rules

<EslintList package="typescript/rules" is-filterable />

## Type Aware Rules

<EslintList package="typescript/rules-type-aware" />

## Overrides `d.ts`

<EslintList package="typescript/disables/dts" />

## Overrides Test Files

<EslintList package="typescript/disables/tests" />

## Overrides Javascript Files

<EslintList package="typescript/disables/javascript" />

## Custom Overrides

If you want to override or add more rules you can pass it to the `overrides` property.
For example:

```js [eslint.config.js]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint(
  {
    typescript: {
      overrides: {
        'ts/consistent-type-definitions': 'off',
      }
    }
  }
);
```
