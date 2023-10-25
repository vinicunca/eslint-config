import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

import { presetTypography } from './preset-typography';

export default defineConfig({
  extendTheme: (theme: any) => {
    theme.fontFamily.sans = `Inter var,${theme.fontFamily.sans}`;
    theme.fontFamily.mono = `Fira Code VF,${theme.fontFamily.mono}`;
  },

  layers: {
    vinicunca: 1,
  },

  presets: [
    presetIcons({
      collections: {
        vin: async (iconName) => {
          if (iconName === 'eslint-style') {
            return await fetch('https://eslint.style/logo.svg').then((res) => res.text());
          } else if (iconName === 'yaml') {
            return await fetch('https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/yaml.svg').then((res) => res.text());
          }
        },
      },
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },

      scale: 1.25,
    }),
    presetTypography(),
    presetUno(),
  ],

  safelist: [
    'i-logos:javascript',
    'i-logos:typescript-icon',
    'i-logos:vue',
    'i-logos:react',
    'i-simple-icons:eslint',
    'i-fa-regular:comments',
    'i-logos:nodejs-icon',
    'i-logos:nodejs-icon-alt',
    'i-simple-line-icons:docs',
    'i-carbon:document-import',
    'i-openmoji:unicorn',
    'i-vin:eslint-style',
    'i-vin:yaml',
    'i-vscode-icons:file-type-tsconfig',
    'i-file-icons:test-generic',
    'i-carbon:json',
    'i-simple-icons:markdown',
  ],

  theme: {
    animation: {
      durations: {
        'collapsible-slide-down': '0.3s',
        'collapsible-slide-up': '0.3s',
        'enter-from-left': '0.25s',
        'enter-from-right': '0.25s',
        'exit-to-left': '0.25s',
        'exit-to-right': '0.25s',
        'fade-in': '0.2s',
        'fade-out': '0.2s',
        'scale-in': '0.2s',
        'scale-out': '0.2s',
        'slide-down-and-fade': '0.4s',
        'slide-left-and-fade': '0.4s',
        'slide-right-and-fade': '0.4s',
        'slide-up-and-fade': '0.4s',
      },

      keyframes: {
        'collapsible-slide-down': '{from {height: 0} to {height: var(--radix-collapsible-content-height)}}',
        'collapsible-slide-up': '{from {height: var(--radix-collapsible-content-height)} to {height: 0}}',
        'enter-from-left': '{from{opacity:0;transform:translateX(-200px)}to{opacity:1;transform:translateX(0)}}',
        'enter-from-right': '{from{opacity:0;transform:translateX(200px)}to{opacity:1;transform:translateX(0)}}',
        'exit-to-left': '{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(-200px)}}',
        'exit-to-right': '{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(200px)}}',
        'fade-in': '{from{opacity:0}to{opacity:1}}',
        'fade-out': '{from{opacity:1}to{opacity:0}}',
        'scale-in': '{from{opacity:0;transform:rotateX(-10deg) scale(0.9)}to{opacity:1;transform:rotateX(0deg) scale(1)}}',
        'scale-out': '{from{opacity:1;transform:rotateX(0deg) scale(1)}to{opacity:0;transform:rotateX(-10deg) scale(0.95)}}',
        'slide-down-and-fade': '{from {opacity: 0;transform:translateY(-2px)} to {opacity: 1;transform: translateY(0)}}',
        'slide-left-and-fade': '{from {opacity: 0;transform:translateX(2px)} to {opacity: 1;transform: translateX(0)}}',
        'slide-right-and-fade': '{from {opacity: 0;transform:translateX(-2px)} to {opacity: 1;transform: translateX(0)}}',
        'slide-up-and-fade': '{from {opacity: 0;transform:translateY(2px)} to {opacity: 1;transform: translateY(0)}}',
      },

      timingFns: {
        'collapsible-slide-down': 'ease-out',
        'collapsible-slide-up': 'ease-out',
        'enter-from-left': 'ease',
        'enter-from-right': 'ease',
        'exit-to-left': 'ease',
        'exit-to-right': 'ease',
        'fade-in': 'ease',
        'fade-out': 'ease',
        'scale-in': 'ease',
        'scale-out': 'ease',
        'slide-down-and-fade': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left-and-fade': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right-and-fade': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up-and-fade': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },

    boxShadow: {
      1: '0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
      2: '0 3px 12px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.07)',
      3: '0 12px 32px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.08)',
      4: '0 14px 44px rgba(0, 0, 0, 0.12), 0 3px 9px rgba(0, 0, 0, 0.12)',
      5: '0 18px 56px rgba(0, 0, 0, 0.16), 0 4px 12px rgba(0, 0, 0, 0.16)',
    },

    breakpoints: {
      '2xl': '1440px',
      'lg': '960px',
      'md': '768px',
      'sm': '640px',
      'xl': '1280px',
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '24px',
      },
    },
  },

  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],

  variants: [
    (matcher) => {
      if (matcher.startsWith('vin:')) {
        return {
          matcher: matcher.replace('vin:', 'uno-layer-vinicunca:'),
        };
      }
    },
  ],
});
