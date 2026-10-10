# @vinicunca/eslint-config

[![npm](https://img.shields.io/npm/v/@vinicunca/eslint-config/latest.svg?style=flat&colorA=18181B&colorB=28CF8D)](https://npmjs.com/package/@vinicunca/eslint-config)
[![downloads](https://img.shields.io/npm/dm/@vinicunca/eslint-config.svg?style=flat&colorA=18181B&colorB=28CF8D)](https://npmjs.com/package/@vinicunca/eslint-config)
[![license](https://img.shields.io/github/license/vinicunca/eslint-config.svg?style=flat&colorA=18181B&colorB=28CF8D)](https://github.com/vinicunca/eslint-config/blob/main/LICENSE)

Vinicunca's shareable [flat ESLint config](https://eslint.org/docs/latest/use/configure/configuration-files). It lints and formats JavaScript, TypeScript, Vue, JSON, YAML, TOML and Markdown.

**Docs:** [https://vinicunca.dev/eslint/getting-started](https://vinicunca.dev/eslint/getting-started)

## Install

```bash
pnpm add -D eslint @vinicunca/eslint-config
```

```js
// eslint.config.js
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint();
```

Requires ESLint `^10.0.0`. `vinicuncaESLint` is a **named** export. There is no default export and no CLI wizard.

Antislop and SonarJS rules are enabled by default. Both plugins install with this package. To disable these rules:

```js
export default vinicuncaESLint({ antislop: false });
```

## License

This package is a fork of [antfu/eslint-config](https://github.com/antfu/eslint-config). Most integrations come from Anthony Fu's work; this fork changes the code style (semicolons, braces, arrow parens) and some defaults.

[MIT](./LICENSE) License © 2022-PRESENT [praburangki](https://github.com/praburangki)
