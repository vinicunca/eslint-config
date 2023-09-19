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

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '24px',
      },
    },

    breakpoints: {
      'sm': '640px',
      'md': '768px',
      'lg': '960px',
      'xl': '1280px',
      '2xl': '1440px',
    },

    boxShadow: {
      1: '0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
      2: '0 3px 12px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.07)',
      3: '0 12px 32px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.08)',
      4: '0 14px 44px rgba(0, 0, 0, 0.12), 0 3px 9px rgba(0, 0, 0, 0.12)',
      5: '0 18px 56px rgba(0, 0, 0, 0.16), 0 4px 12px rgba(0, 0, 0, 0.16)',
    },

    animation: {
      keyframes: {
        'collapsible-slide-down': '{from {height: 0} to {height: var(--radix-collapsible-content-height)}}',
        'collapsible-slide-up': '{from {height: var(--radix-collapsible-content-height)} to {height: 0}}',
        'enter-from-right': '{from{opacity:0;transform:translateX(200px)}to{opacity:1;transform:translateX(0)}}',
        'enter-from-left': '{from{opacity:0;transform:translateX(-200px)}to{opacity:1;transform:translateX(0)}}',
        'exit-to-right': '{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(200px)}}',
        'exit-to-left': '{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(-200px)}}',
        'scale-in': '{from{opacity:0;transform:rotateX(-10deg) scale(0.9)}to{opacity:1;transform:rotateX(0deg) scale(1)}}',
        'scale-out': '{from{opacity:1;transform:rotateX(0deg) scale(1)}to{opacity:0;transform:rotateX(-10deg) scale(0.95)}}',
        'fade-in': '{from{opacity:0}to{opacity:1}}',
        'fade-out': '{from{opacity:1}to{opacity:0}}',
        'slide-down-and-fade': '{from {opacity: 0;transform:translateY(-2px)} to {opacity: 1;transform: translateY(0)}}',
        'slide-left-and-fade': '{from {opacity: 0;transform:translateX(2px)} to {opacity: 1;transform: translateX(0)}}',
        'slide-up-and-fade': '{from {opacity: 0;transform:translateY(2px)} to {opacity: 1;transform: translateY(0)}}',
        'slide-right-and-fade': '{from {opacity: 0;transform:translateX(-2px)} to {opacity: 1;transform: translateX(0)}}',
      },

      durations: {
        'collapsible-slide-down': '0.3s',
        'collapsible-slide-up': '0.3s',
        'scale-in': '0.2s',
        'scale-out': '0.2s',
        'fade-in': '0.2s',
        'fade-out': '0.2s',
        'enter-from-left': '0.25s',
        'enter-from-right': '0.25s',
        'exit-to-left': '0.25s',
        'exit-to-right': '0.25s',
        'slide-down-and-fade': '0.4s',
        'slide-left-and-fade': '0.4s',
        'slide-up-and-fade': '0.4s',
        'slide-right-and-fade': '0.4s',
      },

      timingFns: {
        'collapsible-slide-down': 'ease-out',
        'collapsible-slide-up': 'ease-out',
        'scale-in': 'ease',
        'scale-out': 'ease',
        'fade-in': 'ease',
        'fade-out': 'ease',
        'enter-from-left': 'ease',
        'enter-from-right': 'ease',
        'exit-to-left': 'ease',
        'exit-to-right': 'ease',
        'slide-down-and-fade': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left-and-fade': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up-and-fade': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right-and-fade': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },

  presets: [
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },

      collections: {
        docs: {
          'sun': generateIcon('M12 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm0-10c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zM12 4c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1s1 .4 1 1v2c0 .6-.4 1-1 1zM12 24c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1s1 .4 1 1v2c0 .6-.4 1-1 1zM5.6 6.6c-.3 0-.5-.1-.7-.3L3.5 4.9c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l1.4 1.4c.4.4.4 1 0 1.4-.1.2-.4.3-.7.3zM19.8 20.8c-.3 0-.5-.1-.7-.3l-1.4-1.4c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l1.4 1.4c.4.4.4 1 0 1.4-.2.2-.5.3-.7.3zM3 13H1c-.6 0-1-.4-1-1s.4-1 1-1h2c.6 0 1 .4 1 1s-.4 1-1 1zM23 13h-2c-.6 0-1-.4-1-1s.4-1 1-1h2c.6 0 1 .4 1 1s-.4 1-1 1zM4.2 20.8c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.4-1.4c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-1.4 1.4c-.2.2-.4.3-.7.3zM18.4 6.6c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.4-1.4c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-1.4 1.4c-.2.2-.5.3-.7.3z'),
          'moon': generateIcon('M12.1 22h-.9c-5.5-.5-9.5-5.4-9-10.9.4-4.8 4.2-8.6 9-9 .4 0 .8.2 1 .5.2.3.2.8-.1 1.1-2 2.7-1.4 6.4 1.3 8.4 2.1 1.6 5 1.6 7.1 0 .3-.2.7-.3 1.1-.1.3.2.5.6.5 1-.2 2.7-1.5 5.1-3.6 6.8-1.9 1.4-4.1 2.2-6.4 2.2zM9.3 4.4c-2.9 1-5 3.6-5.2 6.8-.4 4.4 2.8 8.3 7.2 8.7 2.1.2 4.2-.4 5.8-1.8 1.1-.9 1.9-2.1 2.4-3.4-2.5.9-5.3.5-7.5-1.1-2.8-2.2-3.9-5.9-2.7-9.2z'),
          'edit': generateIcon('M7.3 16.7c.2.2.4.3.7.3h.2l4-1c.2-.1.4-.2.5-.3l9.5-9.5c1.2-1.2 1.2-3.2 0-4.4C21 .6 19 .6 17.8 1.8l-9.5 9.5c-.2.2-.3.3-.3.5l-1 4c-.1.3 0 .7.3.9Zm2.1-2.1.5-2.1 9.3-9.3c.4-.4 1.2-.4 1.6 0 .4.5.4 1.2 0 1.6l-9.3 9.3-2.1.5ZM4 23h14c1.7 0 3-1.3 3-3v-7c0-.6-.4-1-1-1s-1 .4-1 1v7c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h7c.6 0 1-.4 1-1s-.4-1-1-1H4C2.3 3 1 4.3 1 6v14c0 1.7 1.3 3 3 3Z'),
          'align-left': generateIcon('M3 7h18c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1Zm0 4h14c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1Zm18 4H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1ZM3 19h14c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1Z'),
        },
      },
    }),
    presetTypography(),
    presetUno(),
  ],

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

  safelist: [
    'i-logos:javascript',
    'i-logos:typescript-icon',
    'i-logos:vue',
    'i-logos:react',
  ],
});

function generateIcon(path: string) {
  return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="${path}" />
    </svg>
  
  `;
}
