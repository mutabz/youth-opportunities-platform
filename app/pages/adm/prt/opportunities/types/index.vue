<template>
  <main class="admin-opportunity-type">
    <header class="app-header d-flex justify-content-between align-items-center">

      <div class="d-flex">
        <button class="btn me-3" @click="$router.back()"><Icon name="fa6-solid:arrow-right" />
        </button>
        <h3>Opportunity Types</h3>
      </div>

      <button class="btn btn-primary" @click="showCreateForm = true">+ New Type</button>
    </header>

    <section class="filters mt-3 d-flex gap-2 align-items-center">
      <input v-model="searchQuery" type="text" class="form-control" placeholder="Search by name..." />
      <button class="btn btn-secondary" @click="refreshData">Refresh</button>
    </section>

    <section class="mt-3">
      <table class="table table-hover table-bordered">
        <thead class="table-dark">
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="t in filteredTypes" :key="t.id">
            <td>{{ t.name }}</td>
            <td>
              <button class="btn btn-sm btn-warning me-2" @click="editType(t)">Edit</button>
              <button class="btn btn-sm btn-danger" @click="deleteType(t.id)">Delete</button>
            </td>
          </tr>
          <tr v-if="!filteredTypes.length">
            <td colspan="2" class="text-center">No types found.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <div v-if="showCreateForm || editingType" class="modal fade show d-block" style="background: rgba(0,0,0,0.5)">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ editingType ? 'Edit Type' : 'Create Type' }}</h5>
            <button type="button" class="btn-close" @click="closeForm"></button>
          </div>
          <div class="modal-body">
            <OpportunityTypeForm :initialForm="editingType || null" @saved="onFormSaved" @cancel="closeForm" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useDataStore } from '@/stores/dataStore'
import OpportunityTypeForm from '~/components/OpportunityTypeForm.vue'

const dataStore = useDataStore()
const types = ref([])
const showCreateForm = ref(false)
const editingType = ref(null)
const searchQuery = ref('')

const fetchTypes = async (force=false) => {
  await dataStore.fetchData('opp_type', force)
  types.value = dataStore.items.opp_type || []
}

const filteredTypes = computed(() => {
  return types.value.filter(t => t.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
})

const editType = (t) => {
  editingType.value = { ...t }
  showCreateForm.value = true
}

const closeForm = () => {
  showCreateForm.value = false
  editingType.value = null
}

const onFormSaved = async () => {
  await fetchTypes(true)
  closeForm()
}

const deleteType = async (id) => {
  if(!confirm("Delete this type?")) return
  await dataStore.deleteItem('opp_type', id)
  fetchTypes(true)
}

const refreshData = () => fetchTypes(true)
onMounted(fetchTypes)

definePageMeta({
  layout:'partner',
  middleware:'partner'
})

</script>