import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,

  description: 'Utilities to enhance developer experience',

  head: [
    // Favicons
    [
      'meta',
      {
        content: '#ffffff',
        name: 'theme-color',
      },
    ],
    [
      'link',
      {
        href: '/favicons/favicon.ico',
        rel: 'icon',
        sizes: '48x48',
      },
    ],
    [
      'link',
      {
        href: '/favicons/apple-touch-icon.png',
        rel: 'apple-touch-icon',
        sizes: '180x180',
      },
    ],
    [
      'link',
      {
        href: '/favicons/site.webmanifest',
        rel: 'manifest',
      },
    ],
    [
      'link',
      {
        href: '/favicons/favicon-32x32.png',
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    [
      'link',
      {
        href: '/favicons/favicon-16x16.png',
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    [
      'link',
      {
        href: '/favicons/favicon.ico',
        rel: 'icon',
        sizes: '48x48',
      },
    ],

    [
      'meta',
      {
        content: 'praburangki',
        name: 'author',
      },
    ],
    [
      'meta',
      {
        content: 'Vinicunca',
        property: 'og:title',
      },
    ],
    [
      'meta',
      {
        content: 'Utilities to enhance developer experience',
        property: 'og:description',
      },
    ],
    [
      'meta',
      {
        content: 'summary_large_image',
        name: 'twitter:card',
      },
    ],
    [
      'meta',
      {
        content: '@praburangki',
        name: 'twitter:creator',
      },
    ],
    [
      'meta',
      {
        content: 'width=device-width, initial-scale=1.0, viewport-fit=cover',
        name: 'viewport',
      },
    ],

    [
      'link',
      { href: 'https://fonts.gstatic.com', rel: 'dns-prefetch' },
    ],
    [
      'link',
      { crossorigin: 'anonymous', href: 'https://fonts.gstatic.com', rel: 'preconnect' },
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap', rel: 'stylesheet' },
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Fira+Code&display=swap', rel: 'stylesheet' },
    ],

    [
      'meta',
      {
        content: 'https://vinicunca.dev/og/base.jpg',
        property: 'og:image',
      },
    ],

    // Google Analytics
    [
      'script',
      {
        async: 'true',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-7H5VDKTB5C',
      },
    ],
    [
      'script',
      {},
      'window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag(\'js\', new Date());\ngtag(\'config\', \'G-7H5VDKTB5C\');',
    ],
  ],

  lang: 'en-US',

  lastUpdated: true,

  markdown: {
    theme: 'one-dark-pro',
  },

  themeConfig: {
    editLink: {
      pattern: 'https://github.com/vinicucna/eslint-config/edit/main/docs/:path',
      text: 'Suggest changes to this page',
    },

    footer: {
      copyright: 'Copyright © 2023-PRESENT praburangki',
      message: 'Released under the MIT License.',
    },

    lastUpdated: {
      formatOptions: {
        dateStyle: 'long',
        timeStyle: 'short',
      },
      text: 'Updated at',
    },

    logo: '/logo.svg',

    nav: [
      {
        link: '/getting-started',
        text: 'Getting Started',
      },
      {
        link: '/configs/astro',
        text: 'Configs',
      },
    ],

    sidebar: [
      {
        collapsed: false,
        items: [
          { link: '/getting-started', text: 'Getting Started' },
        ],
        text: 'User Guide',
      },
      {
        collapsed: false,
        items: [
          generateConfigSidelink({ icon: 'i-logos:astro-icon', link: 'astro', text: 'Astro' }),
          generateConfigSidelink({ icon: 'i-fa-regular:comments', link: 'comments', text: 'Comments' }),
          generateConfigSidelink({ icon: 'i-ph:command', link: 'command', text: 'Command' }),
          generateConfigSidelink({ icon: 'i-ic:baseline-format-indent-increase', link: 'formatters', text: 'Formatter' }),
          generateConfigSidelink({ icon: 'i-simple-icons:eslint', link: 'ignores', text: 'Ignores' }),
          generateConfigSidelink({ icon: 'i-carbon:document-import', link: 'imports', text: 'Imports' }),
          generateConfigSidelink({ icon: 'i-logos:javascript', link: 'javascript', text: 'Javascript' }),
          generateConfigSidelink({ icon: 'i-simple-line-icons:docs', link: 'jsdoc', text: 'JSDoc' }),
          generateConfigSidelink({ icon: 'i-carbon:json', link: 'jsonc', text: 'JSONC' }),
          generateConfigSidelink({ icon: 'i-simple-icons:markdown', link: 'markdown', text: 'Markdown' }),
          generateConfigSidelink({ icon: 'i-logos:nodejs-icon-alt', link: 'node', text: 'NodeJS' }),
          generateConfigSidelink({ icon: 'i-vin:eslint-perfectionist', link: 'perfectionist', text: 'Perfectionist' }),
          generateConfigSidelink({ icon: 'i-logos:react', link: 'react', text: 'React' }),
          generateConfigSidelink({ icon: 'i-bi:regex', link: 'regexp', text: 'Regexp' }),
          generateConfigSidelink({ icon: 'i-logos:solid', link: 'solid', text: 'Solid' }),
          generateConfigSidelink({ icon: 'i-simple-icons:sonar', link: 'sonar', text: 'Sonar' }),
          generateConfigSidelink({ icon: 'i-logos:nodejs-icon', link: 'sort-package-json', text: 'Sort package.json' }),
          generateConfigSidelink({ icon: 'i-vscode-icons:file-type-tsconfig', link: 'sort-tsconfig', text: 'Sort tsconfig' }),
          generateConfigSidelink({ icon: 'i-vin:eslint-style', link: 'stylistic', text: 'Stylistic' }),
          generateConfigSidelink({ icon: 'i-logos:svelte-icon', link: 'svelte', text: 'Svelte' }),
          generateConfigSidelink({ icon: 'i-file-icons:test-generic', link: 'test', text: 'Test' }),
          generateConfigSidelink({ icon: 'i-logos:toml', link: 'toml', text: 'TOML' }),
          generateConfigSidelink({ icon: 'i-logos:typescript-icon', link: 'typescript', text: 'Typescript' }),
          generateConfigSidelink({ icon: 'i-openmoji:unicorn', link: 'unicorn', text: 'Unicorn' }),
          generateConfigSidelink({ icon: 'i-logos:vue', link: 'vue', text: 'Vue' }),
          generateConfigSidelink({ icon: 'i-vin:yaml', link: 'yaml', text: 'YAML' }),
        ],
        text: 'Configs',
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vinicunca' },
    ],
  },

  title: 'ESLint Config',

  async transformPageData(pageData) {
    pageData.lastUpdated = Date.now();
  },
});

interface ConfigSideLink {
  icon: string;
  link: string;
  text: string;
}

function generateConfigSidelink(options: ConfigSideLink) {
  return {
    link: `/configs/${options.link}`,
    text: `<i class="${options.icon}"></i> ${options.text}`,
  };
}
