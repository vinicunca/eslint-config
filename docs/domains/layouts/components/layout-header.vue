<script lang="ts" setup>
import { useNav } from '../composables/use-nav';
import LayoutNavbar from './layout-navbar.vue';
import LayoutNavDrawer from './layout-nav-drawer.vue';

const { isDrawerOpen, toggleDrawer } = useNav();
</script>

<template>
  <header class="pointer-events-none relative left-0 top-0 z-20 w-full lg:fixed">
    <LayoutNavbar
      :is-drawer-open="isDrawerOpen"
      @toggle-drawer="toggleDrawer"
    />

    <LayoutNavDrawer :is-open="isDrawerOpen" />
  </header>
</template>
