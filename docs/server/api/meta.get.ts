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

  const rawConfigs = jiti(metadataPath).default;

  const selectedConfig = rawConfigs[query.config as string];

  const promises: any[] = [];

  for (const rawConfig of rawConfigs[query.config as string]) {
    if (rawConfig.rules) {
      for (const [name, rule] of Object.entries<any>(rawConfig.rules)) {
        const docs = parseMarkdown(rule.docs.description).then((parsed: any) => {
          return [
            name,
            {
              ...rule,
              docs: {
                ...rule.docs,
                description: parsed.body,
              },
            },
          ];
        });

        promises.push(docs);
      }
    }
  }

  const renderedRules = await Promise.all(promises);

  const configs = selectedConfig.map((config: any) => ({
    ...config,
    rules: Object.fromEntries(renderedRules),
  }));

  return {
    configs,
  };
});
