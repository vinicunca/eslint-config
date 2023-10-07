import { type FlatESLintConfigItem } from 'eslint-define-config';
import { type RuleMetaData } from '@typescript-eslint/utils/ts-eslint';

export interface ConfigItem extends Omit<FlatESLintConfigItem, 'plugins' | 'rules'> {
  name: string;
  plugins: Record<string, {
    url: string;
  }>;
  rules: RuleInfo[];
}

export interface RuleInfo extends RuleMetaData<any> {
  name: string;
  plugin: string;
  level: RuleLevel;
  options?: any[];
}

export type RuleLevel = 'off' | 'warn' | 'error';
