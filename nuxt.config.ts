// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
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
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'investigation',
      meta: [{ name: 'description', content: 'investigation' }],
      link: [{ rel: 'icon', href: './icon.png' }],
    },
  },
  runtimeConfig: {
    public: {
      apiUrl: ''
    }
  }
});
