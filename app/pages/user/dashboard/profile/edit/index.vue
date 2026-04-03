<template>
<main class="user-dashboard container-fluid">

  <!-- HEADER -->
  <header class="app-header d-flex justify-content-between align-items-center">
    <div class="d-flex">
      <button class="btn me-3" @click="$router.back()">
        <Icon name="fa6-solid:arrow-left"/>
      </button>
      <h3>Edit My Profile</h3>
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
      <button class="btn btn-primary" @click="updateProfile">
        <span v-if="loading" class="spinner-border spinner-border-sm"></span>
        <span v-else>Save</span>
      </button>
    </div>
  </header>

  <div class="row mt-2">

    <!-- ================= SIDEBAR ================= -->
    <aside class="col-lg-3" :class="{ 'sidebar' : device === 'desktop', 'sticky-top' : device === 'desktop' }" v-if="device === 'desktop'">
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

    <!-- MAIN CONTENT -->
    <section class="col-lg-6">

      <!-- PROFILE CARD -->
      <div class="card shadow-sm mb-3 text-center">
        <div class="card-body">
          <div class="avatar-circle mb-2">
            {{ getInitials(editUser.full_name) }}
          </div>
          <h5>{{ editUser.full_name }}</h5>
          <small class="text-muted">{{ editUser.email }}</small>
        </div>
      </div>

      <!-- BASIC INFORMATION -->
      <div class="card shadow-sm mb-3">
        <div class="card-header fw-bold">Basic Information</div>
        <div class="card-body">
          <div class="mb-3">
            <label class="form-label">Full Name</label>
            <input type="text" class="form-control" v-model="editUser.full_name">
          </div>
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" v-model="editUser.email" disabled>
            <small class="text-muted">
              Contact support to change email
              <a v-if="contacts.email" :href="'mailto:' + contacts.email">here</a>
            </small>
          </div>
        </div>
      </div>

      <!-- CONTACT INFORMATION -->
      <div class="card shadow-sm mb-3">
        <div class="card-header fw-bold">Contact Information</div>
        <div class="card-body">
          <div class="mb-3">
            <label class="form-label">Phone Number</label>
            <input type="tel" class="form-control" v-model="editUser.phone_number">
          </div>
          <div class="mb-3">
            <label class="form-label">Location</label>
            <input type="text" class="form-control" v-model="editUser.location">
          </div>
        </div>
      </div>

      <!-- PERSONAL DETAILS -->
      <div class="card shadow-sm mb-3">
        <div class="card-header fw-bold">Personal Details</div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-6 mb-3">
              <label class="form-label">Gender</label>
              <select class="form-select" v-model="editUser.gender">
                <option disabled value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div class="col-md-6 mb-3">
              <label class="form-label">Education</label>
              <select class="form-select" v-model="editUser.education_level">
                <option disabled value="">Select</option>
                <option>High School</option>
                <option>Bachelor's</option>
                <option>Master's</option>
                <option>PhD</option>
              </select>
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label">Bio</label>
            <textarea rows="4" class="form-control" v-model="editUser.bio"></textarea>
          </div>
        </div>
      </div>

      <!-- RESUME -->
      <div class="card shadow-sm mb-3">
        <div class="card-header fw-bold">Resume</div>
        <div class="card-body">
          <label class="form-label">Upload Resume (PDF)</label>
          <input type="file" class="form-control" accept=".pdf" @change="handleResumeChange">
        </div>
      </div>

      <!-- SUBMIT -->
      <div class="mt-3 mb-5">
        <button class="btn btn-primary w-100 btn-lg" :disabled="loading" @click="updateProfile">
          <span v-if="loading" class="spinner-border spinner-border-sm"></span>
          <span v-else>Save Profile</span>
        </button>
      </div>

    </section>

    <!-- ================= INSIGHTS ================= -->
    <section class="col-lg-3" :class="{ 'sidebar' : device === 'desktop', 'sticky-top' : device === 'desktop' }">
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
import { ref, computed, onMounted } from "vue"
import { useDataStore } from "@/stores/dataStore"
import { useUserStore } from "@/stores/userStore"
import { truncate, getInitials } from '~/composables/utils'
import { useDeviceType } from "@/composables/useDeviceType";

const { device } = useDeviceType();


const dataStore = useDataStore()
const userStore = useUserStore()

const user = computed(() => userStore.user)

const editUser = ref({})

const loading = ref(false)
const resumeFile = ref(null)
const contacts = ref({})


/* Fetch contacts */
async function fetchContacts(){

  await dataStore.fetchData("contacts")

  const visible = dataStore.items.contacts.find(
    c => c.visible
  )

  if(visible) contacts.value = visible
}


/* Resume upload */
function handleResumeChange(e){
  resumeFile.value = e.target.files[0]
}


/* Update profile */
async function updateProfile(){

  loading.value = true

  try{

    const formData = new FormData()

    formData.append("full_name", editUser.value.full_name)
    formData.append("email", editUser.value.email)
    formData.append("phone_number", editUser.value.phone_number)
    formData.append("role", editUser.value.role)
    formData.append("gender", editUser.value.gender)
    formData.append("education_level", editUser.value.education_level)
    formData.append("bio", editUser.value.bio)
    formData.append("location", editUser.value.location)
    formData.append(
      "is_verified",
      editUser.value.is_verified ? "1" : "0"
    )

    if(resumeFile.value){
      formData.append("resume", resumeFile.value)
    }

    await dataStore.updateItem(
      "users",
      editUser.value.id,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    )

    alert("Profile updated successfully!")

    await userStore.fetchUser()

  }catch(err){

    alert("Error updating profile")

  }

  loading.value = false
}



onMounted(() => {

  editUser.value = { ...user.value }

  fetchContacts()

})

definePageMeta({
  layout:'user',
  middleware:'auth'
})

</script>


<style scoped>

.avatar-circle{
  width:80px;
  height:80px;
  border-radius:50%;
  background:#0d6efd;
  color:white;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:26px;
  margin:auto;
}

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