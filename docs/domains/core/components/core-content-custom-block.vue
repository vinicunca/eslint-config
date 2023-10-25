<script lang="ts" setup>
const props = defineProps({
  tag: {
    default: 'div',
    type: String,
  },
  type: String,
});

const classes = computed(() => [
  {
    danger: props.type === 'danger',
    details: props.tag === 'details',
    info: props.type === 'info',
    tip: props.type === 'tip',
    warning: props.type === 'warning',
  },
]);
</script>

<template>
  <component
    :is="tag"
    class="custom-block my-2 border rounded-2 px-4 pb-2 pt-4 text-size-[0.875rem]"
    :class="classes"
  >
    <slot />
  </component>
</template>
