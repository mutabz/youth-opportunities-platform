<template>
  <main class="admin-opportunities">
    <!-- HEADER -->
    <header class="app-header d-flex justify-content-between align-items-center">
      <div class="d-flex">
        <button class="btn me-3" @click="$router.back()"><Icon name="fa6-solid:arrow-right" />
        </button>
      <h3>Opportunities Admin</h3>
      </div>
      <div class="d-flex">
        <button class="btn btn-primary" @click="showCreateForm = true">+ New Opportunity</button>
        <button class="btn btn-secondary" @click="refreshData"><span class=""></span>Refresh</button>
      </div>
    </header>

<div class="row mt-4">

  <!-- LEFT SIDEBAR -->
  <aside class="col-lg-3 sidebar sticky-top">
    <!-- SEARCH & FILTER -->
    <div class="filters mt-3 gap-2 align-items-center">
      <input v-model="searchQuery" type="text" class="form-control w-100 mt-2" placeholder="Search by title or type..." />

      <select v-model="statusFilter" class="form-select w-100 mt-2">
        <option value="">All Status</option>
        <option value="Open">Open</option>
        <option value="Closed">Closed</option>
        <option value="Upcoming">Upcoming</option>
      </select>
      <select v-model="typeFilter" class="form-select w-100 mt-2">
        <option value="">All Types</option>
        <option v-for="t in opportunityTypes" :key="t.id" :value="t.name">{{ t.name }}</option>
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
    <div class="d-flex">
      <div class="text-wrap"><strong v-if="searchQuery">Search Results for: </strong><span>{{ searchQuery }}</span></div>
      <div class=""><strong v-if="statusFilter">Status: </strong><span>{{ statusFilter }}</span></div>
      <div class=""><strong v-if="typeFilter">Type: </strong><span>{{ typeFilter }}</span></div>
    </div>

    <!-- OPPORTUNITIES TABLE -->
    <div class="mt-3" v-if="!showCreateForm">
      <table class="table table-hover table-bordered">
        <thead class="table-dark">
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
            <th>Organization</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="opp in filteredOpportunities" :key="opp.id">
            <td class="small">{{ opp.title }}</td>
            <td class="small text-muted">{{ opp.category }}</td>
            <td class="small text-muted">{{ opp.status }}</td>
            <td class="small text-muted">{{ opp.provider.organization_name || 'N/A' }}</td>
            <td class="align-items-center">
              <NuxtLink :to="'/adm/mod/opportunities/' + opp.id" class="btn btn-act text-primary me-1">
                <Icon name="fa6-solid:pencil"/>
              </NuxtLink>
              <button class="btn btn-act text-danger" @click="deleteOpportunity(opp.id)">
                <Icon name="fa6-solid:trash"/>
              </button>
            </td>
          </tr>
          <tr v-if="!filteredOpportunities.length">
            <td colspan="6" class="text-center">No opportunities found.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- CREATE / EDIT MODAL -->
    <div v-if="showCreateForm || editingOpportunity" class=" fade show d-block">
      <div class="">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ editingOpportunity ? 'Edit Opportunity' : 'Create Opportunity' }}</h5>
            <button type="button" class="btn-close" @click="closeForm"></button>
          </div>
          <div class="modal-body">
            <!-- Reuse your Opportunity Form here -->
            <OpportunityForm 
              :initialForm="editingOpportunity || null"
              @saved="onFormSaved"
              @cancel="closeForm"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- DELETE CONFIRMATION -->
    <div v-if="deleteId" class="modal fade show d-flex justify-content-between align-items-center" style="background: rgba(0,0,0,0.5)">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Confirm Deletion</h5>
            <button type="button" class="btn-close" @click="deleteId = null"></button>
          </div>
          <div class="modal-body">
            Are you sure you want to delete this opportunity?
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" @click="deleteId = null">Cancel</button>
            <button class="btn btn-danger" @click="confirmDelete">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </section>

    <!-- RIGHT INSIGHTS -->
  <aside class="col-lg-3 sidebar sticky-top">

    <div class="card shadow-sm mb-3">
      <div class="card-body">
        <h6 class="fw-bold text-uppercase text-center">Opportunities by Category</h6>
        <OpportunitiesAnalytic />
      </div>
    </div>

  </aside>
</div>

  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useDataStore } from '@/stores/dataStore'
import OpportunityForm from '~/components/OpportunityForm.vue'
import EditOpportunityForm from '~/components/EditOpportunityForm.vue'
import ApplicationAnalytic from '~/components/analytics/ApplicationAnalytic'
import OpportunitiesAnalytic from '~/components/analytics/OpportunitiesAnalytic'
import UsersAnalytic from '~/components/analytics/UsersAnalytic'

const dataStore = useDataStore()
const opportunities = ref([])
const loading = ref(false)

const searchQuery = ref('')
const statusFilter = ref('')
const typeFilter = ref('')

const showCreateForm = ref(false)
const editingOpportunity = ref(null)
const deleteId = ref(null)

const opportunityTypes = ref([])

const fetchOpportunities = async (force = false) => {
  loading.value = true
  await dataStore.fetchData('opportunities', force)
  await dataStore.fetchData('opp_type', force)
  opportunities.value = dataStore.items.opportunities || []
  opportunityTypes.value = dataStore.items.opp_type || []
  loading.value = false
}

const filteredOpportunities = computed(() => {
  return opportunities.value.filter(o => {
    const matchesSearch = o.title.toLowerCase().includes(searchQuery.value.toLowerCase()) || (o.opportunity_type?.toLowerCase().includes(searchQuery.value.toLowerCase()))
    const matchesStatus = statusFilter.value ? o.status === statusFilter.value : true
    const matchesType = typeFilter.value ? o.opportunity_type === typeFilter.value : true
    return matchesSearch && matchesStatus && matchesType
  })
})

const editOpportunity = (opp) => {
  route.push(`/adm/mod/opportunities/${opp.id}`)
}

const closeForm = () => {
  showCreateForm.value = false
  editingOpportunity.value = null
}

const onFormSaved = async () => {
  await fetchOpportunities(true)
  closeForm()
}

const deleteOpportunity = (id) => {
  deleteId.value = id
}

const confirmDelete = async () => {
  try {
    await dataStore.deleteItem('opportunities', deleteId.value)
    await fetchOpportunities(true)
  } catch (e) {
    alert('Failed to delete opportunity')
  } finally {
    deleteId.value = null
  }
}

const refreshData = async () => {
  fetchOpportunities(true)
}

definePageMeta({
  layout: 'admin',
  middleware: 'admin'
})


onMounted(fetchOpportunities)
</script>

<style scoped>
.admin-opportunities header {
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