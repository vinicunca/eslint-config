<script lang="ts" setup>
import { isString } from '@vinicunca/perkakas';

const props = defineProps<{
  source: string;
}>();

const { data } = await useAsyncData(
  'rules',
  async () => import(`~~/data/${props.source}.json`).then((m) => m.default),
);
</script>

<template>
  <div class="mt-8 grid grid-flow-row gap-2">
    <div
      v-for="(rule, ruleName) in data"
      :key="ruleName"
      class="p-4 bg-$vd-c-bg-soft text-sm rounded-2"
    >
      <NuxtLink
        :href="rule.url"
        target="_blank"
      >
        {{ ruleName }}
      </NuxtLink>

      <div class="not-prose ">
        <p class="mt-1">
          {{ rule.description }}
        </p>

        <p
          v-if="!isString(rule.options)"
          class="mt-1 flex flex-col"
        >
          <span class="font-700">Options</span>

          <code class="mt-2">
            {{ rule.options }}
          </code>
        </p>
      </div>
    </div>
  </div>
</template>
