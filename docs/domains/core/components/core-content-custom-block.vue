<script lang="ts" setup>
const props = defineProps({
  tag: {
    type: String,
    default: 'div',
  },
  type: String,
});

const classes = computed(() => [
  {
    details: props.tag === 'details',
    info: props.type === 'info',
    tip: props.type === 'tip',
    warning: props.type === 'warning',
    danger: props.type === 'danger',
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
