<script lang="ts" setup>
import { PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'radix-vue';

import { type RuleInfo } from '../types';

const props = defineProps<{
  rule: RuleInfo;
}>();

const levelIconClasses = computed(() => {
  switch (props.rule.level) {
    case 'error':
      return 'i-carbon-warning-filled text-green';
    case 'warn':
      return 'i-clarity:warning-standard-solid text-yellow';
    default:
      return 'i-carbon-error-outline text-gray';
  }
});
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger
      class="flex"
      aria-label="Rule level"
    >
      <i
        class="opacity-80"
        :class="[levelIconClasses]"
      />
    </PopoverTrigger>

    <PopoverPortal>
      <PopoverContent
        side="bottom"
        :side-offset="5"
      >
        xixixi
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
