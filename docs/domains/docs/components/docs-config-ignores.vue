<script lang="ts" setup>
const ignoreList = [
  '**/node_modules',
  '**/dist',
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',

  '**/output',
  '**/coverage',
  '**/temp',
  '**/.vitepress/cache',
  '**/.nuxt',
  '**/.vercel',
  '**/.changeset',
  '**/.idea',
  '**/.cache',
  '**/.output',
  '**/.vite-inspect',

  '**/CHANGELOG*.md',
  '**/*.min.*',
  '**/LICENSE*',
  '**/__snapshots__',
  '**/auto-import?(s).d.ts',
  '**/components.d.ts',
];
</script>

<template>
  <DocsConfigBox>
    <div class="flex flex-wrap gap-2">
      <code
        v-for="ignore in ignoreList"
        :key="ignore"
        class="plain-color"
      >
        {{ ignore }}
      </code>
    </div>
  </DocsConfigBox>
</template>
