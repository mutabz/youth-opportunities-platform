<template>
<main class="user-dashboard container-fluid">

  <!-- HEADER -->
  <header class="app-header d-flex justify-content-between align-items-center">
    <div class="d-flex">
      <button class="btn me-3" @click="$router.back()">
        <Icon name="fa6-solid:arrow-left"/>
      </button>
      <h3>Edit Job Seeker Profile</h3>
    </div>

    <div class="d-flex gap-2"  v-if="device === 'desktop'">
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
      <div class="card shadow-sm text-center mb-3" >
        <div class="card-body">
          <div
            class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3"
            style="width:80px;height:80px;font-size:24px"
          >
            {{ getInitials(user?.full_name) }}
          </div>

          <h5 class="fw-bold">{{ user?.full_name }}</h5>
          <p class="text-muted">{{ user?.email }}</p>

          <NuxtLink class="btn btn-primary btn-sm w-100 mb-2" to="/user/dashboard/profile">
            Back to Profile
          </NuxtLink>

          <NuxtLink class="btn btn-outline-primary btn-sm w-100" to="/user/dashboard/profile/job-seeker">
            Job Seeker Profile
          </NuxtLink>
        </div>
      </div>
    </aside>

    <!-- ================= MAIN CONTENT ================= -->
    <section class="col-lg-6">

      <!-- PERSONAL INFORMATION -->
      <div class="card shadow-sm mb-3">
        <div class="card-header fw-bold">Personal Information</div>
        <div class="card-body">

          <div class="mb-3">
            <label class="form-label">Full Name</label>
            <input class="form-control" v-model="form.full_name">
          </div>

          <div class="mb-3">
            <label class="form-label">National ID</label>
            <input class="form-control" maxlength="16" v-model="form.national_id">
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label class="form-label">Date of Birth</label>
              <input type="date" class="form-control" v-model="form.dob">
            </div>
            <div class="col-md-6 mb-3">
              <label class="form-label">Gender</label>
              <select class="form-select" v-model="form.gender">
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div class="mb-3">
            <label class="form-label">Phone</label>
            <input class="form-control" v-model="form.phone">
          </div>

          <div class="mb-3">
            <label class="form-label">Marital Status</label>
            <select class="form-select" v-model="form.marital_status">
              <option value="">Select</option>
              <option>Single</option>
              <option>Married</option>
              <option>Divorced</option>
            </select>
          </div>

          <div class="mb-3">
            <label class="form-label">Disability</label>
            <input class="form-control" v-model="form.disability">
          </div>

        </div>
      </div>

      <!-- LOCATION -->
      <div class="card shadow-sm mb-3">
        <div class="card-header fw-bold">Location</div>
        <div class="card-body">

          <div class="mb-3">
            <label class="form-label">Province</label>
            <input class="form-control" v-model="form.province">
          </div>

          <div class="mb-3">
            <label class="form-label">District</label>
            <input class="form-control" v-model="form.district">
          </div>

          <div class="mb-3">
            <label class="form-label">Sector</label>
            <input class="form-control" v-model="form.sector">
          </div>

          <div class="mb-3">
            <label class="form-label">Cell</label>
            <input class="form-control" v-model="form.cell">
          </div>

          <div class="mb-3">
            <label class="form-label">Village</label>
            <input class="form-control" v-model="form.village">
          </div>

        </div>
      </div>

      <!-- PROFESSIONAL SUMMARY -->
      <div class="card shadow-sm mb-3">
        <div class="card-header fw-bold">Professional Summary</div>
        <div class="card-body">
          <textarea class="form-control" rows="4" v-model="form.summary"></textarea>
        </div>
      </div>

      <!-- SKILLS -->
      <div class="card shadow-sm mb-3">
        <div class="card-header fw-bold">Skills</div>
        <div class="card-body">
          <div v-for="(skill,i) in form.skills" :key="i" class="d-flex mb-2">
            <input class="form-control me-2" v-model="form.skills[i]" placeholder="Skill">
            <button class="btn btn-danger btn-sm" @click="form.skills.splice(i,1)">✕</button>
          </div>
          <button class="btn btn-outline-primary btn-sm" @click="form.skills.push('')">+ Add Skill</button>
        </div>
      </div>

      <!-- EDUCATION / EXPERIENCE / TRAININGS / ETC -->
      <div class="card shadow-sm mb-3" v-for="section in jsonSections" :key="section.key">
        <div class="card-header fw-bold">{{ section.label }}</div>
        <div class="card-body">

          <div v-for="(item,i) in form[section.key]" :key="i" class="mb-3">
            <input class="form-control mb-1" v-model="item.title" placeholder="Title">
            <textarea class="form-control" rows="3" v-model="item.content" placeholder="Description"></textarea>
            <button class="btn btn-danger btn-sm mt-1" @click="removeItem(section.key,i)">Remove</button>
          </div>

          <button class="btn btn-outline-primary btn-sm" @click="addItem(section.key)">
            + Add {{ section.label }}
          </button>

        </div>
      </div>

      <!-- JOB PREFERENCES -->
      <div class="card shadow-sm mb-3">
        <div class="card-header fw-bold">Job Preferences</div>
        <div class="card-body">
          <input class="form-control mb-2" v-model="form.job_preferences.title" placeholder="Preferred Job Title">
          <input class="form-control mb-2" v-model="form.job_preferences.location" placeholder="Preferred Location">
          <input class="form-control" v-model="form.job_preferences.type" placeholder="Job Type">
        </div>
      </div>

      <!-- DOCUMENTS -->
      <div class="card shadow-sm mb-3">
        <div class="card-header fw-bold">Documents</div>
        <div class="card-body">
          <input class="form-control mb-2" v-model="form.documents.cv_url" placeholder="CV URL">
          <div v-for="(url,i) in form.documents.certificate_urls" :key="i" class="d-flex mb-2">
            <input class="form-control me-2" v-model="form.documents.certificate_urls[i]" placeholder="Certificate URL">
            <button class="btn btn-danger btn-sm" @click="form.documents.certificate_urls.splice(i,1)">✕</button>
          </div>
          <button class="btn btn-outline-primary btn-sm" @click="form.documents.certificate_urls.push('')">+ Add Certificate</button>
        </div>
      </div>

      <!-- SUBMIT -->
      <div class="mt-3 mb-5">
        <button class="btn btn-primary w-100 btn-lg" :disabled="loading" @click="submit">
          <span v-if="loading" class="spinner-border spinner-border-sm"></span>
          <span v-else>Save Profile</span>
        </button>
      </div>

    </section>

    <!-- ================= INSIGHTS ================= -->
    <section class="col-lg-3 sidebar sticky-top">
            <!-- ACTIONS -->
      <div class="card shadow-sm">
        <div class="card-body">
          <h6 class="fw-bold mb-3">Quick Actions</h6>

          <NuxtLink
            v-if="user.role.toLowerCase() === 'partner'"
            to="/adm/prt"
            class="btn btn-outline-primary w-100 mb-2"
          >
            Partner Dashboard
          </NuxtLink>

          <NuxtLink
            v-if="user.role.toLowerCase() === 'admin'"
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

    </section>

  </div>

</main>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useDataStore } from '@/stores/dataStore'
import { useUserStore } from '@/stores/userStore'
import { useDeviceType } from "@/composables/useDeviceType";

const { device } = useDeviceType();

const router = useRouter()
const dataStore = useDataStore()
const userStore = useUserStore()

const loading = ref(false)

const user = computed(()=>userStore.user)
const form = ref({
  full_name:'',
  national_id:'',
  dob:'',
  gender:'',
  phone:'',
  email:'',
  marital_status:'',
  province:'',
  district:'',
  sector:'',
  cell:'',
  village:'',
  disability:'',
  profile_photo:'',
  summary:'',
  job_preferences:{},
  skills:[],
  education:[],
  experience:[],
  trainings:[],
  languages:[],
  projects:[],
  documents:{
    cv_url:'',
    certificate_urls:[]
  }
})


const jsonSections=[
  {key:'education',label:'Education'},
  {key:'experience',label:'Experience'},
  {key:'trainings',label:'Trainings'},
  {key:'languages',label:'Languages'},
  {key:'projects',label:'Projects'}
]


const addItem=(key)=>{
  form.value[key].push({title:'',content:''})
}

const removeItem=(key,index)=>{
  form.value[key].splice(index,1)
}



const submit = async()=>{

  loading.value=true

  try{    
    form.value.user_id = user.value.user_id
    if (form.value.user_id) {
      await dataStore.createItem('jobseekers',form.value)  
      router.push('/user/profile')
    } else {
      alert('Error Occured!!')
    }

  }catch(e){

    alert('Failed to save profile')

  }

  loading.value=false
}

definePageMeta({
  layout:'user',
  middleware:'auth'
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
}

.card h3{
  font-weight:700;
}

.card a{
  text-decoration:none;
}

</style>