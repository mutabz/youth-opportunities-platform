<template>
  <main class="admin-users">

    <!-- HEADER -->
    <header class="app-header d-flex justify-content-between align-items-center">
      <div class="d-flex">
        <button class="btn me-3" @click="$router.back()"><Icon name="fa6-solid:arrow-right" />
        </button>
        <h3>User Management</h3>
      </div>
      
      <div class="d-flex">
        <button class="btn btn-primary" @click="showCreateForm = true">
          + New User
        </button>
        <button class="btn btn-secondary" @click="refreshData">
          Refresh
        </button>
      </div>
    </header>

<div class="row mt-4">

  <!-- LEFT SIDEBAR -->
  <aside class="col-lg-3 sidebar sticky-top">
    <!-- SEARCH & FILTER -->
    <div class="filters mt-3 gap-2 align-items-center">
      <input v-model="searchQuery" type="text" class="form-control w-100 mt-2" placeholder="Search name or email..." />

      <select v-model="roleFilter" class="form-select w-100 mt-2">
        <option value="">All Roles</option>
        <option value="user">User</option>
        <option value="admin">Admin</option>
        <option value="partner">Partner</option>
      </select>

      <select v-model="verifiedFilter" class="form-select w-100 mt-2">
        <option value="">All Verification</option>
        <option value="true">Verified</option>
        <option value="false">Not Verified</option>
      </select>
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


  <!-- MAIN CONTENT -->
  <section class="col-lg-6 sidebar transparent sticky-top">
    <div class="d-flex justify-content-between">
      <div class="text-wrap"><strong v-if="searchQuery">Search Results for: </strong><span>{{ searchQuery }}</span></div>
      <div class=""><strong v-if="roleFilter">Role: </strong><span>{{ roleFilter }}</span></div>
      <div class=""><strong v-if="verifiedFilter">Verified: </strong><span>{{ verifiedFilter }}</span></div>
    </div>

    <!-- CREATE / EDIT MODAL -->

    <div v-if="showCreateForm || editingUser"  >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              {{ editingUser ? 'Edit User' : 'Create User' }}
            </h5>
            <button type="button" class="btn-close" @click="closeForm" ></button>
          </div>
          <div class="modal-body">
            <UserForm :initialForm="editingUser || null" @saved="onFormSaved" @cancel="closeForm" />
          </div>
        </div>
      </div>
    </div>

        <!-- USERS TABLE -->
    <section class="mt-3" >

      <table class="table table-hover table-bordered">

        <thead class="table-dark">
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          <tr v-for="user in filteredUsers" :key="user.id">
            <td><NuxtLink :to="'/adm/mod/users/' + user.id">{{ user.full_name }}</NuxtLink></td>
            <td>{{ user.email }}</td>
            <td>
              <button class="btn btn-act text-primary me-2" @click="editUser(user)" > <Icon name="fa6-solid:pencil"/> </button>
              <button class="btn btn-act text-danger" @click="deleteUser(user.id)" > <Icon name="fa6-solid:trash"/> </button>
            </td>

          </tr>

          <tr v-if="!filteredUsers.length">
            <td colspan="8" class="text-center">
              No users found
            </td>
          </tr>

        </tbody>

      </table>
    </section>



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

    <!-- RIGHT INSIGHTS -->
  <aside class="col-lg-3 sidebar sticky-top">

    <div class="card shadow-sm mb-3">
      <div class="card-body">
        <UsersAnalytic />
      </div>
    </div>

  </aside>
</div>

  </main>
</template>


<script setup>

import { ref, computed, onMounted } from 'vue'
import { useDataStore } from '@/stores/dataStore'
import UserForm from '~/components/UserForm.vue'
import ApplicationAnalytic from '~/components/analytics/ApplicationAnalytic'
import OpportunitiesAnalytic from '~/components/analytics/OpportunitiesAnalytic'
import UsersAnalytic from '~/components/analytics/UsersAnalytic'

const dataStore = useDataStore()

const users = ref([])
const loading = ref(false)

const searchQuery = ref('')
const roleFilter = ref('')
const verifiedFilter = ref('')

const showCreateForm = ref(false)
const editingUser = ref(null)

const deleteId = ref(null)



const fetchUsers = async (force = false) => {

  loading.value = true

  await dataStore.fetchData('users', force)

  users.value = dataStore.items.users || []

  loading.value = false

}



const filteredUsers = computed(() => {

  return users.value.filter(u => {

    const matchesSearch =
      u.full_name?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      u.email?.toLowerCase().includes(searchQuery.value.toLowerCase())

    const matchesRole =
      roleFilter.value ? u.role === roleFilter.value : true

    const matchesVerified =
      verifiedFilter.value !== ''
        ? String(u.is_verified) === verifiedFilter.value
        : true

    return matchesSearch && matchesRole && matchesVerified

  })

})



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
  } catch {
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