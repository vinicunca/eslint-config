<script lang="ts" setup>
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'radix-vue';

import LayoutOutlineItem from './layout-outline-item.vue';

const isOpen = ref(false);

const { toc } = useContent();

const tocLinks = computed(() => toc.value.links);
</script>

<template>
  <div class="mb-10 hidden ~lg:block">
    <CollapsibleRoot v-model:open="isOpen">
      <CollapsibleTrigger
        class="group block border border-$vd-c-border rounded-2 px-3 py-1 text-sm font-500 leading-6 transition-colors-280 hover:text-$vd-c-brand-1"
      >
        <span
          class="group-data-[state=open]:text-$vd-c-brand-1"
        >
          On this page
        </span>

        <i class="i-radix-icons:chevron-right transition-transform-280 group-data-[state=open]:rotate-90" />
      </CollapsibleTrigger>

      <CollapsibleContent
        class="mt-3 overflow-hidden border-l border-$vd-c-divider text-size-[13px] data-[state=closed]:animate-collapsible-slide-up data-[state=open]:animate-collapsible-slide-down"
      >
        <LayoutOutlineItem :toc-links="tocLinks" />
      </CollapsibleContent>
    </CollapsibleRoot>
  </div>
</template>
