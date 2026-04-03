<template>
  <main class="admin-partners">

    <!-- HEADER -->
    <header class="app-header d-flex justify-content-between align-items-center">

      <div class="d-flex">
        <button class="btn me-3" @click="$router.back()"><Icon name="fa6-solid:arrow-right" />
        </button>
        
        <h3>Partners Admin</h3>
      </div>

      <div class="d-flex">
        <button class="btn btn-primary" @click="showCreateForm = true">+ New Partner</button>

        <button  class="btn btn-secondary"  @click="refreshData">Refresh</button>
      </div>
    </header>



    <div class="row mt-4">

      <!-- LEFT SIDEBAR -->
      <aside class="col-lg-3 sidebar sticky-top">
        <!-- SEARCH & FILTER -->
        <div class="filters mt-3 gap-2 align-items-center">
          <input v-model="searchQuery" type="text" class="form-control w-100" placeholder="Search partner..."/>
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
        <div class="d-flex justify-content-between text-dark">
          <div class="text-wrap"><strong v-if="searchQuery">Search Results for: </strong><span>{{ searchQuery }}</span></div>
          <div class=""><strong v-if="roleFilter">Role: </strong><span>{{ roleFilter }}</span></div>
          <div class=""><strong v-if="verifiedFilter">Verified: </strong><span>{{ verifiedFilter }}</span></div>
        </div>

        <!-- PARTNERS TABLE -->

        <section class="mt-3">
          <table class="table table-hover table-bordered">
            <thead class="table-dark">
              <tr>
                <th>Logo</th>
                <th>Name</th>
                <th>Website</th>
                <th>Visible</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="partner in filteredPartners" :key="partner.id">
                <td>
                  <img v-if="partner.logo_url" :src="partner.logo_url" style="height:40px"/>
                  <span v-else>N/A</span>
                </td>
                <td>{{ partner.name }}</td>
                <td>
                  <a :href="partner.website_url" target="_blank">{{ partner.website_url }}</a>
                </td>
                <td>
                  <span class="badge" :class="partner.visible ? 'bg-success' : 'bg-secondary'">{{ partner.visible ? 'Visible' : 'Hidden' }}</span>
                </td>
                <td>
                  <button class="btn btn-act text-warning me-2" @click="editPartner(partner)" ><Icon name="fa6-solid:pencil"/></button>
                  <button class="btn btn-act text-danger" @click="deletePartner(partner.id)" ><Icon name="fa6-solid:trash"/></button>
                </td>
              </tr>
              <tr v-if="!filteredPartners.length">
                <td colspan="6" class="text-center">
                  No partners found
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <!-- CREATE / EDIT MODAL -->

        <div v-if="showCreateForm || editingPartner" class="modal fade show d-block" style="background: rgba(0,0,0,0.5)">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">
                  {{ editingPartner ? 'Edit Partner' : 'Create Partner' }}
                </h5>
                <button class="btn-close" @click="closeForm" ></button>
              </div>
              <div class="modal-body">
                <PartnerForm :initialForm="editingPartner || null" @saved="onFormSaved" @cancel="closeForm" />
              </div>
            </div>
          </div>
        </div>

        <!-- DELETE MODAL -->

        <div v-if="deleteId" class="modal fade show d-flex justify-content-between align-items-center" style="background: rgba(0,0,0,0.5)" >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Confirm Delete</h5>
                <button class="btn-close" @click="deleteId = null" ></button>
              </div>
              <div class="modal-body">
                Are you sure you want to delete this partner?
              </div>
              <div class="modal-footer">
                <button class="btn btn-secondary" @click="deleteId = null" >Cancel</button>
                <button class="btn btn-danger" @click="confirmDelete" >Delete</button>
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
import PartnerForm from '~/components/PartnerForm.vue'
import UsersAnalytic from '~/components/analytics/UsersAnalytic.vue'

const dataStore = useDataStore()

const partners = ref([])
const searchQuery = ref('')

const showCreateForm = ref(false)
const editingPartner = ref(null)
const deleteId = ref(null)



const fetchPartners = async (force=false) => {

  await dataStore.fetchData('partners', force)

  partners.value = dataStore.items.partners || []

}



const filteredPartners = computed(() => {

  return partners.value.filter(p =>
    p.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )

})



const editPartner = (partner) => {
  editingPartner.value = partner
}



const closeForm = () => {
  showCreateForm.value = false
  editingPartner.value = null
}



const onFormSaved = async () => {

  await fetchPartners(true)

  closeForm()

}



const deletePartner = (id) => {
  deleteId.value = id
}



const confirmDelete = async () => {

  try {

    await dataStore.deleteItem('partners', deleteId.value)

    await fetchPartners(true)

  }

  catch {

    alert('Failed to delete partner')

  }

  finally {

    deleteId.value = null

  }

}



const refreshData = () => {
  fetchPartners(true)
}



definePageMeta({
  layout: 'admin',
  middleware: 'admin'
})


onMounted(fetchPartners)

</script>


<style scoped>

.admin-partners header {
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;
}

.filters input {
  width: auto;
}

</style>