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
    <button class="btn btn-primary" @click="showCreateForm = true">
      + New Resource
    </button>

    <button class="btn btn-secondary" @click="fetchResources(true)">
      Refresh
    </button>
  </div>

</header>


<div class="row mt-4 g-3">

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
<section class="col-lg-6 sidebar sticky-top">

<!-- ================= CREATE / EDIT FORM ================= -->

<div class="fade show d-block">

<div class="modal-content">

<div class="modal-header">
  <h5 class="modal-title">
    {{ editingResource ? 'Edit Resource' : 'Create Resource' }}
  </h5>

  <button class="btn-close" @click="closeForm"></button>
</div>


<div class="modal-body text-dark">

<div class="mb-3">
<label class="form-label">Title</label>
<input v-model="form.title" class="form-control">
</div>

<div class="mb-3">
<label class="form-label">Type</label>
<input v-model="form.type" class="form-control">
</div>

<div class="mb-3">
<label class="form-label">Content</label>
<textarea v-model="form.content" class="form-control"></textarea>
</div>

<div class="mb-3">
<label class="form-label">File path</label>
<input type="url" v-model="form.file_path" class="form-control" placeholder="Enter file link here">
</div>

    <section class="mb-4">
      <div class="card shadow-sm p-3 rounded border-dark">
        <h6 class="fw-bold mb-3 text-dark">Data Paragraphs</h6>
        <div v-for="(d, i) in form.data" :key="i" class="input-group mb-2">
          <textarea v-model="form.data[i]" class="form-control" placeholder="New Paragraphs" />
          <button class="btn btn-danger" @click="form.data.splice(i, 1)">✕</button>
        </div>
        <button class="btn btn-outline-dark btn-sm" @click="form.data.push('')">+ Add Paragraphs</button>
      </div>
    </section>

</div>


<div class="modal-footer justify-content-center">
<button class="btn btn-primary" @click="saveResource">
Save
</button>

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
import { useRoute } from 'vue-router'

const route = useRoute()

const dataStore = useDataStore()

const res = ref({})
const search = ref("")

const showForm = ref(false)
const editing = ref(false)

const form = ref({data: []})


const fetchResources = async(force=false)=>{
  const id =  route.params.id
	await dataStore.fetchData("resources",force)
	res.value = dataStore.items.resources.find(r => r.id === id)

  form.value = res.value
}


const openForm = (res=null)=>{
	editing.value = !!res
	form.value = res
	? {...res}
	: {title:"",type:"",content:"",file:null}
	showForm.value = true
}

const handleFile = (e)=>{
	form.value.file = e.target.files[0]
}


const saveResource = async()=>{
	const fd = new FormData()
	fd.append("title",form.value.title)
	fd.append("type",form.value.type)
	fd.append("content",form.value.content)
  fd.append("data",form.value.data)

	if(form.value.file){
		fd.append("file_path",form.value.file_path)
	}

	if(form.value.id){
		await dataStore.updateItem("resources", form.value.id, form.value)
    route.back()
	}else{
		try {
			await dataStore.createItem("resources",	form.value)
      route.back()
		} catch (e) {
			alert(e)
		}
	}
	fetchResources(true)
}


const deleteResource = async(id)=>{
	if(!confirm("Delete resource?")) return
		await dataStore.deleteItem("resources",id)
	fetchResources(true)
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