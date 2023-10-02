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
        <div
          v-if="configItem.files"
          class="flex items-start gap-2"
        >
          <i class="i-carbon-batch-job mt-1" />

          <div class="flex flex-col gap-2">
            <div>Applies to files matching</div>
            <div class="flex gap-2 items-center flex-wrap">
              <DocsConfigItem
                v-for="(glob, idx) of configItem.files"
                :key="idx"
              >
                {{ glob }}
              </DocsConfigItem>
            </div>
          </div>
        </div>
        <div
          v-else-if="configItem.rules"
          class="flex items-center gap-2 font-600"
        >
          <i class="i-carbon-categories" />

          <div>Generally applies to all files</div>
        </div>

        <!-- Plugins -->
        <div
          v-if="configItem.plugins"
          class="flex flex-col gap-2"
        >
          <div class="flex gap-2 items-center font-600">
            <i class="i-carbon-plug" />
            <div>Plugins</div>
          </div>

          <div class="flex gap-2 items-center flex-wrap">
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
          </div>
        </div>

        <!-- Rules -->
        <div v-if="configItem.rules">
          <div
            class="flex items-center gap-2 font-600"
          >
            <i class="i-carbon-list-checked" />

            <div>Rules</div>
          </div>

          <div class="mt-2 grid grid-flow-row gap-4">
            <div
              v-for="rule in configItem.rules"
              :key="rule.name"
              class="pb-2 border-b-1 border-$vd-c-divider"
            >
              <div class="flex items-center gap-2">
                <NuxtLink
                  :to="rule.docs?.url"
                  target="_blank"
                >
                  <DocsRuleName :rule="rule" />
                </NuxtLink>

                <DocsRuleItem :rule="rule" />
              </div>

              <div class="not-prose">
                <p class="mt-1">
                  {{ rule.docs?.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocsConfigBox>
  </div>
</template>
