# Javascript

List of rules that are related to JavaScript.

## Basic

:docs-configs{ config="javascript" }

## Plugins

For this rule preset it has additional plugins:

- [vinicunca](/vinicunca)
- [unused-imports](https://github.com/sweepline/eslint-plugin-unused-imports){:target="_blank"}

### Vinicunca

- [import-dedupe](/vinicunca/import-dedupe)
- [no-import-node-modules-by-path](/vinicunca/no-import-node-modules-by-path)
- [top-level-function](/vinicunca/top-level-function)

### unused-imports

This is similar to the [no-unused-vars](https://eslint.org/docs/latest/rules/no-unused-vars) rule but specifically for imports.

#### no-unused-imports

A rule to find unused-imports only, as well as an autofixer. This rule will return an error **only** if it's not in a Code Editor.

#### no-unused-vars

This is just a helper rule to filter out the things caught by
the `no-unused-imports` rule without double warnings. As
well as being able to set them at different warning levels.

The options for this rule are:

```
vars: 'all',
varsIgnorePattern: '^_',
args: 'after-used',
argsIgnorePattern: '^_',
ignoreRestSiblings: true,
```
