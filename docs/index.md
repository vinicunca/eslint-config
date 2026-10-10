---
title: @vinicunca/eslint-config
description: Maintain consistent code quality and formatting.
package: eslint
---

::note
This is a fork from [anftu's ESLint config](https://github.com/antfu/eslint-config). A lot of the configs and plugins are based from his repo. This config add additional plugins and override other rules. Kudos for the amazing work for him.
::

## Features

- Auto fix for formatting (aimed to be used standalone **without** Prettier)
- Reasonable defaults, best practices, only one line of config
- Designed to work with TypeScript, JSX, Vue, JSON, YAML, Toml, Markdown, etc. Out-of-box.
- Opinionated, but [very customizable](#customization)
- Optional [React](#react), [Next.js](#nextjs), [Svelte](#svelte), [UnoCSS](#unocss), [Astro](#astro), [Solid](#solid) support
- Optional [formatters](#formatters) support for formatting CSS, HTML, XML, etc.
- **Style principle**: Minimal for reading, stable for diff, consistent
  - Sorted imports, dangling commas
  - Single quotes, no semi
  - Using [ESLint Stylistic](https://github.com/eslint-stylistic/eslint-stylistic)
- Respects `.gitignore` by default
- Requires ESLint v9.39.1+ or v10

## Usage

### Install

::code-group{sync="pm"}

```bash [pnpm]
pnpm add -D eslint @vinicunca/eslint-config
```

```bash [npm]
npm install -D eslint @vinicunca/eslint-config
```

```bash [bun]
bun add -d eslint @vinicunca/eslint-config
```

::

And create `eslint.config.mjs` in your project root:

```ts[eslint.config.mjs]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint();
```

### Add script for package.json

For example:

```json[package.json]
{
  "scripts": {
    "lint": "eslint",
    "lint:fix": "eslint --fix"
  }
}
```

## IDE Support (auto fix on save)

::collapsible{name="VS Code Support"}

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) then add the following settings to your `.vscode/settings.json`:

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

::

::collapsible{name="Neovim Support"}

Update your configuration to use the following:

```lua
local customizations = {
  { rule = 'style/*', severity = 'off', fixable = true },
  { rule = 'format/*', severity = 'off', fixable = true },
  { rule = '*-indent', severity = 'off', fixable = true },
  { rule = '*-spacing', severity = 'off', fixable = true },
  { rule = '*-spaces', severity = 'off', fixable = true },
  { rule = '*-order', severity = 'off', fixable = true },
  { rule = '*-dangle', severity = 'off', fixable = true },
  { rule = '*-newline', severity = 'off', fixable = true },
  { rule = '*quotes', severity = 'off', fixable = true },
  { rule = '*semi', severity = 'off', fixable = true },
}

local lspconfig = require('lspconfig')
-- Enable eslint for all supported languages
lspconfig.eslint.setup(
  {
    filetypes = {
      "javascript",
      "javascriptreact",
      "javascript.jsx",
      "typescript",
      "typescriptreact",
      "typescript.tsx",
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
    },
    settings = {
      -- Silent the stylistic rules in your IDE, but still auto fix them
      rulesCustomizations = customizations,
    },
  }
)
```

### Neovim format on save

There's few ways you can achieve format on save in neovim:

- `nvim-lspconfig` has a `EslintFixAll` command predefined, you can create a autocmd to call this command after saving file.

```lua
lspconfig.eslint.setup({
  --- ...
  on_attach = function(client, bufnr)
    vim.api.nvim_create_autocmd("BufWritePre", {
      buffer = bufnr,
      command = "EslintFixAll",
    })
  end,
})
```

- Use [conform.nvim](https://github.com/stevearc/conform.nvim).
- Use [none-ls](https://github.com/nvimtools/none-ls.nvim)
- Use [nvim-lint](https://github.com/mfussenegger/nvim-lint)

::

## Customization

Normally you only need to import the `eslint-config` preset:

```js [eslint.config.mjs]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint();
```

And that's it! Or you can configure each integration individually, for example:

```js [eslint.config.mjs]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint(
  {
    // Type of the project. 'lib' for libraries, the default is 'app'
    type: 'lib',

    // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
    // The `ignores` option in the option (first argument) is specifically treated to always be global ignores
    // And will **extend** the config's default ignores, not override them
    // You can also pass a function to modify the default ignores
    ignores: [
      '**/fixtures',
    // ...globs
    ],

    // Parse the `.gitignore` file to get the ignores, on by default
    gitignore: true,

    // Enable stylistic formatting rules
    stylistic: true,

    // Or customize the stylistic rules
    stylistic: {
      indent: 2, // 4, or 'tab'
      quotes: 'single', // or 'double'
    },

    // TypeScript and Vue are autodetected, you can also explicitly enable them:
    typescript: true,
    vue: true,

    // Disable jsonc and yaml support
    jsonc: false,
    yaml: false,
  }
);
```

The `vinicuncaESLint` factory function also accepts any number of arbitrary custom config overrides:

```js [eslint.config.mjs]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint(
  {
    // Configures for vinicuncaESLint's config
  },

  // From the second arguments they are ESLint Flat Configs
  // you can have multiple configs
  {
    files: ['**/*.ts'],
    rules: {},
  },
  {
    rules: {},
  },
);
```

Going more advanced, you can also import fine-grained configs and compose them as you wish:

::collapsible{name="Advanced Example"}

We wouldn't recommend using this style in general unless you know exactly what they are doing, as there are shared options between configs and might need extra care to make them consistent.

```js [eslint.config.mjs]
import {
  combine,
  comments,
  ignores,
  imports,
  javascript,
  jsdoc,
  jsonc,
  markdown,
  node,
  sortPackageJson,
  sortTsconfig,
  stylistic,
  toml,
  typescript,
  unicorn,
  vue,
  yaml,
} from '@vinicunca/eslint-config';

export default combine(
  ignores(),
  javascript(/* Options */),
  comments(),
  node(),
  jsdoc(),
  imports(),
  unicorn(),
  typescript(/* Options */),
  stylistic(),
  vue(),
  jsonc(),
  yaml(),
  toml(),
  markdown(),
);
```

::

Check out the [configs](https://github.com/vinicunca/eslint-config/blob/main/src/configs) and [factory](https://github.com/vinicunca/eslint-config/blob/main/src/base.ts) for more details.

### Plugins Renaming

Since flat config requires us to explicitly provide the plugin names (instead of the mandatory convention from npm package name), we renamed some plugins to make the overall scope more consistent and easier to write.

| New Prefix | Original Prefix        | Source Plugin                                                                                         |
| ---------- | ---------------------- | ----------------------------------------------------------------------------------------------------- |
| `import/*` | `import-lite/*`        | [eslint-plugin-import-lite](https://github.com/9romise/eslint-plugin-import-lite)                     |
| `node/*`   | `n/*`                  | [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n)                                |
| `yaml/*`   | `yml/*`                | [eslint-plugin-yml](https://github.com/ota-meshi/eslint-plugin-yml)                                   |
| `ts/*`     | `@typescript-eslint/*` | [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint)            |
| `style/*`  | `@stylistic/*`         | [@stylistic/eslint-plugin](https://github.com/eslint-stylistic/eslint-stylistic)                      |
| `test/*`   | `vitest/*`             | [@vitest/eslint-plugin](https://github.com/vitest-dev/eslint-plugin-vitest)                           |
| `test/*`   | `no-only-tests/*`      | [eslint-plugin-no-only-tests](https://github.com/levibuzolic/eslint-plugin-no-only-tests)             |
| `next/*`   | `@next/next`           | [@next/eslint-plugin-next](https://github.com/vercel/next.js/tree/canary/packages/eslint-plugin-next) |

When you want to override rules, or disable them inline, you need to update to the new prefix:

```diff
-// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
+// eslint-disable-next-line ts/consistent-type-definitions
type foo = { bar: 2 }
```

::caution
Warning

<br>

About plugin renaming - it is actually rather a dangerous move that might lead to potential naming collisions, pointed out [here](https://github.com/eslint/eslint/discussions/17766) and [here](https://github.com/prettier/eslint-config-prettier#eslintconfigjs-flat-config-plugin-caveat). As this config also very **personal** and **opinionated**, I ambitiously position this config as the only **"top-level"** config per project, that might pivots the taste of how rules are named.

<br>

This config cares more about the user-facings DX, and try to ease out the implementation details. For example, users could keep using the semantic `import/order` without ever knowing the underlying plugin has migrated twice to `eslint-plugin-i` and then to `eslint-plugin-import-x`. User are also not forced to migrate to the implicit `i/order` halfway only because we swapped the implementation to a fork.

::

This preset will automatically rename the plugins also for your custom configs. You can use the original prefix to override the rules directly.

::collapsible{name="Change back to original prefix"}

If you really want to use the original prefix, you can revert the plugin renaming by:

```ts
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint()
  .renamePlugins({
    ts: '@typescript-eslint',
    yaml: 'yml',
    node: 'n'
    // ...
  });
```

::

### Rules Overrides

Certain rules would only be enabled in specific files, for example, `ts/*` rules would only be enabled in `.ts` files and `vue/*` rules would only be enabled in `.vue` files. If you want to override the rules, you need to specify the file extension:

```js [eslint.config.mjs]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint(
  {
    vue: true,
    typescript: true
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

We also provided the `overrides` options in each integration to make it easier:

```js [eslint.config.mjs]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint({
  vue: {
    overrides: {
      'vue/operator-linebreak': ['error', 'before'],
    },
  },
  typescript: {
    overrides: {
      'ts/consistent-type-definitions': ['error', 'interface'],
    },
  },
  yaml: {
    overrides: {
      // ...
    },
  },
});
```

### Config Composer

The factory function `vinicuncaESLint()` returns a [`FlatConfigComposer` object from `eslint-flat-config-utils`](https://github.com/antfu/eslint-flat-config-utils#composer) where you can chain the methods to compose the config even more flexibly.

```js [eslint.config.mjs]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint()
  .prepend(
    // some configs before the main config
  )
  // overrides any named configs
  .override(
    'vinicunca/stylistic/rules',
    {
      rules: {
        'style/generator-star-spacing': ['error', { after: true, before: false }],
      }
    }
  )
  // rename plugin prefixes
  .renamePlugins({
    'old-prefix': 'new-prefix',
    // ...
  });
// ...
```

### Vue

Vue support is detected automatically by checking if `vue` is installed in your project. You can also explicitly enable/disable it:

```js [eslint.config.mjs]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint({
  vue: true
});
```

#### Vue Accessibility

To enable Vue accessibility support, you need to explicitly turn it on:

```js [eslint.config.mjs]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint({
  vue: {
    a11y: true
  },
});
```

Running `pnpx eslint` should prompt you to install the required dependencies, otherwise, you can install them manually:

::code-group{sync="pm"}

```bash [pnpm]
pnpm add -D eslint-plugin-vuejs-accessibility
```

```bash [npm]
npm install -D eslint-plugin-vuejs-accessibility
```

```bash [bun]
bun add -d eslint-plugin-vuejs-accessibility
```

::

### Optional Configs

We provide some optional configs for specific use cases, that we don't include their dependencies by default.

#### Formatters

Use external formatters to format files that ESLint cannot handle yet (`.css`, `.html`, etc). Powered by [`eslint-plugin-format`](https://github.com/antfu/eslint-plugin-format).

```js [eslint.config.mjs]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint({
  formatters: {
    /**
     * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
     * By default uses Prettier
     */
    css: true,
    /**
     * Format HTML files
     * By default uses Prettier
     */
    html: true,
    /**
     * Format Markdown files
     * Supports Prettier and dprint
     * By default uses Prettier
     */
    markdown: 'prettier'
  }
});
```

Running `pnpx eslint` should prompt you to install the required dependencies, otherwise, you can install them manually:

::code-group{sync="pm"}

```bash [pnpm]
pnpm add -D eslint-plugin-format
```

```bash [npm]
npm install -D eslint-plugin-format
```

```bash [bun]
bun add -d eslint-plugin-format
```

::

#### React

To enable React support, you need to explicitly turn it on:

```js [eslint.config.mjs]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint({
  react: true,
});
```

Running `pnpx eslint` should prompt you to install the required dependencies, otherwise, you can install them manually:

::code-group{sync="pm"}

```bash [pnpm]
pnpm add -D @eslint-react/eslint-plugin eslint-plugin-react-hooks eslint-plugin-react-refresh
```

```bash [npm]
npm install -D @eslint-react/eslint-plugin eslint-plugin-react-hooks eslint-plugin-react-refresh
```

```bash [bun]
bun add -d @eslint-react/eslint-plugin eslint-plugin-react-hooks eslint-plugin-react-refresh
```

::

#### Next.js

To enable Next.js support, you need to explicitly turn it on:

```js [eslint.config.mjs]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint({
  nextjs: true,
});
```

Running `pnpx eslint` should prompt you to install the required dependencies, otherwise, you can install them manually:

::code-group{sync="pm"}

```bash [pnpm]
pnpm add -D @next/eslint-plugin-next
```

```bash [npm]
npm install -D @next/eslint-plugin-next
```

```bash [bun]
bun add -d @next/eslint-plugin-next
```

::

#### Svelte

To enable svelte support, you need to explicitly turn it on:

```js [eslint.config.mjs]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint({
  svelte: true,
});
```

Running `pnpx eslint` should prompt you to install the required dependencies, otherwise, you can install them manually:

::code-group{sync="pm"}

```bash [pnpm]
pnpm add -D eslint-plugin-svelte
```

```bash [npm]
npm install -D eslint-plugin-svelte
```

```bash [bun]
bun add -d eslint-plugin-svelte
```

::

#### Astro

To enable astro support, you need to explicitly turn it on:

```js [eslint.config.mjs]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint({
  astro: true,
});
```

Running `pnpx eslint` should prompt you to install the required dependencies, otherwise, you can install them manually:

::code-group{sync="pm"}

```bash [pnpm]
pnpm add -D eslint-plugin-astro
```

```bash [npm]
npm install -D eslint-plugin-astro
```

```bash [bun]
bun add -d eslint-plugin-astro
```

::

#### Solid

To enable Solid support, you need to explicitly turn it on:

```js [eslint.config.mjs]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint({
  solid: true,
});
```

Running `pnpx eslint` should prompt you to install the required dependencies, otherwise, you can install them manually:

::code-group{sync="pm"}

```bash [pnpm]
pnpm add -D eslint-plugin-solid
```

```bash [npm]
npm install -D eslint-plugin-solid
```

```bash [bun]
bun add -d eslint-plugin-solid
```

::

#### UnoCSS

To enable UnoCSS support, you need to explicitly turn it on:

```js [eslint.config.mjs]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint({
  unocss: true,
});
```

Running `pnpx eslint` should prompt you to install the required dependencies, otherwise, you can install them manually:

::code-group{sync="pm"}

```bash [pnpm]
pnpm add -D @unocss/eslint-plugin
```

```bash [npm]
npm install -D @unocss/eslint-plugin
```

```bash [bun]
bun add -d @unocss/eslint-plugin
```

::

### Optional Rules

This config also provides some optional plugins/rules for extended usage.

#### `command`

Powered by [`eslint-plugin-command`](https://github.com/antfu/eslint-plugin-command). It is not a typical rule for linting, but an on-demand micro-codemod tool that triggers by specific comments.

For a few triggers, for example:

- `/// to-function` - converts an arrow function to a normal function
- `/// to-arrow` - converts a normal function to an arrow function
- `/// to-for-each` - converts a for-in/for-of loop to `.forEach()`
- `/// to-for-of` - converts a `.forEach()` to a for-of loop
- `/// keep-sorted` - sorts an object/array/interface
- ... etc. - refer to the [documentation](https://github.com/antfu/eslint-plugin-command#built-in-commands)

You can add the trigger comment one line above the code you want to transform, for example (note the triple slash):

<!-- eslint-skip -->

```ts
/// to-function
const foo = async (msg: string): void => {
  console.log(msg)
}
```

Will be transformed to this when you hit save with your editor or run `eslint --fix`:

```ts
async function foo(msg: string): void {
  console.log(msg);
}
```

The command comments are usually one-off and will be removed along with the transformation.

### Type Aware Rules

You can optionally enable the [type aware rules](https://typescript-eslint.io/linting/typed-linting/) by passing the options object to the `typescript` config:

```js [eslint.config.mjs]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint({
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
});
```

### Editor Specific Disables

Auto-fixing for the following rules are disabled when ESLint is running in a code editor:

- [`prefer-const`](https://eslint.org/docs/rules/prefer-const)
- [`test/no-only-tests`](https://github.com/levibuzolic/eslint-plugin-no-only-tests)
- [`unused-imports/no-unused-imports`](https://www.npmjs.com/package/eslint-plugin-unused-imports)

They are no longer disabled, but made non-fixable using [this helper](https://github.com/antfu/eslint-flat-config-utils#composerdisablerulesfix).

This is to prevent unused imports from getting removed by the editor during refactoring to get a better developer experience. Those rules will be applied when you run ESLint in the terminal or [Lint Staged](#lint-staged). If you don't want this behavior, you can disable them:

```js [eslint.config.mjs]
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint({
  isInEditor: false
});
```

### Lint Staged

If you want to apply lint and auto-fix before every commit, you can add the following to your `package.json`:

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

and then

::code-group{sync="pm"}

```bash [pnpm]
pnpm add -D lint-staged simple-git-hooks
```

```bash [npm]
npm install -D lint-staged simple-git-hooks
```

```bash [bun]
bun add -d lint-staged simple-git-hooks
```

::

```bash
// to active the hooks
pnpx simple-git-hooks
```

## View what rules are enabled

Antfu built a visual tool to help you view what rules are enabled in your project and apply them to what files, [@eslint/config-inspector](https://github.com/eslint/config-inspector)

Go to your project root that contains `eslint.config.js` and run:

```bash
pnpx @eslint/config-inspector
```
