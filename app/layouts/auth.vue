<template>
  <div class="auth-wrapper">
    
    <!-- Header -->
    <header class="auth-header">
      <div class="container">
        <h4 class="logo">Opportunities Portal</h4>
      </div>
    </header>

    <!-- Page Content -->
    <main class="auth-main">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="auth-footer">
      <small>© {{ year }} Opportunities Portal</small>
    </footer>

  </div>
</template>

<script setup>
import { useDataStore } from '~/stores/dataStore'
import { useRoute } from 'vue-router'

const dataStore = useDataStore()
const model = 'opportunities'

const route = useRoute()
const data = ref({
  page_url: '',
  referrer: ''
})

const trackPage = async () => {
  try {
    data.value = {
      page_url: window.location.pathname,
      referrer: document.referrer || null
    }

    await dataStore.createItem('track', data.value)
  } catch (e) {
    console.log("Tracking failed:", e)
  }
}

watch(
  () => route.fullPath,
  () => {
    trackPage()
  },
  { immediate: true } // also runs on first load
)
const year = new Date().getFullYear()
</script>

<style scoped>
.auth-wrapper{
  min-height:100vh;
  display:flex;
  flex-direction:column;
}

.auth-header{
  height:60px;
  background:#0d47a1;
  display:flex;
  align-items:center;
  color:white;
}

.container{
  width:100%;
  max-width:1100px;
  margin:auto;
  padding:0 20px;
}

.logo{
  font-weight:700;
}

.auth-main{
  flex:1;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:40px 20px;
}

.auth-footer{
  text-align:center;
  padding:15px;
  color:#ccc;
  font-size:0.85rem;
}
</style>