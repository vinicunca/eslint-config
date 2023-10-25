<script lang="ts" setup>
import type { RuleInfo } from '../types';

import { getPluginColor } from '../utils/plugin-colors';

const props = defineProps<{
  rule: RuleInfo;
}>();

const parsed = computed(() => {
  if (props.rule.plugin) {
    if (props.rule.name.startsWith(props.rule.plugin)) {
      return {
        name: props.rule.name.slice(props.rule.plugin.length).replace(/^\/+/, ''),
        scope: props.rule.plugin,
      };
    } else {
      return {
        name: props.rule.name,
        scope: undefined,
      };
    }
  }

  const parts = props.rule.name.split('/');

  if (parts.length === 1) {
    return {
      name: parts[0],
      scope: undefined,
    };
  }
  return {
    name: parts.slice(1).join('/'),
    scope: parts[0],
  };
});
</script>

<template>
  <span class="flex items-center font-mono text-size-[0.875em] px-[6px] py-[3px] bg-$vd-code-bg rounded-1 leading-[17.5px] text-$vd-code-color">
    <span
      v-if="parsed.scope"
      :style="{ color: getPluginColor(parsed.scope) }"
    >{{ parsed.scope }}/</span>
    <span class="opacity-75">{{ parsed.name }}</span>
  </span>
</template>
