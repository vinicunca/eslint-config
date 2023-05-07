<script lang="ts" setup>
import { computed, useSlots } from 'vue';

const props = defineProps({
  dialog: Boolean,
  link: {
    type: Boolean,
    default: undefined,
  },
  disabled: Boolean,
  subtitle: String,
  content: String,
  title: String,
});

const slots = useSlots();

const isLink = computed(() => !!props.link);

const isClickable = computed(() => !props.disabled && isLink.value);

const rootClasses = computed(() => ({
  'vin:(overflow-y-auto elevation-24)': props.dialog,
  'pointer-events-none select-none': props.disabled,
  'cursor-pointer': isClickable.value,
}));

const Tag = isLink.value ? 'a' : 'div';
const hasTitle = computed(() => !!(slots.title || props.title));
const hasSubtitle = computed(() => !!(slots.subtitle || props.subtitle));
const hasHeader = computed(() => hasTitle.value || hasSubtitle.value);
const hasContent = computed(() => !!(slots.content || props.content));
const ayo = 'qqwe';
</script>

<template>
  <component
    :is="Tag"
    class="flex flex-col overflow-hidden break-words relative z-0 rounded-1 bg-brand-surface elevation-1"
    :class="[ayo]"
    :tabindex="disabled ? -1 : undefined"
  >
    hasHeader
  </component>
</template>
