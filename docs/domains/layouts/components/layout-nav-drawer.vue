<script lang="ts" setup>
import { isBrowser } from '@vinicunca/perkakas';
import { useScrollLock } from '@vueuse/core';

import LayoutSwitchTheme from './layout-switch-theme.vue';
import LayoutNavDrawerMenu from './layout-nav-drawer-menu.vue';

defineProps<{
  isOpen: boolean;
}>();

const drawerRef = ref<HTMLElement | null>(null);
const isLocked = useScrollLock(isBrowser ? document.body : null);
</script>

<template>
  <Transition
    enter-active-class="transition-opacity,transform-250"
    leave-active-class="transition-opacity,transform-250"
    enter-from-class="opacity-0 -translate-y-2"
    leave-to-class="opacity-0 -translate-y-2"
    @enter="isLocked = true"
    @after-leave="isLocked = false"
  >
    <div
      v-if="isOpen"
      ref="drawerRef"
      class="pointer-events-auto fixed bottom-0 left-0 right-0 top-[calc(var(--vd-nav-height)+1px)] w-full overflow-y-auto bg-$vd-c-bg px-8 md:hidden"
    >
      <div class="mx-auto max-w-[288px] pb-24 pt-6">
        <LayoutNavDrawerMenu />

        <div class="mt-6 flex items-center justify-between rounded-2 bg-$vd-c-bg-soft px-4 py-3">
          <div class="text-size-xs font-500 leading-[24px] text-$vd-c-text-2">
            Appearance
          </div>

          <LayoutSwitchTheme />
        </div>

        <div class="mt-4 flex justify-center">
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
    </div>
  </Transition>
</template>
