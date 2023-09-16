<script lang="ts" setup>
import LayoutNavDrawerGroup from './layout-nav-drawer-group.vue';
import { navItems } from '../data/nav';
</script>

<template>
  <nav>
    <template
      v-for="navItem in navItems"
      :key="navItem.title"
    >
      <NuxtLink
        v-if="navItem._path"
        :to="navItem._path"
        class="block border-b border-$vd-c-divider py-3 text-sm font-500 text-$vd-c-text-1 transition-color-280 hover:text-$vd-c-brand-1"
      >
        {{ navItem.title }}
      </NuxtLink>

      <LayoutNavDrawerGroup
        v-else
        :nav-item="navItem"
      />
    </template>
  </nav>
</template>
