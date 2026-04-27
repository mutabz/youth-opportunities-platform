<template>
    <div class="main-container">
        
        <div class="left-panel " v-if="device === 'desktop'">
            <div class="brand-logo">
                <div class="logo-placeholder">YOP</div>
            </div>
            
            <h1 class="hero-text">
                Welcome to<br>
                YOUTH OPPORTUNITIES<br>
                PLAFORM<br>

                <br>
                <span class="text-blue">Access Thousands of Opportunities</span>
            </h1>

            <div class="image-collage-placeholder">
              <div class="header">
                <h5 class="text-blue fw-bold text-center">Join us Discover Opportunities That Shape Your Future</h5>
              </div>
              <div class="content">
                <p class="mt-2 mb-2">The Youth Opportunities Platform (YOP) connects young people with life-changing opportunities including scholarships, internships, jobs, training programs, and events from around the world.</p>
                <p class="mt-2 mb-2">Our mission is to empower youth by making access to opportunities simple, transparent, and accessible in one place.</p>
                <p class="mt-2 mb-2">Join thousands of students, graduates, and innovators who use YOP to find opportunities that match their ambitions.</p>
              </div>
            </div>
        </div>

        <div class="right-panel">
            <div class="">
              <h6 class="text-blue fw-bold text-center">Want to browse more opportunities: (Funding & Grants, Internships, Jobs, Scholarships) You're in right place to be....</h6>
              <div class="right-panel">
                <h6 class="text-blue fw-bold text-center mb-5">Login Or Register to get started</h6>
                <div class="r">

                  <!-- LOGIN FORM -->
                  <form v-if="activeForm === 'user-login'" @submit.prevent="handleLogin">
                    <h2>Login to YOP</h2>
                    <h2 class="mb-5">Login as normal user<strong> or </strong> <span @click="activeForm='admin-login'" class="text-blue"> Login As admin or partner</span></h2>

                    <div class="form-floating mb-3">
                      <input type="email" class="form-control" id="loginEmail" v-model="loginForm.email" placeholder="name@example.com" required >
                      <label for="loginEmail">Email address</label>
                    </div>

                    <div class="form-floating mb-3 position-relative">
                      <input :type="showPassword ? 'text' : 'password'" class="form-control" id="loginPassword" v-model="loginForm.password" placeholder="Password" required >
                      <label for="loginPassword">Password</label>

                      <button type="button" class="btn btn-sm position-absolute top-50 end-0 translate-middle-y me-2" @click="TogglePSW" >
                        👁
                      </button>
                    </div>



                    <button type="submit" class="btn-primary">
                      <span v-if="loadingLogin">Loading...</span>
                      <span v-else>Login</span>
                    </button>

                    <a href="#" class="forgot-password">
                      Forgot password?
                    </a>

                    <div class="divider"></div>

                    <button type="button" class="btn-secondary" @click="activeForm = 'user-reg'" >
                      Create new account
                    </button>

                    <button @click="activeForm = 'partner-reg'" class="btn text-center mt-3 text-blue">
                      Create new partner's account?
                    </button>
                  </form>

                  <!-- ADMIN LOGIN FORM -->
                  <form v-if="activeForm === 'admin-login'" @submit.prevent="handleLogin">
                    <h2>Admin Login <strong> or </strong> <span @click="activeForm='user-login'" class="text-blue"> Login As Normal User</span></h2>
                    <div class="form-floating mb-3">
                      <input type="email" class="form-control" v-model="loginForm.email" placeholder="Email" required>
                      <label>Email</label>
                    </div>
                    <div class="form-floating mb-3 position-relative">
                      <input :type="showPassword ? 'text' : 'password'" class="form-control" v-model="loginForm.password" placeholder="Password" required>
                      <button type="button" class="btn btn-sm position-absolute top-50 end-0 translate-middle-y me-2" @click="TogglePSW">👁</button>
                      <label>Password</label>
                    </div>

                    <button type="submit" class="btn-primary">
                      <span v-if="loadingLogin">Loading...</span>
                      <span v-else>Login</span>
                    </button>

                    <a href="#" class="forgot-password">
                      Forgot password?
                    </a>

                    <div class="divider"></div>

                    <button type="button" class="btn-secondary" @click="activeForm = 'user-reg'" >
                      Create new account
                    </button>

                    <button type="button" @click="activeForm = 'partner-reg'" class="btn text-center mt-3 text-blue">
                      Create new partner's account?
                    </button>
                  </form>

                  <!-- REGISTER FORM -->
                  <form v-if="activeForm === 'user-reg'" @submit.prevent="registerUser">
                    <h2>Create Account</h2>

                    <!-- FULL NAME -->
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" id="regFullName" v-model="registerForm.full_name" placeholder="Full name" required >
                      <label for="regFullName">Full name</label>
                    </div>

                    <!-- EMAIL -->
                    <div class="form-floating mb-3">
                      <input type="email" class="form-control" id="regEmail" v-model="registerForm.email" placeholder="Email address" required >
                      <label for="regEmail">Email address</label>
                    </div>

                    <!-- PASSWORD -->
                    <div class="form-floating mb-3 position-relative">
                      <input :type="showPassword ? 'text' : 'password'" class="form-control" id="regPassword" v-model="registerForm.password" placeholder="Password" required >
                      <label for="regPassword">Password</label>

                      <button type="button" class="btn btn-sm position-absolute top-50 end-0 translate-middle-y me-2" @click="TogglePSW" >
                        👁
                      </button>
                    </div>

                    <!-- CONFIRM PASSWORD -->
                    <div class="form-floating mb-3 position-relative">
                      <input :type="showPassword ? 'text' : 'password'" class="form-control" id="regConfirmPassword" v-model="registerForm.confirm_password" placeholder="Confirm password" required >
                      <label for="regConfirmPassword">Confirm password</label>

                      <button type="button" class="btn btn-sm position-absolute top-50 end-0 translate-middle-y me-2" @click="TogglePSW" >
                        👁
                      </button>
                    </div>

                    <!-- SUBMIT -->
                    <button type="submit" class="btn-primary w-100">
                      <span v-if="loadingRegister">Registering...</span>
                      <span v-else>Register</span>
                    </button>

                    <div class="divider"></div>

                    <button type="button" class="btn-secondary w-100" @click="activeForm = 'user-login'" >
                      Back to Login
                    </button>
                  </form>

                  <!-- PARTNER REGISTRATION FORM -->
                  <form v-if="activeForm === 'partner-reg'" @submit.prevent="registerPartner">
                    <h2>Partner Registration</h2>

                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" v-model="partnerForm.organization" placeholder="Organization Name" required>
                      <label>Organization Name</label>
                    </div>

                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" v-model="partnerForm.representative" placeholder="Representative Name" required>
                      <label>Representative Name</label>
                    </div>

                    <div class="form-floating mb-3">
                      <input type="email" class="form-control" v-model="partnerForm.email" placeholder="Email" required>
                      <label>Email</label>
                    </div>

                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" v-model="partnerForm.phone" placeholder="Phone Number" required>
                      <label>Phone Number</label>
                    </div>

                    <div class="form-floating mb-3">
                      <textarea class="form-control" v-model="partnerForm.opportunity_description" rows="4" placeholder="Opportunity Description" required></textarea>
                      <label>Opportunity Description</label>
                    </div>

                    <button type="submit" class="btn-primary w-100">Submit Partner Application</button>
                    <div class="divider"></div>
                    <button type="button" class="btn-secondary w-100" @click="activeForm = 'user-login'" >
                      Back to Login
                    </button>
                  </form>

                  <div class="footer-logo">
                    <NuxtLink to="/" class="meta-placeholder">Go to Home page</NuxtLink>
                  </div>
                </div>
              </div>
            </div>
        </div>


    </div>

</template>

<script setup>
import { useDeviceType } from "@/composables/useDeviceType";

const { device } = useDeviceType();
const { login, register, loadingLogin, loadingRegister } = useAuth()

const activeForm = ref('user-login')
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

const partnerForm = ref({})

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


definePageMeta({
  middleware: 'guest',  
  layout: "auth"
})
</script>

<style scoped>
/* Layout */
.auth-wrapper {
}

.divider {
  margin: 1rem;
  border: 1px solid rgba(200, 200, 200, 1.0);
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



* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #ffffff;
    color: #1c1e21;
}

/* --- Main Layout --- */
.main-container {
    display: flex;
    min-height: 100vh;
}

.left-panel, .right-panel {
    flex: 1; /* Splits the screen 50/50 */
    display: flex;
    flex-direction: column;
}

/* --- Left Panel Styles --- */
.left-panel {
    padding: 40px 60px;
    border-right: 2px solid rgba(200, 200, 200, 1.0);
    position: relative;
    overflow: hidden;
}


.hero-text {
    font-size: 2.5rem;
    line-height: 1.1;
    font-weight: 700;
    color: #1c1e21;
    z-index: 2;
}

.text-blue {
    color: #0866ff;
}

.image-collage-placeholder {
    /* This is a visual placeholder for where the images go */
    margin-top: 40px;
    padding: 1rem;
    flex-grow: 1;
    background-color: #f0f2f5;
    border-radius: 12px;
    border: 2px dashed #ccd0d5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #606770;
    z-index: 1;
}


/* --- Right Panel Styles --- */
.right-panel {
    align-items: center;
    justify-content: center;
    padding: 1rem;
}

.form-container {
    width: 100%;
    max-width: 400px; /* Matches the narrow form in the image */
    display: flex;
    flex-direction: column;
}

.form-container h2 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 25px;
    color: #1c1e21;
}

form {
    display: flex;
    flex-direction: column;
}

.input-group {
    margin-bottom: 15px;
}

input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 16px;
    font-size: 16px;
    border: 1px solid #ccd0d5;
    border-radius: 10px;
    outline: none;
    transition: border-color 0.2s;
}

input:focus {
    border-color: #0866ff;
}

.btn-primary {
    background-color: #0866ff;
    color: white;
    font-size: 17px;
    font-weight: 600;
    padding: 14px;
    border: none;
    border-radius: 50px; /* Pill shape */
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 0.2s;
}

.btn-primary:hover {
    background-color: #0056e0;
}

.forgot-password {
    text-align: center;
    color: #1c1e21;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    margin: 20px 0;
}

.forgot-password:hover {
    text-decoration: underline;
}

.btn-secondary {
    background-color: transparent;
    color: #0866ff;
    font-size: 16px;
    font-weight: 600;
    padding: 14px;
    border: 1px solid #0866ff;
    border-radius: 50px; /* Pill shape */
    cursor: pointer;
    transition: background-color 0.2s;
}

.btn-secondary:hover {
    background-color: #f0f8ff;
}

/* --- Footer Logo --- */
.footer-logo {
    margin-top: 40px;
    text-align: center;
}

.meta-placeholder {
    color: #1c1e21;
    font-weight: bold;
    font-size: 16px;
}
</style>
