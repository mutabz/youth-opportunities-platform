export default defineEventHandler(async () => {
  const base = 'https://oppoxx.pythonanywhere.com'

  try {
    const opportunities = await $fetch(`${base}/opportunities`)

    return opportunities.map(op => ({
      loc: `/opportunities/${op.category}-data/${op.id}`,
      lastmod: op.last_updated || op.created_at
    }))

  } catch (err) {
    console.error(err)
    return []
  }
})