import { createRequire } from 'node:module';
import UnoCSS from 'unocss/vite';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

const require = createRequire(import.meta.url);

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        require('postcss-nested'),
      ],
    },
  },

  optimizeDeps: {
    exclude: [
      'vitepress',
    ],
  },

  plugins: [
    UnoCSS(),
    Components({
      dirs: [
        '.vitepress/components',
      ],
      include: [
        /\.vue$/,
        /\.vue\?vue/,
        /\.md$/,
      ],
    }),
  ],
});
