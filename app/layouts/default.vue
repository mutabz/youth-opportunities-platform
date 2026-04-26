<template>
    <Navbar class="" />
  <div class="row g-3 mt-5">
  <div :class="{ 'col-md-8' : device === 'desktop' }">
    <div class="">
      <NuxtPage />

      <section class="newsletter mt-5">
        <h2>Don't miss the next big thing.</h2>
        <p style="margin-bottom: 2rem; opacity: 0.9;">Get curated weekly opportunities straight to your inbox.</p>
        <form>
          <div class="search-bar">
            <input type="email" v-model="form.email" placeholder="Enter your email address">            
            <button @click="submitSubscribe" class="btn btn-secondary px-2 py-2" style="background: var(--text-main);">Subscribe Now</button>
          </div>            
        </form>
      </section>
    </div>
  </div>

  <section class="col-lg-4 sidebar sticky-top" v-if="device === 'desktop'">
    <aside class="search-box">
      <div class="search-header">
        <h3>Search</h3>
      </div>

      <!-- SEARCH & FILTER -->
      <div class="filters mt-3 mb-3 d-flex gap-2 align-items-center">
        <select v-model="statusFilter" class="form-select">
          <option value="">All Status</option>
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
          <option value="Upcoming">Upcoming</option>
        </select>
        <select v-model="typeFilter" class="form-select">
          <option value="">All Types</option>
          <option v-for="t in opportunityTypes" :key="t.id" :value="t.name">{{ t.name }}</option>
        </select>
        <button class="btn btn-secondary" @click="fetchOpportunities(true)"><span class=""></span>Refresh</button>
      </div>

      <div class="search-input-wrapper">
        <input v-model="searchQuery" type="text" placeholder="Search opportunities..." />
      </div>

      <div class="search-results">
        <div class="result-item" v-for="item in filteredOpportunities" :key="item.id">
          <h4>{{ item.title }}</h4>
          <p>{{ item.description[0] }} </p>
          <div class=" ">
            <NuxtLink :to="'/opportunities/' + item.category + '-data/' + item.id" class="btn btn-outline-primary rounded-4" style="font-size: 0.8rem; padding: 0.4rem 1rem;">View Details for this {{ item.category }}</NuxtLink>
          </div>
        </div>
      </div>
    </aside>
  </section>
</div>


  <Footerbar />
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
import Footerbar from '~/components/Footerbar.vue'
import AdUnit from '~/components/AdUnit.vue'
import { useRoute } from 'vue-router'

import { useDataStore } from '~/stores/dataStore'
import { ref, computed, onMounted } from 'vue'
import { useDeviceType } from "@/composables/useDeviceType";

const { device } = useDeviceType();
const dataStore = useDataStore()
const opportunityTypes = ref([])
const model = 'opportunities'

const route = useRoute()
const data = ref({
  page_url: '',
  referrer: ''
})
const form = ref({})

const searchQuery = ref('')
const statusFilter = ref('')
const typeFilter = ref('')
const opportunityCategories = ref('')

const items = ref([])


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

const truncate = (text, length) => {
  if (!text) return ''
  return text.length > length ? text.slice(0, length) + '...' : text
}

const fetchOpportunities = async (force = false) => {
  await dataStore.fetchData('opportunities', force)
  await dataStore.fetchData('opp_category')
  items.value = dataStore.items.opportunities
  opportunityCategories.value = dataStore.items.opp_category

}

const filteredOpportunities = computed(() => {
  return (items.value || []).filter(o => {
    const matchesSearch =
      o.title?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      o.opportunity_type?.toLowerCase().includes(searchQuery.value.toLowerCase())

    const matchesStatus = statusFilter.value
      ? o.status === statusFilter.value
      : true

    const matchesType = typeFilter.value
      ? o.opportunity_type === typeFilter.value
      : true

    return matchesSearch && matchesStatus && matchesType
  })
})

const submitSubscribe = async () => {
  try {
    await dataStore.createItem('subscribe', form.value)
    alert("Subscribed")
  } catch (e) {
    console.log(`Error occured!! ${e}`)
  }
}

watch(
  () => route.fullPath,
  () => {
    trackPage()
  },
  { immediate: true } // also runs on first load
)

onMounted(fetchOpportunities)
</script>

<style scoped>
.sidebar {
  background: transparent;
}
</style>