<template>
<main class="user-dashboard container-fluid">

  <!-- HEADER -->
  <header class="app-header d-flex justify-content-between align-items-center">
    <div class="d-flex">
      <button class="btn me-3" @click="$router.back()">
        <Icon name="fa6-solid:arrow-left"/>
      </button>
      <h3>Resources</h3>
    </div>

    <div class="d-flex gap-2" v-if="device === 'desktop'">
      <NuxtLink to="/user/dashboard/opportunities" class="btn btn-primary">
        Browse Opportunities
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

    <aside class="col-lg-3" :class="{ 'sticky-top' : device === 'desktop', 'sidebar' : device === 'desktop' }">
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
                placeholder="Search Resources..."
                v-model="searchQuery"
              >
            </div>
          </div>
        </div>

      </div>
      <div class="tabs">
        <div class="tab text-muted" :class="{ 'active': ActiveCategory === '' }" @click="ActiveCategory = ''">All</div>
        <div class="tab text-muted text-capitalize" v-for="cat in categories" :key="cat" @click="ActiveCategory = cat" :class="{ 'active': ActiveCategory === cat }">{{ cat }}</div>
      </div>
    </aside>

    <!-- MAIN CONTENT -->
    <section class="col-lg-9">

      <!-- FILTERS / SEARCH -->
      <div class="">        
        <h3 class="fw-bold text-muted text-center text-uppercase">Resources Lists</h3>
        <hr class="text-muted">
      </div>

      <!-- OPPORTUNITIES LIST -->
      <div v-if="filteredItems.length" class="grid-3">

        <div class="mb-0" v-for="item in filteredItems" :key="item.id" >          
          <div class="card rounded-5 h-100">
            <div class="card-header">
              <div class="resource-icon ms-3 mt-2">
                  <Icon v-if="item.type.toLowerCase() === 'tutorial'" name="fa6-solid:file-lines"></Icon>
                  <Icon v-if="item.type.toLowerCase() === 'video'" name="fa6-solid:video"></Icon>
                  <Icon v-if="item.type.toLowerCase() === 'template'" name="fa6-solid:list"></Icon>
                  <Icon v-if="item.type.toLowerCase() === 'guide'" name="fa6-solid:file-lines"></Icon>
              </div>
              <h5 class="fw-bold text-capitalize text-danger">{{ truncate(item.title.toLowerCase(), 25) }}</h5>
            </div>
            <div class="card-body">
              <p class="text-capitalize small text-muted">{{ truncate(item.content.toLowerCase(), 100) }}.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="text-warning small"><strong>Publish Date:  </strong>{{ formatDate(item.created_at)    }}</div>
                <div class="badge bg-primary">{{ item.type    }}</div>
              </div>
            </div>
            <div class="card-footer text-center">
              <div class="ms-3">                
                <NuxtLink :to="'/user/dashboard/resources/' + item.type + '/' + item.id">
                  <span v-if="item.type.toLowerCase() === 'template'"  class="btn btn-success rounded-4" style="font-size:0.75rem;">Download template</span>
                  <span v-else-if="item.type.toLowerCase() === 'guide'"  class="btn btn-success rounded-4" style="font-size:0.75rem;">Read Content</span>
                  <span v-else-if="item.type.toLowerCase() === 'video'"  class="btn btn-success rounded-4" style="font-size:0.75rem;">Watch video</span>
                  <span v-else-if="item.type.toLowerCase() === 'tutorial'"  class="btn btn-success rounded-4" style="font-size:0.75rem;">Watch tutorial</span>                
                  <span v-else  class="btn btn-outline-success rounded-4" style="font-size:0.75rem;">View Details</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div v-else class="text-center text-muted">
        No Resources found
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
import { formatDate } from "@/composables/utils";

const { device } = useDeviceType();
const searchQuery = ref('')
const ActiveCategory = ref('')
const categories = ref([])
const dataStore = useDataStore()
const model = 'resources'

// Computed props for easier template binding
const items = ref([])

const fetchRequirements = async () => {  
  await dataStore.fetchData('resources')  

  items.value = dataStore.items.resources

  items.value.forEach(res =>{
    const type = res.type.toLowerCase() || "Other"

    if(!categories.value.includes(type)){
      categories.value.push(type)
    }
  })
}

// Fetch data on component mount
onMounted(fetchRequirements)

const filteredItems = computed(() => {
  if (!items.value) return []

  return items.value.filter(res => {

    // SEARCH FILTER
    const matchesSearch =
      res.title?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      res.content?.toLowerCase().includes(searchQuery.value.toLowerCase())

    // CATEGORY FILTER
    const matchesCategory =
      !ActiveCategory.value || res.type.toLowerCase() === ActiveCategory.value.toLowerCase()

    return matchesSearch && matchesCategory
  })
})

const searchResults = computed(() => {
  if (!searchQuery.value) return []

  return items.value
    ?.filter(res =>
      res.content[0]?.toLowerCase().includes(searchQuery.value.toLowerCase()) || res.title?.toLowerCase().includes(searchQuery.value.toLowerCase())
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
  margin-top: 5rem;
}
.user-dashboard {
  padding-bottom: 3rem;
}

.card h3{
  font-weight:700;
}

.card a{
  text-decoration:none;
}

</style>
