<script setup lang="ts">
import { useClipboard } from '@vueuse/core';

const props = defineProps({
  content: {
    type: String,
    default: '',
  },
});

const { copy: copyToClipboard } = useClipboard();

const state = ref('init');

function copy(_event: MouseEvent) {
  copyToClipboard(props.content)
    .then(() => {
      state.value = 'copied';

      setTimeout(() => {
        state.value = 'init';
      }, 1000);
    })
    .catch(() => {
      console.warn('Couldn\'t copy to clipboard!');
    });
};
</script>

<template>
  <button
    class="h-10 w-10 border bg-$vd-code-copy-code-bg bg-[length:20] bg-[position:1/2] bg-no-repeat"
    :class="[
      state === 'copied'
        ? 'bg-image-$vd-icon-copied border-$vd-code-copy-code-border-color rounded-r-1 before:(relative top-[-1px] left-[-65px] flex justify-center items-center border border-$vd-code-copy-code-border-color border-r-0 rounded-l-1 w-16 h-10 text-center text-xs font-medium text-$vd-code-copy-code-active-text bg-$vd-code-copy-code-hover-bg whitespace-nowrap content-[quoted:Copied])'
        : 'bg-image-$vd-icon-copy rounded-1 border-$vd-code-copy-code-border-color',
    ]"
    @click="copy"
  />
</template>
