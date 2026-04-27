

<template>
<main class="user-dashboard container-fluid">
    <!-- HEADER -->
    <header class="app-header d-flex justify-content-between align-items-center">
      <div class="d-flex">
        <button class="btn me-3" @click="$router.back()">
          <Icon name="fa6-solid:arrow-right"/>
        </button>
        <h3>My Profile</h3>
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

<!-- ================= SIDEBAR ================= -->
<aside class="col-lg-3" :class="{ 'sidebar' : device === 'desktop', 'sticky-top' : device === 'desktop' }">

  <!-- PROFILE CARD -->
  <div class="card shadow-sm text-center mb-1">
    <div class="card-body">

      <div
        class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3"
        style="width:80px;height:80px;font-size:24px"
      >
        {{ getInitials(user?.full_name) }}
      </div>

      <h5 class="fw-bold">{{ user?.full_name }}</h5>
      <p class="text-muted">{{ user?.email }}</p>

      <NuxtLink class="btn btn-secondary text-white btn-sm w-100 mb-2" to="/user/dashboard/profile/edit">
        Edit Profile
      </NuxtLink>

      <NuxtLink class="btn btn-outline-primary btn-sm w-100" to="/user/dashboard/profile/job-seeker">
        Job Seeker Profile
      </NuxtLink>

    </div>
  </div>

  <!-- ACTIONS -->
  <div class="card shadow-sm mb-3" v-if="device !== 'desktop'">
    <div class="card-body">

      <h6 class="fw-bold mb-3">Quick Actions</h6>

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

      <NuxtLink to="/user/dashboard" class="btn btn-outline-primary w-100 mb-2">
        User Dashboard
      </NuxtLink>

      <button class="btn btn-outline-danger w-100" @click="Logout">
        Logout
      </button>

    </div>
  </div>

  <!-- COMMUNITIES -->
  <div class="card shadow-sm mb-3" v-if="device === 'desktop'">
    <div class="card-body">

      <h6 class="fw-bold">Communities</h6>

      <div v-if="!communities.length" class="text-muted">
        No communities
      </div>

      <div
        class="mb-2"
        v-for="community in communities.slice(0,5)"
        :key="community.id"
      >
        <strong>{{ community.name }}</strong>
        <small class="text-muted d-block">
          {{ community.members_count }} members
        </small>
      </div>

    </div>
  </div>

</aside>


<!-- ================= MAIN CONTENT ================= -->
<section class="col-lg-6">

  <!-- JOB SEEKER PROFILE -->
  <div class="card shadow-sm mb-3">
    <div class="card-header fw-bold">Job Seeker Profile</div>

    <div class="card-body" v-if="jobSeeker">

      <div class="mb-2"><strong>National ID:</strong> {{ jobSeeker.national_id }}</div>
      <div class="mb-2"><strong>Phone:</strong> {{ jobSeeker.phone }}</div>
      <div class="mb-2"><strong>Province:</strong> {{ jobSeeker.province }}</div>
      <div class="mb-2"><strong>District:</strong> {{ jobSeeker.district }}</div>

      <div class="mb-3">
        <strong>Summary</strong>
        <p>{{ jobSeeker.summary }}</p>
      </div>

      <!-- SKILLS -->
      <div>
        <strong>Skills</strong>
        <div class="mt-1">
          <span
            v-for="skill in jobSeeker.skills"
            :key="skill"
            class="badge bg-primary me-1"
          >
            {{ skill }}
          </span>
        </div>
      </div>

    </div>
  </div>


  <!-- EDUCATION / EXPERIENCE -->
  <div class="card shadow-sm mb-3" v-for="section in jsonSections" :key="section.key">

    <div class="card-header fw-bold">
      {{ section.label }}
    </div>

    <div class="card-body">

      <div v-if="jobSeeker?.[section.key]?.length">

        <div
          class="card mb-2"
          v-for="(item,index) in jobSeeker[section.key]"
          :key="index"
        >
          <div class="card-body">
            <h6 class="fw-bold">{{ item.title }}</h6>
            <p class="text-muted">{{ item.content }}</p>
          </div>
        </div>

      </div>

      <div v-else class="text-muted">
        No data
      </div>

    </div>

  </div>

</section>


<!-- ================= INSIGHTS ================= -->
<section class="col-lg-3 mb-5" :class="{ 'sidebar' : device === 'desktop', 'sticky-top' : device === 'desktop' }">
  <!-- ACTIONS -->
  <div class="card shadow-sm mb-3" v-if="device === 'desktop'">
    <div class="card-body">

      <h6 class="fw-bold mb-3">Quick Actions</h6>

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

      <NuxtLink to="/user/dashboard" class="btn btn-outline-primary w-100 mb-2">
        User Dashboard
      </NuxtLink>

      <button class="btn btn-outline-danger w-100" @click="Logout">
        Logout
      </button>

    </div>
  </div>

  <!-- USER STATS -->
  <div v-if="user?.stats" class="card shadow-sm mb-3">
    <div class="card-body">

      <h6 class="fw-bold mb-3">Statistics</h6>

      <div
        class="d-flex justify-content-between small mb-1"
        v-for="stat in user.stats"
        :key="stat.name"
      >
        <span>{{ stat.name }}</span>
        <strong>{{ stat.value }}</strong>
      </div>

    </div>
  </div>

  <!-- ORGANIZATIONS -->
  <div class="card shadow-sm">

    <div class="card-body">

      <h6 class="fw-bold">Organizations</h6>

      <div v-if="!organizations.length" class="text-muted">
        No organizations
      </div>

      <div
        class="mb-2"
        v-for="org in organizations.slice(0,5)"
        :key="org.id"
      >
        <strong>{{ org.name }}</strong>
        <small class="text-muted d-block">
          {{ org.category }}
        </small>
      </div>

    </div>

  </div>

    <!-- COMMUNITIES -->
  <div class="card shadow-sm mb-3" v-if="device !== 'desktop'">
    <div class="card-body">

      <h6 class="fw-bold">Communities</h6>

      <div v-if="!communities.length" class="text-muted">
        No communities
      </div>

      <div
        class="mb-2"
        v-for="community in communities.slice(0,5)"
        :key="community.id"
      >
        <strong>{{ community.name }}</strong>
        <small class="text-muted d-block">
          {{ community.members_count }} members
        </small>
      </div>

    </div>
  </div>

</section>

</div>

</main>
</template>

<script setup>

import { ref, computed, onMounted } from 'vue'
import { useRouter } from '#app'
import { useUserStore } from '@/stores/userStore'
import { useDataStore } from '@/stores/dataStore'
import { truncate, getInitials } from '~/composables/utils'
import { useDeviceType } from "@/composables/useDeviceType";

const { device } = useDeviceType();

const router = useRouter()
const userStore = useUserStore()
const dataStore = useDataStore()
const user = computed(()=> userStore.user)
const jobSeeker = computed(()=> user.value?.Job_profile ?? null)
const organizations = ref([])
const communities = ref([])
const users_data = ref({})


const jsonSections = [
  { key:'education', label:'Education' },
  { key:'experience', label:'Experience' },
  { key:'trainings', label:'Trainings' },
  { key:'languages', label:'Languages' },
  { key:'projects', label:'Projects' }
]

const loading = ref(false)
const Logout = async () => {
  await userStore.logout()
}

const fetchRequirements = async(force=false)=> {
  loading.value=true
  await Promise.all([
    dataStore.fetchData('users_data',force)
  ])

  users_data.value = dataStore.items.users_data || []
  communities.value = users_data.value.communities || []
  organizations.value = users_data.value.organizations || []
  loading.value=false
}


onMounted(fetchRequirements)

definePageMeta({
  middleware: 'auth',  
  layout: "user"
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

.card h3{
  font-weight:700;
}

.card a{
  text-decoration:none;
}

</style>