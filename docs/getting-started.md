# Installation

## Disclaimer

<div class="tip custom-block">

This is a fork from [anftu's ESLint config](https://github.com/antfu/eslint-config). A lot of the configs and plugins are based from his repo. This config add additional plugins and override other rules. Kudos for the amazing work for him.

</div>

## Setup

::: code-group

```sh [npm]
$ npm add -D @vinicunca/eslint-config
```

```sh [pnpm]
$ pnpm add -D @vinicunca/eslint-config
```

```sh [bun]
$ bun add -D @vinicunca/eslint-config
```

:::

::: tip Requirements

- ESLint v8.40.0 and above (to be able to support [flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new))
- Node.js v18.x and above

:::

## Usage

### Configuration

The ESLint configuration file is named `eslint.config.js`. It should be placed in the root directory of your project and export an array of [configuration objects](https://eslint.org/docs/latest/use/configure/configuration-files-new#configuration-objects).

If your project does not specify `"type":"module"` in its `package.json` file, then `eslint.config.js` must be in CommonJS format.

Here's an example:

::: code-group

```js [Module]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint();
```

```js [CommonJS]
const { vinicuncaESLint } = require('@vinicunca/eslint-config');

module.exports = vinicuncaESLint();
```

:::

## VSCode Support

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Add the following settings to your `.vscode/settings.json`:

```jsonc
{
  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml",
    "xml",
    "gql",
    "graphql",
    "astro",
    "svelte",
    "css",
    "less",
    "scss",
    "pcss",
    "postcss"
  ]
}
```

## Configs

This plugin provides a bunch of predefined configs. For more details you can view them in their respective pages:

- [astro](/configs/astro)
- [comments](/configs/comments)
- [command](/configs/command)
- [formatters](/configs/formatters)
- [ignores](/configs/ignores)
- [imports](/configs/imports)
- [javascript](/configs/javascript)
- [jsdoc](/configs/jsdoc)
- [jsonc](/configs/jsonc)
- [markdown](/configs/markdown)
- [node](/configs/node)
- [perfectionist](/configs/perfectionist)
- [react](/configs/react)
- [regexp](/configs/regexp)
- [solid](/configs/solid)
- [sonar](/configs/sonar)
- [sort-package-json](/configs/sort-package-json)
- [sort-tsconfig](/configs/sort-tsconfig)
- [stylistic](/configs/stylistic)
- [svelte](/configs/svelte)
- [test](/configs/test)
- [toml](/configs/toml)
- [typescript](/configs/typescript)
- [unicorn](/configs/unicorn)
- [vue](/configs/vue)
- [yaml](/configs/yaml)

## Customization

You can also disable/enable each rule individually.

```js [eslint.config.js]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint({
  // Disable jsonc and yaml support
  jsonc: false,
  yaml: false,

  // Enable stylistic formatting rules
  // stylistic: true,

  // Or customize the stylistic rules
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
  },

  // TypeScript and Vue are auto-detected, you can also explicitly enable them:
  typescript: true,
  vue: true,

  // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
  ignores: [
    './fixtures',
    // ...globs
  ],
});
```

You can also overrides internal configs, for more details visit each config page for instructions.

### Overrides

This config also allows you to add more custom overrides or your own set of configuration.

```js [eslint.config.js]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint(
  {
    typescript: true,
    vue: true
  },

  {
    // Remember to specify the file glob here, otherwise it might cause the vue plugin to handle non-vue files
    files: ['**/*.vue'],
    rules: {
      'vue/operator-linebreak': ['error', 'before'],
    },
  },

  {
    // Without `files`, they are general rules for all files
    rules: {
      'style/semi': ['error', 'never'],
    },
  }
);
```

We also provided a `overrides` options in each integration to make it easier:

```js [eslint.config.js]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint({
  typescript: {
    overrides: {
      'ts/consistent-type-definitions': ['error', 'interface'],
    },
  },
  vue: {
    overrides: {
      'vue/operator-linebreak': ['error', 'before'],
    },
  },
  yaml: {
    overrides: {
      // ...
    },
  },
});
```

## Plugins Renaming

Since flat config requires us to explicitly provide the plugin names (instead of mandatory convention from npm package name), we renamed some plugins to make overall scope more consistent and easier to write.

| New Prefix | Original Prefix        | Source Plugin                                                                              |
| ---------- | ---------------------- | ------------------------------------------------------------------------------------------ |
| `import/*` | `import-lite/*`        | [eslint-plugin-import-lite](https://github.com/9romise/eslint-plugin-import-lite)          |
| `node/*`   | `n/*`                  | [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n)                     |
| `yaml/*`   | `yml/*`                | [eslint-plugin-yml](https://github.com/ota-meshi/eslint-plugin-yml)                        |
| `ts/*`     | `@typescript-eslint/*` | [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint) |
| `style/*`  | `@stylistic/*`         | [@stylistic/eslint-plugin](https://github.com/eslint-stylistic/eslint-stylistic)           |
| `test/*`   | `vitest/*`             | [eslint-plugin-vitest](https://github.com/veritem/eslint-plugin-vitest)                    |
| `test/*`   | `no-only-tests/*`      | [eslint-plugin-no-only-tests](https://github.com/levibuzolic/eslint-plugin-no-only-tests)  |

When you want to override rules, or disable them inline, you need to update to the new prefix:

```diff
-// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
+// eslint-disable-next-line ts/consistent-type-definitions
type foo = { bar: 2 }
```

## Lint Staged

If you want to apply lint and auto-fix before every commit, please install these packages first:

::: code-group

```sh [npm]
$ npm add -D lint-staged simple-git-hooks
```

```sh [pnpm]
$ pnpm add -D lint-staged simple-git-hooks
```

```sh [bun]
$ bun add -D lint-staged simple-git-hooks
```

:::

Then you can add the following settings within your `package.json`:

```json
{
  "simple-git-hooks": {
    "pre-commit": "pnpm lint-staged"
  },
  "lint-staged": {
    "*": "eslint --fix"
  }
}
```
