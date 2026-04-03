export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore()

  // Make sure store is initialized
  userStore.init()

  if (!userStore.isAuthenticated) {
    return navigateTo('/join-free/LoginPage')
  }
})