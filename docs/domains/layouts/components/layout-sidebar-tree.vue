<script setup lang="ts">
import { groupBy, sleep } from '@vinicunca/perkakas';

import { type INavItem } from '~/typings';
import CoreList from '~/domains/core/components/list/core-list.vue';

const { navigation } = useContent();

const opened = ref<string[]>([]);

const navItems = computed(() => (navigation.value as INavItem[]).map((item) => {
  const navItem = item._path === '/basic' ? groupBasicRules(item) : item;

  return {
    title: navItem.title,
    value: item.title,
    icon: navItem.icon,
    children: navItem.children,
    _path: navItem.children ? undefined : navItem._path,
  };
}));

function groupBasicRules(navItem: INavItem) {
  const groupByTypes = groupBy(navItem.children!, (child) => child.type);

  const navChildren: INavItem[] = [];

  Object.entries(groupByTypes).forEach(([title, children]) => {
    if (title === 'Possible Problems') {
      navChildren[0] = { title, children };
    } else if (title === 'Suggestions') {
      navChildren[1] = { title, children };
    } else {
      navChildren[2] = { title, children };
    }
  });

  return {
    ...navItem,
    children: navChildren,
  };
}

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
