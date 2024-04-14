// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/test-utils/module',
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt'
  ],

  app: {
    pageTransition: { name: 'page' }
  },

  site: {
    url: 'https://da-blog-vue-school.netlify.app',
    name: 'Da Vue Blog',
    description: 'Welcome to my awesome Blog!',
    defaultLocale: 'en'
  },

  image: {
    domains: ['picsum.photos']
  },

  css: ['~/assets/styles/main.scss'],

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
