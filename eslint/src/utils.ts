import type { Awaitable, FlatConfigItem } from './types';

/**
 * Combine array and non-array configs into a single array.
 */
export async function combineConfigs(...configs: Awaitable<FlatConfigItem | FlatConfigItem[]>[]): Promise<FlatConfigItem[]> {
  const resolvedConfigs = await Promise.all(configs);

  return resolvedConfigs.flatMap((config) => Array.isArray(config) ? config : [config]);
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
