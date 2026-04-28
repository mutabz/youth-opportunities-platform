export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'vercel'
  },
  compatibilityDate: '2024-10-01',
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', href: '/favicon.webp' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;600;700&display=swap'
        }
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_BACKEND_URL
    }
  },

  devtools: { enabled: false },

  css: [
    '~/assets/css/styles.css',
    '~/assets/css/main.css',
    'bootstrap/dist/css/bootstrap.min.css'
  ],

  modules: [
    '@pinia/nuxt',
    '@nuxt/icon',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  icon: {
    collections: ['fa6-solid']
  },

  sitemap: {
    siteUrl: 'https://youthplatform.co.rw',
    sources: ['/api/sitemap-urls'],
    exclude: ['/adm/**', '/user/**']
  },

  robots: {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/adm', '/user']
      }
    ],
    sitemap: 'https://youthplatform.co.rw/sitemap.xml'
  }
})