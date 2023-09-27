import process from 'node:process';
import fs from 'node:fs';

import { type FlatESLintConfigItem } from 'eslint-define-config';
import gitignore from 'eslint-config-flat-gitignore';
import { isPackageExists } from 'local-pkg';
import { isBoolean } from '@vinicunca/perkakas';

import { type OptionsConfig } from './types';
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
  typescriptWithTypes,
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
    gitignore: enableGitignore = true,
    test: enableTest = true,
    jsonc: enableJsonc = true,
    yaml: enableYaml = true,
    markdown: enableMarkdown = true,
    react: enableReact = false,
    overrides = {},
  } = options;

  const configs: FlatESLintConfigItem[][] = [];

  if (enableGitignore) {
    if (typeof enableGitignore !== 'boolean') {
      configs.push([gitignore(enableGitignore)]);
    } else if (fs.existsSync('.gitignore')) {
      configs.push([gitignore()]);
    };
  }

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

  // In the future we may support more component extensions like Svelte or so
  const componentExts: string[] = [];

  if (enableVue) {
    componentExts.push('vue');
  }

  if (enableTypeScript) {
    configs.push(typescript({
      componentExts,
      overrides: overrides.typescript,
    }));

    if (!isBoolean(enableTypeScript)) {
      configs.push(typescriptWithTypes({
        ...enableTypeScript,
        componentExts,
        overrides: overrides.typescript,
      }));
    }
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

  return combineConfigs(
    ...configs,
    ...userConfigs,
  );
}
