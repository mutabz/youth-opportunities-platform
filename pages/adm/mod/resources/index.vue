<template>
<main class="admin-resources">

<!-- HEADER -->
<header class="app-header d-flex justify-content-between align-items-center">
  
  <div class="d-flex">
    <button class="btn me-3" @click="$router.back()">
      <Icon name="fa6-solid:arrow-right"/>
    </button>

    <h3>Resources Admin</h3>
  </div>

  <div class="d-flex">
    <NuxtLink to="/adm/mod/resources/create" class="btn btn-primary" >
      + New Resource
    </NuxtLink>

    <button class="btn btn-secondary" @click="fetchResources(true)">
      Refresh
    </button>
  </div>

</header>


<div class="row mt-4">

<!-- ================= LEFT SIDEBAR ================= -->
<aside class="col-lg-3 sidebar sticky-top">

  <!-- SEARCH -->
  <div class="filters mt-3">

    <input
      v-model="searchQuery"
      type="text"
      class="form-control mt-2"
      placeholder="Search resources..."
    />

    <select v-model="typeFilter" class="form-select mt-2">
      <option value="">All Types</option>
      <option value="guide">Guide</option>
      <option value="document">Document</option>
      <option value="video">Video</option>
      <option value="tutorial">Tutorial</option>
    </select>

  </div>


  <!-- QUICK LINKS -->
  <div class="card shadow-sm mt-3">
    <div class="card-body">

      <h6 class="fw-bold">Quick Links</h6>

        <NuxtLink to="/adm/mod" class="w-100">
          <Icon name="fa6-solid:briefcase" class="me-3"/>
          <span>Dashboard</span>
        </NuxtLink>

      <NuxtLink to="/adm/mod/resources" class="w-100">
        <Icon name="fa6-solid:book" class="me-2"/>
        Resources
      </NuxtLink>

      <NuxtLink to="/adm/mod/opportunities" class="w-100">
        <Icon name="fa6-solid:briefcase" class="me-2"/>
        Opportunities
      </NuxtLink>

      <NuxtLink to="/adm/mod/users" class="w-100">
        <Icon name="fa6-solid:users" class="me-2"/>
        Users
      </NuxtLink>

    </div>
  </div>

</aside>



<!-- ================= MAIN CONTENT ================= -->
<section class="col-lg-6 sidebar transparent sticky-top">

  <div class="d-flex mb-2">

    <div>
      <strong v-if="searchQuery">Search:</strong>
      {{ searchQuery }}
    </div>

    <div class="ms-3">
      <strong v-if="typeFilter">Type:</strong>
      {{ typeFilter }}
    </div>

  </div>


  <!-- RESOURCES TABLE -->
  <div class="">

  <table class="table table-hover table-bordered">

    <thead class="table-dark">
      <tr>
        <th>Title</th>
        <th>Type</th>
        <th>Content</th>
        <th>File</th>
        <th>Date</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody>

      <tr v-for="res in filteredResources" :key="res.id">

        <td class="small">
          {{ res.title }}
        </td>

        <td class="small">
          <span class="badge bg-primary">
            {{ res.type }}
          </span>
        </td>

        <td class="small text-muted">
          {{ truncate(res.content,80) }}
        </td>

        <td>
          <a
            v-if="res.file_path"
            :href="res.file_path"
            target="_blank"
            class="btn btn-sm btn-outline-primary"
          >
            View
          </a>
        </td>

        <td class="small text-muted">
          {{ formatDate(res.created_at) }}
        </td>

        <td>

          <NuxtLink :to="'/adm/mod/resources/update/' + res.id">
            <Icon name="fa6-solid:pencil"/>
          </NuxtLink>

          <NuxtLink
            class="text-danger"
            @click="deleteId = res.id"
          >
            <Icon name="fa6-solid:trash"/>
          </NuxtLink>

        </td>

      </tr>


      <tr v-if="!filteredResources.length">
        <td colspan="6" class="text-center">
          No resources found
        </td>
      </tr>

    </tbody>

  </table>

  </div>


<!-- ================= DELETE CONFIRMATION ================= -->

<div
v-if="deleteId"
class="modal fade show d-flex justify-content-center align-items-center"
style="background:rgba(0,0,0,0.5)"
>

<div class="modal-dialog">

<div class="modal-content">

<div class="modal-header">
<h5 class="modal-title">Confirm Delete</h5>
<button class="btn-close" @click="deleteId=null"></button>
</div>

<div class="modal-body">
Are you sure you want to delete this resource?
</div>

<div class="modal-footer">

<button class="btn btn-secondary" @click="deleteId=null">
Cancel
</button>

<button class="btn btn-danger" @click="confirmDelete">
Delete
</button>

</div>

</div>

</div>

</div>

</section>



<!-- ================= RIGHT ANALYTICS ================= -->

<aside class="col-lg-3 sidebar sticky-top">

<div class="card shadow-sm mb-3">
<div class="card-body">

<h6 class="fw-bold text-uppercase text-center">
Resources by Type
</h6>

<ResourcesAnalytics/>

</div>
</div>

</aside>

</div>

</main>
</template>
<script setup>

import { ref, computed, onMounted } from "vue"
import { useDataStore } from "@/stores/dataStore"
import ResourcesAnalytics from '~/components/analytics/ResourcesAnalytics.vue'

const dataStore = useDataStore()

const resources = ref([])
const search = ref("")
const deleteId = ref("")

const showForm = ref(false)
const editing = ref(false)

const form = ref({
	id:null,
	title:"",
	type:"",
	content:"",
	file:null
})


const fetchResources = async(force=false)=>{
	await dataStore.fetchData("resources",force)
	resources.value = dataStore.items.resources || []
}


const filteredResources = computed(()=>{
	return resources.value.filter(r =>
		r.title?.toLowerCase().includes(search.value.toLowerCase())
		)
})


const openForm = (res=null)=>{
	editing.value = !!res
	form.value = res
	? {...res}
	: {title:"",type:"",content:"",file:null}
	showForm.value = true
}


const closeForm = ()=>{
	showForm.value=false
}


const handleFile = (e)=>{
	form.value.file = e.target.files[0]
}


const saveResource = async()=>{
	const fd = new FormData()
	fd.append("title",form.value.title)
	fd.append("type",form.value.type)
	fd.append("content",form.value.content)

	if(form.value.file){
		fd.append("file",form.value.file)
	}

	if(editing.value){
		await dataStore.updateItem("resources", form.value.id, fd)
	}else{
		try {
			await dataStore.createItem("resources",	fd)
		} catch (e) {
			alert(e)
		}
	}
	closeForm()
	fetchResources(true)
}


const confirmDelete = async () => {
  try {
	await dataStore.deleteItem("resources",deleteId.value)
    await fetchResources(true)
  } catch {
    alert('Failed to delete resource')
  }
  finally {
    deleteId.value = null
  }
}


const truncate = (text,n)=>{
	if(!text) return ""
		return text.length>n ? text.slice(0,n)+"..." : text
}


const formatDate = (d)=>{
	return new Date(d).toLocaleDateString()
}


definePageMeta({
	layout:"admin",
	middleware:"admin"
})


onMounted(fetchResources)

</script>


<style scoped>

.admin-resources header {
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;
}

.filters input {
  width: auto;
}

</style>