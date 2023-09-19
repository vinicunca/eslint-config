<script lang="ts" setup>
import CoreListGroup from './core-list-group.vue';
import CoreListItem from './core-list-item.vue';

import { type INavItem } from '~/typings';

defineProps<{
  items: INavItem[];
}>();
</script>

<template>
  <template
    v-for="item in items"
    :key="item.title"
  >
    <CoreListGroup
      v-if="item.children"
      :value="item.value"
    >
      <template #activator="{ props, isOpen }">
        <CoreListItem
          :item="item"
          v-bind="props"
          :is-open="isOpen"
        />
      </template>

      <CoreListChildren :items="item.children" />
    </CoreListGroup>

    <CoreListItem
      v-else
      :item="item"
    />
  </template>
</template>
