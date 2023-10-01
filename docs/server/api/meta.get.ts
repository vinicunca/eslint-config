import process from 'node:process';
import { type FlatESLintConfigItem } from 'eslint-define-config';
import { relative, resolve } from 'pathe';
import JITI from 'jiti';

export default defineEventHandler((event) => {
  const query = getQuery(event);

  const cwd = process.cwd();
  const configPath = resolve(cwd, '..', 'eslint.config.js');

  const jiti = JITI(cwd, {
    cache: false,
  });

  const rawConfigs = jiti(configPath).default as FlatESLintConfigItem[];

  const rulesMap = new Map<string, any>();

  const firstConfig = rawConfigs.slice(1, 2);

  for (const item of rawConfigs) {
  // for (const item of rawConfigs.slice(1, 2)) {
  }

  // const configs = firstConfig.map((c): FlatESLintConfigItem => {
  //   console.log('🚀 ~ configs ~ c:', c);
  // });

  const response = {
    hello: 'world',
  };

  return response;
});
