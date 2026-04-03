<template>
	<main class="admin-mentor-reviews">

		<header class="app-header d-flex justify-content-between align-items-center">

			<div class="d-flex">
				<button class="btn me-3" @click="$router.back()">
				<Icon name="fa6-solid:arrow-right"/>
				</button>

				<h3>Mentor Reviews</h3>
			</div>
			<div class="d-flex">
				<button class="btn btn-secondary" @click="fetchReviews(true)">
				Refresh
				</button>
			</div>
		</header>



<table class="table table-hover table-bordered mt-4">

<thead class="table-dark">
<tr>
<th>Mentor</th>
<th>User</th>
<th>Rating</th>
<th>Comment</th>
<th>Date</th>
<th>Actions</th>
</tr>
</thead>


<tbody>

<tr v-for="rev in reviews" :key="rev.id">

<td>{{ rev.mentor?.full_name }}</td>

<td>{{ rev.user?.email }}</td>

<td>{{ rev.rating }} ⭐</td>

<td class="small text-muted">
{{ truncate(rev.comment,80) }}
</td>

<td>{{ formatDate(rev.created_at) }}</td>

<td>

<button
class="btn btn-act text-danger"
@click="deleteReview(rev.id)"
>
<Icon name="fa6-solid:trash"/>
</button>

</td>

</tr>

</tbody>

</table>

</main>
</template>



<script setup>
import { ref, onMounted } from "vue"
import { useDataStore } from "~/stores/dataStore"
import { truncate } from "~/composables/utils"

const dataStore = useDataStore()

const reviews = ref([])


const fetchReviews = async(force=false)=>{

await dataStore.fetchData("mentor_reviews",force)

reviews.value = dataStore.items.mentor_reviews || []

}


const deleteReview = async(id)=>{

if(!confirm("Delete review?")) return

await dataStore.deleteItem("mentor_reviews",id)

fetchReviews(true)

}


const formatDate = (d)=>{
return new Date(d).toLocaleDateString()
}

definePageMeta({
  layout:'admin',
  middleware:'admin'
})

onMounted(fetchReviews)
</script>