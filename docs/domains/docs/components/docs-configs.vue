<script lang="ts" setup>
import { type ConfigItem } from '../types';
import { getPluginColor } from '../utils/plugin-colors';

const props = defineProps<{
  config: string;
}>();

const { data } = useFetch<{
  configs: ConfigItem[];
}>('/api/meta',
  {
    query: {
      config: props.config,
    },
  },
);
</script>

<template>
  <div class="flex flex-col gap-4">
    <DocsConfigBox
      v-for="configItem in data!.configs"
      :key="configItem.name"
    >
      <div class="flex flex-col gap-4">
        <!-- File pattern matching -->
        <DocsConfigHeading
          v-if="configItem.files"
          icon="i-carbon-batch-job"
          label="Applies to files matching"
        >
          <code
            v-for="(glob, idx) of configItem.files"
            :key="idx"
            class="plain-color"
          >
            {{ glob }}
          </code>
        </DocsConfigHeading>

        <DocsConfigHeading
          v-else-if="configItem.rules"
          icon="i-carbon-categories"
          label="Generally applies to all files"
        />

        <!-- Plugins -->
        <DocsConfigHeading
          v-if="configItem.plugins"
          icon="i-carbon-plug"
          label="Plugins"
        >
          <NuxtLink
            v-for="(pluginItem, name) of configItem.plugins"
            :key="name"
            target="_blank"
            :to="pluginItem.url"
          >
            <code :style="{ color: getPluginColor(name) }">
              {{ name }}
            </code>
          </NuxtLink>
        </DocsConfigHeading>

        <!-- Rules -->
        <DocsConfigHeading
          v-if="configItem.rules"
          icon="i-carbon-list-checked"
          label="Rules"
        >
          <div class="mt-2 grid grid-flow-row gap-4">
            <div
              v-for="rule in configItem.rules"
              :key="rule.name"
              class="not-last:(pb-3 border-b-1 border-$vd-c-divider)"
            >
              <div class="flex items-center gap-2">
                <DocsRuleName :rule="rule" />

                <DocsRuleItem :rule="rule" />
              </div>

              <div class="not-prose">
                <MDC
                  class="mt-2"
                  :value="rule.docs?.description"
                />
              </div>
            </div>
          </div>
        </DocsConfigHeading>
      </div>
    </DocsConfigBox>
  </div>
</template>
