<script lang="ts" setup>
import { computed } from 'vue';

import type { RuleInfo } from '../data/types';

import { usePluginColor } from '../utils/plugin-colors';

const props = defineProps<{
  rule: RuleInfo;
}>();

const { getPluginColor } = usePluginColor();

const parsed = computed(() => {
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
  <span class="flex items-center font-mono text-size-[0.875em] px-[6px] py-[3px] bg-$vp-code-bg rounded-1 leading-[17.5px] text-$vp-code-color">
    <span
      v-if="parsed.scope"
      :style="{ color: getPluginColor(parsed.scope) }"
    >
      {{ parsed.scope }}/
    </span>

    <span class="opacity-75">{{ parsed.name }}</span>
  </span>
</template>
