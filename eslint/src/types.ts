import type {
  EslintCommentsRules,
  EslintRules,
  FlatESLintConfigItem,
  ImportRules,
  JsoncRules,
  MergeIntersection,
  NRules,
  Prefix,
  ReactHooksRules,
  ReactRules,
  RenamePrefix,
  RuleConfig,
  VitestRules,
  VueRules,
  YmlRules,
} from '@antfu/eslint-define-config';
import type { RuleOptions as JSDocRules } from '@eslint-types/jsdoc/types';
import type { RuleOptions as TypeScriptRules } from '@eslint-types/typescript-eslint/types';
import type { RuleOptions as UnicornRules } from '@eslint-types/unicorn/types';
import type { StylisticCustomizeOptions, UnprefixedRuleOptions as StylisticRules } from '@stylistic/eslint-plugin';
import type { ParserOptions } from '@typescript-eslint/parser';
import type { Rules as VinicuncaRules } from '@vinicunca/eslint-plugin-vinicunca'; ;

export type WrapRuleConfig<T extends { [key: string]: any }> = {
  [K in keyof T]: T[K] extends RuleConfig ? T[K] : RuleConfig<T[K]>
};

export type Awaitable<T> = Promise<T> | T;

export type Rules = WrapRuleConfig<
  MergeIntersection<
    RenamePrefix<TypeScriptRules, '@typescript-eslint/', 'ts/'> &
    RenamePrefix<VitestRules, 'vitest/', 'test/'> &
    RenamePrefix<YmlRules, 'yml/', 'yaml/'> &
    RenamePrefix<NRules, 'n/', 'node/'> &
    Prefix<StylisticRules, 'style/'> &
    Prefix<VinicuncaRules, 'vinicunca/'> &
    ReactHooksRules &
    ReactRules &
    JSDocRules &
    ImportRules &
    EslintRules &
    JsoncRules &
    VueRules &
    UnicornRules &
    EslintCommentsRules &
    {
      'test/no-only-tests': RuleConfig<[]>;
    }
  >
>;

export type FlatConfigItem = Omit<FlatESLintConfigItem<Rules, false>, 'plugins'> & {
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

export interface OptionsFiles {
  /**
   * Override the `files` option to provide custom globs.
   */
  files?: string[];
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

export interface OptionsHasTypeScript {
  typescript?: OptionsConfig['typescript'];
}

export interface OptionsTypeScriptWithTypes {
  /**
   * When this options is provided, type aware rules will be enabled.
   * @see https://typescript-eslint.io/linting/typed-linting/
   */
  tsconfigPath?: string[];
}

export interface OptionsStylistic {
  stylistic?: StylisticConfig | boolean;
}

export interface StylisticConfig extends Pick<StylisticCustomizeOptions, 'indent' | 'jsx' | 'quotes' | 'semi'> {
}

export interface OptionsOverrides {
  overrides?: FlatConfigItem['rules'];
}

export interface OptionsIsInEditor {
  isInEditor?: boolean;
}

export interface OptionsUnoCSS {
  /**
   * Enable attributify support.
   * @default true
   */
  attributify?: boolean;
  /**
   * Enable strict mode by throwing errors about blocklisted classes.
   * @default false
   */
  strict?: boolean;
}

export interface OptionsIgnores {
  enableGitignore?: boolean;
  items?: string[];
  replace?: boolean;
}

export interface OptionsConfig extends OptionsComponentExts {
  /**
   * Additional options for the ignore rules.
   */
  ignores?: OptionsIgnores;

  /**
   * Control to disable some rules in editors.
   * @default auto-detect based on the process.env
   */
  isInEditor?: boolean;

  /**
   * Enable JSONC support.
   *
   * @default true
   */
  jsonc?: boolean;

  /**
   * Enable JSX related rules.
   *
   * Currently only stylistic rules are included.
   *
   * @default true
   */
  jsx?: boolean;

  /**
   * Enable Markdown support.
   *
   * @default true
   */
  markdown?: boolean;

  /**
   * Provide overrides for rules for each integration.
   */
  overrides?: {
    javascript?: FlatConfigItem['rules'];
    jsonc?: FlatConfigItem['rules'];
    markdown?: FlatConfigItem['rules'];
    react?: FlatConfigItem['rules'];
    test?: FlatConfigItem['rules'];
    typescript?: FlatConfigItem['rules'];
    vue?: FlatConfigItem['rules'];
    yaml?: FlatConfigItem['rules'];
  };

  /**
   * Enable react support.
   * In This plugin, react is not supported as a first class citizen. 😎
   *
   * @default false
   */
  react?: boolean;

  /**
   * Enable stylistic rules.
   *
   * @default true
   */
  stylistic?: StylisticConfig | boolean;

  /**
   * Enable test support.
   *
   * @default true
   */
  test?: boolean;

  /**
   * Enable TypeScript support.
   *
   * Passing an object to enable TypeScript Language Server support.
   *
   * @default auto-detect based on the dependencies
   */
  typescript?: OptionsTypeScriptWithTypes & OptionsTypeScriptParserOptions & {
    enabled?: boolean;
  };

  /**
   * Enable unocss rules.
   *
   * Requires installing:
   * - `@unocss/eslint-plugin`
   *
   * @default false
   */
  unocss?: OptionsUnoCSS | boolean;

  /**
   * Enable Vue support.
   *
   * @default auto-detect based on the dependencies
   */
  vue?: boolean;

  /**
   * Enable YAML support.
   *
   * @default true
   */
  yaml?: boolean;
}

