<script lang="ts" setup>
import { SwitchRoot, SwitchThumb } from 'radix-vue';
import { useVModel } from '@vueuse/core';

const props = defineProps<{
  modelValue: boolean;
}>();
const emit = defineEmits(['update:modelValue']);

const isChecked = useVModel(props, 'modelValue', emit);
</script>

<template>
  <SwitchRoot
    id="airplane-mode"
    v-model:checked="isChecked"
    class="relative block h-[22px] w-[40px] shrink-0 border border-$vd-input-border-color rounded-[11px] bg-$vd-input-switch-bg-color duration-280 transition-property-border-color hover:border-$vd-input-hover-border-color"
  >
    <SwitchThumb
      class="absolute left-[1px] top-[1px] h-[18px] w-[18px] rounded-full bg-$vd-c-neutral-inverse shadow-1 transition-transform-280 will-change-transform data-[state=checked]:translate-x-[18px]"
    >
      <span
        v-if="$slots.default"
        class="relative block h-[18px] w-[18px] overflow-hidden rounded-full [&_i]-(absolute left-[3px] top-[3px] h-3 w-3 text-$vd-c-text-2) dark:[&_svg]-(fill-$vd-c-text-1 transition-opacity-280)"
      >
        <slot />
      </span>
    </SwitchThumb>
  </SwitchRoot>
</template>
