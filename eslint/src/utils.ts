import process from 'node:process';

import type { Awaitable, TypedFlatConfigItem } from './types';

/**
 * Combine array and non-array configs into a single array.
 */
export async function combineConfigs(...configs: Array<Awaitable<Array<TypedFlatConfigItem> | TypedFlatConfigItem>>): Promise<Array<TypedFlatConfigItem>> {
  const resolved = await Promise.all(configs);

  return resolved.flat();
}

/**
 * Rename plugin prefixes in a rule object.
 * Accepts a map of prefixes to rename.
 *
 * @example
 * ```ts
 * import { renameRules } from '@vinicunca/eslint-config'
 *
 * export default [{
 *   rules: renameRules(
 *     {
 *       '@typescript-eslint/indent': 'error'
 *     },
 *     { '@typescript-eslint': 'ts' }
 *   )
 * }]
 * ```
 */
export function renameRules(rules: Record<string, any>, map: Record<string, string>) {
  return Object.fromEntries(
    Object.entries(rules)
      .map(([key, value]) => {
        for (const [from, to] of Object.entries(map)) {
          if (key.startsWith(`${from}/`)) {
            return [to + key.slice(from.length), value];
          }
        }
        return [key, value];
      }),
  );
}

/**
 * Rename plugin names a flat configs array
 *
 * @example
 * ```ts
 * import { renamePluginInConfigs } from '@vinicunca/eslint-config'
 * import someConfigs from './some-configs'
 *
 * export default renamePluginInConfigs(someConfigs, {
 *   '@typescript-eslint': 'ts',
 *   'import-x': 'import',
 * })
 * ```
 */
export function renamePluginInConfigs(configs: Array<TypedFlatConfigItem>, map: Record<string, string>): Array<TypedFlatConfigItem> {
  return configs.map((i) => {
    const clone = { ...i };
    if (clone.rules) {
      clone.rules = renameRules(clone.rules, map);
    }
    if (clone.plugins) {
      clone.plugins = Object.fromEntries(
        Object.entries(clone.plugins)
          .map(([key, value]) => {
            if (key in map) {
              return [map[key], value];
            }
            return [key, value];
          }),
      );
    }
    return clone;
  });
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

export function isInEditorEnv(): boolean {
  return !!((process.env.VSCODE_PID || process.env.VSCODE_CWD || process.env.JETBRAINS_IDE || process.env.VIM || process.env.NVIM) && !process.env.CI);
}
