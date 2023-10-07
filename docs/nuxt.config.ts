import process from 'node:process';
import { createResolver } from '@nuxt/kit';

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  devServer: {
    port: 3001,
  },

  components: [
    {
      path: '~~/domains/docs/components',
      pathPrefix: false,
      global: true,
    },
  ],

  modules: [
    '@nuxt/devtools',
    '@nuxtjs/algolia',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@unocss/nuxt',
    'nuxt-gtag',
    resolve('./app/content-post-process'),
  ],

  css: [
    '@unocss/reset/tailwind.css',
    '~~/designs/styles/index.css',
    '~~/designs/styles/docs.css',
  ],

  algolia: {
    apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
    applicationId: process.env.ALGOLIA_APPLICATION_ID,
    // DocSearch key is used to configure DocSearch extension.
    docSearch: {
      indexName: 'eslint-vinicunca',
    },

    crawler: {
      indexName: 'eslint-vinicunca',
      apiKey: process.env.ALGOLIA_CRAWLER_API_KEY,
    },
  },

  colorMode: {
    classSuffix: '',
    dataValue: 'theme',
  },

  content: {
    documentDriven: {
      injectPage: false,
    },

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

  gtag: {
    id: 'G-38W7J3MEER',
  },

  postcss: {
    plugins: {
      'postcss-nested': {},
    },
  },
});
