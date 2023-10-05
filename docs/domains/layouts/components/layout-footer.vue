<script lang="ts" setup>
import { toUpperFirst } from '@vinicunca/perkakas';

const { prev, next, navigation, page } = useContent();
const { navDirFromPath } = useContentHelpers();

function directory(link: any) {
  const nav = navDirFromPath(link._path, navigation.value || []);

  if (nav && nav[0]) {
    return nav[0]?._path ?? '';
  } else {
    const dirs = link.split('/');
    const directory = dirs.length > 1 ? dirs[dirs.length - 2] : '';
    return directory.split('-').map(toUpperFirst).join(' ');
  }
};

const editLinkUrl = computed(() => {
  const baseUrl = 'https://github.com/vinicunca/eslint-config/edit/main/docs/content';

  return `${baseUrl}/${page.value._file}`;
});
</script>

<template>
  <footer
    v-if="page"
    class="mt-16"
  >
    <div class="pb-4.5 sm:(flex items-center justify-between pb-3)">
      <NuxtLink
        :href="editLinkUrl"
        target="_blank"
        class="flex items-center text-sm font-medium leading-8 text-$vd-c-brand-1 transition-color-280 hover:text-$vd-c-brand-dark"
      >
        <i
          class="i-radix-icons:pencil-2 mr-2 h-[14px] w-[14px]"
          aria-label="edit icon"
        />

        Edit this page on Github
      </NuxtLink>
    </div>

    <nav class="grid gap-y-2 border-t border-$vd-c-divider pt-6 sm:(grid-cols-2 gap-x-4)">
      <NuxtLink
        v-if="prev && prev._path"
        :to="prev._path"
        class="block h-full w-full border border-$vd-c-divider rounded-2 px-4 py-3 transition-color-280 hover:border-$vd-c-brand"
      >
        <div>
          <span
            v-if="directory(prev._path)"
            class="block text-xs font-medium leading-5 text-$vd-c-text-2"
          >
            {{ directory(prev._path) }}
          </span>
          <span class="block text-sm font-medium leading-5 text-$vd-c-brand">{{ prev.title }}</span>
        </div>
      </NuxtLink>

      <span v-else />

      <NuxtLink
        v-if="next && next._path"
        :to="next._path"
        class="ml-auto block h-full w-full border border-$vd-c-divider rounded-2 px-4 py-3 text-right transition-color-280 hover:border-$vd-c-brand"
      >
        <div>
          <span
            v-if="directory(next._path)"
            class="block text-xs font-medium leading-5 text-$vd-c-text-2"
          >
            {{ directory(next._path) }}
          </span>

          <span class="block text-sm font-medium leading-5 text-$vd-c-brand">{{ next.title }}</span>
        </div>
      </NuxtLink>
    </nav>
  </footer>
</template>
