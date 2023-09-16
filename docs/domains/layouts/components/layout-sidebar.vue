<script lang="ts" setup>
import { useScrollLock } from '@vueuse/core';
import { isBrowser } from '@vinicunca/perkakas';

import LayoutSidebarTree from './layout-sidebar-tree.vue';

const props = defineProps<{
  isOpen: boolean;
}>();

// const { treeNav } = useVinDocs();

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

const { navPageFromPath } = useContentHelpers();
const { navigation, page } = useContent();
const route = useRoute();

/**
   * Current aside treeNav.
  */
const treeNav = computed(() => {
  if (route.path === '/') {
    return [];
  }

  let nav = navigation.value || [];

  // No navigation found; try to resolve page url
  if (nav.length === 0) {
    nav = navPageFromPath(page.value?._path || '/', navigation.value || []);

    if (!nav) {
      return [];
    }

    if (!Array.isArray(nav)) {
      nav = [nav];
    }
  }

  console.log(`🚀 ~ treeNav ~ nav:`, nav);
  return nav;
});
</script>

<template>
  <aside
    ref="navEl"
    class="VDSidebar fixed inset-y-0 left-0 z-50 max-w-[320px] w-[calc(100vw-64px)] overflow-x-hidden overflow-y-auto overscroll-contain bg-$vd-sidebar-bg-color px-8 pb-24 pt-8 opacity-0 shadow-3 lg:(z-1 max-w-full w-$vd-sidebar-w translate-x-0 bg-$vd-sidebar-bg-color pb-32 pt-$vd-nav-height opacity-100 shadow-none) 2xl:(w-[calc((100%-(var(--vd-layout-max-w)-64px))/2+var(--vd-sidebar-w)-32px)] pl-[max(32px,calc((100%-(var(--vd-layout-max-w)-64px))/2))]) -translate-x-full dark:shadow-1"
    :class="[
      {
        'open opacity-100 translate-x-0': isOpen,
      },
    ]"
    @click.stop
  >
    <!-- Curtain -->
    <div class="sticky left-0 z-1 mt-[calc(var(--vd-nav-height)*-1)] h-$vd-nav-height bg-$vd-sidebar-bg-color -top-16 -mx-8" />
    <nav
      id="VDSidebarNav"
      class="nav"
      aria-labelledby="sidebar-aria-label"
      tabindex="-1"
    >
      <span
        id="sidebar-aria-label"
        class="sr-only"
      >
        Sidebar Navigation
      </span>

      <LayoutSidebarTree :links="treeNav" />
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
