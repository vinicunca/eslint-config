<script setup lang="ts">
// Define reactive data and props
import { ref } from "vue";

import { useI18n } from "~~/locale";

const { $t } = useI18n();

const anu = $t("hehe");

const greeting = ref("Hello, Vue 3!");
const counter = ref<number | string>(0);

// Define a function
const incrementCounter = () => {
	counter.value++;
};
</script>

<template>
	<div>
		<h1>{{ greeting }}</h1>
		<button @click="incrementCounter">
			Click me!
		</button>
		<p>Counter: {{ counter }}</p>

		<p>{{ anu }}</p>
	</div>
</template>

<style>
.a {  color:   red }
</style>

<style lang="scss">
$font-stack: Helvetica, sans-serif;
$primary-color:   #333;

body { font: 100% $font-stack;
  color: $primary-color;
}
</style>
