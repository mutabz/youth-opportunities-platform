<template>
  <main class="admin-dashboard">

    <!-- HEADER -->
    <header class="app-header d-flex justify-content-between align-items-center">
      <div class="d-flex">
        <button class="btn me-3" @click="$router.back()"><Icon name="fa6-solid:arrow-right" />
        </button>
        <h3>Admin Dashboard</h3>
      </div>
      <div class="d-flex gap-2" v-if="device === 'desktop'">
        <NuxtLink to="/adm/mod/analytics/access" class="btn btn-primary">
          Analytics
        </NuxtLink>

        <NuxtLink to="/adm/mod/users" class="btn btn-secondary">
          Manage Users
        </NuxtLink>

        <button class="btn btn-secondary" @click="refreshData">
          Refresh
        </button>
      </div>
    </header>


    <!-- STATS CARDS -->
    <section class="row mt-4 g-3">
      
      <div class="col-md-3">
        <div class="card shadow-lg border-0 rounded-4">
          <div class="card-header">
            <h6 class="fw-bold text-danger">Total Opportunities</h6>
          </div>
          <div class="card-body d-flex justify-content-between">
            <h3 class="text-success">{{ opportunities.length }}</h3>
            <div class="text-muted">in all</div>
            <h3 class="text-success">{{ opportunities.length }}</h3>
            <div class="text-muted">opportunities</div>
          </div>
          <div class="card-footer">
            <NuxtLink to="/adm/mod/opportunities" class="small">
              Manage Opportunities
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card shadow-lg border-0 rounded-4">
          <div class="card-header">
            <h6 class="fw-bold text-danger">Opportunity Categories</h6>
          </div>
          <div class="card-body d-flex justify-content-between">
            <h3 class="text-success">{{ opportunityCategories.length }}</h3>
            <div class="text-muted">of all</div>
            <h3 class="text-success">{{ opportunities.length }}</h3>
            <div class="text-muted">opportunities</div>
          </div>
          <div class="card-footer">
            <NuxtLink to="/adm/mod/opportunities/categories" class="small">
              Manage Opportunities Categories
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card shadow-lg border-0 rounded-4">
          <div class="card-header">
            <h6 class="fw-bold text-danger">Resources</h6>
          </div>
          <div class="card-body d-flex justify-content-between">
            <h3 class="text-success">{{ resources.length }}</h3>
            <div class="text-muted">of all</div>
            <h3 class="text-success">{{ resources.length }}</h3>
            <div class="text-muted">resources</div>
          </div>
          <div class="card-footer">
            <NuxtLink to="/adm/mod/resources" class="small">
              Manage Resources
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card shadow-lg border-0 rounded-4">
          <div class="card-header">
            <h6 class="fw-bold text-danger">Total Users</h6>
          </div>
          <div class="card-body d-flex justify-content-between">
            <h3 class="text-success">{{ users.length }}</h3>
            <div class="text-muted">of all</div>
            <h3 class="text-success">{{ users.length }}</h3>
            <div class="text-muted">users</div>
          </div>
          <div class="card-footer">
            <NuxtLink to="/adm/mod/users" class="small">
              Manage Users
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card shadow-lg border-0 rounded-4">
          <div class="card-header">
            <h6 class="fw-bold text-danger">Opportunity Types</h6>
          </div>
          <div class="card-body d-flex justify-content-between">
            <h3 class="text-success">{{ opportunityTypes.length }}</h3>
            <div class="text-muted">of all</div>
            <h3 class="text-success">{{ opportunities.length }}</h3>
            <div class="text-muted">opportunities</div>
          </div>
          <div class="card-footer">
            <NuxtLink to="/adm/mod/opportunities/types" class="small">
              Manage Opportunities types
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card shadow-lg border-0 rounded-4">
          <div class="card-header">
            <h6 class="fw-bold text-danger">Admin Users</h6>
          </div>
          <div class="card-body d-flex justify-content-between">
            <h3 class="text-success">{{ users.filter(u => u.role.toLowerCase() == "admin").length }}</h3>
            <div class="text-muted">in all</div>
            <h3 class="text-success">{{ users.length }}</h3>
            <div class="text-muted">users</div>
          </div>
          <div class="card-footer">
            <NuxtLink to="/adm/mod/users/admin" class="small">
              Manage Admin Users
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card shadow-lg border-0 rounded-4">
          <div class="card-header">
            <h6 class="fw-bold text-danger">Partners</h6>
          </div>
          <div class="card-body d-flex justify-content-between">
            <h3 class="text-success">{{ partners.length }}</h3>
            <div class="text-muted">in all</div>
            <h3 class="text-success">{{ partners.length }}</h3>
            <div class="text-muted">partners</div>
          </div>
          <div class="card-footer">
            <NuxtLink to="/adm/mod/partners" class="small">
              Manage Partners
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card shadow-lg border-0 rounded-4">
          <div class="card-header">
            <h6 class="fw-bold text-danger">Applications</h6>
          </div>
          <div class="card-body d-flex justify-content-between">
            <h3 class="text-success">{{ applications.length }}</h3>
            <div class="text-muted">in all</div>
            <h3 class="text-success">{{ opportunities.length }}</h3>
            <div class="text-muted">opportunities</div>
          </div>
          <div class="card-footer">
            <NuxtLink to="/adm/mod/applications" class="small">
              View Applications
            </NuxtLink>
          </div>
        </div>
      </div>

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

    <div class="row mt-4" v-if="device === 'desktop'">

      <!-- LEFT SIDEBAR -->
      <aside class="col-lg-3 sidebar sticky-top" v-if="device === 'desktop'">

        <div class="card shadow-sm mb-3">
          <div class="card-body">
            <h6 class="fw-bold">Quick Links</h6>

            <NuxtLink to="/adm/mod/opportunities" class="w-100">
              <Icon name="fa6-solid:briefcase" class="me-3"/>
              <span>Opportunities</span>
            </NuxtLink>

            <NuxtLink to="/adm/mod/resources" class="w-100">
              <Icon name="fa6-solid:briefcase" class="me-3"/>
              <span>Resources</span>
            </NuxtLink>

            <NuxtLink to="/adm/mod/users" class="w-100">
              <Icon name="fa6-solid:users" class="me-3"/>
              <span>Users</span>
            </NuxtLink>

            <NuxtLink to="/adm/mod/applications" class="w-100">
              <Icon name="fa6-solid:list" class="me-3"/>
              <span>Applications</span>
            </NuxtLink>
          </div>
        </div>


        <div class="card shadow-sm mb-3">
          <div class="card-body">
            <UsersAnalytic />
          </div>
        </div>
      </aside>


      <!-- MAIN CONTENT -->
      <section class="col-lg-6  transparent sidebar sticky-top" v-if="device === 'desktop'">

        <!-- RECENT OPPORTUNITIES -->
        <section class="mt-4">

          <div class="d-flex justify-content-between card p-3 align-items-center mb-2">
            <h5>Recent Opportunities</h5>

            <NuxtLink to="/adm/mod/opportunities" class="btn btn-sm btn-outline-primary" >
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
                <td class="small"><NuxtLink :to="'/adm/mod/opportunities/' + opp.id">{{ opp.title }}</NuxtLink></td>
                <td class="small">{{ opp.opportunity_type }}</td>
                <td class="small">
                  <span class="badge" :class="{ 'bg-success': opp.status === 'Open', 'bg-secondary': opp.status === 'Closed', 'bg-warning text-dark': opp.status === 'Upcoming' }">
                    {{ opp.status }}
                  </span>
                </td>
                <td class="small text-muted">
                  {{ opp.provider?.organization_name || 'N/A' }}
                </td>
                <td class="small text-muted">
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
          <div class="d-flex justify-content-between card p-3 align-items-center mb-2">
            <h5>Recent Applications</h5>

            <NuxtLink to="/adm/mod/applications" class="btn btn-sm btn-outline-primary" >
              View All
            </NuxtLink>
          </div>

          <table class="table table-hover table-bordered">

            <thead class="table-dark">
              <tr>
                <th>Applicant</th>
                <th>Email</th>
                <th>Opportunity</th>
                <th>Submitted</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="app in recentApplications" :key="app.id" >
                <td>{{ app.full_name }}</td>
                <td>{{ app.email }}</td>
                <td @click="selectApp(app.opportunity_id)" class="pointer text-primary">View Opportunity </td>
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

      </section>

      <!-- RIGHT INSIGHTS -->
      <aside class="col-lg-3 sidebar sticky-top" v-if="device === 'desktop'">
        <div class="card shadow-sm mb-3">
          <div class="card-body">
            <ApplicationAnalytic />
          </div>
        </div>

        <div class="card shadow-sm mb-3">
          <div class="card-body">
            <OpportunitiesAnalytic />
          </div>
        </div>

      </aside>      
    </div>

    <section class="" v-if="device !== 'desktop'">

      <div class="card shadow-sm mb-3">
        <div class="card-header">
          <h6 class="fw-bold">Quick Links</h6>
        </div>
        <div class="card-body d-flex justify-content-between">

          <NuxtLink to="/adm/mod/opportunities" class="w-100">
            <Icon name="fa6-solid:briefcase" class="me-3"/>
            <span>Opportunities</span>
          </NuxtLink>
          <NuxtLink to="/adm/mod/resources" class="w-100">
            <Icon name="fa6-solid:briefcase" class="me-3"/>
            <span>Resources</span>
          </NuxtLink>
          <NuxtLink to="/adm/mod/users" class="w-100">
            <Icon name="fa6-solid:users" class="me-3"/>
            <span>Users</span>
          </NuxtLink>
          <NuxtLink to="/adm/mod/applications" class="w-100">
            <Icon name="fa6-solid:list" class="me-3"/>
            <span>Applications</span>
          </NuxtLink>
        </div>
      </div>

      <div class="d-flex justify-content-between card p-3 align-items-center mb-2">
        <h5>Recent Opportunities</h5>
        <NuxtLink to="/adm/mod/opportunities" class="btn btn-sm btn-outline-primary" >
          View All
        </NuxtLink>
      </div>

      <section class="grid-3">
        <div v-for="opp in recentOpportunities" :key="opp.id" >            
          <div class="card shadow-lg h-100 rounded-4">
            <div class="card-header"><NuxtLink :to="'/adm/mod/opportunities/' + opp.id">
              <div class="small">{{ opp.title }}</div></NuxtLink>
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <div class="small">{{ opp.opportunity_type }}</div>
                <div class="small">
                  <span class="badge" :class="{ 'bg-success': opp.status === 'Open', 'bg-secondary': opp.status === 'Closed', 'bg-warning text-dark': opp.status === 'Upcoming' }">{{ opp.status }}</span>
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <div class="small text-muted">
                  {{ opp.provider?.organization_name || 'N/A' }}
                </div>
                <div class="small text-muted">
                  {{ opp.host_country }},
                  {{ opp.location?.city || 'N/A' }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="d-flex mt-4 mb-2 justify-content-between card p-3 align-items-center mb-2">
        <h5>Recent Applications</h5>
        <NuxtLink to="/adm/mod/applications" class="btn btn-sm btn-outline-primary" >
          View All
        </NuxtLink>
      </div>

      <section class="grid-3">
        <div v-for="app in recentApplications" :key="app.id" >            
          <div class="card shadow-lg h-100 rounded-4">
            <div class="card-header"><NuxtLink :to="'/adm/mod/opportunities/' + app.id">
              <div class="small">{{ app.full_name }}</div></NuxtLink>
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <div class="small">{{ app.email }}</div>
                <div class="small">                  
                  <span class="badge bg-success">{{ app.status }}</span>
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <div class="small text-muted">
                  {{ formatDate(app.submitted_at) }}
                </div>
                <div class="small text-muted">
                  {{ formatDate(app.submitted_at)}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>

  </main>
</template>

<script setup>

import { ref, computed, onMounted } from 'vue'
import { useDataStore } from '@/stores/dataStore'
import OpportunityDisplay from '~/components/OpportunityDisplay'
import ApplicationAnalytic from '~/components/analytics/ApplicationAnalytic'
import OpportunitiesAnalytic from '~/components/analytics/OpportunitiesAnalytic'
import UsersAnalytic from '~/components/analytics/UsersAnalytic'
import { useDeviceType } from "@/composables/useDeviceType";

const { device } = useDeviceType();

const dataStore = useDataStore()

const opportunities = ref([])
const users = ref([])
const partners = ref([])
const applications = ref([])
const resources = ref([])
const opportunityTypes = ref([])
const opportunityCategories = ref([])
const selectedAppId = ref('')
const showOppModal = ref(false)


const fetchDashboardData = async (force=false) => {

  await Promise.all([
    dataStore.fetchData('opportunities', force),
    dataStore.fetchData('users', force),
    dataStore.fetchData('partners', force),
    dataStore.fetchData('applications', force),
    dataStore.fetchData('resources', force),
    dataStore.fetchData('opp_type', force),
    dataStore.fetchData('opp_category', force)
  ])

  opportunities.value = dataStore.items.opportunities || []
  users.value = dataStore.items.users || []
  partners.value = dataStore.items.partners || []
  applications.value = dataStore.items.applications || []
  resources.value = dataStore.items.resources || []
  opportunityTypes.value = dataStore.items.opp_type || []
  opportunityCategories.value = dataStore.items.opp_category || []

}

const recentOpportunities = computed(() => {
  return opportunities.value
    .slice()
    .sort((a,b)=> new Date(b.created_at) - new Date(a.created_at))
    .slice(0,6)
})

const recentApplications = computed(() => {
  return applications.value
    .slice()
    .sort((a,b)=> new Date(b.created_at) - new Date(a.created_at))
    .slice(0,6)

})

const recentApplications0 = computed(() => {
  return applications.value
    .slice()
    .sort((a,b)=> new Date(b.created_at) - new Date(a.created_at))
    .slice(0,6).forEach(app => {
    let opp = opportunities.value.find(o => o.id === app.opportuniy_id)
    app['opp'] = opp
    applications.push(app)
  })
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
  layout:'admin',
  middleware:'admin'
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

