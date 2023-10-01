import { $fetch } from 'ofetch';
import { type RuleConfig } from 'eslint-define-config';
import { type Payload, type ResolvedPayload, type RuleConfigStates, type RuleInfo } from '../types';

const data = ref<Payload>({
  rules: {},
  configs: [],
  meta: {} as any,
});

const _promises = $fetch<Payload>('/api/get')
  .then((payload) => {
    data.value = payload;

    // Connect to WebSocket, listen for config changes
    const ws = new WebSocket(`ws://${location.hostname}:${payload.meta.wsPort}`);
    ws.addEventListener('message', async (event) => {
      const payload = JSON.parse(event.data);
      if (payload.type === 'config-change') {
        data.value = await $fetch<Payload>('/api/get');
      };
    });
    ws.addEventListener('open', () => {
      console.log('WebSocket connected');
    });
    ws.addEventListener('close', () => {
      console.log('WebSocket closed');
    });
    ws.addEventListener('error', (error) => {
      console.error('WebSocket error', error);
    });

    return payload;
  });

export function ensureDataFetch() {
  return _promises;
}

export const payload = computed(() => resolvePayload(data.value!));

export function getRule(name: string): RuleInfo | undefined {
  return payload.value.rules[name];
}

export function getRuleStates(name: string): RuleConfigStates | undefined {
  return payload.value.ruleStateMap.get(name);
}

export function resolvePayload(payload: Payload): ResolvedPayload {
  const ruleStateMap = new Map<string, RuleConfigStates>();
  payload.configs.forEach((config, index) => {
    if (!config.rules) {
      return;
    };
    Object.entries(config.rules).forEach(([name, raw]) => {
      const value = getRuleLevel(raw);
      if (!value) {
        return;
      };
      const options = getRuleOptions(raw);
      if (!ruleStateMap.has(name)) {
        ruleStateMap.set(name, []);
      };
      ruleStateMap.get(name)!.push({
        name,
        configIndex: index,
        level: value,
        options,
      });
    });
  });

  return {
    ...payload,
    ruleStateMap,
  };
}

export function getRuleLevel(level: RuleConfig | undefined) {
  const first = Array.isArray(level) ? level[0] : level;
  switch (first) {
    case 0:
    case 'off':
      return 'off';
    case 1:
    case 'warn':
      return 'warn';
    case 2:
    case 'error':
      return 'error';
  }
}

export function getRuleOptions<T extends any[]>(level: RuleConfig<T> | undefined): T | undefined {
  if (Array.isArray(level)) {
    return level.slice(1) as T;
  };
}
