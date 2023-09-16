<script setup lang="ts">
import { type PropType } from 'vue';

const props = defineProps({
  links: {
    type: Array as PropType<any>,
    default: () => [],
  },
  level: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: null,
  },
  parent: {
    type: Object as PropType<any>,
    default: null,
  },
});

const route = useRoute();

const collapsedMap = useState(`vin-docs-aside-collapse-map-${props.parent?._path || '/'}`, () => {
  if (props.level === 0) {
    return {};
  }

  return (props.links as any [])
    .filter((link) => !!link.children)
    .reduce((map, link) => {
      map[link._path] = true;
      return map;
    }, {});
});

function isActive(link: any) {
  return route.path === link._path;
};

function isCollapsed(link: any) {
  if (link.children) {
    // Directory has been toggled manually, use its state
    if (typeof collapsedMap.value[link._path] !== 'undefined') {
      return collapsedMap.value[link._path];
    }

    // Check if aside.collapsed has been set in YML
    if ([true, false].includes(link?.aside?.collapsed)) {
      return link.aside.collapsed;
    }

    // Return value grabbed from the link
    if (link?.collapsed) {
      return link?.collapsed;
    }
  }

  return false;
};

function toggleCollapse(link: any) {
  return collapsedMap.value[link._path] = !isCollapsed(link);
};
</script>

<template>
  <ul>
    <li
      v-for="link in links"
      :key="link._path"
      :class="[
        {
          'text-$-vd-c-brand': isActive(link),
          'pt-3 next:(border-t border-$vd-c-divider)': level === 0,
          'pb-6': level === 0 && isCollapsed(link),
          'pb-3': !isCollapsed(link),
        }]"
    >
      <button
        v-if="link.children"
        class="group relative w-full flex"
        @click="toggleCollapse(link)"
      >
        <span class="flex grow-1 py-1 text-sm font-700 leading-6 text-$vd-c-text-1">
          <i
            v-if="link?.navigation?.icon || link.icon"
            :class="link?.navigation?.icon || link.icon"
          />

          <span>{{ link?.navigation?.title || link.title || link._path }}</span>
        </span>

        <span class="h-8 w-8 flex shrink-0 items-center justify-center text-$vd-c-text-3 transition-color-280 -mr-[7px] group-hover-text-$vd-c-text-2">
          <i
            :class="isCollapsed(link) ? 'i-lucide:chevrons-up-down' : 'i-lucide:chevrons-down-up'"
            class="h-[18px] w-[18px]"
          />
        </span>
      </button>

      <NuxtLink
        v-else
        :to="link.redirect ? link.redirect : link._path"
        :exact="link.exact"
        class="flex grow-1 py-1 text-sm font-500 leading-6 transition-color-280 hover:text-$vd-c-brand"
        :class="[
          isActive(link) ? 'text-$vd-c-brand' : 'text-$vd-c-text-2',
        ]"
      >
        <span>
          <i
            v-if="link?.navigation?.icon || link.icon"
            :class="link?.navigation?.icon || link.icon"
          />

          <span>{{ link?.navigation?.title || link.title || link._path }}</span>
        </span>
      </NuxtLink>

      <LayoutSidebarTree
        v-show="!isCollapsed(link)"
        v-if="link.children?.length && (max === null || level + 1 < max)"
        :links="link.children"
        :level="level + 1"
        :parent="link"
        :max="max"
        class="recursive"
      />
    </li>
  </ul>
</template>
