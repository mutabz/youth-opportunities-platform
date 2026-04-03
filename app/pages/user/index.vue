<template>
    <main class="main">
        <header class="hero">
            <div class="hero-text">
                <h1>Find the <span>Opportunity</span> that changes everything.</h1>
                <p>We connect ambitious young people with world-class scholarships, internships, and fully-funded conferences.</p>
                
                <div class="search-bar">
                    <input type="text" placeholder="Try 'Full Stack Internship' or 'UN Volunteer'...">
                    <button class="btn btn-primary rounded-4">Search</button>
                </div>
                <p style="font-size: 0.8rem;">Trending: Google STEP, Rhodes Scholarship, Hult Prize</p>
            </div>
        </header>

        <section class="tabs">
            <div class="tab active">All</div>
            <div class="tab">CV Templates</div>
            <div class="tab">Scholarship Guides</div>
            <div class="tab">Interview Prep</div>
            <div class="tab">Startup Toolkit</div>
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

                <NuxtLink to="/opportunities/scholarships" class="cat-card">
                    <span class="cat-icon">
                        <span class="icon">
                            <Icon name="fa6-solid:briefcase" />
                        </span>
                    </span>
                    <h4>Internships</h4>
                </NuxtLink>

                <NuxtLink to="/opportunities/scholarships" class="cat-card">
                    <span class="cat-icon">
                        <span class="icon">
                            <Icon name="fa6-solid:users" />
                        </span>
                    </span>
                    <h4>Conferences</h4>
                </NuxtLink>

                <NuxtLink  to="/opportunities/scholarships"class="cat-card">
                    <span class="cat-icon">
                        <span class="icon">
                            <Icon name="fa6-solid:hand-holding-dollar" />
                        </span>
                    </span>
                    <h4>Grants</h4>
                </NuxtLink>

                <NuxtLink to="/opportunities/scholarships" class="cat-card">
                    <span class="cat-icon">
                        <span class="icon">
                            <Icon name="fa6-solid:award" />
                        </span>
                    </span>
                    <h4>Fellowships</h4>
                </NuxtLink>
            </div>

        </section>

        <section class="section-padding" style="background: #f1f5f9;">
            <div class="section-title">
                <h2>Recommended for You</h2>
                <p>Based on the latest deadlines and high success rates.</p>
            </div>
            <div class="opp-grid">
                <div class="card" v-for="opp in items" key="opp.id">
                    <div class="card-img">
                        <span class="card-badge">{{ opp.category  || 'Opportunity' }}</span>
                        <img src="/assets/images/images.png"/>
                    </div>
                    <div class="card-content">
                        <h3 class="label">{{ opp.title }}</h3>
                        <p>{{ truncate(opp.description[0] || '', 100) }}</p>
                        <div class="card-footer">
                            <span class="deadline"><Icon name="fa6-solid:location-pin"/> {{ truncate(opp.host_country, 10) }}, {{ truncate(opp.location.city, 10) }}</span>
                            <NuxtLink :to="'/opportunities/' + opp.id" class="btn btn-outline-primary rounded-4" style="font-size: 0.8rem; padding: 0.4rem 1rem;">View Details</NuxtLink>
                        </div>
                    </div>
                </div>
                <!--
                <div class="card">
                    <div class="card-img">
                        <span class="card-badge" style="background: #10b981;">Internship</span>
                        <img src="/assets/images/images.png"/>
                    </div>
                    <div class="card-content">
                        <h3>Software Engineer Intern - Stripe</h3>
                        <p>Work on the future of economic infrastructure. Open to undergraduate and graduate students.</p>
                        <div class="card-footer">
                            <span class="deadline">Rolling Basis</span>
                            <a href="#" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 1rem;">View Details</a>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-img">
                        <span class="card-badge" style="background: #8b5cf6;">Grant</span>
                        <img src="/assets/images/images.png"/>
                    </div>
                    <div class="card-content">
                        <h3>National Geographic Explorer</h3>
                        <p>Funding for young explorers, scientists, and storytellers working on conservation projects.</p>
                        <div class="card-footer">
                            <span class="deadline">Oct 15, 2026</span>
                            <a href="#" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 1rem;">View Details</a>
                        </div>
                    </div>
                </div>-->
            </div>

            <div class="centered mt-3">
                <NuxtLink class="btn btn-filled btn-lg" to="/opportunities">Browse More <Icon name="fa6-solid:arrow-right" /></NuxtLink>
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


// Computed props for easier template binding
const items = computed(() => dataStore.items[model])
const loading = computed(() => dataStore.loading[model])
const error = computed(() => dataStore.error[model])

const truncate = (text, length) => {
  if (!text) return ''
  return text.length > length ? text.slice(0, length) + '...' : text
}

// Fetch data on component mount
onMounted(async () => {
  await dataStore.fetchData(model)
})

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