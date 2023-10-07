<script lang="ts" setup>
import { useContent, useRequestEvent, useSeoMeta } from '#imports';
import { type ConfigItem } from '~~/domains/docs/types';

const { page, layout } = useContent();

// Page not found, set correct status code on SSR
if (!(page as any).value && process.server) {
  const event = useRequestEvent();
  event.node.res.statusCode = 404;
}

useSeoMeta({
  title: () => page.value?.title,
  description: () => page.value?.description,
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
