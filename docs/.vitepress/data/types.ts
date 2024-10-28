export interface ConfigInfo {
  files?: Array<string>;
  name?: string;
  plugins?: Array<string>;
  rules: Array<RuleInfo>;
}

export interface RuleMeta {
  docs?: {
    description?: string;
    recommended?: any; // TODO: some rules has an object value for the recommended, so need to investigate more on this.
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
