import { type FlatGitignoreOptions } from 'eslint-config-flat-gitignore';
import { type FlatESLintConfigItem } from 'eslint-define-config';

export interface OptionsConfig {
  /**
   * Additional options for the ignore rules.
   */
  ignores?: OptionsIgnores;

  /**
   * Enable gitignore support.
   *
   * Passing an object to configure the options.
   *
   * @see https://github.com/antfu/eslint-config-flat-gitignore
   * @default true
   */
  gitignore?: boolean | FlatGitignoreOptions;

  /**
   * Enable TypeScript support.
   *
   * Passing an object to enable TypeScript Language Server support.
   *
   * @default auto-detect based on the dependencies
   */
  typescript?: boolean | OptionsTypeScriptWithTypes;

  /**
   * Enable test support.
   *
   * @default true
   */
  test?: boolean;

  /**
   * Enable Vue support.
   *
   * @default auto-detect based on the dependencies
   */
  vue?: boolean;

  /**
   * Enable JSONC support.
   *
   * @default true
   */
  jsonc?: boolean;

  /**
   * Enable YAML support.
   *
   * @default true
   */
  yaml?: boolean;

  /**
   * Enable Markdown support.
   *
   * @default true
   */
  markdown?: boolean;

  /**
   * Enable stylistic rules.
   *
   * @default true
   */
  stylistic?: boolean;

  /**
   * Enable sonarjs rules.
   *
   * @default true
   */
  sonar?: boolean;

  /**
   * Enable react support.
   * In This plugin, react is not supported as a first class citizen. 😎
   *
   * @default false
   */
  react?: boolean;

  /**
   * Control to disable some rules in editors.
   * @default auto-detect based on the process.env
   */
  isInEditor?: boolean;

  /**
   * Provide overrides for rules for each integration.
   */
  overrides?: {
    javascript?: FlatESLintConfigItem['rules'];
    typescript?: FlatESLintConfigItem['rules'];
    typescriptWithTypes?: FlatESLintConfigItem['rules'];
    test?: FlatESLintConfigItem['rules'];
    vue?: FlatESLintConfigItem['rules'];
    jsonc?: FlatESLintConfigItem['rules'];
    markdown?: FlatESLintConfigItem['rules'];
    yaml?: FlatESLintConfigItem['rules'];
    react?: FlatESLintConfigItem['rules'];
  };
}

export interface OptionsOverrides {
  overrides?: FlatESLintConfigItem['rules'];
}

export interface OptionsIsInEditor {
  isInEditor?: boolean;
}

export interface OptionsIgnores {
  items?: string[];
  replace?: boolean;
}

export interface OptionsComponentExts {
  /**
   * Additional extensions for components.
   *
   * @example ['vue']
   * @default []
   */
  componentExts?: string[];
}

export interface OptionsTypeScriptWithTypes {
  tsconfigPath: string;
  tsconfigRootDir?: string;
}

export interface OptionsHasTypeScript {
  typescript?: boolean;
}
