<script lang="ts" setup>
import { PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'radix-vue';

import LayoutOutlineItem from './layout-outline-item.vue';

const props = defineProps<{
  navHeight: number;
}>();

const isOpen = ref(false);
const vh = ref(0);

const { toc } = useContent();

const tocLinks = computed(() => toc.value.links);

watch(isOpen, () => {
  vh.value = window.innerHeight + Math.min(window.scrollY - props.navHeight, 0);
});

function scrollToTop() {
  isOpen.value = false;
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}

const route = useRoute();
watch(() => route.hash, () => {
  isOpen.value = false;
});
</script>

<template>
  <PopoverRoot v-model:open="isOpen">
    <PopoverTrigger
      class="group relative block px-5 py-3 text-xs font-500 leading-6 transition-color-280 data-[state=closed]:text-$vd-c-text-2 data-[state=open]:text-$vd-c-text-1 hover:text-$vd-c-text-1"
      aria-label="On this page"
    >
      On this page

      <i
        class="i-radix-icons-chevron-right ml-[2px] h-[14px] w-[14px] transition-transform-280 group-data-[state=open]:rotate-90"
      />
    </PopoverTrigger>

    <PopoverPortal>
      <PopoverContent
        :style="{ '--vd-vh': `${vh}px` }"
        class="z-10 mr-4 max-h-[calc(var(--vd-vh,100vh)-86px)] w-[calc(var(--radix-popper-available-width)-32px)] overflow-x-hidden overflow-y-auto border border-$vd-c-divider rounded-2 bg-$vd-c-bg px-[10px] pb-4 pt-1 shadow-3 outline-none will-change-opacity,transform data-[side=bottom]:animate-slide-up-and-fade data-[side=left]:animate-slide-right-and-fade data-[side=right]:animate-slide-left-and-fade data-[side=top]:animate-slide-down-and-fade"
        :side-offset="16"
      >
        <div class="flex flex-col">
          <button
            class="mx-[13px] mb-[10px] block w-full border-b border-b-$vd-c-divider py-[6px] text-left text-size-[13px] font-medium text-$vd-c-brand-1"
            @click="scrollToTop"
          >
            Return to top
          </button>

          <LayoutOutlineItem :toc-links="tocLinks" />
        </div>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>

<style lang="postcss" scoped>
  :deep(.outline-link) {
    font-size: 14px;
    padding: 2px 0;
  }
</style>
