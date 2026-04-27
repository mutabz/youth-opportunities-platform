<template>
  <main class="admin-opportunity-category">
    <header class="app-header d-flex justify-content-between align-items-center">

      <div class="d-flex">
        <button class="btn me-3" @click="$router.back()"><Icon name="fa6-solid:arrow-right" />
        </button>
        <h3>Opportunity Categories</h3>
      </div>

      <button class="btn btn-primary" @click="showCreateForm = true">+ New Category</button>
    </header>

    <!-- SEARCH -->
    <section class="filters mt-3 d-flex gap-2 align-items-center">
      <input v-model="searchQuery" type="text" class="form-control" placeholder="Search by name or key..." />
      <button class="btn btn-secondary" @click="refreshData">Refresh</button>
    </section>

    <!-- TABLE -->
    <section class="mt-3">
      <table class="table table-hover table-bordered">
        <thead class="table-dark">
          <tr>
            <th>Key</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cat in filteredCategories" :key="cat.id">
            <td>{{ cat.key }}</td>
            <td>{{ cat.name }}</td>
            <td>
              <button class="btn btn-sm btn-warning me-2" @click="editCategory(cat)">Edit</button>
              <button class="btn btn-sm btn-danger" @click="deleteCategory(cat.id)">Delete</button>
            </td>
          </tr>
          <tr v-if="!filteredCategories.length">
            <td colspan="3" class="text-center">No categories found.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- FORM MODAL -->
    <div v-if="showCreateForm || editingCategory" class="modal fade show d-block" style="background: rgba(0,0,0,0.5)">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ editingCategory ? 'Edit Category' : 'Create Category' }}</h5>
            <button type="button" class="btn-close" @click="closeForm"></button>
          </div>
          <div class="modal-body">
            <OpportunityCategoryForm :initialForm="editingCategory || null" @saved="onFormSaved" @cancel="closeForm" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useDataStore } from '@/stores/dataStore'
import OpportunityCategoryForm from '~/components/OpportunityCategoryForm.vue'

const dataStore = useDataStore()
const categories = ref([])
const showCreateForm = ref(false)
const editingCategory = ref(null)
const searchQuery = ref('')

const fetchCategories = async (force=false) => {
  await dataStore.fetchData('opp_category', force)
  categories.value = dataStore.items.opp_category || []
}

const filteredCategories = computed(() => {
  return categories.value.filter(c => 
    c.key.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
    c.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const editCategory = (cat) => {
  editingCategory.value = { ...cat }
  showCreateForm.value = true
}

const closeForm = () => {
  showCreateForm.value = false
  editingCategory.value = null
}

const onFormSaved = async () => {
  await fetchCategories(true)
  closeForm()
}

const deleteCategory = async (id) => {
  if(!confirm("Delete this category?")) return
  await dataStore.deleteItem('opp_category', id)
  fetchCategories(true)
}

const refreshData = () => fetchCategories(true)

onMounted(fetchCategories)

definePageMeta({
  layout:'partner',
  middleware:'partner'
})

</script>