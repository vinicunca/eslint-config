import type { Linter } from 'eslint';

import { isBoolean, isPlainObject } from '@vinicunca/perkakas';
import { FlatConfigComposer } from 'eslint-flat-config-utils';
import { isPackageExists } from 'local-pkg';
import fs from 'node:fs';
import process from 'node:process';

import type { Awaitable, ConfigNames, OptionsConfig, OptionsStylistic, TypedFlatConfigItem } from './types';

import {
  comments,
  ignores,
  imports,
  javascript,
  jsdoc,
  jsonc,
  jsx,
  markdown,
  node,
  perfectionist,
  react,
  sonar,
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
import { regexp } from './configs/regexp';
import { interopDefault } from './utils';

const flatConfigProps: Array<keyof TypedFlatConfigItem> = [
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
  'sonarjs': 'sonar',
  'vitest': 'test',
  'yml': 'yaml',
};

/**
 * Construct an array of ESLint flat config items.
 *
 * @param options
 *  The options for generating the ESLint configurations.
 * @param userConfigs
 *  The user configurations to be merged with the generated configurations.
 * @returns
 *  The merged ESLint configurations.
 */
export function vinicuncaESLint(
  options: OptionsConfig & TypedFlatConfigItem = {},
  ...userConfigs: Array<Awaitable<Array<Linter.FlatConfig> | Array<TypedFlatConfigItem> | FlatConfigComposer<any, any> | TypedFlatConfigItem>>
): FlatConfigComposer<TypedFlatConfigItem, ConfigNames> {
  const {
    autoRenamePlugins = true,
    componentExts = [],
    gitignore: enableGitignore = true,
    isInEditor = !!((process.env.VSCODE_PID || process.env.VSCODE_CWD || process.env.JETBRAINS_IDE || process.env.VIM || process.env.NVIM) && !process.env.CI),
    jsx: enableJsx = true,
    react: enableReact = false,
    regexp: enableRegexp = true,
    typescript: enableTypeScript = isPackageExists('typescript'),
    unocss: enableUnoCSS = false,
    vue: enableVue = VuePackages.some((i) => isPackageExists(i)),
  } = options;

  let stylisticOptions: OptionsStylistic['stylistic'] = {};

  if (options.stylistic === false) {
    stylisticOptions = false;
  } else if (isPlainObject(options.stylistic)) {
    stylisticOptions = {
      ...options.stylistic,
      jsx: options.jsx ?? true,
    };
  }

  if (stylisticOptions && !('jsx' in stylisticOptions)) {
    stylisticOptions.jsx = enableJsx;
  }

  const configs: Array<Awaitable<Array<TypedFlatConfigItem>>> = [];

  if (enableGitignore) {
    if (typeof enableGitignore !== 'boolean') {
      configs.push(interopDefault(import('eslint-config-flat-gitignore')).then((r) => [r(enableGitignore)]));
    } else {
      if (fs.existsSync('.gitignore')) {
        configs.push(interopDefault(import('eslint-config-flat-gitignore')).then((r) => [r()]));
      }
    }
  }

  const typescriptOptions = resolveSubOptions(options, 'typescript');
  const tsconfigPath = 'tsconfigPath' in typescriptOptions ? typescriptOptions.tsconfigPath : undefined;

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

    perfectionist(),

    sonar(),
  );

  if (enableVue) {
    componentExts.push('vue');
  }

  if (enableJsx) {
    configs.push(jsx());
  }

  if (enableTypeScript) {
    configs.push(typescript({
      ...typescriptOptions,
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

  if (enableRegexp) {
    configs.push(regexp(typeof enableRegexp === 'boolean' ? {} : enableRegexp));
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
      tsconfigPath,
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
  }, {} as TypedFlatConfigItem);

  if (Object.keys(fusedConfig).length) {
    configs.push([fusedConfig]);
  };

  let composer = new FlatConfigComposer<TypedFlatConfigItem, ConfigNames>();

  composer = composer
    .append(
      ...configs,
      ...userConfigs as any,
    );

  if (autoRenamePlugins) {
    composer = composer
      .renamePlugins(defaultPluginRenaming);
  }

  return composer;
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
