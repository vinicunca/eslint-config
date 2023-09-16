<script lang="ts" setup>
defineProps<{
  active: boolean;
}>();

defineEmits<{
  (event: 'click'): void;
}>();
</script>

<template>
  <button
    type="button"
    class="group hamburger h-$vd-nav-height w-12 flex items-center justify-center md:hidden"
    :class="{ active }"
    aria-label="mobile navigation"
    :aria-expanded="active"
    @click="$emit('click')"
  >
    <span class="relative h-[14px] w-4 overflow-hidden">
      <span
        class="top absolute left-0 top-0 h-[2px] w-4 translate-x-0"
        :class="{
          'vin:(top-[6px] [--un-translate-x:0] rotate-225)': active,
          'group-hover:translate-x-1': !active,
        }"
      />
      <span
        class="middle absolute left-0 top-[6px] h-[2px] w-4 translate-x-2"
        :class="{
          'vin:(top-[6px] translate-x-4)': active,
          'group-hover:translate-x-0': !active,
        }"
      />
      <span
        class="bottom absolute left-0 top-3 h-[2px] w-4 translate-x-1"
        :class="{
          'vin:([--un-translate-x:0px] top-[6px]) rotate-135': active,
          'group-hover:translate-x-2': !active,
        }"
      />
    </span>
  </button>
</template>

<style lang="postcss" scoped>
  .hamburger {
    .top, .middle, .bottom {
      transition: top .25s, background-color .5s, transform .25s;
      @apply bg-$vd-c-text-1;
    }

    &.active:hover {
      .top, .middle, .bottom {
        @apply bg-$vd-c-text-2;
      }
    }
  }
</style>
