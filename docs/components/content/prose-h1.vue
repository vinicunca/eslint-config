<script lang="ts" setup>
// @ts-expect-error export typings
import { parseMarkdown } from '@nuxtjs/mdc/runtime';

const props = defineProps<{ id?: string }>();

const sourceUrl = computed(() => `https://eslint.org/docs/latest/rules/${props.id}`);

const { page } = useContent();

const result = await parseMarkdown(page.value.description);
</script>

<template>
  <div>
    <h1>
      <slot />
    </h1>

    <ContentRendererMarkdown :value="result" />

    <NuxtLink
      :href="sourceUrl"
      target="_blank"
      class="not-prose inline-flex items-center border border-$vd-c-brand-1 rounded-4 px-2 text-size-[14px] font-500 text-$vd-c-brand-1 transition-colors-280 hover:(border-$vd-c-brand-2 text-$vd-c-brand-2)"
    >
      <i class="i-logos:eslint mr-2" />

      Source
    </NuxtLink>
  </div>
</template>
