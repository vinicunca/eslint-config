<script lang="ts" setup>
import { useNavItems } from '../composables/use-nav-items';

const { navItems, isActive } = useNavItems();
</script>

<template>
  <nav>
    <template
      v-for="navItem in navItems"
      :key="navItem.title"
    >
      <NuxtLink
        :to="navItem._path"
        class="block border-b border-$vd-c-divider py-3 text-sm font-500 transition-color-280 hover:text-$vd-c-brand-1"
        :class="[
          isActive(navItem) ? 'text-$vd-c-brand-1' : 'text-$vd-c-text-1',
        ]"
      >
        {{ navItem.title }}
      </NuxtLink>
    </template>
  </nav>
</template>
