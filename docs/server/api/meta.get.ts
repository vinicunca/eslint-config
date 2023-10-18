import process from 'node:process';
import { resolve } from 'pathe';

// @ts-expect-error missing types
import { parseMarkdown } from '@nuxtjs/mdc/runtime';

import JITI from 'jiti';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const cwd = process.cwd();
  const metadataPath = resolve(cwd, 'metadata.json');

  const jiti = JITI(cwd);

  const [parentPath, configPath] = query.config as string[];

  if (parentPath !== 'configs') {
    return {
      configs: [],
    };
  }

  const rawConfigs = jiti(metadataPath).default;

  const configs: any[] = [];

  const selectedConfig = rawConfigs[configPath];

  if (selectedConfig) {
    for (let index = 0; index < selectedConfig.length; index++) {
      const rawConfig = selectedConfig[index];

      const renderedRules: any[] = [];

      if (rawConfig.rules) {
        for (const [_, rule] of Object.entries<any>(rawConfig.rules)) {
          // eslint-disable-next-line no-await-in-loop
          const docs = await parseMarkdown(rule.docs.description);

          renderedRules.push({
            ...rule,
            docs: {
              ...rule.docs,
              description: docs.body,
            },
          });
        }
      }

      configs[index] = {
        ...rawConfig,
        rules: renderedRules,
      };
    }
  }

  return {
    configs,
  };
});
