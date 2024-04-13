// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxt/fonts', '@nuxtjs/seo'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  site: {
    url: 'https://da-blog-vue-school.netlify.app',
    name: 'Da Vue Blog',
    description: 'Welcome to my awesome Blog!',
    defaultLocale: 'en' // not needed if you have @nuxtjs/i18n installed
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
