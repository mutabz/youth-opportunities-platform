<template>
  <main class="admin-dashboard">

    <!-- HEADER -->
    <header class="app-header d-flex justify-content-between align-items-center">
      <div class="d-flex">
        <button class="btn me-3" @click="$router.back()"><Icon name="fa6-solid:arrow-right" />
        </button>
        <h3>Partner's Dashboard</h3>
      </div>
      <div class="d-flex gap-2">
        <NuxtLink to="/adm/prt/opportunities" class="btn btn-primary">
          Manage Opportunities
        </NuxtLink>

        <button class="btn btn-secondary" @click="refreshData">
          Refresh
        </button>
      </div>
    </header>


    <!-- STATS CARDS -->
    <section class="row mt-4 g-3">

      <div class="col-md-3">
        <div class="card shadow-lg border-0">
          <div class="card-body">
            <h6>Total Opportunities</h6>
            <h3>{{ opportunities.length }}</h3>   

            <NuxtLink to="/adm/prt/opportunities" class="small">
              Manage Opportunities
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card shadow-lg border-0">
          <div class="card-body">
            <h6>Opportunity Categories</h6>
            <h3>{{ opportunityCategories.length }}</h3>

            <NuxtLink to="/adm/prt/opportunities/categories" class="small">
              Manage Opportunities Categories
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card shadow-lg border-0">
          <div class="card-body">
            <h6>Open Opportunities</h6>
            <h3>{{ openOpportunities }}</h3>

            <NuxtLink to="/adm/prt/opportunities" class="small">
              Manage Opportunities
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card shadow-lg border-0">
          <div class="card-body">
            <h6 class="text-muted">Applications</h6>
            <h3>{{ applications.length }}</h3>
            <NuxtLink to="/adm/prt/applications" class="small">
              View Applications
            </NuxtLink>
          </div>
        </div>
      </div>

    </section>
    <!-- RECENT OPPORTUNITIES -->
    <section class="mt-4">

      <div class="d-flex justify-content-between align-items-center mb-2">
        <h5>Recent Opportunities</h5>

        <NuxtLink to="/adm/prt/opportunities" class="btn btn-sm btn-outline-primary" >
          View All
        </NuxtLink>
      </div>

      <table class="table table-hover table-bordered">

        <thead class="table-dark">
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Status</th>
            <th>Organization</th>
            <th>Location</th>
          </tr>
        </thead>

        <tbody>

          <tr v-for="opp in recentOpportunities" :key="opp.id" >
            <td>{{ opp.title }}</td>

            <td>{{ opp.opportunity_type }}</td>

            <td>
              <span class="badge" :class="{ 'bg-success': opp.status === 'Open', 'bg-secondary': opp.status === 'Closed', 'bg-warning text-dark': opp.status === 'Upcoming' }">
                {{ opp.status }}
              </span>
            </td>

            <td>
              {{ opp.provider?.organization_name || 'N/A' }}
            </td>

            <td>
              {{ opp.host_country }},
              {{ opp.location?.city || 'N/A' }}
            </td>

          </tr>

          <tr v-if="!recentOpportunities.length">
            <td colspan="5" class="text-center">
              No opportunities yet
            </td>
          </tr>

        </tbody>

      </table>

    </section>

    <!-- RECENT Applications -->
    <!-- APPLICATION TABLE -->
    <section class="mt-4">

      <table class="table table-hover table-bordered">

        <thead class="table-dark">
          <tr>
            <th>Applicant</th>
            <th>Email</th>
            <th>Opportunity</th>
            <th>Country</th>
            <th>Status</th>
            <th>Submitted</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="app in recentApplications" :key="app.id" >
            <td>{{ app.full_name }}</td>
            <td>{{ app.email }}</td>
            <td @click="selectApp(app.opportunity_id)" class="pointer">View Opportunity </td>
            <td>{{ app.country }}</td>
            <td><span class="badge" :class="statusBadge(app.status)" >{{ app.status }}</span></td>
            <td>{{ formatDate(app.submitted_at) }}</td>
          </tr>

          <tr v-if="!recentApplications.length">
            <td colspan="8" class="text-center">
              No applications found
            </td>
          </tr>
        </tbody>

      </table>

    </section>

    <!-- FORM MODAL -->
    <div v-if="showOppModal" class="modal fade show d-block" style="background: rgba(0,0,0,0.5)">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
          <h3 class="fw-bold text-uppercase mx-5 modal-title">Applied Opportunity</h3>
          <button type="button" class="btn-close" @click="closeForm"></button>
          </div>
          <div class="modal-body">
            <OpportunityDisplay :initialForm="selectedAppId" @cancel="closeForm" />
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<script setup>

import { ref, computed, onMounted } from 'vue'
import { useDataStore } from '@/stores/dataStore'
import OpportunityDisplay from '~/components/OpportunityDisplay'

const dataStore = useDataStore()

const opportunities = ref([])
const applications = ref([])
const opportunityTypes = ref([])
const opportunityCategories = ref([])
const selectedAppId = ref('')
const showOppModal = ref(false)


const fetchDashboardData = async (force=false) => {

  await Promise.all([
    dataStore.fetchData('opportunities', force),
    dataStore.fetchData('applications', force),
    dataStore.fetchData('opp_type', force),
    dataStore.fetchData('opp_category', force)
  ])

  opportunities.value = dataStore.items.opportunities || []
  applications.value = dataStore.items.applications || []
  opportunityTypes.value = dataStore.items.opp_type || []
  opportunityCategories.value = dataStore.items.opp_category || []

}

const recentOpportunities = computed(() => {
  return opportunities.value
    .slice()
    .sort((a,b)=> new Date(b.created_at) - new Date(a.created_at))
    .slice(0,5)
})

const recentApplications = computed(() => {
  return applications.value
    .slice()
    .sort((a,b)=> new Date(b.created_at) - new Date(a.created_at))
    .slice(0,5)
})

const openOpportunities = computed(() =>
  opportunities.value.filter(o => o.status === 'Open').length
)


const statusBadge = (status) => {

  switch (status) {

    case "accepted":
      return "bg-success"

    case "rejected":
      return "bg-danger"

    case "shortlisted":
      return "bg-primary"

    case "under_review":
      return "bg-warning text-dark"

    case "withdrawn":
      return "bg-secondary"

    default:
      return "bg-dark"

  }

}


const formatDate = (date) => {

  if (!date) return ""

  return new Date(date).toLocaleDateString()

}

const selectApp = (id) => {
  selectedAppId.value = id
  showOppModal.value = true
}

const closeForm = () => {
  selectedAppId.value = ''
  showOppModal.value = false
}


const refreshData = () => {
  fetchDashboardData(true)
}

definePageMeta({
  layout:'partner',
  middleware:'partner'
})

onMounted(fetchDashboardData)

</script>


<style scoped>

.admin-dashboard header{
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

