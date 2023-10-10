import type {
  EslintCommentsRules,
  EslintRules,
  FlatESLintConfigItem,
  ImportRules,
  JsoncRules,
  MergeIntersection,
  NRules,
  Prefix,
  RenamePrefix,
  RuleConfig,
  TypeScriptRules,
  UnicornRules,
  VitestRules,
  VueRules,
  YmlRules,
} from '@antfu/eslint-define-config';
import type { ParserOptions } from '@typescript-eslint/parser';
import type { Rules as VinicuncaRules } from '@vinicunca/eslint-plugin-vinicunca';
import type { StylisticRules } from './generated/stylistic';

export type Rules = MergeIntersection<
RenamePrefix<TypeScriptRules, '@typescript-eslint/', 'ts/'> &
RenamePrefix<VitestRules, 'vitest/', 'test/'> &
RenamePrefix<YmlRules, 'yml/', 'yaml/'> &
RenamePrefix<NRules, 'n/', 'node/'> &
Prefix<StylisticRules, 'style/'> &
Prefix<VinicuncaRules, 'vinicunca/'> &
ImportRules &
EslintRules &
JsoncRules &
VueRules &
UnicornRules &
EslintCommentsRules &
{
  'test/no-only-tests': RuleConfig<[]>;
}
>;

export type ConfigItem = Omit<FlatESLintConfigItem<Rules, false>, 'plugins'> & {
  /**
   * The name of the configuration object.
   */
  name?: string;

  /**
   * An object containing a name-value mapping of plugin names to plugin objects. When `files` is specified, these plugins are only available to the matching files.
   *
   * @see [Using plugins in your configuration](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#using-plugins-in-your-configuration)
   */
  plugins?: Record<string, any>;
};

export interface OptionsConfig extends OptionsComponentExts {
  /**
   * Additional options for the ignore rules.
   */
  ignores?: OptionsIgnores;

  /**
   * Enable TypeScript support.
   *
   * Passing an object to enable TypeScript Language Server support.
   *
   * @default auto-detect based on the dependencies
   */
  typescript?: boolean | OptionsTypeScriptWithTypes;

  /**
   * Enable JSX related rules.
   *
   * Currently only stylistic rules are included.
   *
   * @default true
   */
  jsx?: boolean;

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
    javascript?: ConfigItem['rules'];
    typescript?: ConfigItem['rules'];
    test?: ConfigItem['rules'];
    vue?: ConfigItem['rules'];
    jsonc?: ConfigItem['rules'];
    markdown?: ConfigItem['rules'];
    yaml?: ConfigItem['rules'];
    react?: ConfigItem['rules'];
  };
}

export interface OptionsOverrides {
  overrides?: ConfigItem['rules'];
}

export interface OptionsIsInEditor {
  isInEditor?: boolean;
}

export interface OptionsIgnores {
  enableGitignore?: boolean;
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

export interface OptionsTypeScriptParserOptions {
  /**
   * Additional parser options for TypeScript.
   */
  parserOptions?: Partial<ParserOptions>;
}

export interface OptionsTypeScriptWithTypes {
  /**
   * When this options is provided, type aware rules will be enabled.
   * @see https://typescript-eslint.io/linting/typed-linting/
   */
  tsconfigPath?: string;
}

export interface OptionsHasTypeScript {
  typescript?: boolean;
}
