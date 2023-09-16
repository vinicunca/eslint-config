import { createResolver } from '@nuxt/kit';

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  devServer: {
    port: 3001,
  },

  modules: [
    '@nuxt/devtools',
    '@nuxtjs/algolia',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@unocss/nuxt',
    resolve('./app/content-post-process'),
  ],

  css: [
    '@unocss/reset/tailwind.css',
    '~~/designs/styles/index.css',
    '~~/designs/styles/docs.css',
  ],

  algolia: {
    apiKey: process.env.ALGOLIA_API_KEY,
    applicationId: process.env.ALGOLIA_APPLICATION_ID,
    // DocSearch key is used to configure DocSearch extension.
    docSearch: {
      indexName: 'vinicunca-docs',
    },
  },

  colorMode: {
    classSuffix: '',
    dataValue: 'theme',
  },

  content: {
    documentDriven: true,

    highlight: {
      theme: 'one-dark-pro',
    },

    markdown: {
      anchorLinks: false,

      toc: {
        depth: 2,
      },
    },

    navigation: {
      fields: ['icon'],
    },
  },

  postcss: {
    plugins: {
      'postcss-nested': {},
    },
  },
});
