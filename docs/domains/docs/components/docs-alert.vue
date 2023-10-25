<script lang="ts" setup>
import CoreContentCustomBlock from '~~/domains/core/components/core-content-custom-block.vue';

defineProps({
  title: String,
  type: {
    default: 'tip',
    type: String,
  },
});
</script>

<template>
  <CoreContentCustomBlock
    :type="type"
    :class="[
      {
        '!pt-2': !title,
      },
    ]"
    class="mt-4"
  >
    <p
      v-if="title"
      class="font-600"
    >
      {{ title }}
    </p>

    <slot />
  </CoreContentCustomBlock>
</template>
