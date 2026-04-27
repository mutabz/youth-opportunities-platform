<template>
<main class="user-dashboard container-fluid">

  <!-- HEADER -->
  <header class="app-header d-flex justify-content-between align-items-center">
    <div class="d-flex">
      <button class="btn me-3" @click="$router.back()">
        <Icon name="fa6-solid:arrow-left"/>
      </button>
      <h3>Saved Opportunities</h3>
    </div>

    <div class="d-flex gap-2" v-if="device === 'desktop'">
      <NuxtLink to="/user/dashboard/resources" class="btn btn-primary">
        Browse Resources
      </NuxtLink>

      <NuxtLink to="/user/dashboard/opportunities" class="btn btn-primary">
        Browse opportunities
      </NuxtLink>

      <NuxtLink to="/user/dashboard/profile" class="btn btn-secondary">
        My Profile
      </NuxtLink>

      <button class="btn btn-secondary" @click="fetchRequirements(true)">
        Refresh
      </button>
    </div>
  </header>

  <div class="row mt-2">

    <aside class="col-lg-3 sidebar sticky-top">
      <div class="">
        <h3 class="fw-bold text-muted text-center text-uppercase">Filter By Categories</h3>
        <hr class="text-muted">

        <!-- FILTERS / SEARCH -->
        <div class="card shadow-sm">
          <div class="card-body">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Search opportunities..."
                v-model="searchQuery"
              >
            </div>
          </div>
        </div>

      </div>
      <div class="tabs">
        <div class="tab text-muted" :class="{ 'active': ActiveCategory === '' }" @click="ActiveCategory = ''">All</div>
        <div class="tab text-muted" v-for="cat in categories" :key="cat.id" @click="ActiveCategory = cat.name" :class="{ 'active': ActiveCategory === cat.name }">{{ cat.key }}</div>
      </div>
    </aside>

    <!-- MAIN CONTENT -->
    <section class="col-lg-9">

      <!-- FILTERS / SEARCH -->
      <div class="">        
        <h3 class="fw-bold text-muted text-center text-uppercase">Opportunities Lists</h3>
        <hr class="text-muted">
      </div>

      <!-- OPPORTUNITIES LIST -->
      <div v-if="items.length" class="grid-2">

        <div
          class="card shadow-sm mb-3"
          v-for="opp in items"
          :key="opp.id"
        >
          <div class="card-header fw-bold">
            {{ opp.title }}
            {{ opp.opp_saved_at }}
          </div>
          <div class="card-body">
            <p class="text-muted">{{ truncate(opp.description[0], 200) }}</p>

            <div class="d-flex justify-content-between small text-muted">
              <span><strong>Location:</strong> {{ opp.host_country }}</span>
              <span><strong>Deadline:</strong> {{ opp.details.application.deadline }}</span>
            </div>
          </div>

          <div class="card-footer">
            <NuxtLink :to="'/user/dashboard/opportunities/' + opp.category + '-data/' + opp.id" class="btn btn-outline-primary rounded-4" style="font-size: 0.8rem; padding: 0.4rem 1rem;">View Details</NuxtLink>
            <button @click="DeleteOpp(opp)" class="btn btn-outline-danger rounded-4" style="font-size: 0.8rem; padding: 0.4rem 1rem;"><span v-if="loading && opp.opp_saved_at === DeletingId">Deleting....</span><span v-else>Delete {{opp.category}}</span></button>

          </div>
        </div>

      </div>

      <div v-else class="text-center text-muted">
        No opportunities found
      </div>

    </section>

    <!-- INSIGHTS / STATS -->
    <UserInsights/>

  </div>

</main>
</template>

<script setup>
import { useDataStore } from '~/stores/dataStore'
import { ref, computed, onMounted } from 'vue'
import { truncate } from '~/composables/utils'
import { useDeviceType } from "@/composables/useDeviceType";

const { device } = useDeviceType();

const searchQuery = ref('')
const ActiveCategory = ref('')
const dataStore = useDataStore()
const userStore = useUserStore()
const loading = ref(false)
const DeletingId = ref('')
const user = computed(() => userStore.user)

// Computed props for easier template binding
const items = ref([])
const categories = ref([])


const fetchRequirements = async (force = false) => {
  await dataStore.fetchData('saved_opportunities', force)
  await dataStore.fetchData('opportunities', force)
  await dataStore.fetchData('opp_category')

  const opportunities = dataStore.items.opportunities || []
  const saved_opps = dataStore.items.saved_opportunities || []

  saved_opps.forEach(op => {
    let opp = opportunities.find(o => o.id === op.opportunity_id)
    opp['opp_id'] = op.id
    opp['opp_saved_at'] = op.saved_at
    items.value.push(opp)
  })

  categories.value = dataStore.items.opp_category || []
}

// Fetch data on component mount
onMounted(fetchRequirements)

// Fetch data on component mount
async function DeleteOpp(opp) { 
  loading.value = true
  DeletingId.value = opp.opp_saved_at
  await dataStore.deleteItem('saved_opportunities', opp.opp_id) 
  fetchRequirements(true)
  loading.value = false
}

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


definePageMeta({
  layout: 'user',
  middleware: 'auth'
})
</script>

<style scoped>
.prof-card {
  padding: 0.8rem;
  margin: 0.3rem;
  border-radius: 0.2rem;
  border: 1px solid #ddd;
  box-shadow: 2px 2px 12px rgba(0, 0, 0 , .50);
}

.user-dashboard header{
  padding:1rem 0;
  border-bottom:1px solid #ccc;
}

.card h3{
  font-weight:700;
}

.card a{
  text-decoration:none;
}

</style>