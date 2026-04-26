<template>
  <section class="gen-hero">
    <h1>Explore Opportunities</h1>
    <p>Find scholarships, internships, fellowships and grants from around the world.</p>

    <!-- Search Box -->
    <div class="card shadow-sm mb-4">
      <div class="card-body d-flex align-items-center gap-2">
        <Icon name="fa6-solid:magnifying-glass" class="text-muted"/>
        <input
          type="text"
          class="form-control"
          placeholder="Search For scholarships..."
          v-model="searchQuery"
        />
      </div>

      <!-- SEARCH RESULTS -->
      <div class="card-footer p-0" v-if="searchResults.length">
        <div class="w-100">
          <div v-for="opp in searchResults" :key="opp.id">

            <NuxtLink :to="'/opportunities/' + opp.category + '-data/' + opp.id" class="d-flex justify-content-between align-items-center p-2 border-bottom text-decoration-none text-dark  search-item">
              <strong>{{ truncate(opp.title, 60) }}</strong>

              <span class="text-muted text-blue">
                {{ opp.category || 'Opportunity' }}
              </span>


              <span class="text-muted text-blue">
                {{ opp.opportunity_type || 'Opportunity' }}
              </span>
            </NuxtLink>
          </div>

          <!-- view all -->
          <div class="text-center p-2">
            <button class="btn btn-sm btn-outline-primary"
              @click="$router.push('/opportunities?search=' + searchQuery)">
              View all results
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="">
    <!-- MAIN -->
    <div class="main-content">
      <section class="tabs">
        <div class="tab" :class="{ 'active': ActiveCategory === '' }" @click="ActiveCategory = ''">All</div>
        <div class="tab" v-for="cat in categories" :key="cat.id" @click="ActiveCategory = cat.name" :class="{ 'active': ActiveCategory === cat.name }">{{ cat.name }}</div>
      </section>

      <div class=" p-4">
        <!-- Loading -->
        <div v-if="loading" class="text-blue-500">Loading...</div>
        <!-- Error -->
        <div v-if="error" class="text-red-500">{{ error }}</div>

        <div v-if="filteredItems && filteredItems.length" class="opp-grid">
          <div class="card shadow-lg h-100 rounded-4" v-for="opp in items" key="opp.id">
            <div class="card-header">
              <NuxtLink :to="'/opportunities/' + opp.category + '-data/' + opp.id" class="text-blue fw-bold">{{ opp.title }}</NuxtLink>
            </div>
            <div class="card-body">                        
              <div>{{ truncate(opp.description[0] || '', 100) }}</div>
              <div class="d-flex align-items-center justify-content-between mt-3 mb-0">
                <div class="bg-primary badge">{{ opp.category  || 'Opportunity' }}</div>
                <div class="text-danger"><strong class="me-3">Deadline: </strong>{{ opp.details.application.deadline }}</div>
              </div>
            </div>
            <div class="card-footer">
              <span class="deadline"><Icon name="fa6-solid:location-pin"/> {{ truncate(opp.host_country, 10) }}, {{ truncate(opp.location.city, 10) }}</span>
              <NuxtLink :to="'/opportunities/' + opp.category + '-data/' + opp.id" class="btn btn-outline-primary rounded-4" style="font-size: 0.8rem; padding: 0.4rem 1rem;">View Details</NuxtLink>
            </div>
          </div>
        </div>

        <!-- Empty state -->
        <div v-else-if="!loading && !error">No opportunities found.</div>
      </div>
      
    </div>
  </section>

  <section class="p-4" style="background: #f1f5f9;">
    <div class="section-title">
      <h2>Recommended for You</h2>
      <p>Based on the latest deadlines and high success rates.</p>
    </div>
    <div class="opp-grid">
      <div class="card shadow-lg h-100 rounded-4" v-for="opp in items" key="opp.id">
        <div class="card-header">
          <NuxtLink :to="'/opportunities/' + opp.category + '-data/' + opp.id" class="text-blue fw-bold">{{ opp.title }}</NuxtLink>
        </div>
        <div class="card-body">                        
          <div>{{ truncate(opp.description[0] || '', 100) }}</div>
          <div class="d-flex align-items-center justify-content-between mt-3 mb-0">
            <div class="bg-primary badge">{{ opp.category  || 'Opportunity' }}</div>
            <div class="text-danger text-end"><strong class="me-3">Deadline: </strong>{{ opp.details.application.deadline }}</div>
          </div>
        </div>
        <div class="card-footer">
          <span class="deadline"><Icon name="fa6-solid:location-pin"/> {{ truncate(opp.host_country, 10) }}, {{ truncate(opp.location.city, 10) }}</span>
          <NuxtLink :to="'/opportunities/' + opp.category + '-data/' + opp.id" class="btn btn-outline-primary rounded-4" style="font-size: 0.8rem; padding: 0.4rem 1rem;">View Details</NuxtLink>
        </div>
      </div>
    </div>
    <div class="centered mt-3">
      <NuxtLink class="btn btn-filled btn-lg" to="/opportunities">Browse More <Icon name="fa6-solid:arrow-right" /></NuxtLink>
    </div>
  </section>
</template>

<script setup>
import { useDataStore } from '~/stores/dataStore'
import { ref, computed, onMounted } from 'vue'



const searchQuery = ref('')
const ActiveCategory = ref('')
const dataStore = useDataStore()

// Computed props for easier template binding
const items = ref([])
const categories = ref([])

const truncate = (text, length) => {
  if (!text) return ''
  return text.length > length ? text.slice(0, length) + '...' : text
}

const fetchRequirements = async (force = false) => {
  await dataStore.fetchData('opportunities', force)
  await dataStore.fetchData('opp_category')
  items.value = dataStore.items.opportunities || []
  categories.value = dataStore.items.opp_category || []
}


// Fetch data on component mount
onMounted(fetchRequirements)

const filteredItems = computed(() => {
  if (!items.value) return []

  return items.value.filter(opp => {

    // SEARCH FILTER
    const matchesSearch =
      opp.title?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      opp.description?.[0]?.toLowerCase().includes(searchQuery.value.toLowerCase())

    // CATEGORY FILTER
    const matchesCategory =
      !ActiveCategory.value || opp.category === ActiveCategory.value

    return matchesSearch && matchesCategory
  })
})

const searchResults = computed(() => {
  if (!searchQuery.value) return []

  return items.value
    ?.filter(opp =>
      opp.description[0]?.toLowerCase().includes(searchQuery.value.toLowerCase()) || opp.title?.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
    .slice(0, 5)
})

</script>

<style scoped>
  .search-item:hover{
  background:#f8f9fa;
}
</style>