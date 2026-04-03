<template>
  <main class="admin-organizations">

    <!-- HEADER -->
    <header class="app-header d-flex justify-content-between align-items-center mb-3">
      <h3>Organizations</h3>
      <div class="d-flex gap-2">
        <input v-model="searchQuery" class="form-control" placeholder="Search organizations">
        <button class="btn btn-primary" @click="showForm = true">+ Add Organization</button>
        <button class="btn btn-secondary" @click="fetchOrganizations(true)">Refresh</button>
      </div>
    </header>

    <div class="row mt-4">
      <!-- MAIN TABLE -->
      <section class="col-12">
        <table class="table table-hover table-bordered">
          <thead class="table-dark">
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Focus</th>
              <th>Contact</th>
              <th>Active</th>
              <th>Verified</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="org in filteredOrganizations" :key="org.id">
              <td>{{ org.name }}</td>
              <td>{{ org.category }}</td>
              <td class="text-truncate" style="max-width:200px">{{ org.focus }}</td>
              <td>
                <div>{{ org.contact?.email }}</div>
                <div>{{ org.contact?.phone }}</div>
                <div class="text-muted">{{ org.contact?.address }}</div>
              </td>
              <td>
                <span :class="org.is_active ? 'badge bg-success' : 'badge bg-secondary'">
                  {{ org.is_active ? 'Yes' : 'No' }}
                </span>
              </td>
              <td>
                <span :class="org.is_verified ? 'badge bg-primary' : 'badge bg-warning'">
                  {{ org.is_verified ? 'Yes' : 'No' }}
                </span>
              </td>
              <td>{{ formatDate(org.created_at) }}</td>
              <td>
                <NuxtLink :to="'/adm/mod/organizations/' + org.id" class="btn btn-sm btn-outline-primary me-1">
                  <Icon name="fa6-solid:pencil"/>
                </NuxtLink>
                <button class="btn btn-sm btn-outline-danger" @click="deleteOrganization(org.id)">
                  <Icon name="fa6-solid:trash"/>
                </button>
              </td>
            </tr>

            <tr v-if="!filteredOrganizations.length">
              <td colspan="8" class="text-center text-muted">No organizations found</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>

    <!-- CREATE / EDIT MODAL -->
    <OrganizationForm
      v-if="showForm || editingOrg"
      :initialForm="editingOrg || null"
      @saved="onFormSaved"
      @cancel="closeForm"
    />

  </main>
</template>

<script setup>
import { ref, computed, onMounted } from "vue"
import { useDataStore } from "~/stores/dataStore"
//import OrganizationForm from "~/components/OrganizationForm.vue"

const dataStore = useDataStore()

const organizations = ref([])
const searchQuery = ref("")
const showForm = ref(false)
const editingOrg = ref(null)

const fetchOrganizations = async(force=false)=>{
  await dataStore.fetchData("organizations", force)
  organizations.value = dataStore.items.organizations || []
}

const filteredOrganizations = computed(()=>{
  return organizations.value.filter(org=>{
    return org.name?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
           org.category?.toLowerCase().includes(searchQuery.value.toLowerCase())
  })
})

const deleteOrganization = async(id)=>{
  if(!confirm("Delete organization?")) return
  await dataStore.deleteItem("organizations", id)
  fetchOrganizations(true)
}

const closeForm = ()=>{
  showForm.value = false
  editingOrg.value = null
}

const onFormSaved = ()=>{
  fetchOrganizations(true)
  closeForm()
}

const formatDate = (dateStr)=>{
  const d = new Date(dateStr)
  return d.toLocaleDateString()
}

definePageMeta({
  layout:'admin',
  middleware:'admin'
})
onMounted(fetchOrganizations)
</script>

<style scoped>
.admin-organizations header{
  padding:1rem 0;
  border-bottom:1px solid #ccc;
}
.table td {
  vertical-align: middle;
}
</style>