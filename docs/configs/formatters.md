# Formatter

Use external formatters to format files that ESLint cannot handle yet (`.css`, `.html`, etc). Powered by [`eslint-plugin-format`](https://github.com/antfu/eslint-plugin-format).

```js
// eslint.config.js
import antfu from '@antfu/eslint-config';

export default antfu({
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

## Setup

<EslintList package="formatter/setup" />

## CSS

<EslintList package="formatter/css" />

## SCSS

<EslintList package="formatter/scss" />

## LESS

<EslintList package="formatter/less" />

## HTML

<EslintList package="formatter/html" />

## XML

<EslintList package="formatter/xml" />

## SVG

<EslintList package="formatter/svg" />

## Markdown

<EslintList package="formatter/markdown" />

## Astro

<EslintList package="formatter/astro" />

## GraphQL

<EslintList package="formatter/graphql" />
