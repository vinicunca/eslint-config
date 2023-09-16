<script lang="ts" setup>
import { defineHead } from './app/head/define-head';

import LayoutCore from '~~/domains/layouts/components/layout-core.vue';

defineHead();
</script>

<template>
  <LayoutCore>
    <NuxtPage />
  </LayoutCore>
</template>
