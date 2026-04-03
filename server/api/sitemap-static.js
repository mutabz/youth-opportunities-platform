export default defineEventHandler(() => {

  const pages = [
    '/',
    '/opportunities',
    '/resources',
    '/mentors',
    '/support',
    '/legal',
    '/join-free',
    '/for-partners'
  ]

  return pages.map(page => ({
    loc: page
  }))
})