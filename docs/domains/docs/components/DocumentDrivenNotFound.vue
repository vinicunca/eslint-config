<template>
  <div class="not-prose text-center">
    <p class="text-size-[64px] font-600 leading-[64px]">
      404
    </p>

    <h1 class="pt-3 text-size-[20px] font-700 leading-[20px] tracking-[2px] uppercase">
      Page not found
    </h1>

    <div class="mx-auto mb-5 mt-6 h-[1px] w-[64px] bg-$vd-c-divider" />

    <blockquote class="mx-auto max-w-[256px] text-size-[14px] font-500 text-$vd-c-text-2">
      This is not the page you're looking for.
    </blockquote>

    <div class="mt-5">
      <NuxtLink
        to="/"
        class="inline-block border border-$vd-c-brand-1 rounded-4 px-4 py-1 text-size-[14px] font-500 text-$vd-c-brand-1 transition-colors-280 hover:(border-$vd-c-brand-2 text-$vd-c-brand-2)"
      >
        Go back home
      </NuxtLink>
    </div>
  </div>
</template>
