<script lang="ts" setup>
import { useScrollLock } from '@vueuse/core';
import { isBrowser } from '@vinicunca/perkakas';

import LayoutSidebarTree from './layout-sidebar-tree.vue';

const props = defineProps<{
  isOpen: boolean;
}>();

// a11y: focus Nav element when menu has opened
const navEl = ref<HTMLElement | null>(null);
const isLocked = useScrollLock(isBrowser ? document.body : null);

watch(
  [() => props.isOpen, navEl],
  () => {
    if (props.isOpen) {
      isLocked.value = true;
      navEl.value?.focus();
    } else {
      isLocked.value = false;
    };
  },
  { immediate: true, flush: 'post' },
);
</script>

<template>
  <aside
    ref="navEl"
    class="VDSidebar bg-$vd-sidebar-bg-color z-50 fixed inset-y-0 left-0 max-w-[320px] w-[calc(100vw-64px)] overflow-x-hidden overflow-y-auto overscroll-contain  px-8 py-8 shadow-3 dark:shadow-1 lg:(z-1 max-w-full w-$vd-sidebar-w translate-x-0 pt-$vd-nav-height opacity-100 shadow-none) 2xl:(w-[calc((100%-(var(--vd-layout-max-w)-64px))/2+var(--vd-sidebar-w)-32px)] pl-[max(32px,calc((100%-(var(--vd-layout-max-w)-64px))/2))])"
    :class="[
      {
        'open opacity-100 translate-x-0': isOpen,
        'opacity-0 -translate-x-full': !isOpen,
      },
    ]"
    @click.stop
  >
    <!-- Curtain -->
    <div class="sticky left-0 z-1 mt-[calc(var(--vd-nav-height)*-1)] h-$vd-nav-height bg-$vd-sidebar-bg-color -top-16 -mx-8" />
    <nav
      id="VDSidebarNav"
      aria-labelledby="sidebar-aria-label"
      tabindex="-1"
    >
      <span
        id="sidebar-aria-label"
        class="sr-only"
      >
        Sidebar Navigation
      </span>

      <LayoutSidebarTree />
    </nav>
  </aside>
</template>

<style scoped>
.VDSidebar {
  transition: opacity 0.5s, transform 0.25s ease;
}

.VDSidebar.open {
  transition: opacity 0.25s,
              transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}
</style>
