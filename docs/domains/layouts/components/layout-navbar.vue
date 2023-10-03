<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core';

import LayoutNavbarMenu from './layout-navbar-menu.vue';
import LayoutSwitchTheme from './layout-switch-theme.vue';
import LayoutHamburger from './layout-hamburger.vue';
import LayoutNavbarSearch from './layout-navbar-search.vue';

defineProps<{
  isDrawerOpen: boolean;
}>();

defineEmits<{
  (event: 'toggleDrawer'): void;
}>();

const { y } = useWindowScroll();

const yValue = ref(0);

// There's a weird behavior when the user is on a middle of a page and refresh the page the class won't apply
onMounted(() => {
  yValue.value = y.value;
});

watch(y, (value) => {
  yValue.value = value;
});
</script>

<template>
  <div
    class="pointer-events-none relative h-$vd-nav-height whitespace-nowrap border-b border-b-transparent pl-6 pr-2 all-pointer-events-auto lg:p-0 md:(px-8 py-0)"
  >
    <!-- Container -->
    <div
      class="pointer-events-none mx-auto h-$vd-nav-height max-w-[calc(var(--vd-layout-max-w)-64px)] flex justify-between lg:max-w-full"
    >
      <!-- Title -->
      <div
        class="h-[calc(var(--vd-nav-height)-1px)] shrink-0 lg:(absolute left-0 top-0 z-2 h-$vd-nav-height w-$vd-sidebar-w bg-transparent px-8) xl:(w-[calc((100%-(var(--vd-layout-max-w)-64px))/2+var(--vd-sidebar-w)-32px)] pl-[max(32px,calc((100%-(var(--vd-layout-max-w)-64px))/2))])"
      >
        <NuxtLink
          to="/"
          aria-label="Home"
          class="h-$vd-nav-height w-full flex items-center border-b border-transparent text-base font-600 lg:(border-$vd-c-divider)"
        >
          ESLint Vinicunca
        </NuxtLink>
      </div>

      <!-- Content -->
      <div class="grow-1 lg:(relative z-1 pl-$vd-sidebar-w pr-8) xl:(pl-[calc((100vw-var(--vd-layout-max-w))/2+var(--vd-sidebar-w))] pr-[calc((100vw-var(--vd-layout-max-w))/2+32px)])">
        <div
          class="h-$vd-nav-height flex items-center justify-end grid-gap-x-2"
          :class="[
            {
              'lg:bg-$vd-nav-bg-color': yValue > 0,
            },
          ]"
        >
          <LayoutNavbarSearch />

          <LayoutNavbarMenu />

          <div class="hidden before:(ml-2 mr-4 h-6 w-[1px] bg-$vd-c-divider content-empty) md:(flex items-center)">
            <LayoutSwitchTheme />
          </div>

          <div class="hidden -ml-2 before:(ml-4 mr-2 h-6 w-[1px] bg-$vd-c-divider content-empty) md:(flex items-center)">
            <div class="flex items-center">
              <a
                href="https://github.com/vinicunca/eslint-config"
                target="_blank"
                rel="noopener noreferrer"
                class="h-9 w-9 flex items-center justify-center text-$vd-c-text-2 transition-color-500 hover:(text-$vd-c-text-1 transition-color-250)"
              >
                <i class="i-simple-icons:github h-5 w-5" />
              </a>
            </div>
          </div>

          <LayoutHamburger
            :active="isDrawerOpen"
            @click="$emit('toggleDrawer')"
          />
        </div>
      </div>
    </div>
  </div>
</template>
