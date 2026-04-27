<template>
  <main class="application-page container pb-4">

    <div v-if="loading" class="text-center my-5">      
      <span class="spinner-border spinner-border-sm me-2"></span>Loading opportunity...
    </div>

    <div v-else-if="!opportunity">
      <p class="text-danger">Opportunity not found!</p>
    </div>

    <div v-else>
      <!-- Opportunity Info -->
      <div class="card shadow-none border-0 mb-4">
        <div class="card-body">
          <h5 class="card-title">{{ opportunity.title }}</h5>
          <p class="card-text"><strong>Type:</strong> {{ opportunity.opportunity_type }}</p>
          <p class="card-text"><strong>Status:</strong> {{ opportunity.status }}</p>
          <p class="card-text"><strong>Organization:</strong> {{ opportunity.provider.organization_name || 'N/A' }}</p>
          <p class="card-text"><strong>Location:</strong> {{ opportunity.host_country }}, {{ opportunity.location.city || 'N/A' }}</p>
          <p class="card-text" v-if="opportunity.description"><strong>Description:</strong> </br> <div class="mt-3" v-for="p in opportunity.description">{{ p || 'No description available.' }}</div></p>
        </div>

        <div class="card-footer">
          <a :href="opportunity.details.application.application_link" target="_blank" class="btn btn-primary btn-lg rounded-5 w-100">Apply Now</a>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useDataStore } from '@/stores/dataStore'

const props = defineProps({ initialForm: Object })
const emit = defineEmits(['saved','cancel'])
const dataStore = useDataStore()
const opportunity = ref(null)
const loading = ref(true)

const fetchOpportunity = async () => {
  loading.value = true
  const id = props.initialForm
  await dataStore.fetchData('opportunities', true)
  opportunity.value = (dataStore.items.opportunities || []).find(o => o.id === id)
  loading.value = false
}

const onApplicationSaved = () => {
  alert('Your application has been submitted successfully!')
  router.push('/opportunities') // redirect back to opportunities list
}

onMounted(fetchOpportunity)
</script>

<style scoped>
.application-page h3 {
  margin-bottom: 2rem;
}
</style>