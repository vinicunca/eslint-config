<script setup lang="ts">
import { sleep } from '@vinicunca/perkakas';

import { type INavItem } from '~/typings';
import CoreList from '~/domains/core/components/list/core-list.vue';

const { navigation } = useContent();

const opened = ref<string[]>([]);

const navItems = computed(() => (navigation.value as INavItem[]).map((navItem) => {
  return {
    title: navItem.title,
    value: navItem.title,
    icon: navItem.icon,
    children: navItem.children,
    _path: navItem.children ? undefined : navItem._path,
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
