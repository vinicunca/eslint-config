const TITLE = 'ESLint Vinicunca';

// @unocss-include
export function defineHead() {
  const { page } = useContent();

  const route = useRoute();

  useHead({
    bodyAttrs: {
      class: 'antialiased font-sans w-full min-h-screen text-$vd-c-text-1 bg-$vd-c-bg',
    },

    htmlAttrs: {
      lang: 'en',
    },

    link: [
      {
        href: '/favicons/apple-touch-icon.png',
        rel: 'apple-touch-icon',
        sizes: '180x180',
      },
      {
        href: '/favicons/favicon-32x32.png',
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        href: '/favicons/favicon-16x16.png',
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        href: '/favicons/site.webmanifest',
        rel: 'manifest',
      },
      {
        href: '/favicons/favicon.ico',
        rel: 'shortcut icon',
      },
    ],

    meta: [
      {
        content: TITLE,
        name: 'apple-mobile-web-app-title',
      },
      {
        content: TITLE,
        name: 'application-name',
      },
      {
        content: '/favicons/browserconfig.xml',
        name: 'msapplication-config',
      },
      {
        content: '#da532c',
        name: 'msapplication-TileColor',
      },
      {
        content: '#ffffff',
        name: 'theme-color',
      },

      {
        content: '@praburangki',
        name: 'twitter:site',
      },
      {
        content: '@praburangki',
        name: 'twitter:creator',
      },
      {
        content: 'summary_large_image',
        name: 'twitter:card',
      },
      {
        content: page.value.description,
        name: 'twitter:description',
      },
      {
        content: 'https://eslint.vinicunca.dev/images/og.png',
        name: 'twitter:image',
      },
      {
        content: `https://eslint.vinicunca.dev${route.path}`,
        key: 'og:url',
        property: 'og:url',
      },
      {
        content: page.value.title,
        key: 'og:title',
        property: 'og:title',
      },
      {
        content: page.value.description,
        key: 'og:description',
        property: 'og:description',
      },
      {
        content: 'article',
        key: 'og:type',
        property: 'og:type',
      },
      {
        content: 'https://eslint.vinicunca.dev/images/og.png',
        key: 'og:image',
        property: 'og:image',
      },
    ],

    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - ${TITLE}` : TITLE;
    },
  });
}
