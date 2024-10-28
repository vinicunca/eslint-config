<script lang="ts" setup>
import { GLOB_EXCLUDE } from '../data/metadata';
</script>

<template>
  <DocsBox class="flex flex-col gap-2 items-start overflow-y-auto max-h-220px">
    <code
      v-for="ignore in GLOB_EXCLUDE"
      :key="ignore"
      class="plain-color"
    >
      {{ ignore }}
    </code>
  </DocsBox>
</template>
