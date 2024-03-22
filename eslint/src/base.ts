import { isBoolean, isObject } from '@vinicunca/perkakas';
import { isPackageExists } from 'local-pkg';
import fs from 'node:fs';
import process from 'node:process';

import type { Awaitable, FlatConfigItem, OptionsConfig, OptionsStylistic, UserConfigItem } from './types';

import {
  comments,
  ignores,
  imports,
  javascript,
  jsdoc,
  jsonc,
  markdown,
  node,
  react,
  sortPackageJson,
  sortTsconfig,
  stylistic,
  test,
  typescript,
  unicorn,
  unocss,
  vue,
  yaml,
} from './configs';
import { formatters } from './configs/formatters';
import { combineConfigs, interopDefault, renamePluginInConfigs } from './utils';

const flatConfigProps: Array<keyof FlatConfigItem> = [
  'name',
  'files',
  'ignores',
  'languageOptions',
  'linterOptions',
  'processor',
  'plugins',
  'rules',
  'settings',
];

const VuePackages = [
  'vue',
  'nuxt',
  'vitepress',
  '@slidev/cli',
];

export const defaultPluginRenaming = {
  '@stylistic': 'style',
  '@typescript-eslint': 'ts',
  'import-x': 'import',
  'n': 'node',
  'vitest': 'test',
  'yml': 'yaml',
};

// eslint-disable-next-line vinicunca/cognitive-complexity
export async function vinicuncaESLint(
  options: OptionsConfig & FlatConfigItem = {},
  ...userConfigs: Array<Awaitable<Array<UserConfigItem> | UserConfigItem>>
): Promise<Array<UserConfigItem>> {
  const {
    autoRenamePlugins = true,
    componentExts = [],
    gitignore: enableGitignore = true,
    isInEditor = !!((process.env.VSCODE_PID || process.env.JETBRAINS_IDE || process.env.VIM) && !process.env.CI),
    react: enableReact = false,
    typescript: enableTypeScript = isPackageExists('typescript'),
    unocss: enableUnoCSS = false,
    vue: enableVue = VuePackages.some((i) => isPackageExists(i)),
  } = options;

  let stylisticOptions: OptionsStylistic['stylistic'] = {};

  if (options.stylistic === false) {
    stylisticOptions = false;
  } else if (isObject(options.stylistic)) {
    stylisticOptions = {
      ...options.stylistic,
      jsx: options.jsx ?? true,
    };
  }

  const configs: Array<Awaitable<Array<FlatConfigItem>>> = [];

  if (enableGitignore) {
    if (typeof enableGitignore !== 'boolean') {
      configs.push(interopDefault(import('eslint-config-flat-gitignore')).then((r) => [r(enableGitignore)]));
    } else {
      if (fs.existsSync('.gitignore')) {
        configs.push(interopDefault(import('eslint-config-flat-gitignore')).then((r) => [r()]));
      }
    }
  }

  configs.push(
    ignores(),

    javascript({
      isInEditor,
      overrides: getOverrides(options, 'javascript'),
    }),

    comments(),

    node(),

    jsdoc({
      stylistic: stylisticOptions,
    }),

    imports(),

    unicorn(),
  );

  if (enableVue) {
    componentExts.push('vue');
  }

  if (enableTypeScript) {
    configs.push(typescript({
      ...resolveSubOptions(options, 'typescript'),
      componentExts,
      overrides: getOverrides(options, 'typescript'),
    }));
  }

  if (stylisticOptions) {
    configs.push(stylistic({
      ...stylisticOptions,
      overrides: getOverrides(options, 'stylistic'),
    }));
  }

  if (options.test ?? true) {
    configs.push(test({
      isInEditor,
      overrides: getOverrides(options, 'test'),
    }));
  }

  if (enableVue) {
    configs.push(vue({
      ...resolveSubOptions(options, 'vue'),
      overrides: getOverrides(options, 'vue'),
      stylistic: stylisticOptions,
      typescript: !!enableTypeScript,
    }));
  }

  if (enableReact) {
    configs.push(react({
      overrides: getOverrides(options, 'react'),
      typescript: !!enableTypeScript,
    }));
  }

  if (enableUnoCSS) {
    configs.push(unocss({
      ...resolveSubOptions(options, 'unocss'),
      overrides: getOverrides(options, 'unocss'),
    }));
  }

  if (options.jsonc ?? true) {
    configs.push(
      jsonc({
        overrides: getOverrides(options, 'jsonc'),
        stylistic: stylisticOptions,
      }),
      sortPackageJson(),
      sortTsconfig(),
    );
  }

  if (options.yaml ?? true) {
    configs.push(yaml({
      overrides: getOverrides(options, 'yaml'),
      stylistic: stylisticOptions,
    }));
  }

  if (options.markdown ?? true) {
    configs.push(
      markdown(
        {
          componentExts,
          overrides: getOverrides(options, 'markdown'),
        },
      ),
    );
  }

  if (options.formatters) {
    configs.push(formatters(
      options.formatters,
      typeof stylisticOptions === 'boolean' ? {} : stylisticOptions,
    ));
  }

  /**
   * User can optionally pass a flat config item to the first argument.
   * We pick the known keys as ESLint would do schema validation
   */
  const fusedConfig = flatConfigProps.reduce((acc, key) => {
    if (key in options) {
      acc[key] = options[key] as any;
    };
    return acc;
  }, {} as FlatConfigItem);

  if (Object.keys(fusedConfig).length) {
    configs.push([fusedConfig]);
  };

  const merged = await combineConfigs(
    ...configs,
    ...userConfigs,
  );

  if (autoRenamePlugins) {
    return renamePluginInConfigs(merged, defaultPluginRenaming);
  }

  return merged;
}

function getOverrides<K extends keyof OptionsConfig>(
  options: OptionsConfig,
  key: K,
) {
  const sub = resolveSubOptions(options, key);

  return {
    ...'overrides' in sub
      ? sub.overrides
      : {},
  };
}

type ResolvedOptions<T> = T extends boolean
  ? never
  : NonNullable<T>;

function resolveSubOptions<K extends keyof OptionsConfig>(
  options: OptionsConfig,
  key: K,
): ResolvedOptions<OptionsConfig[K]> {
  return isBoolean(options[key])
    ? {} as any
    : options[key] || {};
}
