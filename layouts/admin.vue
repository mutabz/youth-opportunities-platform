<template>
  <section class="data-section">
    <AdminNavBar />
    <div class="main-section">
      <NuxtPage />
    </div>
</section>
</template>

<script setup>
import AdminNavBar from '~/components/AdminNavBar.vue'
import { useDataStore } from '~/stores/dataStore'
import { onMounted } from 'vue'
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

// Computed props for easier template binding
const items = computed(() => dataStore.items[model])
const loading = computed(() => dataStore.loading[model])
const error = computed(() => dataStore.error[model])

const truncate = (text, length) => {
  if (!text) return ''
  return text.length > length ? text.slice(0, length) + '...' : text
}

// Fetch data on component mount
onMounted(async () => {
  await dataStore.fetchData(model)
})

</script>

<style scoped>
.main-section {
  position: sticky;
  height: calc(100vh - 5.5rem);
  overflow: hidden;
  overflow: scroll;

  margin: 1rem;
  padding: 2rem;
  background-color: var(--bg);
  border: 1.5px solid rgba(0, 0, 0, .5);
  border-radius: 2rem;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, .50);
}

.data-section {
  position: fixed;
  max-height: 100vh;
  max-width: 100vw;
  min-height: 100vh;
  min-width: 100vw;
  overflow: hidden;

  background-color: var(--bg);
  box-shadow: 2px 2px 20px rgba(0, 0, 0, .50);
}


</style>