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
  typescriptWithLanguageServer,
  unicorn,
  vue,
  yml,
} from './configs';

export function vinicuncaESLint(
  { options = {}, userConfigs = [] }:
  {
    options?: OptionsConfig;
    userConfigs: (FlatESLintConfigItem | FlatESLintConfigItem[])[];
  },
) {
  const isInEditor = options.isInEditor ?? !!((process.env.VSCODE_PID || process.env.JETBRAINS_IDE) && !process.env.CI);

  const enableVue = options.vue ?? (isPackageExists('vue') || isPackageExists('nuxt') || isPackageExists('vitepress') || isPackageExists('@slidev/cli'));

  const configs: FlatESLintConfigItem[][] = [];

  const enableGitignore = options.gitignore ?? true;

  if (enableGitignore) {
    if (typeof enableGitignore !== 'boolean') {
      configs.push([gitignore(enableGitignore)]);
    } else if (fs.existsSync('.gitignore')) {
      configs.push([gitignore()]);
    };
  }

  configs.push(
    ignores(options.ignores ?? {}),
    javascript({ isInEditor }),
    comments,
    node,
    jsdoc,
    imports,
    unicorn,
  );

  // In the future we may support more component extensions like Svelte or so
  const componentExts: string[] = [];

  if (enableVue) {
    componentExts.push('vue');
  }

  const enableTypeScript = options.typescript ?? (isPackageExists('typescript'));

  if (enableTypeScript) {
    configs.push(typescript({ componentExts }));

    if (!isBoolean(enableTypeScript)) {
      configs.push(typescriptWithLanguageServer({
        ...enableTypeScript,
        componentExts,
      }));
    }
  }

  const enableStylistic = options.stylistic ?? true;

  if (enableStylistic) {
    configs.push(stylistic);
  }

  const enableTest = options.test ?? true;

  if (enableTest) {
    configs.push(test({ isInEditor }));
  };

  if (enableVue) {
    configs.push(vue({ typescript: !!enableTypeScript }));
  };

  const enableJsonc = options.jsonc ?? true;

  if (enableJsonc) {
    configs.push(
      jsonc,
      sortPackageJson,
      sortTsconfig,
    );
  }

  const enableYaml = options.yaml ?? true;

  if (enableYaml) {
    configs.push(yml);
  };

  const enableMarkdown = options.markdown ?? true;

  if (enableMarkdown) {
    configs.push(markdown({ componentExts }));
  };

  // TODO: Enable when this issue is resolved: https://github.com/SonarSource/eslint-plugin-sonarjs/issues/403
  // const enableSonar = options.sonar ?? true;
  // if (enableSonar) {
  //   configs.push(sonar);
  // }

  const enableReact = options.react ?? false;

  if (enableReact) {
    configs.push(react);
  }

  return combineConfigs(
    ...configs,
    ...userConfigs,
  );
}
