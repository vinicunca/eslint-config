<script lang="ts" setup>
import { useNav } from '../composables/use-nav';
import LayoutBackdrop from './layout-backdrop.vue';

import LayoutHeader from '~~/domains/layouts/components/layout-header.vue';
import LayoutMobileNav from '~~/domains/layouts/components/layout-mobile-nav.vue';
import LayoutSidebar from '~~/domains/layouts/components/layout-sidebar.vue';
import LayoutOutlineDropdown from '~~/domains/layouts/components/layout-outline-dropdown.vue';
import LayoutAside from '~~/domains/layouts/components/layout-aside.vue';
import LayoutFooter from '~~/domains/layouts/components/layout-footer.vue';

const { isSidebarOpen, openSidebar, closeSidebar } = useNav();
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <LayoutHeader />

    <LayoutBackdrop
      :is-show="isSidebarOpen"
      @click="closeSidebar"
    />

    <LayoutMobileNav
      :is-open="isSidebarOpen"
      @open-sidebar="openSidebar"
    />

    <LayoutSidebar
      :is-open="isSidebarOpen"
    />

    <div
      class="w-full shrink-0 grow-1 2xl:(pl-[calc((100vw-var(--vd-layout-max-w))/2+var(--vd-sidebar-w))] pr-[calc((100vw-var(--vd-layout-max-w))/2)]) lg:(pl-$vd-sidebar-w pt-$vd-nav-height)"
    >
      <div class="w-full px-6 pb-24 pt-8 lg:(px-8 pb-0 pt-8) md:(px-8 pb-32 pt-12)">
        <!-- Container -->
        <div class="mx-auto w-full lg:(flex justify-center)">
          <!-- Aside -->
          <div class="relative order-2 hidden max-w-[256px] w-full grow-1 pl-8 xl:block">
            <!-- Aside Container -->
            <div class="fixed top-0 h-screen w-[224px] overflow-x-hidden overflow-y-auto pt-[calc(var(--vd-nav-height)+32px)]">
              <!-- Aside Content -->
              <div class="min-h-[calc(100vh-(var(--vd-nav-height)+32px))] flex flex-col pb-8">
                <div class="flex grow-1 flex-col">
                  <LayoutAside />
                </div>
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="relative mx-auto w-full lg:(order-1 min-w-[640px] px-8 pb-32)">
            <!-- Content Container -->
            <div class="mx-auto max-w-[688px]">
              <LayoutOutlineDropdown />

              <main class="prose">
                <slot />
              </main>

              <LayoutFooter />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
