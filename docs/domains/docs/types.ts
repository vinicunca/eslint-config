import type { FlatESLintConfigItem } from '@antfu/eslint-define-config';
import type { RuleMetaData } from '@typescript-eslint/utils/ts-eslint';

export interface FlatConfigItem extends Omit<FlatESLintConfigItem, 'plugins' | 'rules'> {
  name: string;
  plugins: Record<string, {
    url: string;
  }>;
  rules: RuleInfo[];
}

export interface RuleInfo extends RuleMetaData<any> {
  level: RuleLevel;
  name: string;
  options?: any[];
  plugin: string;
}

export type RuleLevel = 'error' | 'off' | 'warn';
