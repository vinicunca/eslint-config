<script lang="ts" setup>
import { useRulesMetadata } from '../composables/use-rules-metadata';

const { getMetadata } = useRulesMetadata();

const { ruleData } = await getMetadata('ignores');
</script>

<template>
  <MDCRenderer :body="ruleData" />
</template>
