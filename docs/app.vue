<script lang="ts" setup>
import LayoutCore from '~~/domains/layouts/components/layout-core.vue';

import { defineHead } from './app/head/define-head';

defineHead();
</script>

<template>
  <LayoutCore>
    <NuxtPage />
  </LayoutCore>
</template>
