import { presetVinicunca } from '@vinicunca/unocss-preset-vinicunca';
import {
  defineConfig,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetVinicunca({
      icons: {
        collections: {
          vin: async (iconName) => {
            if (iconName === 'eslint-style') {
              return '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 500 500"><g clip-path="url(#a)"><path fill="#32A9C3" d="M489.226 240a19.998 19.998 0 0 1 0 20L378.274 452.176a20.002 20.002 0 0 1-17.321 10H139.047a19.999 19.999 0 0 1-17.32-10L10.773 260a20 20 0 0 1 0-20L121.727 47.824a19.999 19.999 0 0 1 17.32-10h221.906a20.002 20.002 0 0 1 17.321 10L489.226 240Z"/><path fill="#fff" fill-opacity=".5" d="M427.463 340.91a19.999 19.999 0 0 1-10 17.32l-157.536 90.953a19.998 19.998 0 0 1-20 0L82.392 358.23a19.999 19.999 0 0 1-10-17.32V159.004a20.002 20.002 0 0 1 10-17.321L239.928 50.73a19.998 19.998 0 0 1 19.999 0l157.536 90.953a20.002 20.002 0 0 1 10 17.321V340.91Z"/><path fill="#fff" fill-opacity=".5" d="M404.24 240.564a18.002 18.002 0 0 1 0 18l-69.608 120.564a17.999 17.999 0 0 1-15.588 9H179.828a18 18 0 0 1-15.588-9L94.632 258.564a18 18 0 0 1 0-18L164.24 120a18 18 0 0 1 15.588-9h139.216a17.999 17.999 0 0 1 15.588 9l69.608 120.564Z"/><path fill="#fff" d="M341.958 188.459c4.332 2.5 7 7.122 7 12.124l.001 98.834a14 14 0 0 1-7 12.124l-85.593 49.418a14.004 14.004 0 0 1-14 0l-85.593-49.418c-4.332-2.5-7-7.122-7-12.124v-98.834c0-5.002 2.668-9.624 7-12.124l85.593-49.418c4.331-2.5 9.668-2.5 14 0l85.592 49.418Z"/><path fill="#32A9C3" d="M310.5 210.161c3.094 1.787 5 5.088 5 8.661v63.453a10 10 0 0 1-5 8.66l-54.952 31.726a9.997 9.997 0 0 1-10 0l-54.952-31.726a10 10 0 0 1-5-8.66v-63.453c0-3.573 1.906-6.874 5-8.661l54.952-31.726a10.002 10.002 0 0 1 10 0l54.952 31.726Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h500v500H0z"/></clipPath></defs></svg>';
            } else if (iconName === 'eslint-perfectionist') {
              return '<svg xmlns="http://www.w3.org/2000/svg" fill="none" class="logo" viewBox="0 0 512 512"><path fill="#4B32C3" d="M497.682 247.032 386.402 57.734c-3.959-6.953-11.481-11.975-19.798-11.975H144.047c-7.917 0-15.443 5.022-19.797 11.975L12.97 246.65A22.664 22.664 0 0 0 10 257.853c0 3.919 1.022 7.774 2.97 11.202l111.28 187.757c3.959 6.953 11.481 10.429 19.797 10.429H367c7.921 0 15.443-3.476 19.801-10.044l111.28-187.757c3.959-7.723 3.959-15.84-.399-22.408Zm-92.273 90.786c0 2.705-1.584 5.407-4.358 6.567l-141.768 79.971a7.328 7.328 0 0 1-3.961 1.159 7.328 7.328 0 0 1-3.961-1.159l-142.159-79.582c-2.379-1.545-4.358-3.862-4.358-6.567V177.88c0-2.702 1.584-5.407 4.358-6.563l142.163-79.971a7.326 7.326 0 0 1 3.961-1.16 7.32 7.32 0 0 1 3.96 1.16l142.168 79.971c2.374 1.541 4.354 3.861 4.354 6.563v159.941l-.399-.003Z"/><path fill="#fff" d="M405.409 337.818c0 2.705-1.584 5.407-4.358 6.567l-141.768 79.971a7.328 7.328 0 0 1-3.961 1.159 7.328 7.328 0 0 1-3.961-1.159l-142.159-79.582c-2.379-1.545-4.358-3.862-4.358-6.567V177.88c0-2.702 1.584-5.407 4.358-6.563l142.163-79.971a7.326 7.326 0 0 1 3.961-1.16 7.32 7.32 0 0 1 3.96 1.16l142.168 79.971c2.374 1.541 4.354 3.861 4.354 6.563v159.941l-.399-.003Z"/><path fill="#4B32C3" d="M167 197c0-5.523 4.478-10 10-10h155c5.523 0 10 4.477 10 10v11c0 5.523-4.477 10-10 10H177c-5.522 0-10-4.477-10-10v-11ZM167 249c0-5.523 4.478-10 10-10h103c5.523 0 10 4.477 10 10v11c0 5.523-4.477 10-10 10H177c-5.522 0-10-4.477-10-10v-11ZM167 300c0-5.523 4.478-10 10-10h59c5.523 0 10 4.477 10 10v12c0 5.523-4.477 10-10 10h-59c-5.522 0-10-4.477-10-10v-12Z"/></svg>';
            } else if (iconName === 'yaml') {
              return await fetch('https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/yaml.svg').then((res) => res.text());
            }
          },
        },
        scale: 1.5,
        warn: true,
      },
    }),
  ],

  safelist: [
    'i-logos:astro-icon',
    'i-fa-regular:comments',
    'i-ph:command',
    'i-ic:baseline-format-indent-increase',
    'i-simple-icons:eslint',
    'i-carbon:document-import',
    'i-logos:javascript',
    'i-simple-line-icons:docs',
    'i-carbon:json',
    'i-simple-icons:markdown',
    'i-logos:nodejs-icon-alt',
    'i-vin:eslint-perfectionist',
    'i-logos:react',
    'i-bi:regex',
    'i-logos:solid',
    'i-simple-icons:sonar',
    'i-logos:nodejs-icon',
    'i-vscode-icons:file-type-tsconfig',
    'i-vin:eslint-style',
    'i-logos:svelte-icon',
    'i-file-icons:test-generic',
    'i-logos:toml',
    'i-logos:typescript-icon',
    'i-openmoji:unicorn',
    'i-logos:vue',
    'i-vin:yaml',
  ],

  shortcuts: {
    'border-base': 'border-$vp-c-divider',
    'button-action': 'flex flex-inline gap-2 items-center justify-center px-3 py-0.5 rounded hover:color-$vp-c-brand-2 hover:bg-$vp-c-default-soft',
  },

  // theme: {
  //   animation: {
  //     durations: {
  //       'collapsible-slide-down': '0.3s',
  //       'collapsible-slide-up': '0.3s',
  //       'scale-in': '0.2s',
  //       'scale-out': '0.2s',
  //     },

  //     keyframes: {
  //       'collapsible-slide-down': '{from {height: 0} to {height: var(--radix-collapsible-content-height)}}',
  //       'collapsible-slide-up': '{from {height: var(--radix-collapsible-content-height)} to {height: 0}}',
  //       'scale-in': '{from{opacity:0;transform:rotateX(-10deg) scale(0.9)}to{opacity:1;transform:rotateX(0deg) scale(1)}}',
  //       'scale-out': '{from{opacity:1;transform:rotateX(0deg) scale(1)}to{opacity:0;transform:rotateX(-10deg) scale(0.95)}}',
  //     },

  //     timingFns: {
  //       'collapsible-slide-down': 'ease-out',
  //       'collapsible-slide-up': 'ease-out',
  //       'scale-in': 'ease',
  //       'scale-out': 'ease',
  //     },
  //   },

  //   boxShadow: {
  //     1: '0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
  //     2: '0 3px 12px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.07)',
  //     3: '0 12px 32px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.08)',
  //     4: '0 14px 44px rgba(0, 0, 0, 0.12), 0 3px 9px rgba(0, 0, 0, 0.12)',
  //     5: '0 18px 56px rgba(0, 0, 0, 0.16), 0 4px 12px rgba(0, 0, 0, 0.16)',
  //   },

  //   colors: {
  //     primary: '#3eaf7c',
  //   },

  //   fontFamily: {
  //     mono: 'var(--vp-font-family-mono)',
  //   },
  // },

  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
});
