import type { Linter } from 'eslint';

import { isBoolean, isPlainObject } from '@vinicunca/perkakas';
import { FlatConfigComposer } from 'eslint-flat-config-utils';
import { isPackageExists } from 'local-pkg';

import type { RuleOptions } from './typegen';
import type { Awaitable, ConfigNames, OptionsConfig, OptionsStylistic, TypedFlatConfigItem } from './types';

import {
  astro,
  command,
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
  solid,
  sonar,
  sortPackageJson,
  sortTsconfig,
  stylistic,
  svelte,
  test,
  toml,
  typescript,
  unicorn,
  unocss,
  vue,
  yaml,
} from './configs';
import { formatters } from './configs/formatters';
import { regexp } from './configs/regexp';
import { interopDefault, isInEditorEnv } from './utils';

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
  '@eslint-react': 'react',
  '@eslint-react/dom': 'react-dom',
  '@eslint-react/hooks-extra': 'react-hooks-extra',
  '@eslint-react/naming-convention': 'react-naming-convention',

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
  ...userConfigs: Array<Awaitable<Array<Linter.Config> | Array<TypedFlatConfigItem> | FlatConfigComposer<any, any> | TypedFlatConfigItem>>
): FlatConfigComposer<TypedFlatConfigItem, ConfigNames> {
  const {
    astro: enableAstro = false,
    autoRenamePlugins = true,
    componentExts = [],
    gitignore: enableGitignore = true,
    jsx: enableJsx = true,
    react: enableReact = false,
    regexp: enableRegexp = true,
    solid: enableSolid = false,
    svelte: enableSvelte = false,
    typescript: enableTypeScript = isPackageExists('typescript'),
    unocss: enableUnoCSS = false,
    vue: enableVue = VuePackages.some((i) => isPackageExists(i)),
  } = options;

  let isInEditor = options.isInEditor;
  if (isInEditor == null) {
    isInEditor = isInEditorEnv();
    if (isInEditor) {
      // eslint-disable-next-line no-console
      console.log('[@vinicunca/eslint-config] Detected running in editor, some rules are disabled.');
    }
  }

  let stylisticOptions: OptionsStylistic['stylistic'] = {};

  if (options.stylistic === false) {
    stylisticOptions = false;
  } else if (isPlainObject(options.stylistic)) {
    stylisticOptions = options.stylistic;
  } else {
    stylisticOptions = {};
  }

  if (stylisticOptions && !('jsx' in stylisticOptions)) {
    stylisticOptions.jsx = enableJsx;
  }

  const configs: Array<Awaitable<Array<TypedFlatConfigItem>>> = [];

  if (enableGitignore) {
    if (!isBoolean(enableGitignore)) {
      configs.push(interopDefault(import('eslint-config-flat-gitignore'))
        .then((r) => [r(enableGitignore)]));
    } else {
      configs.push(interopDefault(import('eslint-config-flat-gitignore'))
        .then((r) => [r({ strict: false })]));
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

    imports({
      stylistic: stylisticOptions,
    }),

    unicorn(),

    command(),

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
      type: options.type,
    }));
  }

  if (stylisticOptions) {
    configs.push(stylistic({
      ...stylisticOptions,
      overrides: getOverrides(options, 'stylistic'),
    }));
  }

  if (enableRegexp) {
    configs.push(regexp(isBoolean(enableRegexp) ? {} : enableRegexp));
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

  if (enableSolid) {
    configs.push(solid({
      overrides: getOverrides(options, 'solid'),
      tsconfigPath,
      typescript: !!enableTypeScript,
    }));
  }

  if (enableSvelte) {
    configs.push(svelte({
      overrides: getOverrides(options, 'svelte'),
      stylistic: stylisticOptions,
      typescript: !!enableTypeScript,
    }));
  }

  if (enableUnoCSS) {
    configs.push(unocss({
      ...resolveSubOptions(options, 'unocss'),
      overrides: getOverrides(options, 'unocss'),
    }));
  }

  if (enableAstro) {
    configs.push(astro({
      overrides: getOverrides(options, 'astro'),
      stylistic: stylisticOptions,
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

  if (options.toml ?? true) {
    configs.push(toml({
      overrides: getOverrides(options, 'toml'),
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
      isBoolean(stylisticOptions) ? {} : stylisticOptions,
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

export type ResolvedOptions<T> = T extends boolean
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

function getOverrides<K extends keyof OptionsConfig>(
  options: OptionsConfig,
  key: K,
): Partial<Linter.RulesRecord & RuleOptions> {
  const sub = resolveSubOptions(options, key);

  return {
    ...'overrides' in sub
      ? sub.overrides
      : {},
  };
}
