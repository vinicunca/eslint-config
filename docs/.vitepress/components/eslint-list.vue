<script lang="ts" setup>
import { isEmpty } from '@vinicunca/perkakas';
import Fuse from 'fuse.js';
import { computed, markRaw, ref } from 'vue';

import { configs } from '../data/metadata';
import { pluginUrlMap, usePluginColor } from '../utils/plugin-colors';
import { renderMarkdown } from '../utils/render-markdown';

const props = defineProps<{
  isFilterable?: boolean;
  package: string;
}>();

const pkg = markRaw(
  configs.find(
    (config) => {
      const name = config.name?.split('vinicunca/')[1];

      return name === props.package;
    },
  )!,
);

const { getPluginColor } = usePluginColor();

const pluginItems = computed(() => pkg.plugins!.map((plug) => {
  const color = getPluginColor(plug);

  return {
    color,
    name: plug,
    url: pluginUrlMap[plug],
  };
}));

const fuse = computed(() => new Fuse(pkg.rules, {
  keys: ['name', 'meta.docs.description'],
  threshold: 0.3,
}));

const search = ref('');
const filter = ref();

function match(regexes: Array<RegExp>) {
  return pkg.rules.filter((i) => regexes.some((r) => r.test(i.name)));
}

const filterList = [
  {
    id: '',
    name: 'All',
    rules: pkg.rules,
  },
  {
    id: 'spacing',
    name: 'Spacing',
    rules: match([
      /\bspacing\b/,
      /\bspace[sd]?\b/,
      /\bwhitespaces?\b/,
    ]),
  },
  {
    id: 'line-breaks',
    name: 'Line breaks',
    rules: match([
      /\bnewlines?\b/,
      /\blinebreak\b/,
      /\bmultilines?\b/,
      /-new-line$/,
      /^padding-line-/,
      /^eol-last$/,
      /^lines-/,
    ]),
  },
  {
    id: 'brackets',
    name: 'Brackets',
    rules: match([
      /\bcurly\b/,
      /\bbrace\b/,
      /\bbracket\b/,
      /\bparens?\b/,
      /\bwrap\b/,
    ]),
  },
  {
    id: 'indent',
    name: 'Indent',
    rules: match([
      /\bindent\b/,
    ]),
  },
  {
    id: 'quotes',
    name: 'Quotes',
    rules: match([
      /\bquotes?\b/,
    ]),
  },
  {
    id: 'commas',
    name: 'Commas',
    rules: match([
      /\bcommas?\b/,
    ]),
  },
  {
    id: 'semis',
    name: 'Semis',
    rules: match([
      /\bsemis?\b/,
    ]),
  },
  {
    id: 'operators',
    name: 'Operators',
    rules: match([
      /-ops?$/,
      /\boperators?\b/,
      /\bternary\b/,
      /^dot-location$/,
    ]),
  },
  {
    id: 'comments',
    name: 'Comments',
    rules: match([
      /\bcomments?\b/,
    ]),
  },
  {
    id: 'jsx',
    name: 'JSX',
    rules: match([
      /\bjsx\b/,
    ]),
  },
  {
    id: 'type',
    name: 'Types',
    rules: match([
      /\btype\b/,
    ]),
  },
  {
    id: 'disallow',
    name: 'Disallow',
    rules: match([
      /^no-/,
    ]),
  },
  {
    id: 'misc',
    name: 'Misc.',
    rules: [],
  },
];

filterList.push(...pkg.plugins!.map((i) => ({
  id: i,
  name: i,
  rules: match([new RegExp(i)]),
})));

const categorizedRules = new Set(filterList.slice(1).flatMap((i) => i.rules));
filterList.find((i) => i.id === 'misc')!.rules = pkg.rules.filter((i) => !categorizedRules.has(i));

const filterResult = computed(() => {
  if (!filter.value) {
    return pkg.rules;
  }
  const list = filterList.find((f) => f.id === filter.value);
  if (!list) {
    return pkg.rules;
  }
  return list.rules;
});

const searchResult = computed(() => {
  if (!search.value) {
    return filterResult.value;
  }
  return fuse.value.search(search.value).map((i) => i.item);
});

function clearFilter() {
  filter.value = '';
  search.value = '';
  // document.getElementById('rules')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <DocsBox
      v-if="isFilterable"
      class="flex items-center gap-4 px-4 py-2"
    >
      <div
        class="i-carbon:search flex-none text-sm"
        title="Search"
      />

      <input
        v-model="search"
        placeholder="Search rules"
        class="w-full border border-solid border-$vp-c-gray-1 rounded px3 py1.5 text-sm"
        border="~ solid base rounded"
      >
    </DocsBox>

    <div
      class="flex flex-col gap-4 border border-base py-4"
      :class="isFilterable ? 'rounded-t' : 'rounded'"
    >
      <!-- File pattern matching -->
      <EslintConfigHeading
        v-if="pkg.files"
        icon="i-carbon:batch-job"
        label="Applies to files matching"
      >
        <code
          v-for="(glob, idx) of pkg.files"
          :key="idx"
          class="plain-color"
        >
          {{ glob }}
        </code>
      </EslintConfigHeading>

      <EslintConfigHeading
        v-else-if="pkg.rules"
        icon="i-carbon:categories"
        label="Generally applies to all files"
      />

      <!-- Plugins -->
      <EslintConfigHeading
        v-if="!isEmpty(pkg.plugins!)"
        icon="i-carbon:plug"
        label="Plugins"
      >
        <a
          v-for="(pluginItem) of pluginItems"
          :key="pluginItem.name"
          target="_blank"
          class="no-underline!"
          :href="pluginItem.url"
        >
          <code :style="{ color: pluginItem.color }">
            {{ pluginItem.name }}
          </code>
        </a>
      </EslintConfigHeading>

      <!-- Rules -->
      <EslintConfigHeading
        v-if="pkg.rules?.length > 0"
        icon="i-carbon:list-checked"
        label="Rules"
      />

      <!-- Filter -->
      <div
        v-if="isFilterable"
        class="flex items-center gap-4 border-y border-base rounded-t px-4 py-2"
      >
        <div
          class="i-carbon:filter"
          title="Filters"
        />

        <div class="flex items-center gap-2 flex-wrap">
          <template
            v-for="i of filterList"
            :key="i.id"
          >
            <label
              v-if="i.rules.length"
              :for="`filter-${i.id}`"
              class="border border-solid rounded select-none px-2 py-0.5 text-sm flex cursor-pointer"
              :class="filter === i.id ? 'text-$vp-c-brand bg-$vp-c-brand-soft border-color-$vp-c-brand-soft' : 'border-base text-gray opacity-75'"
            >
              <input
                :id="`filter-${i.id}`"
                v-model="filter"
                type="radio"
                :value="i.id"
                class="hidden"
              >

              {{ i.name }}

              <div class="text-xs translate-y--1px translate-x-2px opacity-50">
                {{ i.rules.length }}
              </div>
            </label>
          </template>
        </div>
      </div>

      <!-- Rule list -->
      <div class="mt-2 grid grid-flow-row gap-4 w-full">
        <div
          v-for="rule in searchResult"
          :key="rule.name"
          class="not-last:(pb-3 border-b-1 border-base) px-4"
        >
          <div class="flex items-center gap-2">
            <EslintRuleName :rule="rule" />
            <EslintRuleItem :rule="rule" />
            <DocsTooltip
              v-if="rule.meta?.fixable"
              label="Fixable"
            >
              <i class="i-carbon:ibm-toolchain opacity-50" />
            </DocsTooltip>
          </div>

          <div
            class="mt-2"
            v-html="renderMarkdown(rule.meta?.docs?.description)"
          />
        </div>
      </div>

      <div
        v-if="isFilterable"
        class="flex gap-2 items-center border-t border-base pt-4 px-4"
      >
        <template v-if="searchResult.length !== pkg.rules.length">
          <div class="text-sm opacity-50">
            Showing {{ searchResult.length }} of {{ pkg.rules.length }} rules.
          </div>

          <button
            class="button-action"
            @click="clearFilter()"
          >
            <div class="i-carbon:filter-remove" />
            <span>Reset filter</span>
          </button>
        </template>

        <template v-else>
          <div class="text-sm opacity-50">
            {{ pkg.rules.length }} rules in total.
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
