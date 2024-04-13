// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxt/fonts', '@nuxtjs/seo'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  nitro: {
    experimental: {
      database: true
    }
  },
  routeRules: {
    '/': {
      ssr: false
    }
  }
})
