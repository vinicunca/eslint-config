import { type FlatESLintConfigItem } from 'eslint-define-config';
import { type RuleMetaData } from '@typescript-eslint/utils/ts-eslint';

export interface Payload {
  configs: FlatESLintConfigItem[];
  rules: Record<string, RuleInfo>;
  meta: PayloadMeta;
}

export interface ResolvedPayload extends Payload {
  ruleStateMap: Map<string, RuleConfigStates>;
}

export interface RuleInfo extends RuleMetaData<any> {
  name: string;
  plugin: string;
}

export interface PayloadMeta {
  wsPort: number;
  lastUpdate: number;
  configPath: string;
}

export interface RuleConfigState {
  name: string;
  configIndex: number;
  level: RuleLevel;
  options?: any[];
}

export type RuleConfigStates = RuleConfigState[];

export type RuleLevel = 'off' | 'warn' | 'error';
