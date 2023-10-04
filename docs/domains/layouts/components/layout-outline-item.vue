<script lang="ts" setup>
defineProps<{
  tocLinks: any[];
  root?: boolean;
}>();

function onClick({ target: el }: Event) {
  const id = (el as HTMLAnchorElement).href!.split('#')[1];
  const heading = document.getElementById(decodeURIComponent(id));
  heading?.focus();
}
</script>

<template>
  <ul
    :class="[
      root ? 'relative z-1' : 'pl-3',
    ]"
  >
    <li
      v-for="{ id, text, children } in tocLinks"
      :key="id"
    >
      <NuxtLink
        class="outline-link block truncate font-medium leading-7 text-$vd-c-text-2 transition-color-280 hover:(text-$vd-c-text-1)"
        :href="`#${id}`"
        :title="text"
        @click="onClick"
      >
        {{ text }}
      </NuxtLink>

      <template v-if="children?.length">
        <LayoutOutlineItem :toc-links="children" />
      </template>
    </li>
  </ul>
</template>

<style lang="postcss" scoped>
.outline-link.active {
  color: var(--vd-c-text-1);
}
</style>
