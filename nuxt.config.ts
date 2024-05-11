// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  css: [
    '@/assets/sass/_base.sass'
  ],
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  app: {
    head: {
      title: 'investigation',
      meta: [{ name: 'description', content: 'investigation' }],
      link: [{ rel: 'icon', href: './icon.png' }],
    },
  },
});
