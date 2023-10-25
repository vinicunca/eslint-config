import { addServerPlugin, createResolver, defineNuxtModule } from '@nuxt/kit';

export default defineNuxtModule({
  meta: {
    compatibility: {
      bridge: false,
      nuxt: '^3.0.0',
    },
    configKey: 'vindocs',
    name: 'vindocs',
    version: '3.0.0',
  },

  setup(_) {
    const { resolve } = createResolver(import.meta.url);
    addServerPlugin(resolve('./runtime/nitro/content-post-process'));
  },
});
