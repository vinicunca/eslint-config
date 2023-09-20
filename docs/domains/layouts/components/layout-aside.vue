<script lang="ts" setup>
import { useActiveAnchor } from '../composables/use-active-anchor';
import LayoutOutlineItem from './layout-outline-item.vue';

const { toc } = useContent();
const tocLinks = computed(() => toc.value?.links ?? []);

const container = ref();
const marker = ref();

useActiveAnchor(container, marker);
</script>

<template>
  <div
    ref="container"
  >
    <div
      v-if="toc && toc.links.length > 0"
      class="relative border-l border-$vd-c-divider pl-4 text-size-[13px] font-500"
    >
      <div
        ref="marker"
        class="outline-marker absolute top-8 z-0 h-[18px] w-[1px] bg-$vd-c-brand-1 opacity-0 -left-[1px]"
      />

      <div class="font-600 leading-7 tracking-[0.4px]">
        On this page
      </div>

      <nav aria-labelledby="doc-outline-aria-label">
        <span
          id="doc-outline-aria-label"
          class="sr-only"
        >
          Table of Contents for current page
        </span>

        <LayoutOutlineItem
          root
          :toc-links="tocLinks"
        />
      </nav>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  .outline-marker {
    transition: top 0.25s cubic-bezier(0, 1, 0.5, 1), background-color 0.5s, opacity 0.25s;
  }
</style>
