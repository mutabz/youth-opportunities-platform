<template>
  <main class="admin-applications">

    <!-- HEADER -->
    <header class="app-header d-flex justify-content-between align-items-center">
      <div class="d-flex">
        <button class="btn me-3" @click="$router.back()"><Icon name="fa6-solid:arrow-right" />
        </button>
        <h3>Applications Admin</h3>
      </div>
      <div class="d-flex">
        <button class="btn btn-primary" @click="showCreateForm = true">+ New Application</button>
        <button class="btn btn-secondary" @click="refreshData">Refresh</button>
      </div>
    </header>

        <!-- FORM MODAL -->
    <div v-if="showCreateForm || editingApplication" class="modal fade show d-block" style="background: rgba(0,0,0,0.5)">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ editingCategory ? 'Edit Category' : 'Create Category' }}</h5>
            <button type="button" class="btn-close" @click="closeForm"></button>
          </div>
          <div class="modal-body">
            <ApplicationFormAdmin :initialForm="editingApplication || null" @saved="onFormSaved" @cancel="closeForm" />
          </div>
        </div>
      </div>
    </div>
<div class="row mt-4">

  <!-- LEFT SIDEBAR -->
  <aside class="col-lg-3 sidebar sticky-top">
    <!-- SEARCH & FILTER -->
    <div class="filters mt-3 gap-2 align-items-center">
      <input v-model="searchQuery" type="text" class="form-control w-100 mb-3" placeholder="Search applicant..." />

      <select v-model="statusFilter" class="form-select w-100">
        <option value="">All Status</option>
        <option value="pending">Pending</option>
        <option value="under_review">Under Review</option>
        <option value="shortlisted">Shortlisted</option>
        <option value="accepted">Accepted</option>
        <option value="rejected">Rejected</option>
        <option value="withdrawn">Withdrawn</option>
      </select>
    </div>

    <div class="card shadow-sm mb-3">
      <div class="card-body">
        <h6 class="fw-bold">Quick Links</h6>

        <NuxtLink to="/adm/mod" class="w-100">
          <Icon name="fa6-solid:briefcase" class="me-3"/>
          <span>Dashboard</span>
        </NuxtLink>

        <NuxtLink to="/adm/mod/opportunities" class="w-100">
          <Icon name="fa6-solid:briefcase" class="me-3"/>
          <span>Opportunities</span>
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

  <!-- MAIN CONTENT -->
  <section class="col-lg-6 sidebar transparent sticky-top">
    <div class="d-flex justify-content-between">
      <div class="text-wrap"><strong v-if="searchQuery">Search Results for: </strong><span>{{ searchQuery }}</span></div>
      <div class=""><strong v-if="statusFilter">Status: </strong><span>{{ statusFilter }}</span></div>
    </div>

    <!-- APPLICATION TABLE -->
    <section class="mt-3">

      <table class="table table-hover table-bordered">

        <thead class="table-dark">
          <tr>
            <th>Applicant</th>
            <th>Email</th>
            <th>Status</th>
            <th>Submitted</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          <tr v-for="app in filteredApplications" :key="app.id" >
            <td>{{ app.full_name }}</td>
            <td>{{ app.email }}</td>
            <td><span class="badge" :class="statusBadge(app.status)" > {{ app.status }} </span></td>
            <td>{{ formatDate(app.submitted_at) }}</td>
            <td>
              <NuxtLink :to="'/adm/mod/applications/' + app.id" class="btn btn-act text-primary me-2">
                <Icon name="fa6-solid:pencil" />
              </NuxtLink>
              <button class="btn btn-act text-danger" @click="deleteApplication(app.id)" ><Icon name="fa6-solid:trash" /></button>
            </td>
          </tr>

          <tr v-if="!filteredApplications.length">
            <td colspan="8" class="text-center">
              No applications found
            </td>
          </tr>

        </tbody>

      </table>
    </section>


    <!-- DELETE MODAL -->
    <div v-if="deleteId" class="modal fade show d-flex justify-content-between align-items-center" style="background: rgba(0,0,0,0.5)" >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Confirm Delete</h5>
            <button class="btn-close" @click="deleteId = null" ></button>
          </div>
          <div class="modal-body">
            Are you sure you want to delete this application?
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" @click="deleteId = null" > Cancel </button>
            <button class="btn btn-danger" @click="confirmDelete" > Delete </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- RIGHT INSIGHTS -->
  <aside class="col-lg-3 sidebar sticky-top">
    <div class="card shadow-sm mb-3">
      <div class="card-body">
        <ApplicationAnalytic />
      </div>
    </div>
  </aside>
</div>
  </main>
</template>


<script setup>

import { ref, computed, onMounted } from "vue"
import { useDataStore } from "@/stores/dataStore"
import ApplicationFormAdmin  from '~/components/ApplicationFormAdmin.vue' 
import ApplicationAnalytic from '~/components/analytics/ApplicationAnalytic'
import OpportunitiesAnalytic from '~/components/analytics/OpportunitiesAnalytic'
import UsersAnalytic from '~/components/analytics/UsersAnalytic'

const dataStore = useDataStore()
const showCreateForm = ref(false)
const applications = ref([])

const searchQuery = ref("")
const statusFilter = ref("")

const deleteId = ref(null)
const editingApplication = ref(null)



const fetchApplications = async (force=false) => {

  await dataStore.fetchData("applications", force)

  applications.value = dataStore.items.applications || []

}



const filteredApplications = computed(() => {

  return applications.value.filter(app => {

    const matchesSearch =
      app.full_name?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      app.email?.toLowerCase().includes(searchQuery.value.toLowerCase())

    const matchesStatus =
      statusFilter.value ? app.status === statusFilter.value : true

    return matchesSearch && matchesStatus

  })

})



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



const deleteApplication = (id) => {
  deleteId.value = id
}



const confirmDelete = async () => {

  try {

    await dataStore.deleteItem("applications", deleteId.value)

    await fetchApplications(true)

  }

  catch {

    alert("Failed to delete application")

  }

  finally {

    deleteId.value = null

  }

}

const editCategory = (app) => {
  editingApplication.value = { ...app }
  showCreateForm.value = true
}

const closeForm = () => {
  showCreateForm.value = false
  editingApplication.value = null
}


const refreshData = () => {
  fetchApplications(true)
}

const onFormSaved = async () => {
  await fetchApplications(true)
  closeForm()
}



const formatDate = (date) => {

  if (!date) return ""

  return new Date(date).toLocaleDateString()

}



definePageMeta({
  layout: "admin",
  middleware: "admin"
})


onMounted(fetchApplications)

</script>



<style scoped>

.admin-applications header {
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;
}

.filters input,
.filters select {
  width: auto;
}

</style>