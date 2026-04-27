<template>
  <section class="gen-hero">
    <h1>Career & Scholarship Resources</h1>
    <p>Guides, templates, toolkits, and insider tips to help you succeed.</p>

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
          <div v-for="res in searchResults" :key="res.id">

            <NuxtLink :to="'/resources/' + res.type + '/' + res.id" class="d-flex justify-content-between align-items-center p-2 border-bottom text-decoration-none text-dark  search-item">
              <strong>{{ truncate(res.title, 60) }}</strong>

              <span class="text-muted text-blue">
                {{ res.type || 'Resource' }}
              </span>
            </NuxtLink>
          </div>
          <!--
          <div class="text-center p-2">
            <button class="btn btn-sm btn-outline-primary"
              @click="$router.push('/opportunities?search=' + searchQuery)">
              View all results
            </button>
          </div>-->
        </div>
      </div>
    </div>
  </section>

  <section class="">  
      <div class="tabs">
        <div class="tab text-muted" :class="{ 'active': ActiveCategory === '' }" @click="ActiveCategory = ''">All</div>
        <div class="tab text-muted text-capitalize" v-for="cat in categories" :key="cat" @click="ActiveCategory = cat" :class="{ 'active': ActiveCategory === cat }">{{ cat }}</div>
      </div>
  </section>

  <section v-if="filteredItems.length" class="grid-2 mx-2">
      <!-- CARD -->
      <div class="" v-for="item in filteredItems" :key="item.id">
        <div class="resource-card">
            <div class="resource-icon">
                <i class="fa-solid fa-file-lines"></i>
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.content }}.</p>
              <div class="resource-footer">
                <div class="">
                  <span class="type">{{ item.type }}</span>
                </div>
                <NuxtLink :to="'/resources/' + item.type + '/' + item.id">
                  <span v-if="item.type.toLowerCase() === 'template'"  class="btn btn-outline-primary rounded-4" style="font-size:0.75rem;">Download template</span>
                  <span v-else-if="item.type.toLowerCase() === 'guide'"  class="btn btn-outline-primary rounded-4" style="font-size:0.75rem;">Read Content</span>
                  <span v-else-if="item.type.toLowerCase() === 'video'"  class="btn btn-outline-primary rounded-4" style="font-size:0.75rem;">Watch video</span>
                  <span v-else-if="item.type.toLowerCase() === 'tutorial'"  class="btn btn-outline-primary rounded-4" style="font-size:0.75rem;">Watch tutorial</span>                
                  <span v-else  class="btn btn-outline-primary rounded-4" style="font-size:0.75rem;">View Details</span>
                </NuxtLink>
              </div>
        </div>
      </div>
  </section>


</template>

<script setup>
import { useDataStore } from '~/stores/dataStore'
import { ref, computed, onMounted } from 'vue'
import { truncate } from '~/composables/utils'

const searchQuery = ref('')
const ActiveCategory = ref('')
const categories = ref([])
const dataStore = useDataStore()
const model = 'resources'

// Computed props for easier template binding
const items = ref([])

const fetchResources = async () => {  
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
onMounted(fetchResources)

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

  return items.value.filter(res =>
      res.content?.toLowerCase().includes(searchQuery.value.toLowerCase()) || res.title?.toLowerCase().includes(searchQuery.value.toLowerCase())).slice(0, 5)
})

</script>

