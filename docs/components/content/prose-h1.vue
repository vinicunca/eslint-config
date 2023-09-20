<script lang="ts" setup>
// @ts-expect-error export typings
import { parseMarkdown } from '@nuxtjs/mdc/runtime';

defineProps<{ id?: string }>();

const { page } = useContent();

const result = await parseMarkdown(page.value.description);
</script>

<template>
  <div>
    <h1>
      <slot />
    </h1>

    <ContentRendererMarkdown :value="result" />
  </div>
</template>
