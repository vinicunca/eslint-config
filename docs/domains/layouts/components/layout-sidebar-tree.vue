<script setup lang="ts">
import { type PropType } from 'vue';

import LayoutSidebarTreeParent from './layout-sidebar-tree-parent.vue';

const props = defineProps({
  links: {
    type: Array as PropType<any>,
    default: () => [],
  },
});

const route = useRoute();

const collapsedMap = useState('vin-docs-aside-collapse-map', () => {
  return (props.links as any [])
    .filter((link) => !!link.children)
    .reduce((map, link) => {
      map[link._path] = !route.path.startsWith(link._path);
      return map;
    }, {});
});

function isCollapsed(link: any) {
  return collapsedMap.value[link._path];
};

function toggleCollapse(link: any) {
  return collapsedMap.value[link._path] = !isCollapsed(link);
};
</script>

<template>
  <ul class="h-full flex flex-col">
    <li
      v-for="link in links"
      :key="link._path"
      class="next:(border-t border-$vd-c-divider)"
    >
      <LayoutSidebarTreeParent
        v-if="link.children"
        :link="link"
        :is-collapsed="isCollapsed(link)"
        @toggle="toggleCollapse(link)"
      />

      <NuxtLink
        v-else
        :to="link._path"
        class="flex py-4 text-sm font-500 leading-6 transition-color-280 hover:text-$vd-c-brand-1"
        active-class="text-$vd-c-brand-1"
      >
        {{ link?.navigation?.title || link.title || link._path }}
      </NuxtLink>
    </li>
  </ul>
</template>
