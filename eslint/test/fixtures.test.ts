import { execa } from 'execa';
import fg from 'fast-glob';
import fs from 'fs-extra';
import { join, resolve } from 'node:path';
import { afterAll, beforeAll, it } from 'vitest';

import type { OptionsConfig } from '../src/types';

beforeAll(async () => {
  await fs.rm('_fixtures', { force: true, recursive: true });
});
afterAll(async () => {
  await fs.rm('_fixtures', { force: true, recursive: true });
});

runWithConfig('js', {
  options: {
    react: true,
    typescript: {
      enabled: false,
    },
    vue: false,
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
      cwd: target,
      ignore: [
        'node_modules',
        'eslint.config.js',
      ],
    });

    await Promise.all(files.map(async (file) => {
      const content = await fs.readFile(join(target, file), 'utf-8');
      const source = await fs.readFile(join(from, file), 'utf-8');
      const outputPath = join(output, file);
      if (content === source) {
        if (fs.existsSync(outputPath)) {
          fs.remove(outputPath);
        };

        return;
      }

      await expect.soft(content).toMatchFileSnapshot(join(output, file));
    }));
  }, 30_000);
}
