<template>
  <main class="container my-4">

    <!-- HEADER -->
    <header class="d-flex align-items-center mb-4 bg-info p-3 text-white rounded-4">
        <button class="btn btn-light me-3" @click="$router.back()">
          Back   <Icon class="ms-3" name="fa6-solid:arrow-right"/>
        </button>
      <h1 class="h4 m-0">{{ opportunity.title }}</h1>
    </header>

    <div class="row g-4">

      <!-- DESCRIPTION -->
      <div class="col-12">
        <div class="card shadow-sm border-primary">
          <div class="card-header bg-primary text-white">
            <h5 class="card-title mb-0">Description</h5>
          </div>
          <div class="card-body">
            <p v-for="(desc,i) in opportunity.description" :key="i" class="mb-2">{{ desc }}</p>
            <span class="badge bg-primary me-2">{{ opportunity.opportunity_type }}</span>
            <span class="badge bg-success">{{ opportunity.status }}</span>
          </div>
        </div>
      </div>

      <!-- PROVIDER -->
      <div class="col-12">
        <div class="card shadow-sm border-info">
          <div class="card-header bg-info text-white">
            <h5 class="card-title mb-0">Provider</h5>
          </div>
          <div class="card-body d-flex justify-content-between">
          	<div class="">
	            <p><strong>Name:</strong> {{ provider.organization_name || 'N/A' }}</p>
	            <p><strong>Type:</strong> {{ provider.organization_type || 'N/A' }}</p>
	        </div>
	        <div class="">
            	<img v-if="provider.organization_logo" :src="provider.organization_logo" class="img-fluid rounded mt-2" style="max-height:80px" />
            </div>
          </div>
        </div>
      </div>

      <!-- GENERIC LIST SECTIONS -->
      <div class="col-12" v-for="section in filteredDetailSections" :key="section?.key">
        <div v-if="section && details?.[section.key]?.length" class="card shadow-sm border-warning">
          <div class="card-header bg-warning text-dark">
            <h5 class="card-title mb-0">{{ section.label }}</h5>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush" >
              <li class="list-group-item" v-for="(item,i) in details?.[section.key]" :key="i">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- COMPLEX SECTIONS -->
      <div class="col-12" v-for="section in filteredDynamicSections" :key="section?.key">
        <div v-if="section && details?.[section.key]" class="card shadow-sm border-success">
          <div class="card-header bg-success text-white">
            <h5 class="card-title mb-0">{{ section.label }}</h5>
          </div>
          <div class="card-body row g-3">
            <!-- fields -->
            <div class="col-12 col-md-6" v-for="field in section.fields || []" :key="field?.key">
              <strong>{{ field.label }}:</strong>
              <div v-if="field.type === 'boolean'">{{ details?.[section.key]?.[field.key] ? 'Yes' : 'No' }}</div>

              <ul v-else-if="field.type === 'list'" class="list-group list-group-flush">
                <li class="list-group-item" v-for="(item,i) in details?.[section.key]?.[field.key] || []" :key="i">{{ item }}</li>
              </ul>

              <div v-else-if="field.type === 'dict'" class="ms-2">
                <div v-for="sub in field.subfields || []" :key="sub?.key">{{ sub.label }}: {{ details?.[section.key]?.[field.key]?.[sub.key] }}</div>
              </div>

              <div v-else>{{ details?.[section.key]?.[field.key] }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- APPLY BUTTON -->
      <div class="col-12" v-if="details.application?.application_link">
     	<div class="d-flex justify-content-center">
            <button v-if="!user" @click="showLoginEnquiry = true" class="btn btn-primary rounded-4  mt-2">
              Apply for this {{ type }}
            </button>

            <div class="" v-else>
              <a v-if="details.application.application_link" :href="details.application.application_link" target="_blank" class="btn btn-primary rounded-4 mt-2">
                Apply for this {{ type }}
              </a>
            </div>

            <NuxtLink :to="'/opportunities/apply/' + opportunity.id" class="btn btn-success rounded-4 w-50  mt-2" >
              Need Help For Application
            </NuxtLink>
        </div>
      </div>

      <!-- CREATE / EDIT MODAL -->
      <div v-if="showLoginEnquiry" class="modal fade show d-block" style="background: rgba(0,0,0,0.5)">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Login To Continue</h5>
              <button type="button" class="btn-close" @click="showLoginEnquiry = false"></button>
            </div>
            <div class="modal-body">
              <!-- Reuse your Opportunity Form here -->
              <LoginEnquiry
                @cancel="showLoginEnquiry = false"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  </main>
</template>


<script setup lang="ts">
// Imports
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useDataStore } from '~/stores/dataStore'
import { useUserStore } from '~/stores/userStore'

import LoginEnquiry from '~/components/LoginEnquiry.vue'
import { detailSections, otherDynamicSections } from '~/configs/opportunitySections'
import { generateMetaTitle, generateMetaDescription, generateStructuredData } from '~/composables/utils'

// Route & Stores
const route = useRoute()
const dataStore = useDataStore()
const userStore = useUserStore()
const user = computed(() => userStore.user)

// Reactive references (default empty object avoids null issues)
const opportunity = ref({}) 
const category = ref('')
const showLoginEnquiry = ref(false)
const location = ref({})

// Fetch opportunity and categories SSR-ready
const { data: fetchedOpportunity } = await useAsyncData(`opportunity-${route.params.id}`, async () => {
  await dataStore.fetchData('opportunities')
  await dataStore.fetchData('opp_category')

  const opp = dataStore.items.opportunities.find(o => o.id === route.params.id) || {}
  const cat = dataStore.items.opp_category.find(
    c => c.name.toLowerCase() === opp.category?.toLowerCase()
  )

  opportunity.value = opp
  category.value = cat?.key || ''

  // Location for structured data
  location.value = opp.details?.job_location || opp.details?.training_location || {}
  
  // Login enquiry
  showLoginEnquiry.value = !!user.value ? false : true

  return opp
})

onMounted(async () => {
  if (user) {
    showLoginEnquiry.value = false
  }
  await dataStore.fetchData('opportunities')
  await dataStore.fetchData('opp_category')

  opportunity.value = dataStore.items.opportunities.find(o => o.id === route.params.id)

  const cat = dataStore.items.opp_category.find(
    c => c.name.toLowerCase() === opportunity.value?.category?.toLowerCase()
  )
  category.value = cat?.key || null

  // Set general location for structured data
  location.value = opportunity.value?.details?.job_location || opportunity.value?.details?.training_location || {}
})

// Computed properties
const provider = computed(() => opportunity.value.provider || {})
const details = computed(() => opportunity.value.details || {})
const type = computed(() => category.value)

// Filter sections dynamically
const filteredDetailSections = computed(() =>
  type.value ? detailSections.filter(s => s.type?.includes(type.value)) : []
)
const filteredDynamicSections = computed(() =>
  type.value ? otherDynamicSections.filter(s => s.type?.includes(type.value)) : []
)

// SEO & Structured Data (SSR)
useHead(() => {
  if (!opportunity.value?.title) return {}

  const title = generateMetaTitle(opportunity.value)
  const description = generateMetaDescription(opportunity.value)
  const keywords = opportunity.value.details?.slugs?.join(', ') || opportunity.value.tags?.join(', ') || ''

  return {
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords }
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(generateStructuredData({
          ...opportunity.value,
          location: location.value
        }))
      }
    ]
  }
})
</script>

