<template>
  <header class="app-header d-flex justify-content-between align-items-center">

    <div class="d-flex">
      <button class="btn me-3" @click="$router.back()">
        <Icon name="fa6-solid:arrow-left"/>
      </button>

      <h3>User Management</h3>
    </div>

    <div class="d-flex gap-2">

      <button class="btn btn-primary" @click="editUser(user)">
        Edit User
      </button>

      <button class="btn btn-danger" @click="deleteUser(user.id)">
        Delete
      </button>

      <button class="btn btn-secondary" @click="refreshData">
        Refresh
      </button>

    </div>

  </header>

  <div class="row mt-2">

    <!-- ================= SIDEBAR ================= -->
    <aside class="col-lg-3 sidebar sticky-top">
      <div class="card shadow-sm mb-3 text-center">
        <div class="card-body">

          <div class="rounded-circle bg-dark text-white d-flex align-items-center justify-content-center mx-auto mb-3" style="width:80px;height:80px;font-size:24px" >{{ getInitials(user?.full_name) }}</div>
          <h5>{{ user?.full_name }}</h5>
          <p class="text-muted">{{ user?.email }}</p>
          <span class="badge bg-primary">{{ user?.role }}</span>
          <hr>
          <div class="small text-start">
            <p><strong>ID:</strong> {{ user?.id }}</p>
            <p><strong>Joined:</strong> {{ formatDate(user?.created_at) }}</p>
          </div>
        </div>
      </div>

      <div class="card shadow-sm">
        <div class="card-body">
          <h6 class="fw-bold">Admin Actions</h6>
          <button class="btn btn-outline-primary w-100 mb-2" @click="editUser(user)">Edit User</button>
          <button class="btn btn-outline-danger w-100 mb-2" @click="deleteUser(user.id)">Delete User</button>
          <button class="btn btn-outline-warning w-100">Suspend User</button>
        </div>
      </div>

      <div class="card shadow-sm mb-3">
        <div class="card-body">
          <h6 class="fw-bold">Quick Links</h6>

          <NuxtLink to="/adm/mod" class="w-100">
            <Icon name="fa6-solid:briefcase" class="me-3"/>
            <span>Dashboard</span>
          </NuxtLink>

          <NuxtLink to="/adm/mod/users/admin" class="w-100">
            <Icon name="fa6-solid:users" class="me-3"/>
            <span>Admin Users</span>
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

    </aside>

    <!-- ================= MAIN CONTENT ================= -->
    <section class="col-lg-6 sidebar transparent sticky-top">
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

      
    <!-- DELETE CONFIRMATION -->

    <div v-if="deleteId" class="modal fade show d-flex justify-content-between align-items-center" style="background: rgba(0,0,0,0.5)" >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Confirm Deletion
            </h5>
            <button class="btn-close" @click="deleteId = null" ></button>
          </div>
          <div class="modal-body">
            Are you sure you want to delete this user?
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" @click="deleteId = null" >Cancel</button>
            <button class="btn btn-danger" @click="confirmDelete" > Delete </button>
          </div>
        </div>
      </div>
    </div>

    </section>

    <section class="col-lg-3 sidebar sticky-top">
      <div class="card shadow-sm mb-3">
        <div class="card-body">
          <h6 class="fw-bold">User Activity</h6>
          <div class="small">
            <p><strong>Applications:</strong> {{ user?.applications_count || 0 }}</p>
            <p><strong>Saved Opportunities:</strong> {{ user?.saved_count || 0 }}</p>
            <p><strong>Communities:</strong> {{ communities.length }}</p>
          </div>
        </div>
      </div>

      <div class="card shadow-sm">
        <div class="card-body">
          <h6 class="fw-bold">Organizations</h6>
          <div v-if="!organizations.length" class="text-muted">
            No organizations
          </div>
          <div v-for="org in organizations.slice(0,5)" :key="org.id" class="mb-2" >
            <strong>{{ org.name }}</strong>
            <small class="text-muted d-block">
              {{ org.category }}
            </small>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>



<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useDataStore } from '~/stores/dataStore'
import { truncate, getInitials } from '~/composables/utils'
import ApplicationAnalytic from '~/components/analytics/ApplicationAnalytic'
import OpportunitiesAnalytic from '~/components/analytics/OpportunitiesAnalytic'
import UsersAnalytic from '~/components/analytics/UsersAnalytic'

const dataStore = useDataStore()
const route = useRoute()
const user = ref({})
const loading = ref(false)
const showCreateForm = ref(false)
const editingUser = ref(null)
const id = route.params.id
const deleteId = ref(null)
const jobSeeker  = ref({})
const organizations  = ref([])
const communities  = ref([])

const fetchUsers = async (force = false) => {
  loading.value = true
  await dataStore.fetchData('users', force)
  user.value = dataStore.items.users.filter(u => u.id === id)[0]
  jobSeeker.value = user.value.Job_profile
  loading.value = false
}

const editUser = (user) => {
  editingUser.value = user
}

const closeForm = () => {
  showCreateForm.value = false
  editingUser.value = null
}

const onFormSaved = async () => {
  await fetchUsers(true)
  closeForm()
}

const deleteUser = (id) => {
  deleteId.value = id
}

const confirmDelete = async () => {
  try {
    await dataStore.deleteItem('users', deleteId.value)
    await fetchUsers(true)
  }
  catch {
    alert('Failed to delete user')
  }
  finally {
    deleteId.value = null
  }
}

const refreshData = () => {
  fetchUsers(true)
}

const formatDate = (date) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString()
}

const jsonSections = [
  { key:'education', label:'Education' },
  { key:'experience', label:'Experience' },
  { key:'trainings', label:'Trainings' },
  { key:'languages', label:'Languages' },
  { key:'projects', label:'Projects' }
]


definePageMeta({
  layout: 'admin',
  middleware: 'admin'
})


onMounted(fetchUsers)

</script>

<style scoped>

.admin-users header {
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;
}

.filters input,
.filters select {
  width: auto;
}

.modal-backdrop {
  z-index: 1040;
}

</style>