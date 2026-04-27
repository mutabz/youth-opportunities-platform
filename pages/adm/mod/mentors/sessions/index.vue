<template>
<main class="admin-mentor-sessions">

<header class="app-header d-flex justify-content-between align-items-center">

<div class="d-flex">
<button class="btn me-3" @click="$router.back()">
<Icon name="fa6-solid:arrow-right"/>
</button>

<h3>Mentor Sessions</h3>
</div>

<button class="btn btn-secondary" @click="fetchSessions(true)">
Refresh
</button>

</header>



<table class="table table-hover table-bordered mt-4">

<thead class="table-dark">
<tr>
<th>Mentor</th>
<th>User</th>
<th>Date</th>
<th>Duration</th>
<th>Status</th>
<th>Meeting</th>
</tr>
</thead>


<tbody>

<tr v-for="session in sessions" :key="session.id">

<td>{{ session.mentor?.full_name }}</td>

<td>{{ session.user?.email }}</td>

<td>{{ formatDate(session.session_date) }}</td>

<td>{{ session.duration_minutes }} min</td>

<td>

<span
class="badge"
:class="{
'bg-warning':session.status==='pending',
'bg-success':session.status==='confirmed',
'bg-secondary':session.status==='completed',
'bg-danger':session.status==='cancelled'
}"
>

{{ session.status }}

</span>

</td>

<td>

<a
v-if="session.meeting_link"
:href="session.meeting_link"
target="_blank"
class="btn btn-sm btn-outline-primary"
>
Join
</a>

</td>

</tr>

</tbody>

</table>

</main>
</template>



<script setup>
import { ref, onMounted } from "vue"
import { useDataStore } from "~/stores/dataStore"

const dataStore = useDataStore()

const sessions = ref([])


const fetchSessions = async(force=false)=>{

await dataStore.fetchData("mentor_sessions",force)

sessions.value = dataStore.items.mentor_sessions || []

}


const formatDate = (d)=>{
return new Date(d).toLocaleString()
}

definePageMeta({
  layout:'admin',
  middleware:'admin'
})


onMounted(fetchSessions)
</script>