import { isPackageExists } from 'local-pkg';
import process from 'node:process';

import type { ConfigItem, OptionsConfig } from './types';

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

export function vinicuncaESLint(
  { options = {}, userConfigs = [] }: { options?: OptionsConfig & ConfigItem; userConfigs?: (ConfigItem | ConfigItem[])[] } = {},
) {
  const {
    componentExts = [],
    isInEditor = !!((process.env.VSCODE_PID || process.env.JETBRAINS_IDE) && !process.env.CI),
    jsonc: enableJsonc = true,
    markdown: enableMarkdown = true,
    overrides = {},
    react: enableReact = false,
    stylistic: enableStylistic = true,
    test: enableTest = true,
    typescript: tsOptions = {},
    vue: enableVue = VuePackages.some((i) => isPackageExists(i)),
    yaml: enableYaml = true,
  } = options;

  const configs: ConfigItem[][] = [];

  configs.push(
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

  if (enableStylistic) {
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

  if (enableJsonc) {
    configs.push(
      jsonc({
        overrides: overrides.jsonc,
      }),
      sortPackageJson(),
      sortTsconfig(),
    );
  }

  if (enableYaml) {
    configs.push(yaml({
      overrides: overrides.yaml,
    }));
  };

  if (enableMarkdown) {
    configs.push(markdown({
      componentExts,
      overrides: overrides.markdown,
    }));
  };

  if (enableReact) {
    configs.push(react({
      overrides: overrides.react,
    }));
  }

  configs.push(ignores(options.ignores));

  return combineConfigs(
    ...configs,
    ...userConfigs,
  );
}
