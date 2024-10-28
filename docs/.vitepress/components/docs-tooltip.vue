<script lang="ts" setup>
import { TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from 'radix-vue';

defineProps<{
  label: string;
}>();
</script>

<template>
  <TooltipProvider :delay-duration="10">
    <TooltipRoot>
      <TooltipTrigger class="inline-flex">
        <slot />
      </TooltipTrigger>

      <TooltipPortal>
        <TooltipContent
          side="top"
          as-child
          class="bg-$vp-c-gray-1 data-[state=delayed-open]:animate-scale-in select-none rounded-2 px-3 py-2 shadow-1 will-change-transform,opacity"
          :side-offset="5"
        >
          <div>
            {{ label }}

            <TooltipArrow class="fill-$vp-c-gray-1" />
          </div>
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>
