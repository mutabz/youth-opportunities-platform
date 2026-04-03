import axios from 'axios'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const api = axios.create({
    baseURL: config.public.baseURL
  })

  // Add token automatically
  api.interceptors.request.use((requestConfig) => {
    const token = useCookie('token').value
    if (token) {
      requestConfig.headers.Authorization = `Bearer ${token}`
    }
    return requestConfig
  })

  return {
    provide: {
      api
    }
  }
})