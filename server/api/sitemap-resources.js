export default defineEventHandler(async () => {
  const base = 'https://oppoxx.pythonanywhere.com'

  try {
    const resources = await $fetch(`${base}/resources`)

    return resources.map(res => ({
      loc: `/resources/${res.id}`,
      lastmod: res.created_at
    }))

  } catch (err) {
    console.error(err)
    return []
  }
})