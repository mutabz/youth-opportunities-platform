// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  compatibilityDate: '2027-01-01',

  devtools: { enabled: false },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },

      title: 'Youth Opportunities Platform Rwanda',

      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Find scholarships, jobs, internships, grants and youth opportunities in Rwanda.' }
      ],

      link: [
        { rel: 'icon', type: 'image/webp', href: '/favicon.webp' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;600;700&display=swap'
        }
      ],

      script: [
        {
          async: true,
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4671012380656073',
          crossorigin: 'anonymous'
        }
      ]
    }
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_BACKEND_URL
    }
  },

  css: [
    '~/assets/css/styles.css',
    '~/assets/css/main.css',
    'bootstrap/dist/css/bootstrap.min.css'
  ],

  modules: [
    '@pinia/nuxt',
    '@nuxt/icon',
    'nuxt-seo'
  ],

  icon: {
    collections: ['fa6-solid']
  },

  site: {
    url: 'https://youthplatform.co.rw'
  },

  sitemap: {
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
        disallow: ['/adm', '/user']
      }
    ],

    sitemap: 'https://youthplatform.co.rw/sitemap.xml'
  }
})
