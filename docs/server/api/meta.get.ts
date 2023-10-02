import process from 'node:process';
import { resolve } from 'pathe';
import JITI from 'jiti';

export default defineEventHandler((event) => {
  const query = getQuery(event);

  const cwd = process.cwd();
  const metadataPath = resolve(cwd, 'metadata.json');

  const jiti = JITI(cwd);

  const rawConfigs = jiti(metadataPath).default;

  return {
    configs: rawConfigs[query.config as string],
  };
});
