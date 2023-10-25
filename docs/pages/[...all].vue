<script lang="ts" setup>
import type { ConfigItem } from '~~/domains/docs/types';

import { useContent, useRequestEvent, useSeoMeta } from '#imports';

const { layout, page } = useContent();

// Page not found, set correct status code on SSR
if (!(page as any).value && process.server) {
  const event = useRequestEvent();
  event.node.res.statusCode = 404;
}

useSeoMeta({
  description: () => page.value?.description,
  title: () => page.value?.title,
});

const route = useRoute();

const { data, pending } = useFetch<{ configs: ConfigItem[] }>('/api/meta', {
  query: { config: route.params.all },
});
</script>

<template>
  <div class="document-driven-page">
    <NuxtLayout :name="layout as string || 'default'">
      <ContentRenderer
        v-if="page && data"
        :key="(page as any)._id"
        :value="{
          ...page,
          configs: data?.configs,
        }"
      >
        <template #empty="{ value }">
          <DocumentDrivenEmpty :value="value" />
        </template>
      </ContentRenderer>

      <DocumentDrivenNotFound v-else-if="!pending" />
    </NuxtLayout>
  </div>
</template>
