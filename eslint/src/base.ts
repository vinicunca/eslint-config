import process from 'node:process';
import { isPackageExists } from 'local-pkg';
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
    isInEditor = !!((process.env.VSCODE_PID || process.env.JETBRAINS_IDE) && !process.env.CI),
    vue: enableVue = VuePackages.some((i) => isPackageExists(i)),
    typescript: tsOptions = {},
    stylistic: enableStylistic = true,
    test: enableTest = true,
    jsonc: enableJsonc = true,
    yaml: enableYaml = true,
    markdown: enableMarkdown = true,
    react: enableReact = false,
    overrides = {},
    componentExts = [],
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
      typescript: {
        enabled: tsEnabled,
        ...tsParams,
      },
      overrides: overrides.vue,
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
