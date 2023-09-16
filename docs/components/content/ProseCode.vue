<!--
  ~ Copyright 2023 Exactpro (Exactpro Systems Limited)
  ~
  ~ Licensed under the Apache License, Version 2.0 (the "License");
  ~ you may not use this file except in compliance with the License.
  ~ You may obtain a copy of the License at
  ~
  ~     http://www.apache.org/licenses/LICENSE-2.0
  ~
  ~ Unless required by applicable law or agreed to in writing, software
  ~ distributed under the License is distributed on an "AS IS" BASIS,
  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  ~ See the License for the specific language governing permissions and
  ~ limitations under the License.
  -->

<script lang="ts">
// File is copied from here: https://github.com/nuxt/content/blob/main/src/runtime/components/Prose/ProseCode.vue
// Here just single root element is added and styles are removed
// TODO: remove this file when https://github.com/nuxt/content/issues/2111 is resolved
import { defineComponent } from '#imports';
import CoreCopyButton from '~/domains/core/components/core-copy-button.vue';

export default defineComponent({
  components: { CoreCopyButton },
  props: {
    code: {
      type: String,
      default: '',
    },
    language: {
      type: String,
      default: null,
    },
    filename: {
      type: String,
      default: null,
    },
    highlights: {
      type: Array as () => number[],
      default: () => [],
    },
    meta: {
      type: String,
      default: null,
    },
  },
});
</script>

<template>
  <div
    class="group relative mb-4 overflow-x-auto bg-$vd-code-tab-bg -mx-6"
    :class="[`language-${language}`]"
  >
    <span
      v-if="language"
      class="absolute right-2 top-[2px] z-2 text-xs font-medium leading-6 text-$vd-c-code-dimm opacity-100 transition-opacity-400 group-hover:opacity-0"
    >
      {{ language }}
    </span>

    <CoreCopyButton
      :content="code"
      class="absolute right-3 top-3 z-3 opacity-0 transition-opacity-280 group-hover:opacity-100"
    />

    <slot />
  </div>
</template>

<style>
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>
