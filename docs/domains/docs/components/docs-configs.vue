<script lang="ts" setup>
const { data } = useFetch('/api/meta', {
  query: {
    config: 'ignores',
  },
});
</script>

<template>
  <div>
    {{ data }}
  </div>
</template>
