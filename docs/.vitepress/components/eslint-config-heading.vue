<script lang="ts" setup>
defineProps<{
  icon: string;
  label: string;
}>();
</script>

<template>
  <div class="flex flex-col gap-2 px-4">
    <div class="flex gap-2 items-center font-600">
      <i :class="icon" />

      <h4 class="m-0!">
        {{ label }}
      </h4>
    </div>

    <div
      v-if="$slots.default"
      class="flex gap-2 items-center flex-wrap"
    >
      <slot />
    </div>
  </div>
</template>
