export default defineEventHandler(async () => {

  const base = 'https://oppoxx.pythonanywhere.com'

  let opportunities = []
  let resources = []
  let organizations = []

  try {
    const res = await Promise.all([
      $fetch(`${base}/opportunities`),
      $fetch(`${base}/opp_category`),
      $fetch(`${base}/resources`),
      $fetch(`${base}/organizations`)
    ])

    opportunities = res[0]
    resources = res[2]
    organizations = res[3]

  } catch (err) {
    console.error('API ERROR:', err)
  }

  const urls = []

  // -------------------------
  // OPPORTUNITIES
  // -------------------------
  opportunities.forEach((op) => {
    if (!op.id || !op.category) return

    urls.push({
      loc: `/opportunities/${op.category}-data/${op.id}`,
      lastmod: op.last_updated || op.created_at
    })
  })

  // -------------------------
  // RESOURCES
  // -------------------------
  resources.forEach((res) => {
    if (!res.id) return

    urls.push({
      loc: `/resources/${res.type}-data/${res.id}`,
      lastmod: res.created_at
    })
  })

  // -------------------------
  // ORGANIZATIONS
  // -------------------------
  organizations.forEach((org) => {
    if (!org.id) return

    urls.push({
      loc: `/organizations/${org.id}`,
      lastmod: org.updated_at || org.created_at
    })
  })

  // -------------------------
  // STATIC PAGES
  // -------------------------
  const staticPages = [
    '/',
    '/opportunities',
    '/resources',
    '/mentors',
    '/support',
    '/legal',
    '/join-free',
    '/for-partners'
  ]

  staticPages.forEach(page => {
    urls.push({ loc: page })
  })

  return urls
})