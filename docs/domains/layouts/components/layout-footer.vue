<script lang="ts" setup>
const socialIcons = [
  {
    name: 'Github',
    class: 'i-simple-icons:github',
    link: 'https://github.com/praburangki',
  },
  {
    name: 'LinkedIn',
    class: 'i-simple-icons:linkedin',
    link: 'https://www.linkedin.com/in/praburangki/',
  },
  {
    name: 'Twitter',
    class: 'i-simple-icons:x',
    link: 'https://twitter.com/praburangki',
  },
];
</script>

<template>
  <footer class="mt-8 py-8">
    <div class="container">
      <div class="flex items-center justify-between border-t-1 border-slate-200 pt-5 dark:border-slate-700">
        <span>&copy; {{ new Date().getFullYear() }} praburangki</span>

        <ul class="flex gap-6">
          <li
            v-for="icon in socialIcons"
            :key="icon.link"
            class="text-2xl opacity-70 transition-opacity hover:opacity-100"
          >
            <a
              :href="icon.link"
              target="_blank"
              rel="noopener noreferrer"
              :title="icon.name"
            >
              <i :class="icon.class" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
