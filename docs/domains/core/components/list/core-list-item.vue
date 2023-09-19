<script lang="ts" setup>
import { useNestedItem } from './use-nested';

import { type INavItem } from '~/typings';

const props = defineProps<{
  item: INavItem;
  isOpen?: boolean;
}>();

const emit = defineEmits<{
  (event: 'click', evt: Event): void;
}>();

const id = computed(() => props.item.value === undefined ? props.item._path : props.item.value);
const { isGroupActivator, root, parent } = useNestedItem(id, false);

const Tag = computed(() => {
  if (props.item._path) {
    return resolveComponent('NuxtLink');
  }

  return 'div';
});

const link = props.item._path
  ? useLink({
    to: id.value!,
  })
  : undefined;

watch(() => link?.isActive.value, (val) => {
  if (val && parent.value != null) {
    root.open(parent.value, true);
  }
}, { immediate: true });

function onClick(event: MouseEvent) {
  emit('click', event);

  if (isGroupActivator) {
    return;
  };
}

function onKeyDown(event: KeyboardEvent) {
  if ((event.key === 'Enter' || event.key === ' ') && isGroupActivator) {
    onClick(event as any as MouseEvent);
  }
}
</script>

<template>
  <component
    :is="Tag"
    class="pl-[calc(16px+var(--indent-padding))] cursor-pointer text-sm font-500 leading-6 group min-h-[32px] flex items-center outline-none max-w-full mb-1 px-2 py-1 relative rounded-1 after:(content-empty absolute inset-0 border-2 border-current rounded-inherit opacity-0 transition-opacity pointer-events-none) focus-visible:after:opacity-16
    "
    :tabindex="-2"
    :to="item._path"
    active-class="router-link-active text-$vd-c-brand-1"
    @click="onClick"
    @keydown="onKeyDown"
  >
    <!-- overlay -->
    <div
      class="group-hover:opacity-16 group-focus-visible:opacity-16 absolute inset-0 rounded-inherit pointer-events-none transition-opacity-280 bg-current opacity-0"
      :class="{
        'opacity-10': link?.isActive.value,
      }"
    />

    <i
      v-if="item.icon"
      class="mr-2 text-size-base"
      :class="item.icon"
    />

    <div
      class="truncate"
    >
      {{ item.title }}
    </div>

    <i
      v-if="isGroupActivator"
      class="i-radix-icons:chevron-down ml-auto text-size-base transition-transform-280"
      :class="{
        '-rotate-180': isOpen,
      }"
    />
  </component>
</template>

