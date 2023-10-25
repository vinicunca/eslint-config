<script setup lang="ts">
import type { INavItem } from '~~/typings';

import { sleep } from '@vinicunca/perkakas';
import CoreList from '~~/domains/core/components/list/core-list.vue';

const { navigation } = useContent();

const opened = ref<string[]>([]);

const navItems = computed(() => (navigation.value as INavItem[]).map((navItem) => {
  return {
    _path: navItem.children ? undefined : navItem._path,
    children: navItem.children,
    icon: navItem.icon,
    title: navItem.title,
    value: navItem.title,
  };
}));

onMounted(async () => {
  await sleep(1000);

  const element = document.querySelector('#app-sidebar .router-link-active');

  if (!element) {
    return;
  };

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'center',
  });
});
</script>

<template>
  <CoreList
    id="app-sidebar"
    v-model:opened="opened"
    class="mt-3"
    :nav-items="navItems"
  />
</template>
