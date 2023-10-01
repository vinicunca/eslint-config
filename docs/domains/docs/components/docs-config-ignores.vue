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
      <div
        v-for="ignore in ignoreList"
        :key="ignore"
        class="rounded-1 border border-$vd-c-gray-2 bg-$vd-c-gray-soft px2 font-mono opacity-75"
      >
        {{ ignore }}
      </div>
    </div>
  </DocsConfigBox>
</template>
