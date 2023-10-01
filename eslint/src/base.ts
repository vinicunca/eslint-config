import process from 'node:process';

import { isPackageExists } from 'local-pkg';

import { isBoolean } from '@vinicunca/perkakas';
import { type FlatESLintConfigItem, type OptionsConfig } from './types';
import { ignores } from './configs/ignores';
import { combineConfigs } from './utils';
import {
  comments,
  imports,
  javascript,
  jsdoc,
  jsonc,
  markdown,
  node,
  react,
  // TODO: Enable when this issue is resolved: https://github.com/SonarSource/eslint-plugin-sonarjs/issues/403
  // sonar,
  sortPackageJson,
  sortTsconfig,
  stylistic,
  test,
  typescript,
  unicorn,
  vue,
  yaml,
} from './configs';

const VuePackages = [
  'vue',
  'nuxt',
  'vitepress',
  '@slidev/cli',
];

export function vinicuncaESLint(
  { options = {}, userConfigs = [] }:
  {
    options?: OptionsConfig;
    userConfigs: (FlatESLintConfigItem | FlatESLintConfigItem[])[];
  },
) {
  const {
    isInEditor = !!((process.env.VSCODE_PID || process.env.JETBRAINS_IDE) && !process.env.CI),
    vue: enableVue = VuePackages.some((i) => isPackageExists(i)),
    typescript: enableTypeScript = isPackageExists('typescript'),
    stylistic: enableStylistic = true,
    test: enableTest = true,
    jsonc: enableJsonc = true,
    yaml: enableYaml = true,
    markdown: enableMarkdown = true,
    react: enableReact = false,
    overrides = {},
    componentExts = [],
  } = options;

  const configs2: FlatESLintConfigItem[][] = [];

  configs2.push(ignores(options.ignores));

  configs2.push(javascript({
    isInEditor,
    overrides: overrides.javascript,
  }));

  const configs: FlatESLintConfigItem[][] = [];

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

  if (enableTypeScript) {
    configs.push(typescript({
      ...!isBoolean(enableTypeScript)
        ? enableTypeScript
        : {},
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
      typescript: !!enableTypeScript,
      overrides: overrides.vue,
    }));
  };

  if (enableJsonc) {
    configs.push(
      jsonc(),
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

  // TODO: Enable when this issue is resolved: https://github.com/SonarSource/eslint-plugin-sonarjs/issues/403
  // const enableSonar = options.sonar ?? true;
  // if (enableSonar) {
  //   configs.push(sonar);
  // }

  if (enableReact) {
    configs.push(react({
      overrides: overrides.react,
    }));
  }

  // return combineConfigs(
  //   ...configs,
  //   ...userConfigs,
  // );
  return combineConfigs(
    ...configs2,
    ...userConfigs,
  );
}
