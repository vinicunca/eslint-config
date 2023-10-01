<script lang="ts" setup>
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from 'radix-vue';

const slots = useSlots();

const slotTabs = computed(() =>
  (slots.default?.() ?? []).map((slot) => slot.props?.filename));

function SlotContent({ idx }: { idx: number }) {
  const defaultSlots = slots.default?.() ?? [];
  const slot = defaultSlots[idx];

  return h(
    'div',
    {},
    // Display direct children if not a ```code``` block
    [
      isTag(slot, 'pre')
        ? slot
        : h(
          'div',
          {},
          [(slot.children as any)?.default?.() || slot.children],
        ),
    ],
  );
}

function isTag(slot: any, tag: string) {
  return slot.type && slot.type.tag && slot.type.tag === tag;
};
</script>

<template>
  <TabsRoot
    class="code-group mt-4"
    :default-value="slotTabs[0]"
  >
    <TabsList class="relative z-0 flex overflow-x-auto overflow-y-hidden bg-$vd-code-tab-bg px-2 before:(absolute bottom-0 left-0 right-0 h-[1px] bg-$vd-c-black content-empty -z-1) -mx-6 sm:(mx-0 rounded-t-2)">
      <TabsTrigger
        v-for="(filename, idx) in slotTabs"
        :key="`slotTab-${idx}`"
        :value="filename"
        class="relative whitespace-nowrap border-b border-b-transparent px-3 text-sm font-medium leading-12 text-$vd-code-tab-text-color transition-colors-280 data-[state=active]:(border-b-$vd-c-brand-1 text-$vd-code-tab-hover-text-color) hover:(text-$vd-code-tab-hover-text-color)"
      >
        {{ filename }}
      </TabsTrigger>
    </TabsList>

    <TabsContent
      v-for="(filename, idx) in slotTabs"
      :key="`slotContent-${idx}`"
      :value="filename"
    >
      <SlotContent :idx="idx" />
    </TabsContent>
  </TabsRoot>
</template>
