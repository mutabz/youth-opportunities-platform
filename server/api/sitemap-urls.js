import scholarships from '~/data/scholarships.json'
export default defineEventHandler(async () => {

  const base = 'https://oppoxx.pythonanywhere.com/api'

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
  // Scholarships slugs
  // -------------------------
  scholarships.forEach((sch) => {
    urls.push({
      loc: `/opportunities/scholarships/${sch.slug}`
    })
  })

  // -------------------------
  // OPPORTUNITIES
  // -------------------------
  opportunities.forEach((op) => {
    if (!op.id || !op.category) return

    urls.push({
      loc: `/opportunities/${op.category}-data/${op.id}`,
      lastmod: new Date(op.updated_at || op.created_at).toISOString()
    })
  })

  // -------------------------
  // RESOURCES
  // -------------------------
  resources.forEach((res) => {
    if (!res.id) return

    urls.push({
      loc: `/resources/${res.type}-data/${res.id}`,
      lastmod: new Date(res.created_at || res.updated_at).toISOString()
    })
  })

  // -------------------------
  // ORGANIZATIONS
  // -------------------------
  organizations.forEach((org) => {
    if (!org.id) return

    urls.push({
      loc: `/organizations/${org.id}`,
      lastmod: new Date(org.created_at || org.updated_at).toISOString()
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