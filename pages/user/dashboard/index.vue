<template>
  <main class="user-dashboard">

    <!-- HEADER -->
    <header class="app-header d-flex justify-content-between align-items-center">
      <div class="d-flex">
        <button class="btn me-3" @click="$router.back()">
          <Icon name="fa6-solid:arrow-right"/>
        </button>
        <h3>User Dashboard</h3>
      </div>

      <div class="d-flex gap-2" v-if="device === 'desktop'">
        <NuxtLink to="/user/dashboard/opportunities" class="btn btn-primary">
          Browse Opportunities
        </NuxtLink>

        <NuxtLink to="/user/dashboard/profile" class="btn btn-secondary">
          My Profile
        </NuxtLink>

        <button class="btn btn-secondary" @click="refreshData">
          Refresh
        </button>
      </div>
    </header>

    <div class="row mt-4">

      <!-- LEFT SIDEBAR -->
      <aside :class="{ 'col-lg-3' : device === 'desktop', 'sidebar' : device === 'desktop', 'sticky-top' : device === 'desktop' }" v-if="device === 'desktop'">

        <div class="card shadow-sm mb-3">
          <div class="card-body text-center">

            <Icon name="fa6-solid:user" size="40"/>

            <h6 class="mt-2">My Account</h6>

            <NuxtLink to="/user/dashboard/profile" class="btn btn-outline-primary btn-sm w-100 mb-2">
              Edit Profile
            </NuxtLink>

            <NuxtLink class="btn btn-outline-primary btn-sm w-100" to="/user/dashboard/profile/job-seeker">
              Job Seeker Profile
            </NuxtLink>

            <NuxtLink
              v-if="user.role === 'partner'"
              to="/adm/prt"
              class="btn btn-outline-primary w-100 mb-2"
            >
              Partner Dashboard
            </NuxtLink>

            <NuxtLink
              v-if="user.role === 'admin'"
              to="/adm/mod"
              class="btn btn-outline-primary w-100 mb-2"
            >
              Admin Dashboard
            </NuxtLink>

            <button class="btn btn-outline-danger w-100" @click="Logout">
              Logout
            </button>

          </div>
        </div>

        <div class="card shadow-sm mb-3">
          <div class="card-body">

            <h6 class="fw-bold">Quick Links</h6>

            <NuxtLink to="/user/dashboard/opportunities" class="">
              Browse Opportunities
            </NuxtLink>

            <NuxtLink to="/user/dashboard/applications" class="">
              My Applications
            </NuxtLink>

            <NuxtLink to="/user/dashboard/saved" class="">
              Saved Opportunities
            </NuxtLink>

          </div>
        </div>
      </aside>


      <!-- MAIN CONTENT -->
      <section class="transparent" :class="{ 'col-lg-6' : device === 'desktop', 'sticky-top' : device === 'desktop' }">

        <!-- STATS -->
        <section class="row g-3 p-3">

          <div class="col-md-6">
            <div class="card shadow-lg border-0 rounded-4">
              <div class="card-header">
                <h6 class="fw-bold text-danger">Applications</h6>
              </div>
              <div class="card-body d-flex justify-content-between">
                <h3 class="text-success">{{ userApplications.length }}</h3>
                <div class="text-muted">in all</div>
                <h3 class="text-success">{{ opportunities.length }}</h3>
                <div class="text-muted">opportunities</div>
              </div>
              <div class="card-footer">
                <NuxtLink to="/user/dashboard/applications">View and manage all applications</NuxtLink>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card shadow-lg border-0 rounded-4">
              <div class="card-header">
                <h6 class="fw-bold text-danger">Accepted Applications</h6>
              </div>
              <div class="card-body d-flex justify-content-between">
                <h3 class="text-success">{{ acceptedCount }}</h3>
                <div class="text-muted">in all</div>
                <h3 class="text-success">{{ userApplications.length }}</h3>
                <div class="text-muted">applications</div>
              </div>
              <div class="card-footer">
                <NuxtLink to="/user/dashboard/applications">View and manage all applications</NuxtLink>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card shadow-lg border-0 rounded-4">
              <div class="card-header">
                <h6 class="fw-bold text-danger">Available Opportunities For you</h6>
              </div>
              <div class="card-body d-flex justify-content-between">
                <h3 class="text-success">{{ opportunities.length }}</h3>
                <div class="text-muted">in all</div>
                <h3 class="text-success">{{ opportunities.length }}</h3>
                <div class="text-muted">opportunities</div>
              </div>
              <div class="card-footer">
                <NuxtLink to="/user/dashboard/opportunities">View and apply to any opportunity</NuxtLink>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card shadow-lg border-0 rounded-4">
              <div class="card-header">
                <h6 class="fw-bold text-danger">Saved Opportunities</h6>
              </div>
              <div class="card-body d-flex justify-content-between">
                <h3 class="text-success">{{ savedOpportunities.length }}</h3>
                <div class="text-muted">in all</div>
                <h3 class="text-success">{{ opportunities.length }}</h3>
                <div class="text-muted">opportunities</div>
              </div>
              <div class="card-footer">
                <NuxtLink to="/user/dashboard/saved">View and manage all saved Opportunities</NuxtLink>
              </div>
            </div>
          </div>

        </section>


        <section class="p-4">

          <div class="card shadow-sm mb-3" v-if="device !== 'desktop'">
            <div class="card-header">
              <h6 class="fw-bold">Quick Links</h6>
            </div>
            <div class="card-body d-flex flex-wrap justify-content-between">

              <NuxtLink to="/user/dashboard/opportunities" class="w-100">
                <Icon name="fa6-solid:briefcase" class="me-3"/>
                <span>Opportunities</span>
              </NuxtLink>
              <NuxtLink to="/user/dashboard/resources" class="w-100">
                <Icon name="fa6-solid:book" class="me-3"/>
                <span>Resources</span>
              </NuxtLink>
              <NuxtLink to="/user/dashboard/applications" class="w-100">
                <Icon name="fa6-solid:list" class="me-3"/>
                <span>Applications</span>
              </NuxtLink>
            </div>
          </div>

          <div class="d-flex justify-content-between card p-3 align-items-center mb-2">
            <h5>Recommended Opportunities</h5>
            <NuxtLink to="/user/dashboard/opportunities" class="btn btn-sm btn-outline-primary" >
              View All
            </NuxtLink>
          </div>


          <div class="grid-2">
            <div class="card shadow-lg h-100 rounded-4" v-for="opp in recommendedOpportunities" key="opp.id">
              <div class="card-header">
                <NuxtLink :to="'/user/dashboard/opportunities/' + opp.category + '-data/' + opp.id" class="text-blue fw-bold">{{ opp.title }}</NuxtLink>
              </div>
              <div class="card-body">                        
                <div class="small text-muted">{{ truncate(opp.description[0] || '', 100) }}</div>
                <div class="d-flex align-items-center justify-content-between mt-3 mb-0">
                  <div class="bg-primary badge">{{ opp.category  || 'Opportunity' }}</div>
                  <div class="text-danger small"><strong class="me-3">Deadline: </strong>{{ opp.details.application.deadline }}</div>
                </div>
              </div>

              <div class="card-footer">
                <span class="deadline"><Icon name="fa6-solid:location-pin"/> {{ truncate(opp.host_country, 10) }}, {{ truncate(opp.location.city, 10) }}</span>
                <NuxtLink :to="'/user/dashboard/opportunities/' + opp.category + '-data/' + opp.id" class="btn btn-outline-primary rounded-4" style="font-size: 0.8rem; padding: 0.4rem 1rem;">View Details</NuxtLink>
              </div>
            </div>
          </div>

          <div class="card shadow-lg border rounded-4 mt-2" v-if="!recommendedOpportunities.length">
            <div class="card-body text-center">
              No opportunities available
            </div>
          </div>


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

          <div class="card shadow-lg border rounded-4 mt-2" v-if="!recentApplications.length">
            <div class="card-body text-center">
              No Applications available
            </div>
          </div>
        </section>

      </section>



      <!-- RIGHT SIDEBAR -->
      <aside class="p-4" :class="{ 'col-lg-3' : device === 'desktop', 'sidebar' : device === 'desktop', 'sticky-top' : device === 'desktop' }">

        <div class="card shadow-sm mb-3">
          <div class="card-body">

            <h6 class="fw-bold">Saved Opportunities</h6>

            <p class="text-muted small">
              You have {{ savedOpportunities.length }} saved opportunities.
            </p>

            <NuxtLink to="/user/dashboard/saved" class="btn btn-sm btn-outline-primary">
              View Saved
            </NuxtLink>

          </div>
        </div>


        <div class="card shadow-sm mb-3">
          <div class="card-body">

            <h6 class="fw-bold">Upcoming Deadlines</h6>

            <ul class="small">
              <li v-for="opp in recommendedOpportunities.slice(0,3)" :key="opp.id">
                <NuxtLink :to="'/user/dashboard/opportunities/' + opp.category + '-data/' + opp.id">{{ opp.title }}</NuxtLink>
              </li>
            </ul>

          </div>
        </div>


        <div class="card shadow-sm">
          <div class="card-body">

            <h6 class="fw-bold">Tips</h6>

            <p class="small text-muted">
              Complete your profile to increase your chance of being selected.
            </p>

          </div>
        </div>

      </aside>

    </div>

  </main>
</template>

<script setup>

import { ref, computed, onMounted } from 'vue'
import { useDataStore } from '@/stores/dataStore'
import { useDeviceType } from "@/composables/useDeviceType";
import { formatDate } from "@/composables/utils";

const { device } = useDeviceType();
const dataStore = useDataStore()
const userStore = useUserStore()

const opportunities = ref([])
const user = computed(()=> userStore.user)
const users_data = ref({})
const applications = ref([])
const savedOpportunities = ref([])

const fetchDashboardData = async(force=false) => {

  await Promise.all([
    dataStore.fetchData('opportunities', force),
    dataStore.fetchData('saved_opportunities', force),
    dataStore.fetchData('users_data', force)
  ])

  savedOpportunities.value = dataStore.items.saved_opportunities || []
  opportunities.value = dataStore.items.opportunities || []
  users_data.value = dataStore.items.users_data || {}
  applications.value = users_data.value.applications


}

const userApplications = computed(()=> applications.value)

const recentApplications = computed(()=>{

  return applications.value
  .slice()
  .sort((a,b)=> new Date(b.created_at) - new Date(a.created_at))
  .slice(0,6)

})

const recommendedOpportunities = computed(()=>{

  return opportunities.value
  .filter(o => o.status === 'Open')
  .slice(0,6)

})

const acceptedCount = computed(()=> 
  applications.value.filter(a => a.status === 'accepted').length
)

const reviewCount = computed(()=> 
  applications.value.filter(a => a.status === 'under_review').length
)

const statusBadge = (status)=>{

  switch(status){

    case "accepted":
      return "bg-success"

    case "rejected":
      return "bg-danger"

    case "shortlisted":
      return "bg-primary"

    case "under_review":
      return "bg-warning text-dark"

    default:
      return "bg-secondary"

  }

}

const refreshData = ()=>{
  fetchDashboardData(true)
}

const Logout = async () => {
  await userStore.logout()
}


definePageMeta({
  layout:'user',
  middleware:'auth'
})

onMounted(fetchDashboardData)

</script>

<style scoped>

.user-dashboard header{
  padding:1rem 0;
  border-bottom:1px solid #ccc;
  margin-top: 5rem;
}

.card h3{
  font-weight:700;
}

.card a{
  text-decoration:none;
}

</style>
