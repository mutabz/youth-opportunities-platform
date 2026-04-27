<template>
  <main class="application-page container py-0">
    <header class="app-header d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <button class="btn me-3" @click="$router.back()"><Icon name="fa6-solid:arrow-right" />
        </button>      
        <h3 class="fw-bold text-uppercase mx-2">Apply for Opportunity</h3>
      </div>
      <div class="d-flex">
        <NuxtLink to="/user/dashboard" class="btn btn-primary" @click="showCreateForm = true">User Dashboard</NuxtLink>
        <NuxtLink to="/" class="btn btn-secondary"><span class=""></span>Home Page</NuxtLink>
      </div>
    </header>
    <hr>

    <div v-if="loading" class="text-center my-5">      
      <span class="spinner-border spinner-border-sm me-2"></span>Loading opportunity...
    </div>

    <div v-else-if="!opportunity">
      <p class="text-danger">Opportunity not found!</p>
    </div>

    <div v-else class="row g-3">
      <div class="col-lg-5">
        <!-- Opportunity Info -->
        <div class="card">
          <div class="card-header">
            <h5 class="card-title fw-bold">{{ opportunity.title }}</h5>
          </div>
          <div class="card-body">
            <p class="card-text"><strong>Type:</strong> {{ opportunity.opportunity_type }}</p>
            <p class="card-text"><strong>Status:</strong> {{ opportunity.status }}</p>
            <p class="card-text"><strong>Organization:</strong> {{ opportunity.provider.organization_name || 'N/A' }}</p>
            <p class="card-text"><strong>Location:</strong> {{ opportunity.host_country }}, {{ opportunity.location.city || 'N/A' }}</p>
            <p class="card-text" v-if="opportunity.description"><strong>Description:</strong> </br> <div class="mt-3" v-for="p in opportunity.description">{{ p || 'No description available.' }}</div></p>
          </div>
        </div>
      </div>

      <div class="col-lg-7">
        <!-- Application Form -->
        <div class="card p-3">
          <ApplicationForm :opportunityId="opportunity.id" @saved="onApplicationSaved" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'


import { useDataStore } from '@/stores/dataStore'
import ApplicationFormUser from '~/components/ApplicationFormUser.vue'
const ApplicationForm = ApplicationFormUser

const route = useRoute()
const router = useRouter()
const dataStore = useDataStore()

const opportunity = ref(null)
const loading = ref(true)

const fetchOpportunity = async () => {
  loading.value = true
  const id = route.params.id
  await dataStore.fetchData('opportunities', true)
  opportunity.value = (dataStore.items.opportunities || []).find(o => o.id === id)
  loading.value = false
}

const onApplicationSaved = () => {
  alert('Your application has been submitted successfully!')
  router.push('/opportunities') // redirect back to opportunities list
}

onMounted(fetchOpportunity)
definePageMeta({
  middleware: 'auth',  
  layout: "user"
})
</script>

<style scoped>
.application-page h3 {
  margin-bottom: 2rem;
}
</style>