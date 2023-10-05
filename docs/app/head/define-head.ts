const TITLE = 'ESLint Vinicunca';

// @unocss-include
export function defineHead() {
  // TODO: maybe use this approach: https://content.nuxtjs.org/api/composables/use-content-head
  const page = ref<any>({});

  const socialCardLarge = ref('');
  const description = computed(() => page.value.description);

  const route = useRoute();

  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - ${TITLE}` : TITLE;
    },

    htmlAttrs: {
      lang: 'en',
    },

    bodyAttrs: {
      class: 'antialiased font-sans w-full min-h-screen text-$vd-c-text-1 bg-$vd-c-bg',
    },

    meta: [
      {
        name: 'apple-mobile-web-app-title',
        content: TITLE,
      },
      {
        name: 'application-name',
        content: TITLE,
      },
      {
        name: 'msapplication-config',
        content: '/favicons/browserconfig.xml',
      },
      {
        name: 'msapplication-TileColor',
        content: '#da532c',
      },
      {
        name: 'theme-color',
        content: '#ffffff',
      },

      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:site',
        content: '@praburangki',
      },
      {
        name: 'twitter:description',
        content: description.value,
      },
      {
        name: 'twitter:image',
        content: 'socialCardLarge',
      },
      {
        name: 'twitter:creator',
        content: '@praburangki',
      },
      {
        key: 'og:url',
        property: 'og:url',
        content: `https://eslint.vinicunca.dev${route.path}`,
      },
      {
        key: 'og:type',
        property: 'og:type',
        content: 'article',
      },
      {
        key: 'og:image',
        property: 'og:image',
        content: `https://eslint.vinicunca.dev${socialCardLarge.value}`,
      },
    ],

    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicons/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicons/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/favicons/site.webmanifest',
      },
      {
        rel: 'shortcut icon',
        href: '/favicons/favicon.ico',
      },
    ],
  });
}
