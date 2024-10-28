<script lang="ts" setup>
import { PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'radix-vue';
import { computed } from 'vue';

import type { RuleInfo } from '../data/types';

const props = defineProps<{
  rule: RuleInfo;
}>();

const levelClasses = computed(() => {
  switch (props.rule.level) {
    case 'error':
      return {
        color: 'text-green',
        icon: 'i-carbon:warning-filled ',
      };
    case 'warn':
      return {
        color: 'text-yellow',
        icon: 'i-clarity:warning-standard-solid ',
      };
    default:
      return {
        color: 'text-gray',
        icon: 'i-carbon:error-outline ',
      };
  }
});

// remove so we use internal links
const docsUrl = computed(() =>
  props.rule.meta?.docs?.url?.replace('https://eslint.vinicunca.dev', ''),
);
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger
      class="flex"
      aria-label="Rule level"
    >
      <i
        class="opacity-80"
        :class="[levelClasses.icon, levelClasses.color]"
      />
    </PopoverTrigger>

    <PopoverPortal>
      <PopoverContent
        :side-offset="4"
        class="shadow-3 bg-$vp-c-bg border-base border rounded-1 data-[state=open]:animate-scale-in will-change-transform,opacity max-h-[calc(var(--radix-popover-content-available-height)-16px)] w-[calc(var(--radix-popper-available-width)-32px)] sm:w-auto ml-4 overflow-auto z-20"
      >
        <div class="p-3 flex items-center justify-center">
          <a
            class="border border-base rounded-1 flex gap-2 items-center px2 py1 text-sm opacity-75 hover:opacity-100 hover:bg-$vp-c-gray-soft transition-colors-280"
            :href="docsUrl"
            target="_blank"
            title="Documentations"
          >
            Documentations

            <i class="i-carbon:launch" />
          </a>
        </div>

        <div class="flex flex-col gap-2 p-4 border-t border-base">
          <div class="flex items-center gap-1">
            <i
              :class="[levelClasses.icon, levelClasses.color]"
            />

            <span class="ml-1 ">
              Set to
            </span>

            <span
              class="font-mono"
              :class="[levelClasses.color]"
            >
              {{ rule.level }}
            </span>
          </div>

          <template v-if="rule.options?.length">
            <div class="flex gap-2 items-center">
              <div class="i-carbon:settings my-1 flex-none" />

              <span>Rule options</span>
            </div>

            <pre class="rounded p-2 text-sm bg-$vp-code-bg">{{ rule.options }}</pre>
          </template>
        </div>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
