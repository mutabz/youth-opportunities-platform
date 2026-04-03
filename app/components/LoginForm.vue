<template>
  <div class="auth-wrapper item">
    <div class="centered">
      <!-- Auth mx-2 -->
      <div class="auth-mx-2 category-card glow-animated">
        <!-- Login -->
        <div v-if="activeForm === 'login'" class="auth-form active">
          <h2 class="title text-forest">Welcome Back</h2>
          <form @submit.prevent="handleLogin">
            <div class="input-group">
              <span class="content mb-2">Email Address</span>
              <input type="email" v-model="loginForm.email" placeholder="e.g., yourname@email.com" required/>
            </div>

            <div class="pw-field input-group">
              <span for="password" class="content mb-2">Password</span>
              <input v-model="loginForm.password" id="password" class="pw-input" :type="showPassword ? 'text' : 'password'" placeholder="Enter password" aria-label="Password"/>
              <button @click="TogglePSW" type="button" class="pw-toggle" :aria-label="showPassword ? 'Hide password' : 'Show password'" :title="showPassword ? 'Hide password' : 'Show password'">
                <svg v-if="!showPassword" class="pw-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path d="M12 5c-5 0-9 4.5-10 7 1 2.5 5 7 10 7s9-4.5 10-7c-1-2.5-5-7-10-7zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                </svg>
                <svg v-else class="pw-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path d="M2 4.27L3.28 3 21 20.72 19.73 22l-2.38-2.38C15.72 20.47 13.9 21 12 21c-5 0-9-4.5-10-7 0-1.06.44-2.18 1.16-3.3L2 4.27zM12 7c2.05 0 3.88.88 5.19 2.28l-1.42 1.42A4.978 4.978 0 0 0 12 9c-.34 0-.67.03-1 .09L9.11 7.2C9.96 7.07 10.97 7 12 7z"/>
                </svg>
              </button>
            </div>

            <button class="auth-button btn btn-primary w-100 btn-lg mt-2" type="submit"><span v-if="loading_login"  class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Login</button>
            <button class="auth-button btn w-100 btn-outline-warning btn-lg mt-2"><i class="fab fa-google"></i> Google</button>
          </form>

          <p class="auth-toggle content">
            Don't have an account?
            <a href="#" @click.prevent="activeForm = 'register'">Register Now</a>
          </p>
        </div>

        <!-- Register -->
        <div v-else class="auth-form active">
          <h2 class="title">Create Account</h2>
          <form @submit.prevent="registerUser">
            <div class="input-group">
              <span class="content mb-2">Full Name</span>
              <input type="text" v-model="registerForm.full_name" placeholder="Enter Your Full Name" required/>
            </div>

            <div class="input-group">
              <span class="content mb-2">Email Address</span>
              <input type="email" v-model="registerForm.email" placeholder="e.g., yourname@email.com" required/>
            </div>

            <div class="pw-field input-group">
              <span for="password" class="content mb-2">Password</span>
              <input v-model="registerForm.password" id="password" class="pw-input" :type="showPassword ? 'text' : 'password'" placeholder="Enter password" aria-label="Password"/>
              <button @click="TogglePSW" type="button" class="pw-toggle" :aria-label="showPassword ? 'Hide password' : 'Show password'" :title="showPassword ? 'Hide password' : 'Show password'">
                <svg v-if="!showPassword" class="pw-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path d="M12 5c-5 0-9 4.5-10 7 1 2.5 5 7 10 7s9-4.5 10-7c-1-2.5-5-7-10-7zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                </svg>
                <svg v-else class="pw-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path d="M2 4.27L3.28 3 21 20.72 19.73 22l-2.38-2.38C15.72 20.47 13.9 21 12 21c-5 0-9-4.5-10-7 0-1.06.44-2.18 1.16-3.3L2 4.27zM12 7c2.05 0 3.88.88 5.19 2.28l-1.42 1.42A4.978 4.978 0 0 0 12 9c-.34 0-.67.03-1 .09L9.11 7.2C9.96 7.07 10.97 7 12 7z"/>
                </svg>
              </button>
            </div>

            <button class="auth-button btn w-100 btn-primary btn-lg" type="submit">
              <span v-if="loading_register"  class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              <span v-if="loading_register" class="">Registering</span> <span v-else>Register</span></button>
          </form>

          <p class="auth-toggle content">
            Already have an account?
            <a href="#" @click.prevent="activeForm = 'login'">Login</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth"
})

const { login, register, loadingLogin, loadingRegister } = useAuth()

const activeForm = ref('login')
const showPassword = ref(false)

const loginForm = ref({
  email: '',
  password: ''
})

const registerForm = ref({
  full_name: '',
  email: '',
  password: '',
  confirm_password: ''
})

const TogglePSW = () => {
  showPassword.value = !showPassword.value
}

const handleLogin = async () => {
  const res = await login(loginForm.value)

  if (!res.success) {
    alert(res.message)
  }
}

const registerUser = async () => {
  const res = await register(registerForm.value)

  if (res.success) {
    activeForm.value = 'login'
  } else {
    alert(res.message)
  }
}
</script>

<style scoped>
/* Layout */
.auth-wrapper {
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  background: linear-gradient(197deg, #5CD06B 0%, #1C64AE 100%);
  background: linear-gradient(135deg, #0a0f24, #101b3c, #0c0f29);
}

.centered {
  height: 100%;
  display: flex;
  align-items: center;
}

/* Header */
.app-header {
  width: 100%;
  background-color: #0d47a1;
  color: white;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-logo {
  font-size: 1.4rem;
  font-weight: bold;
}

/* mx-2 */
.auth-mx-2 {
  width: 90%;
  max-width: 400px;
  margin: 50px auto 0;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 30px 25px;  
}

/* Forms */
.auth-form {
  animation: fadeIn 0.4s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.auth-form h2 {
  text-align: center;
  margin-bottom: 25px;
}

/* Inputs */
.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #555;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 40px;
  font-size: 1rem;
  background: transparent;
  color: #fff;
}

.input-group input:focus {
  outline: none;
  border-color: #42a5f5;
  box-shadow: 0 0 0 2px rgba(66, 165, 245, 0.2);
}

/* Button */
.auth-button {
  width: 100%;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
}

.btn {
  padding: 0.5rem;
  font-size: 1rem;
}

.btn-primary {
  background: linear-gradient(35deg, #2D6A4F 0%, #52B788 50%, #95D5B2 100%);
  border: none;
}

.btn-primary:hover {
  background: linear-gradient(35deg, #95D5B2 0%, #52B788 50%, #2D6A4F 100%);
  border: none;
}

/* Toggle */
.auth-toggle {
  text-align: center;
  margin-top: 25px;
  font-size: 0.9rem;
}

.auth-toggle a {
  color: #0d47a1;
  font-weight: 500;
  text-decoration: none;
}

.auth-toggle a:hover {
  text-decoration: underline;
}
</style>
