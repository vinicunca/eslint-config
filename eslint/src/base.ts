import { isBoolean, isObject } from '@vinicunca/perkakas';
import { isPackageExists } from 'local-pkg';
import process from 'node:process';

import type { Awaitable, FlatConfigItem, OptionsConfig, OptionsStylistic } from './types';

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
import { combineConfigs } from './utils';

const VuePackages = [
  'vue',
  'nuxt',
  'vitepress',
  '@slidev/cli',
];

// eslint-disable-next-line vinicunca/cognitive-complexity
export async function vinicuncaESLint(
  { options = {}, userConfigs = [] }:
  {
    options?: OptionsConfig & FlatConfigItem;
    userConfigs?: Awaitable<FlatConfigItem | FlatConfigItem[]>[];
  } = {},
): Promise<FlatConfigItem[]> {
  const {
    componentExts = [],
    isInEditor = !!((process.env.VSCODE_PID || process.env.JETBRAINS_IDE) && !process.env.CI),
    jsonc: enableJsonc = true,
    markdown: enableMarkdown = true,
    overrides = {},
    react: enableReact = false,
    test: enableTest = true,
    typescript: tsOptions = {},
    unocss: enableUnoCSS = false,
    vue: enableVue = VuePackages.some((i) => isPackageExists(i)),
    yaml: enableYaml = true,
  } = options;

  let stylisticOptions: OptionsStylistic['stylistic'] = true;

  if (options.stylistic === false) {
    stylisticOptions = false;
  } else if (isObject(options.stylistic)) {
    stylisticOptions = {
      ...options.stylistic,
      jsx: options.jsx ?? true,
    };
  }

  const configs: Awaitable<FlatConfigItem[]>[] = [];

  configs.push(
    ignores(options.ignores),
    javascript({
      isInEditor,
      overrides: overrides.javascript,
    }),
    comments(),
    node(),
    jsdoc(),
    imports(),
    unicorn(),
  );

  if (enableVue) {
    componentExts.push('vue');
  }

  const {
    enabled: tsEnabled = isPackageExists('typescript'),
    ...tsParams
  } = tsOptions;

  if (tsEnabled) {
    configs.push(typescript({
      ...tsParams,
      componentExts,
      overrides: overrides.typescript,
    }));
  }

  if (stylisticOptions) {
    configs.push(stylistic());
  }

  if (enableTest) {
    configs.push(test({
      isInEditor,
      overrides: overrides.test,
    }));
  };

  if (enableVue) {
    configs.push(vue({
      overrides: overrides.vue,
      typescript: {
        enabled: tsEnabled,
        ...tsParams,
      },
    }));
  };

  if (enableReact) {
    configs.push(react({
      overrides: overrides.react,
    }));
  }

  if (enableUnoCSS) {
    configs.push(unocss(
      isBoolean(enableUnoCSS) ? {} : enableUnoCSS,
    ));
  }

  if (enableJsonc) {
    configs.push(
      jsonc({
        overrides: overrides.jsonc,
        stylistic: stylisticOptions,
      }),
      sortPackageJson(),
      sortTsconfig(),
    );
  }

  if (enableYaml) {
    configs.push(yaml({
      overrides: overrides.yaml,
      stylistic: stylisticOptions,
    }));
  };

  if (enableMarkdown) {
    configs.push(markdown({
      componentExts,
      overrides: overrides.markdown,
    }));
  };

  configs.push(ignores(options.ignores));

  return combineConfigs(
    ...configs,
    ...userConfigs,
  );
}
