export default defineNuxtRouteMiddleware(() => {
  const userStore = useUserStore()
  userStore.init()

  if (userStore.isAuthenticated) {
    return navigateTo('/')
  }
})