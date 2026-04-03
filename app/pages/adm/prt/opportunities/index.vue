<template>
  <main class="admin-opportunities">
    <!-- HEADER -->
    <header class="app-header d-flex justify-content-between align-items-center">
      <div class="d-flex">
        <button class="btn me-3" @click="$router.back()"><Icon name="fa6-solid:arrow-right" />
        </button>
      <h3>Opportunities Management</h3>
      </div>
      <button class="btn btn-primary" @click="showCreateForm = true">+ New Opportunity</button>
    </header>

    <!-- SEARCH & FILTER -->
    <section class="filters mt-3 d-flex gap-2 align-items-center">
      <input v-model="searchQuery" type="text" class="form-control" placeholder="Search by title or type..." />
      <select v-model="statusFilter" class="form-select">
        <option value="">All Status</option>
        <option value="Open">Open</option>
        <option value="Closed">Closed</option>
        <option value="Upcoming">Upcoming</option>
      </select>
      <select v-model="typeFilter" class="form-select">
        <option value="">All Types</option>
        <option v-for="t in opportunityTypes" :key="t.id" :value="t.name">{{ t.name }}</option>
      </select>
      <button class="btn btn-secondary" @click="refreshData"><span class=""></span>Refresh</button>
    </section>

    <!-- OPPORTUNITIES TABLE -->
    <section class="mt-3">
      <table class="table table-hover table-bordered">
        <thead class="table-dark">
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Status</th>
            <th>Organization</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="opp in filteredOpportunities" :key="opp.id">
            <td>{{ opp.title }}</td>
            <td>{{ opp.opportunity_type }}</td>
            <td>{{ opp.status }}</td>
            <td>{{ opp.provider.organization_name || 'N/A' }}</td>
            <td>{{ opp.host_country }}, {{ opp.location.city || 'N/A' }}</td>
            <td>
              <NuxtLink :to="'/adm/prt/opportunities/' + opp.id" class="btn btn-sm btn-warning me-2">Edit</NuxtLink>
              <button class="btn btn-sm btn-danger" @click="deleteOpportunity(opp.id)">Delete</button>
            </td>
          </tr>
          <tr v-if="!filteredOpportunities.length">
            <td colspan="6" class="text-center">No opportunities found.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- CREATE / EDIT MODAL -->
    <div v-if="showCreateForm || editingOpportunity" class="modal fade show d-block" style="background: rgba(0,0,0,0.5)">
      <div class="modal-dialog modal-xl">
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
    <div v-if="deleteId" class="modal fade show d-block" style="background: rgba(0,0,0,0.5)">
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

  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useDataStore } from '@/stores/dataStore'
import OpportunityForm from '~/components/OpportunityForm.vue'
import EditOpportunityForm from '~/components/EditOpportunityForm.vue'

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
  route.push(`/adm/prt/opportunities/${opp.id}`)
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
  layout: 'partner',
  middleware: 'partner'
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