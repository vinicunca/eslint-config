export interface ConfigInfo {
  files?: Array<string>;
  name?: string;
  plugins?: Array<string>;
  rules: Array<RuleInfo>;
}

export interface RuleMeta {
  docs?: {
    description?: string;
    recommended?: 'recommended' | 'strict' | 'stylistic' | 'warn' | Array<string> | boolean | null;
    url?: string;
  };
  fixable?: 'code' | 'whitespace' | boolean | null;
}

export interface RuleInfo {
  level: 'error' | 'off' | 'warn' | 0 | 1 | 2;
  meta?: RuleMeta;
  name: string;
  options: Array<any>;
}
