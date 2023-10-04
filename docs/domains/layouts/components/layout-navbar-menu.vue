<script lang="ts" setup>
import { useNavItems } from '../composables/use-nav-items';

const { navItems, isActive } = useNavItems();
</script>

<template>
  <nav
    aria-labelledby="main-nav-aria-label"
    class="hidden md:flex"
  >
    <span
      id="main-nav-aria-label"
      class="sr-only"
    >
      Main Navigation
    </span>

    <NuxtLink
      v-for="navItem in navItems"
      :key="navItem._path"
      :to="navItem._path"
      class="flex items-center px-3 text-sm font-500 leading-$vd-nav-height transition-color-250 hover:text-$vd-c-brand-1"
      :class="[
        isActive(navItem) ? 'text-$vd-c-brand-1' : 'text-$vd-c-text-1',
      ]"
    >
      {{ navItem.title }}
    </NuxtLink>
  </nav>
</template>
