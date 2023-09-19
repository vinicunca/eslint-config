<script lang="ts" setup>
import CoreSwitch from '~~/domains/core/components/core-switch.vue';

const colorMode = useColorMode();

function toggleColorMode() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
}

const isDark = computed(() => colorMode.value === 'dark');
</script>

<template>
  <ColorScheme placeholder="">
    <CoreSwitch
      :model-value="isDark"
      @update:model-value="toggleColorMode"
    >
      <i class="i-radix-icons:sun opacity-100 dark:opacity-0" />
      <i class="i-radix-icons:moon opacity-0 dark:opacity-100" />
    </CoreSwitch>
  </ColorScheme>
</template>
