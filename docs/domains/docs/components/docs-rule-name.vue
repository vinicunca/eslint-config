<script lang="ts" setup>
import { type RuleInfo } from '../types';
import { getPluginColor } from '../utils/plugin-colors';

const props = defineProps<{
  rule: RuleInfo;
}>();

const parsed = computed(() => {
  if (props.rule.plugin) {
    if (props.rule.name.startsWith(props.rule.plugin)) {
      return {
        scope: props.rule.plugin,
        name: props.rule.name.slice(props.rule.plugin.length).replace(/^\/+/, ''),
      };
    } else {
      return {
        scope: undefined,
        name: props.rule.name,
      };
    }
  }

  const parts = props.rule.name.split('/');

  if (parts.length === 1) {
    return {
      scope: undefined,
      name: parts[0],
    };
  }
  return {
    scope: parts[0],
    name: parts.slice(1).join('/'),
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
