<script lang="ts" setup>
import { navItems } from '../data/nav';

// const { navigation } = useContent();

// const navItems = computed(() => navigation.value.filter((item: any) => item.navHeader).map((item: any) => {
//   const leaf = getLeaf(item);

//   return ({
//     ...item,
//     _path: leaf._path,
//   });
// }));

// function getLeaf(item: any) {
//   if (!item.children) {
//     return item;
//   }

//   return getLeaf(item.children[0]);
// }

const route = useRoute();

function isActive(link: any) {
  return route.fullPath.startsWith(link._path);
}
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
