<script lang="ts" setup>
import { useNestedGroupActivator, useNestedItem } from './use-nested';
import { expandTransitionFunctions } from './expand-transition';

const props = defineProps<{
  value?: string;
}>();

const { isOpen, open, id: _id } = useNestedItem(toRef(props, 'value'), true);
const id = computed(() => `list-group--id-${String(_id.value)}`);

function onClick(event: Event) {
  open(!isOpen.value, event);
}

const activatorProps = computed(() => ({
  onClick,
  class: 'list-group__header',
  id: id.value,
}));

const CoreListGroupActivator = defineComponent({
  name: 'CoreListGroupActivator',

  setup(_, { slots }) {
    useNestedGroupActivator();

    return () => slots.default?.();
  },
});
</script>

<template>
  <div
    style="--parent-padding: var(--indent-padding);"
    :class="{
      'v-list-group--open': isOpen,
    }"
  >
    <CoreListGroupActivator>
      <slot
        name="activator"
        :props="activatorProps"
        :is-open="isOpen"
      />
    </CoreListGroupActivator>

    <!-- @vue-expect-error tyings for functions -->
    <Transition
      name="expand-transition"
      v-bind="expandTransitionFunctions"
    >
      <div
        v-show="isOpen"
        style="--indent-padding: calc(var(--parent-padding) + 16px);"
        role="group"
        :aria-labelledby="id"
      >
        <slot />
      </div>
    </Transition>
  </div>
</template>
