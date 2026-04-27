<template>
<div class="card p-4">

<h5 class="mb-4">
{{ mentor?.id ? "Edit Mentor" : "Create Mentor" }}
</h5>

<form @submit.prevent="saveMentor">

<!-- FULL NAME -->
<div class="mb-3">
<label class="form-label">Full Name</label>
<input
v-model="form.full_name"
class="form-control"
required
/>
</div>


<!-- ROLE -->
<div class="mb-3">
<label class="form-label">Role</label>
<input
v-model="form.role"
class="form-control"
placeholder="Software Engineer @ Google"
/>
</div>


<!-- BIO -->
<div class="mb-3">
<label class="form-label">Bio</label>
<textarea
v-model="form.bio"
class="form-control"
rows="3"
></textarea>
</div>


<!-- PROFILE IMAGE -->
<div class="mb-3">
<label class="form-label">Profile Image URL</label>
<input
v-model="form.profile_image"
class="form-control"
/>
</div>


<!-- SKILLS -->
<div class="mb-3">
<label class="form-label">Skills (comma separated)</label>
<input
v-model="skillsInput"
class="form-control"
placeholder="System Design, Data Structures"
/>
</div>


<!-- PRICE -->
<div class="mb-3">
<label class="form-label">Price Per Session ($)</label>
<input
type="number"
v-model="form.price_per_session"
class="form-control"
/>
</div>


<!-- AVAILABLE -->
<div class="form-check mb-3">
<input
type="checkbox"
class="form-check-input"
v-model="form.available"
/>

<label class="form-check-label">
Available for sessions
</label>
</div>


<!-- BUTTONS -->
<div class="d-flex gap-2">

<button
class="btn btn-primary"
:disabled="loading"
>
{{ loading ? "Saving..." : "Save Mentor" }}
</button>

<button
type="button"
class="btn btn-outline-secondary"
@click="$emit('close')"
>
Cancel
</button>

</div>

</form>

</div>
</template>


<script setup>
import { ref, watch } from "vue"
import { useDataStore } from "~/stores/dataStore"

const props = defineProps({
mentor: Object
})

const emit = defineEmits(["saved","close"])

const dataStore = useDataStore()

const loading = ref(false)

const form = ref({
full_name:"",
role:"",
bio:"",
profile_image:"",
skills:[],
price_per_session:0,
available:true
})

const skillsInput = ref("")


/* populate when editing */

watch(()=>props.mentor,(m)=>{

if(!m) return

form.value = {...m}

skillsInput.value = (m.skills || []).join(", ")

},{immediate:true})


const saveMentor = async()=>{

loading.value = true

try{

form.value.skills = skillsInput.value
.split(",")
.map(s=>s.trim())
.filter(Boolean)

if(props.mentor?.id){

await dataStore.updateItem(
"mentors",
props.mentor.id,
form.value
)

}else{

await dataStore.createItem(
"mentors",
form.value
)

}

emit("saved")

}catch(e){

alert("Failed to save mentor")

}

loading.value = false

}

</script>