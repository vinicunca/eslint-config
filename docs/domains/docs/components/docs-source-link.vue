<script lang="ts" setup>
defineProps<{
  url: string;
}>();
</script>

<template>
  <NuxtLink
    :href="url"
    target="_blank"
    class="not-prose inline-flex items-center border border-$vd-c-brand-1 rounded-4 px-2 text-size-[14px] font-500 text-$vd-c-brand-1 transition-colors-280 hover:(border-$vd-c-brand-2 text-$vd-c-brand-2)"
  >
    <i class="i-logos:eslint mr-2" />

    Source
  </NuxtLink>
</template>
