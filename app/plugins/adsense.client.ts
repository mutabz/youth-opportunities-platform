export default defineNuxtPlugin(() => {
  useHead({
    script: [
      {
        async: true,
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4671012380656073',
        crossorigin: 'anonymous'
      }
    ]
  })
})