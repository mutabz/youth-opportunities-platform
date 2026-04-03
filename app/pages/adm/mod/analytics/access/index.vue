<template>
  <main class="admin-dashboard">

    <!-- HEADER -->
    <header class="app-header d-flex justify-content-between align-items-center">
      <div class="d-flex">
        <button class="btn me-3" @click="$router.back()">
          ←
        </button>
        <h3>Analytics Dashboard</h3>
      </div>

      <button class="btn btn-secondary" @click="refreshData()">
        Refresh
      </button>
    </header>

    <!-- SUMMARY CARDS -->
    <section class="row mt-4 g-3">

      <div class="col-md-3">
        <div class="card shadow-lg border-0">
          <div class="card-body">
            <h6>Total Visits</h6>
            <h3>{{ analytics.total_visits }}</h3>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card shadow-lg border-0">
          <div class="card-body">
            <h6>Top Device</h6>
            <h3>{{ topDevice }}</h3>
          </div>
        </div>
      </div>

    </section>

    <!-- INSIGHTS -->
    <section class="row mt-4">

      <!-- TOP COUNTRIES -->
      <div class="col-md-4">
        <div class="card p-3 shadow-sm">
          <h5>Top Countries</h5>
          <ul class="list-group">
            <li v-for="c in analytics.top_countries" :key="c.country" class="list-group-item d-flex justify-content-between">
              <span>{{ c.country }}</span>
              <span>{{ c.count }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- TOP PAGES -->
      <div class="col-md-4">
        <div class="card p-3 shadow-sm">
          <h5>Top Pages</h5>
          <ul class="list-group">
            <li v-for="p in analytics.top_pages" :key="p.page" class="list-group-item d-flex justify-content-between">
              <span class="small">{{ p.page }}</span>
              <span>{{ p.count }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-md-4">
      <!-- DEVICES -->
      <div class="">
        <div class="card p-3 shadow-sm">
          <h5>Devices</h5>
          <ul class="list-group">
            <li v-for="d in analytics.devices" :key="d.device" class="list-group-item d-flex justify-content-between">
              <span>{{ d.device }}</span>
              <span>{{ d.count }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-2">
        <div class="card p-3 shadow-sm">
          <h5>Browsers</h5>
          <ul class="list-group">
            <li v-for="b in analytics.browsers" :key="b.name" class="list-group-item d-flex justify-content-between">
              <span>{{ b.browser }}</span>
              <span>{{ b.count }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    </section>

    <!-- VISITS TABLE -->
    <section class="mt-4">
      <div class="card p-3 shadow-sm">

        <div class="d-flex justify-content-between mb-2">
          <h5>All Visits</h5>
        </div>

        <table class="table table-bordered table-hover">

          <thead class="table-dark">
            <tr>
              <th>IP</th>
              <th>Country</th>
              <th>City</th>
              <th>Device</th>
              <th>Browser</th>
              <th>Page</th>
              <th>Time</th>
            </tr>
          </thead>

          <tbody>

            <tr v-for="v in analytics.visits" :key="v.id">
              <td>{{ v.ip_address }}</td>
              <td>{{ v.country || 'N/A' }}</td>
              <td>{{ v.city || 'N/A' }}</td>
              <td>{{ v.device }}</td>
              <td>{{ v.browser }}</td>
              <td class="small text-primary">{{ v.page_url }}</td>
              <td>{{ formatDate(v.created_at) }}</td>
            </tr>

            <tr v-if="!analytics.visits?.length">
              <td colspan="7" class="text-center">
                No data yet
              </td>
            </tr>

          </tbody>

        </table>

      </div>
    </section>

  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useDataStore } from '@/stores/dataStore'

const dataStore = useDataStore()

const analytics = ref({
  total_visits: 0,
  top_countries: [],
  top_pages: [],
  devices: [],
  browsers: [],
  visits: []
})

// 🔥 FETCH ANALYTICS
const fetchAnalytics = async (force = false) => {
  try {
    await dataStore.fetchData('analytics_summary', force) // make sure you have this
    analytics.value = dataStore.items.analytics_summary
  } catch (e) {
    console.log("Analytics error:", e)
  }
}

// 📱 TOP DEVICE
const topDevice = computed(() => {
  if (!analytics.value.devices.length) return 'N/A'
  return analytics.value.devices.sort((a,b)=>b.count-a.count)[0].device
})

// 🕒 FORMAT DATE
const formatDate = (date) => {
  if (!date) return ""
  return new Date(date).toLocaleString()
}

const refreshData = () => {
  fetchAnalytics(true)
}

onMounted(fetchAnalytics)


definePageMeta({
  layout:'admin',
  middleware:'admin'
})

</script>

<style scoped>

.admin-dashboard header{
  padding:1rem 0;
  border-bottom:1px solid #ccc;
}

.card h3{
  font-weight:700;
}

</style>