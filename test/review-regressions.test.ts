import type { OptionsConfig } from '../src/types';
import { ESLint } from 'eslint';
import { describe, expect, it } from 'vitest';
import { vinicuncaESLint } from '../src/base';
import { CONFIG_PRESET_FULL_OFF } from '../src/config-presets';
import { typescript } from '../src/configs/typescript';

async function createESLint(options: OptionsConfig) {
  const configs = await vinicuncaESLint({
    ...CONFIG_PRESET_FULL_OFF,
    isInEditor: false,
    ...options,
  });

  return new ESLint({
    overrideConfigFile: true,
    overrideConfig: configs as any,
  });
}

describe('markdown options', () => {
  it('forwards CommonMark and Markdown rule overrides through the factory', async () => {
    const eslint = await createESLint({
      markdown: {
        gfm: false,
        overridesMarkdown: { 'markdown/no-empty-links': 'off' },
        overrides: { 'no-console': 'error' },
      },
    });

    const config = await eslint.calculateConfigForFile('example.md');
    expect(config.language).toBe(config.plugins.markdown.languages.commonmark);
    expect(config.rules['markdown/no-empty-links']).toEqual([0]);

    const [result] = await eslint.lintText('[Example]()\n\n```js\nconsole.log("example");\n```\n', { filePath: 'example.md' });
    expect(result.messages.some((message) => message.ruleId === 'markdown/no-empty-links')).toBe(false);
    expect(result.messages.some((message) => message.ruleId === 'no-console')).toBe(true);
  });
});

describe('erasableOnly scope', () => {
  it('applies to TypeScript and component scripts while excluding JavaScript and Markdown prose', async () => {
    const eslint = await createESLint({
      typescript: { erasableOnly: true },
      vue: true,
      astro: true,
      markdown: true,
    });

    await Promise.all([
      'example.ts',
      'example.tsx',
      'example.vue',
      'example.astro/0.ts',
      'example.md/0.ts',
    ].map(async (filePath) => {
      const config = await eslint.calculateConfigForFile(filePath);
      expect(config.rules['erasable-syntax-only/enums']).toEqual([2]);
    }));

    await Promise.all(['example.js', 'example.md', 'example.astro'].map(async (filePath) => {
      const config = await eslint.calculateConfigForFile(filePath);
      expect(config.rules['erasable-syntax-only/enums']).toBeUndefined();
    }));

    const [result] = await eslint.lintText('export enum Status { Ready }\n', { filePath: 'example.ts' });
    expect(result.messages.some((message) => message.ruleId === 'erasable-syntax-only/enums')).toBe(true);
    await expect(eslint.lintText('# Example\n', { filePath: 'example.md' })).resolves.toBeDefined();
  });

  it('respects a custom TypeScript file selector', async () => {
    const configs = await typescript({
      erasableOnly: true,
      files: ['scripts/**/*.ts'],
    });
    const eslint = new ESLint({ overrideConfigFile: true, overrideConfig: configs as any });
    const included = await eslint.calculateConfigForFile('scripts/example.ts');
    expect(included.rules['erasable-syntax-only/enums']).toEqual([2]);
    const excluded = await eslint.calculateConfigForFile('src/example.js');
    expect(excluded.rules?.['erasable-syntax-only/enums']).toBeUndefined();
  });
});

describe('antislop defaults', () => {
  it('enables Slop and SonarJS in the default factory config', async () => {
    const configs = await vinicuncaESLint({
      gitignore: false,
      isInEditor: false,
      typescript: false,
      vue: false,
    });
    const eslint = new ESLint({ overrideConfigFile: true, overrideConfig: configs as any });
    const config = await eslint.calculateConfigForFile('example.js');
    expect(config.plugins.slop).toBeDefined();
    expect(config.plugins.sonarjs).toBeDefined();
    expect(config.rules['slop/no-jargon'][0]).toBe(2);
    expect(config.rules['sonarjs/no-identical-conditions']).toEqual([2]);

    const [result] = await eslint.lintText('export function compare(value) {\n  if (value) return 1;\n  else if (value) return 2;\n  return 0;\n}\n', { filePath: 'example.js' });
    expect(result.messages.some((message) => message.ruleId === 'sonarjs/no-identical-conditions')).toBe(true);

    const [markdownResult] = await eslint.lintText('# Example\n\nText with an em dash \u2014 here.\n', { filePath: 'example.md' });
    expect(markdownResult.messages.some((message) => message.ruleId === 'slop/no-em-dash')).toBe(false);

    const [fencedCssResult] = await eslint.lintText('# Example\n\n```css\n.example { color: red; }\n```\n', { filePath: 'example.md' });
    expect(fencedCssResult.fatalErrorCount).toBe(0);

    await Promise.all([
      'example.css',
      'example.html',
      'example.xml',
      'example.graphql',
      'example.svelte',
    ].map(async (filePath) => {
      expect(await eslint.calculateConfigForFile(filePath)).toBeUndefined();
    }));
  });

  it.each([
    { slop: false, sonarjs: true },
    { slop: true, sonarjs: false },
  ])('allows individual plugins to be disabled with %j', async (options) => {
    const eslint = await createESLint({ antislop: options });
    const config = await eslint.calculateConfigForFile('example.js');
    expect(!!config.plugins.slop).toBe(options.slop);
    expect(!!config.plugins.sonarjs).toBe(options.sonarjs);
    await expect(eslint.lintText('export const value = 1;\n', { filePath: 'example.js' })).resolves.toBeDefined();
  });

  it('accepts the disabled SonarJS test rule without registering the plugin', async () => {
    const eslint = await createESLint({ antislop: false, test: true });
    const config = await eslint.calculateConfigForFile('example.test.js');
    expect(config.plugins.sonarjs).toBeUndefined();
    expect(config.plugins.slop).toBeUndefined();
    expect(config.rules['sonarjs/no-duplicate-string']).toEqual([0]);
    await expect(eslint.lintText('export const value = 1;\n', { filePath: 'example.test.js' })).resolves.toBeDefined();
  });
});
