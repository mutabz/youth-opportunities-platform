export default defineNuxtRouteMiddleware(() => {
  const userStore = useUserStore()
  userStore.init()

  if (!userStore.isAuthenticated) {
    return navigateTo('/join-free/LoginPage')
  }

  if (!userStore.isAdmin) {
    return navigateTo('/')
  }
})