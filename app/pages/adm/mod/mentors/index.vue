<template>
<main class="admin-mentors">

<header class="app-header d-flex justify-content-between align-items-center">
<div class="d-flex">
<button class="btn me-3" @click="$router.back()">
<Icon name="fa6-solid:arrow-right"/>
</button>
<h3>Mentors</h3>
</div>

<div class="d-flex">
	<button class="btn btn-secondary" @click="fetchMentors(true)">Refresh</button>
	<button class="btn btn-primary" @click="showCreateForm = !showCreateForm">+ New Mentor</button>
</div>
</header>


<div class="row mt-4">

<!-- LEFT SIDEBAR -->
<aside class="col-lg-3 sidebar sticky-top">

<input
v-model="searchQuery"
class="form-control mb-2"
placeholder="Search mentors"
/>

<select v-model="availabilityFilter" class="form-select">
<option value="">All</option>
<option value="true">Available</option>
<option value="false">Unavailable</option>
</select>

</aside>


<!-- MAIN TABLE -->
<section class="col-lg-9">

	<div v-show="showCreateForm">
		<MentorsForm/>
	</div>

<table class="table table-hover table-bordered" v-show="!showCreateForm">

<thead class="table-dark">
<tr>
<th>Name</th>
<th>Role</th>
<th>Price</th>
<th>Rating</th>
<th>Available</th>
<th>Actions</th>
</tr>
</thead>

<tbody>

<tr v-for="mentor in filteredMentors" :key="mentor.id">

<td>{{ mentor.full_name }}</td>

<td class="small text-muted">
{{ mentor.role }}
</td>

<td>${{ mentor.price_per_session }}</td>

<td>{{ mentor.rating }} ⭐</td>

<td>
<span
class="badge"
:class="mentor.available ? 'bg-success':'bg-secondary'"
>
{{ mentor.available ? 'Yes':'No' }}
</span>
</td>

<td>

<NuxtLink
:to="'/adm/mod/mentors/'+mentor.id"
class="btn btn-act text-primary me-1"
>
<Icon name="fa6-solid:pencil"/>
</NuxtLink>

<button
class="btn btn-act text-danger"
@click="deleteMentor(mentor.id)"
>
<Icon name="fa6-solid:trash"/>
</button>

</td>

</tr>

<tr v-if="!filteredMentors.length">
<td colspan="6" class="text-center">
No mentors found
</td>
</tr>

</tbody>
</table>

</section>

</div>

</main>
</template>



<script setup>
import { ref, computed, onMounted } from "vue"
import { useDataStore } from "~/stores/dataStore"
import MentorsForm from "~/components/MentorsForm.vue"

const dataStore = useDataStore()

const mentors = ref([])
const showCreateForm = ref(false)

const searchQuery = ref("")
const availabilityFilter = ref("")


const fetchMentors = async(force=false)=>{
await dataStore.fetchData("mentors",force)
mentors.value = dataStore.items.mentors || []
}


const filteredMentors = computed(()=>{

return mentors.value.filter(m=>{

const matchSearch =
m.full_name?.toLowerCase().includes(searchQuery.value.toLowerCase())

const matchAvailability =
!availabilityFilter.value ||
String(m.available) === availabilityFilter.value

return matchSearch && matchAvailability

})

})


const deleteMentor = async(id)=>{

if(!confirm("Delete mentor?")) return

await dataStore.deleteItem("mentors",id)

fetchMentors(true)

}

definePageMeta({
  layout:'admin',
  middleware:'admin'
})

onMounted(fetchMentors)
</script>