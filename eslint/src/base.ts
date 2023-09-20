import process from 'node:process';

import { type FlatESLintConfigItem } from 'eslint-define-config';
import { isPackageExists } from 'local-pkg';
import { isBoolean } from '@vinicunca/perkakas';

import { type OptionsConfig } from './types';
import { ignores } from './configs/ignores';
import { combineConfigs } from './utils';
import {
  comments,
  imports,
  javascript,
  javascriptStylistic,
  jsdoc,
  jsonc,
  markdown,
  node,
  react,
  // TODO: Enable when this issue is resolved: https://github.com/SonarSource/eslint-plugin-sonarjs/issues/403
  // sonar,
  sortPackageJson,
  sortTsconfig,
  test,
  typescript,
  typescriptStylistic,
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
  const enableTypeScript = options.typescript ?? (isPackageExists('typescript'));
  const enableStylistic = options.stylistic ?? true;

  const configs = [
    ignores,
    javascript({ isInEditor }),
    comments,
    node,
    jsdoc,
    imports,
    unicorn,
  ];

  // In the future we may support more component extensions like Svelte or so
  const componentExts: string[] = [];

  if (enableVue) {
    componentExts.push('vue');
  }

  if (enableStylistic) {
    configs.push(javascriptStylistic);
  }

  if (enableTypeScript) {
    configs.push(typescript({ componentExts }));

    if (!isBoolean(enableTypeScript)) {
      configs.push(typescriptWithLanguageServer({
        ...enableTypeScript,
        componentExts,
      }));
    }

    if (enableStylistic) {
      configs.push(typescriptStylistic);
    };
  }

  if (options.test ?? true) {
    configs.push(test({ isInEditor }));
  };

  if (enableVue) {
    configs.push(vue({ typescript: !!enableTypeScript }));
  };

  if (options.jsonc ?? true) {
    configs.push(
      jsonc,
      sortPackageJson,
      sortTsconfig,
    );
  }

  if (options.yaml ?? true) {
    configs.push(yml);
  };

  if (options.markdown ?? true) {
    configs.push(markdown({ componentExts }));
  };

  // TODO: Enable when this issue is resolved: https://github.com/SonarSource/eslint-plugin-sonarjs/issues/403
  // if (options.sonar ?? true) {
  //   configs.push(sonar);
  // }

  if (options.react) {
    configs.push(react);
  }

  return combineConfigs(
    ...configs,
    ...userConfigs,
  );
}
