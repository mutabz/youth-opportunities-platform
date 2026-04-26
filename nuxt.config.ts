// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.webp' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;600;700&display=swap'}
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

  compatibilityDate: '2025-07-15',

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
    '@nuxtjs/robots',
    '@nuxtjs/google-adsense'
  ],

  icon: {
    collections: ['fa6-solid']
  },

  'google-adsense': {
    id: 'ca-pub-4671012380656073', 
    onPageLoad: false,
    pauseOnRouteUpdate: false 
  },

  sitemap: {
    siteUrl: 'https://youthplatform.co.rw',

    sources: [
      '/api/sitemap-urls'
    ],

    exclude: [
      '/adm/**',
      '/user/**'
    ]
  },

  robots: {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/adm',
          '/user'
        ]
      }
    ],
    sitemap: 'https://youthplatform.co.rw/sitemap.xml'
  }
})
