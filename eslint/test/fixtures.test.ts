import { join, resolve } from 'node:path';
import { afterAll, beforeAll, it } from 'vitest';
import fs from 'fs-extra';
import { execa } from 'execa';
import fg from 'fast-glob';
import type { OptionsConfig } from '../src/types';

beforeAll(async () => {
  await fs.rm('_fixtures', { recursive: true, force: true });
});
afterAll(async () => {
  await fs.rm('_fixtures', { recursive: true, force: true });
});

runWithConfig('js', {
  options: {
    typescript: false,
    vue: false,
    react: true,
  },
});
runWithConfig('all', {
  options: {
    react: true,
  },
});

runWithConfig('no-style', {
  options: {
    stylistic: false,
  },
});

function runWithConfig(name: string, configs: { options: OptionsConfig }) {
  it.concurrent(name, async ({ expect }) => {
    const from = resolve('fixtures/input');
    const output = resolve('fixtures/output', name);
    const target = resolve('_fixtures', name);

    await fs.copy(from, target, {
      filter: (src) => {
        return !src.includes('node_modules');
      },
    });
    await fs.writeFile(join(target, 'eslint.config.js'), `
// @eslint-disable
import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint(${JSON.stringify(configs)})
  `);

    await execa('npx', ['eslint', '.', '--fix'], {
      cwd: target,
      stdio: 'pipe',
    });

    const files = await fg('**/*', {
      ignore: [
        'node_modules',
        'eslint.config.js',
      ],
      cwd: target,
    });

    await Promise.all(files.map(async (file) => {
      const content = await fs.readFile(join(target, file), 'utf-8');
      await expect.soft(content).toMatchFileSnapshot(join(output, file));
    }));
  }, 30_000);
}
