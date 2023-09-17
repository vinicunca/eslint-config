<script lang="ts" setup>
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'radix-vue';

defineProps<{
  link: Record<string, any>;
  isCollapsed: boolean;
}>();

const emit = defineEmits<{
  (event: 'toggle'): void;
}>();

function onToggle() {
  emit('toggle');
}
</script>

<template>
  <CollapsibleRoot
    :open="!isCollapsed"
    @update:open="onToggle"
  >
    <CollapsibleTrigger
      class="group w-full flex items-center py-4 sticky top-0 text-sm font-700 leading-6 text-$vd-c-text-1 bg-$vd-sidebar-bg-color"
    >
      <i
        v-if="link.icon"
        class="mr-2 text-size-base"
        :class="link.icon"
      />

      <span>
        {{ link.title }}
      </span>

      <i class="i-radix-icons:chevron-right transition-transform-280 group-data-[state=open]:rotate-90 ml-auto" />
    </CollapsibleTrigger>

    <CollapsibleContent
      class="data-[state=closed]:animate-collapsible-slide-up data-[state=open]:animate-collapsible-slide-down overflow-hidden"
    >
      <ul class="">
        <li
          v-for="child in link.children"
          :key="child._path"
        >
          <NuxtLink
            :to="child._path"
            class="inline-flex items-center py-1 text-sm font-500 leading-6 transition-color-280 hover:text-$vd-c-brand-1"
            active-class="text-$vd-c-brand-1"
          >
            <i
              v-if="child._path.endsWith('plugins')"
              class="i-bi:plugin mr-2 text-size-base"
            />

            {{ child.title }}
          </NuxtLink>
        </li>
      </ul>
    </CollapsibleContent>
  </CollapsibleRoot>
</template>
