<template>
    <main class="main">
        <header class="hero">
            <div class="hero-text">
                <h1>Find the <span>Opportunity</span> that changes everything.</h1>
                <p>We connect ambitious young people with world-class scholarships, internships, and fully-funded conferences.</p>

                 <!-- Search Box -->
                <div class="search-bar">
                    <input type="text" placeholder="Try 'Full Stack Internship' or 'UN Volunteer'..."  v-model="searchQuery">
                    <button class="btn btn-primary rounded-4">Search</button>
                </div>  
                <div class="card shadow0lg mt-0 mb-4 " v-if="searchResults.length">
                    <!-- SEARCH RESULTS -->
                  <div class="card-footer p-0" v-if="searchResults.length">
                    <div class="w-100">
                      <div v-for="opp in searchResults" :key="opp.id">

                        <NuxtLink :to="'/opportunities/' + opp.category + '-data/' + opp.id" class="d-flex justify-content-between align-items-center p-2 border-bottom text-decoration-none text-dark  search-item">
                          <strong class="col-lg-6 text-start">{{ truncate(opp.title, 60) }}</strong>

                          <span class="text-muted text-blue col-lg-2 text-end">
                            {{ opp.category || 'Opportunity' }}
                          </span>


                          <span class="text-muted text-blue col-lg-2 text-end">
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

                <p style="font-size: 0.8rem;">Trending: Google STEP, Rhodes Scholarship, Hult Prize</p>
            </div>
        </header>


        <section class="tabs">
            <div class="tab"><NuxtLink to="/opportunities/scholarships" class="unset">Scholarships</NuxtLink></div>
            <div class="tab"><NuxtLink to="/opportunities/internships" class="all-unset">Internships</NuxtLink></div>
            <div class="tab"><NuxtLink to="/opportunities/competitions" class="all-unset">Competitions</NuxtLink></div>
            <div class="tab"><NuxtLink to="/opportunities/grants" class="all-unset">Grants & Funding</NuxtLink></div>
            <div class="tab"><NuxtLink to="/opportunities/fellowships" class="all-unset">Fellowships</NuxtLink></div>
            <div class="tab"><NuxtLink to="/opportunities/jobs" class="all-unset">Job In Rwanda</NuxtLink></div>
        </section>

        <section class="p-2" style="background: #f1f5f9;">
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
                            <div class="text-danger"><strong class="me-3">Deadline: </strong>{{ opp.details.application.deadline }}</div>
                        </div>
                    </div>

                    <div class="card-footer">
                        <span class="deadline"><Icon name="fa6-solid:location-pin"/> {{ truncate(opp.host_country, 10) }}, {{ truncate(opp.location.city, 10) }}</span>
                        <NuxtLink :to="'/opportunities/' + opp.category + '-data/' + opp.id" class="btn btn-outline-primary rounded-4" style="font-size: 0.8rem; padding: 0.4rem 1rem;">View Details</NuxtLink>
                    </div>
                </div>
            </div>

            <div class="centered mt-3">
                <NuxtLink class="btn btn-primary btn-lg " to="/opportunities">Browse More <Icon name="fa6-solid:arrow-right" /></NuxtLink>
            </div>
        </section>


        <section class="p-2">
            <div class="opportunity-mega-menu">

              <div
                v-for="(routes, category) in groups"
                :key="category"
                class="menu-group"
              >

                <h5 class="menu-title">{{ category }}</h5>

                <ul class="menu-list">
                  <li v-for="route in routes.slice(0, 10)" :key="route.path">
                    <NuxtLink :to="route.path" class="menu-link">
                      {{ formatName(route.path) }}
                    </NuxtLink>
                  </li>
                </ul>

              </div>

            </div>
        </section>


        <section class="stats">
            <div class="stat-item">
                <h3>50k+</h3>
                <p>Active Users</p>
            </div>
            <div class="stat-item">
                <h3>$2.5M</h3>
                <p>Grant Funding Found</p>
            </div>
            <div class="stat-item">
                <h3>120+</h3>
                <p>Countries Reached</p>
            </div>
            <div class="stat-item">
                <h3>1,200</h3>
                <p>Daily Listings</p>
            </div>
        </section>

        

        <section class="section-padding">
            <div class="section-title">
                <h2>Browse by Category</h2>
                <p>What are you looking for today?</p>
            </div>
            <div class="category-grid">
                <NuxtLink to="/opportunities/scholarships" class="cat-card">
                    <span class="cat-icon">
                        <span class="icon">
                            <Icon name="fa6-solid:graduation-cap" />
                        </span>
                    </span>
                    <h4>Scholarships</h4>
                </NuxtLink>

                <NuxtLink  to="/opportunities/grants"class="cat-card">
                    <span class="cat-icon">
                        <span class="icon">
                            <Icon name="fa6-solid:hand-holding-dollar" />
                        </span>
                    </span>
                    <h4>Grants & Funding</h4>
                </NuxtLink>

                <NuxtLink to="/opportunities/internships" class="cat-card">
                    <span class="cat-icon">
                        <span class="icon">
                            <Icon name="fa6-solid:briefcase" />
                        </span>
                    </span>
                    <h4>Internships</h4>
                </NuxtLink>

                <NuxtLink to="/opportunities/competitions" class="cat-card">
                    <span class="cat-icon">
                        <span class="icon">
                            <Icon name="fa6-solid:users" />
                        </span>
                    </span>
                    <h4>Competitions</h4>
                </NuxtLink>

                <NuxtLink to="/opportunities/fellowships" class="cat-card">
                    <span class="cat-icon">
                        <span class="icon">
                            <Icon name="fa6-solid:award" />
                        </span>
                    </span>
                    <h4>Fellowships</h4>
                </NuxtLink>

                <NuxtLink to="/opportunities/jobs" class="cat-card">
                    <span class="cat-icon">
                        <span class="icon">
                            <Icon name="fa6-solid:briefcase" />
                        </span>
                    </span>
                    <h4>Job In Rwanda</h4>
                </NuxtLink>
            </div>

        </section>

    </main>
</template>


<script setup>
import { useDataStore } from '~/stores/dataStore'
import { onMounted, computed } from 'vue'


import scholarships from '~/data/scholarships.json'
import { useRouter } from 'vue-router'
import { useGroupedOpportunities } from '~/composables/useGroupedOpportunities'



const router = useRouter()
const dataStore = useDataStore()
const model = 'opportunities'
const searchQuery = ref('')

// Computed props for easier template binding
const items = ref([])

const truncate = (text, length) => {
  if (!text) return ''
  return text.length > length ? text.slice(0, length) + '...' : text
}

const fetchRequirements = async (force = false) => {
  await dataStore.fetchData('opportunities', force)
  items.value = dataStore.items.opportunities || []
}

// Fetch data on component mount
onMounted(fetchRequirements)

const { groups } = useGroupedOpportunities()

const groupedOpportunities = computed(() => {
  const { groups } = useGroupedOpportunities()
  console.log(groups)
})

function formatName(path) {
  return path
    .split('/')
    .pop()
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
}


const searchResults = computed(() => {
  if (!searchQuery.value) return []
  if (!items.value) return []

  return items.value
    ?.filter(opp =>
      opp.description[0]?.toLowerCase().includes(searchQuery.value.toLowerCase()) || opp.title?.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
    .slice(0, 5)
})

</script>

<style scoped>
    .nav-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .nav-list li {
      margin-bottom: 0.5rem;
    }

    .nav-link {
      display: block;
      padding: 0.6rem 1rem;
      border-radius: 10px;
      text-decoration: none;
      color: #111;
      font-weight: 500;
      transition: 0.2s;
    }

    .nav-link:hover {
      background: #f3f4f6;
    }

    .router-link-active {
      background: #e0e7ff;
      color: #3b82f6;
      font-weight: 600;
    }
</style>