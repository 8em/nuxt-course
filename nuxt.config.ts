// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxt/content'],
  colorMode: {
    classSuffix: '',
  },
  app: {
    pageTransition: { name: 'page' },
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },
})
