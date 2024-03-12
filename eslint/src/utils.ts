import type { Awaitable, UserConfigItem } from './types';

/**
 * Combine array and non-array configs into a single array.
 */
export async function combineConfigs(...configs: Array<Awaitable<Array<UserConfigItem> | UserConfigItem>>): Promise<Array<UserConfigItem>> {
  const resolved = await Promise.all(configs);

  return resolved.flat();
}

export function renameRules(rules: Record<string, any>, from: string, to: string) {
  return Object.fromEntries(
    Object.entries(rules)
      .map(([key, value]) => {
        if (key.startsWith(from)) {
          return [to + key.slice(from.length), value];
        };
        return [key, value];
      }),
  );
}

export async function interopDefault<T>(m: Awaitable<T>): Promise<T extends { default: infer U } ? U : T> {
  const resolved = await m;
  return (resolved as any).default || resolved;
}

export const parserPlain = {
  meta: {
    name: 'parser-plain',
  },
  parseForESLint: (code: string) => ({
    ast: {
      body: [],
      comments: [],
      loc: { end: code.length, start: 0 },
      range: [0, code.length],
      tokens: [],
      type: 'Program',
    },
    scopeManager: null,
    services: { isPlain: true },
    visitorKeys: {
      Program: [],
    },
  }),
};

export function toArray<T>(value: Array<T> | T): Array<T> {
  return Array.isArray(value) ? value : [value];
}
