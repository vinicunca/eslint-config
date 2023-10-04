<script lang="ts" setup>
import CoreCopyButton from '~/domains/core/components/core-copy-button.vue';

defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <div
    class="group relative mb-4 overflow-x-auto bg-$vd-code-tab-bg -mx-6"
    :class="[
      `language-${language}`,
      {
        'line-numbers': !['sh', 'bash'].includes(language),
        'invalid': meta === 'invalid',
        'valid': meta === 'valid',
      },
    ]"
  >
    <span
      v-if="language"
      class="absolute right-2 top-[2px] z-2 text-xs font-medium leading-6 text-$vd-code-lang-color opacity-100 transition-opacity-400 group-hover:opacity-0"
    >
      {{ language }}
    </span>

    <span
      v-if="filename"
      class="file-name absolute right-2 bottom-[3px] text-xs font-medium leading-6 text-white"
    >
      {{ filename }}
    </span>

    <CoreCopyButton
      :content="code"
      class="absolute right-3 top-3 z-3 opacity-0 transition-opacity-280 group-hover:opacity-100"
    />

    <slot />
  </div>
</template>

<style lang="postcss">
pre code {
  counter-reset: step;
  counter-increment: step 0;

  .line {
    display: block;
    min-height: 1rem;
  }
}

.line-numbers {
  pre code .line::before {
    @apply inline-block text-$vd-code-lang-color -ml-3 mr-4 text-right;

    content: counter(step);
    counter-increment: step;
    width: 1rem;
  }
}
</style>

<style lang="postcss" scoped>
.invalid, .valid {
  &::after {
    position: absolute;
    right: 8px;
    bottom: 8px;
  }
}

.invalid::after {
  content: url("data:image/svg+xml,%3Csvg width='45' height='44' viewBox='0 0 45 44' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='1.5' y='1' width='42' height='42' rx='21' fill='%23FFF1F3'/%3E%3Cpath d='M28.5 16L16.5 28M16.5 16L28.5 28' stroke='%23F63D68' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Crect x='1.5' y='1' width='42' height='42' rx='21' stroke='white' stroke-width='2'/%3E%3C/svg%3E%0A");
}

.valid::after {
  content: url("data:image/svg+xml,%3Csvg width='45' height='44' viewBox='0 0 45 44' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='1.5' y='1' width='42' height='42' rx='21' fill='%23ECFDF3'/%3E%3Cpath d='M30.5 16L19.5 27L14.5 22' stroke='%2312B76A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Crect x='1.5' y='1' width='42' height='42' rx='21' stroke='white' stroke-width='2'/%3E%3C/svg%3E%0A");
}
</style>

