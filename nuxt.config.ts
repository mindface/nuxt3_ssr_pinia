// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  css: [
    '@/assets/_base.sass'
  ],
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
});
