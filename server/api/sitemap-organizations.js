export default defineEventHandler(async () => {
  const base = 'https://oppoxx.pythonanywhere.com'

  try {
    const organizations = await $fetch(`${base}/organizations`)

    return organizations.map(org => ({
      loc: `/organizations/${org.id}`,
      lastmod: org.updated_at || org.created_at
    }))

  } catch (err) {
    console.error(err)
    return []
  }
})