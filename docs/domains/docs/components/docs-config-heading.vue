<script lang="ts" setup>
defineProps<{
  icon: string;
  label: string;
}>();
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex gap-2 items-center font-600">
      <i :class="icon" />
      <div>{{ label }}</div>
    </div>

    <div class="flex gap-2 items-center flex-wrap">
      <slot />
    </div>
  </div>
</template>
