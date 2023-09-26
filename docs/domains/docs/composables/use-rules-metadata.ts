// @ts-expect-error export typings
import { parseMarkdown } from '@nuxtjs/mdc/runtime';

export function useRulesMetadata() {
  async function getMetadata(source: string) {
    const { data } = await useAsyncData(
      `rules-${source}`,
      async () => {
        const dataSource = await import(`../data/${source}.json`).then((d) => d.default);

        const parsed = await parseRuleIgnore(dataSource);

        return parsed;
      },
    );

    return {
      ruleData: data,
    };
  }

  return {
    getMetadata,
  };
}

async function parseRuleIgnore(input: any) {
  const content = `
    \`\`\`
    ${input.join(',\n')}
  `;

  const parsed = await parseMarkdown(content);

  return parsed.body;
}
