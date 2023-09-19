<script lang="ts" setup>
defineProps<{
  isShow: boolean;
}>();
</script>

<template>
  <Transition
    enter-active-class="transition-opacity-500"
    leave-active-class="transition-opacity-250"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isShow"
      class="fixed inset-0 z-40 bg-black/60 xl:hidden"
    />
  </Transition>
</template>
