<script lang="ts" setup>
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'radix-vue';

import { type NavItem } from '../data/nav';

defineProps<{
  navItem: NavItem;
}>();

const isOpen = ref(false);
</script>

<template>
  <CollapsibleRoot
    v-model:open="isOpen"
    class="border-b border-$vd-c-divider data-[state=open]:pb-2"
  >
    <CollapsibleTrigger
      class="group w-full flex items-center justify-between py-3 text-sm font-500"
    >
      <span
        class="transition-colors-280 hover:text-$vd-c-brand-1 group-data-[state=open]:text-$vd-c-brand-1"
      >{{ navItem.text }}</span>

      <i class="i-radix-icons:plus transition-transform-280 group-data-[state=open]:rotate-45deg" />
    </CollapsibleTrigger>

    <CollapsibleContent
      class="overflow-hidden data-[state=closed]:animate-collapsible-slide-up data-[state=open]:animate-collapsible-slide-down"
    >
      <NuxtLink
        v-for="item in navItem.items"
        :key="item.link"
        :to="item.link"
        class="ml-3 block text-size-sm leading-[32px] text-$vd-c-text-1 transition-colors-280 hover:text-$vd-c-brand-1"
      >
        {{ item.text }}
      </NuxtLink>
    </CollapsibleContent>
  </CollapsibleRoot>
</template>
