import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {

  state: () => ({
    token: null,
    user: null,
    message: '',
    loading: false,
    error: null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
    isAdmin: (state) => state.user?.role === 'admin',
    isPartner: (state) => state.user?.role.toLowerCase() === 'partner',
    userName: (state) => state.user?.full_name || '',
  },

  actions: {

    /* ================= INIT ================= */
    init() {
      const tokenCookie = useCookie('token')
      const userCookie = useCookie('user')

      this.token = tokenCookie.value || null
      this.user = userCookie.value || null
    },

    /* ================= LOGIN ================= */
    async login(payload) {

      const { $api } = useNuxtApp()
      const router = useRouter()

      this.loading = true
      this.error = null

      try {
        const res = await $api.post('/login', payload)

        this.token = res.data.access_token
        useCookie('token').value = this.token

        if (res.data.message) {
          this.message = res.data.message
        }

        await this.fetchUser()

        await router.push('/user/dashboard')
      } catch (err) {
        this.error =
          err.response?.data?.message || 'Login failed'
        await this.logout()
      } finally {
        this.loading = false
      }
    },

    /* ================= FETCH USER ================= */
    async fetchUser() {

      if (!this.token) return

      const { $api } = useNuxtApp()

      try {
        const res = await $api.get('/users/me')

        this.user = res.data
        useCookie('user').value = res.data

      } catch (err) {
        this.error =
          err.response?.data?.message || 'Failed to fetch user'
        await this.logout()
      }
    },

    /* ================= LOGOUT ================= */
    async logout() {

      const router = useRouter()

      this.token = null
      this.user = null

      useCookie('token').value = null
      useCookie('user').value = null

      await router.push('/')
    },

    /* ================= REQUEST RESET ================= */
    async request_psw_reset(payload) {

      const { $api } = useNuxtApp()
      const router = useRouter()

      await $api.post('/request_password_reset_token', payload)

      await router.push('/reset-password')
    },

    /* ================= RESET PASSWORD ================= */
    async reset_password(payload) {

      const { $api } = useNuxtApp()
      const router = useRouter()

      const res = await $api.post('/reset_password_token', payload)

      if (res.data.email) {
        await router.push(
          payload.type === 'admin'
            ? '/admin/login'
            : '/login'
        )
      }
    }

  }

})