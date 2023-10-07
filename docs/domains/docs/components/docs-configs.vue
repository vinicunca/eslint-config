<script lang="ts" setup>
import { type ConfigItem } from '../types';
import { getPluginColor } from '../utils/plugin-colors';
import CoreTooltip from '~/domains/core/components/core-tooltip.vue';

const props = withDefaults(
  defineProps<{
    configs: ConfigItem[];
    index?: number;
  }>(),
  {
    index: 0,
  },
);

const config = computed(() => props.configs[props.index]);
</script>

<template>
  <div class="flex flex-col gap-4">
    <DocsConfigBox v-if="config">
      <div class="flex flex-col gap-4">
        <!-- File pattern matching -->
        <DocsConfigHeading
          v-if="config.files"
          icon="i-carbon-batch-job"
          label="Applies to files matching"
        >
          <code
            v-for="(glob, idx) of config.files"
            :key="idx"
            class="plain-color"
          >
            {{ glob }}
          </code>
        </DocsConfigHeading>

        <DocsConfigHeading
          v-else-if="config.rules"
          icon="i-carbon-categories"
          label="Generally applies to all files"
        />

        <!-- Plugins -->
        <DocsConfigHeading
          v-if="config.plugins"
          icon="i-carbon-plug"
          label="Plugins"
        >
          <NuxtLink
            v-for="(pluginItem, name) of config.plugins"
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
          v-if="config.rules.length > 0"
          icon="i-carbon-list-checked"
          label="Rules"
        >
          <div class="mt-2 grid grid-flow-row gap-4">
            <div
              v-for="rule in config.rules"
              :key="rule.name"
              class="not-last:(pb-3 border-b-1 border-$vd-c-divider)"
            >
              <div class="flex items-center gap-2">
                <DocsRuleName :rule="rule" />

                <DocsRuleItem :rule="rule" />

                <CoreTooltip
                  v-if="rule.fixable"
                  label="Fixable"
                >
                  <i class="i-carbon-ibm-toolchain opacity-50" />
                </CoreTooltip>
              </div>

              <div class="not-prose">
                <MDCRenderer
                  :prose="false"
                  class="mt-2"
                  :body="rule.docs?.description"
                />
              </div>
            </div>
          </div>
        </DocsConfigHeading>
      </div>
    </DocsConfigBox>
  </div>
</template>
