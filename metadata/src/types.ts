import type { RuleLevel } from '@antfu/eslint-define-config';
import type { Rule } from 'eslint';

export interface ConfigInfo {
  files?: string[];
  name?: string;
  plugins?: string[];
  rules: RuleInfo[];
}

export interface RuleInfo {
  level: RuleLevel;
  meta?: Rule.RuleModule['meta'];
  name: string;
  options: Array<object>;
}
