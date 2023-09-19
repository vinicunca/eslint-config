<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core';

import LayoutMobileNavDropdown from './layout-mobile-nav-dropdown.vue';

defineProps<{
  isOpen: boolean;
}>();

defineEmits<{
  (event: 'openSidebar'): void;
}>();

const { y } = useWindowScroll();

const navHeight = ref(0);

onMounted(() => {
  navHeight.value = Number.parseInt(
    getComputedStyle(document.documentElement).getPropertyValue(
      '--vd-nav-height',
    ),
  );
});

const classes = computed(() => ({
  'border-t-transparent': y.value >= navHeight.value,
}));
</script>

<template>
  <div
    class="sticky left-0 top-0 z-10 w-full flex items-center justify-between border-y border-$vd-c-gutter bg-$vd-c-bg lg:hidden"
    :class="classes"
  >
    <button
      class="flex items-center px-6 py-3 text-xs font-medium leading-6 text-$vd-c-text-2 transition-color-200 md:(px-8 py-0) hover:text-$vd-c-text-1"
      :aria-expanded="isOpen"
      aria-controls="VDSidebarNav"
      @click="$emit('openSidebar')"
    >
      <i class="i-uil:align-left mr-2 h-4 w-4" />

      <span>
        Menu
      </span>
    </button>

    <LayoutMobileNavDropdown :nav-height="navHeight" />
  </div>
</template>

