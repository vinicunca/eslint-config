<script lang="ts" setup>
import { TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from 'radix-vue';

defineProps<{
  label: string;
}>();
</script>

<template>
  <TooltipProvider :delay-duration="100">
    <TooltipRoot>
      <TooltipTrigger>
        <slot />
      </TooltipTrigger>

      <TooltipPortal>
        <TooltipContent
          side="top"
          as-child
          class="bg-$vd-c-gray-1 data-[state=delayed-open]:animate-scale-in select-none rounded-2 px-3 py-2 shadow-1 will-change-transform,opacity"
          :side-offset="5"
        >
          <div>
            {{ label }}

            <TooltipArrow
              class="fill-$vd-c-gray-1"
              size="8"
            />
          </div>
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>
