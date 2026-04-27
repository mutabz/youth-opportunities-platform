export const useAuth = () => {
  const userStore = useUserStore()
  const dataStore = useDataStore()

  const loadingLogin = ref(false)
  const loadingRegister = ref(false)

  const login = async (credentials) => {
    try {
      loadingLogin.value = true

      await userStore.login(credentials)
      await navigateTo('/user/dashboard')
      return { success: true }
    } catch (error) {
      return {
        success: false,
        message: error?.message || 'Login failed'
      }
    } finally {
      loadingLogin.value = false
    }
  }

  const register = async (data) => {
    try {
      loadingRegister.value = true

      data.confirm_password = data.password

      await dataStore.createItem('register', data)

      return { success: true }
    } catch (error) {
      return {
        success: false,
        message: error?.message || 'Registration failed'
      }
    } finally {
      loadingRegister.value = false
    }
  }

  const logout = async () => {
    await userStore.logout()
    await navigateTo('/login')
  }

  return {
    login,
    register,
    logout,
    loadingLogin,
    loadingRegister
  }
}