<template>
  <form @submit.prevent="submitForm">
    <h5>Personal Information</h5>
    <div class="row">
      <div class="col-md-6 mb-3">
        <label class="form-label">Full Name</label>
        <input v-model="form.full_name" type="text" class="form-control" required />
      </div>
      <div class="col-md-6 mb-3">
        <label class="form-label">Email</label>
        <input v-model="form.email" type="email" class="form-control" required />
      </div>
      <div class="col-md-6 mb-3">
        <label class="form-label">Phone Number</label>
        <input v-model="form.phone_number" type="text" class="form-control" />
      </div>
      <div class="col-md-6 mb-3">
        <label class="form-label">Date of Birth</label>
        <input v-model="form.date_of_birth" type="date" class="form-control" />
      </div>
      <div class="col-md-6 mb-3">
        <label class="form-label">Country</label>
        <input v-model="form.country" type="text" class="form-control" />
      </div>
      <div class="col-md-6 mb-3">
        <label class="form-label">City</label>
        <input v-model="form.city" type="text" class="form-control" />
      </div>
      <div class="col-md-12 mb-3">
        <label class="form-label">Address</label>
        <input v-model="form.address" type="text" class="form-control" />
      </div>
      <div class="col-md-6 mb-3">
        <label class="form-label">Education Level</label>
        <input v-model="form.education_level" type="text" class="form-control" />
      </div>
      <div class="col-md-6 mb-3">
        <label class="form-label">Institution</label>
        <input v-model="form.institution" type="text" class="form-control" />
      </div>
    </div>

    <h5>Documents</h5>
    <div class="mb-3">
      <label class="form-label">Resume / CV URL</label>
      <input v-model="form.resume_cv" type="text" class="form-control" />
    </div>
    <div class="mb-3">
      <label class="form-label">Cover Letter</label>
      <textarea v-model="form.cover_letter" class="form-control" rows="3"></textarea>
    </div>
    <div class="mb-3">
      <label class="form-label">Motivation Statement</label>
      <textarea v-model="form.motivation_statement" class="form-control" rows="3"></textarea>
    </div>
    <div class="mb-3">
      <label class="form-label">Portfolio Link</label>
      <input v-model="form.portfolio_link" type="text" class="form-control" />
    </div>

    <div class="d-flex justify-content-end gap-2 mt-3">
      <button type="submit" class="btn btn-primary"><span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>  Submit Application</button>
    </div>
  </form>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { useDataStore } from '@/stores/dataStore'

const userStore = useUserStore()
const user = userStore.user
const props = defineProps({
  opportunityId: {
    type: String,
    required: true
  }
})

const loading = ref(false)
const emit = defineEmits(['saved'])
const dataStore = useDataStore()

const form = reactive({
  opportunity_id: props.opportunityId,
  user_id: user.id,
  full_name: '',
  email: '',
  phone_number: '',
  date_of_birth: '',
  address: '',
  country: '',
  city: '',
  education_level: '',
  institution: '',
  resume_cv: '',
  cover_letter: '',
  motivation_statement: '',
  portfolio_link: '',
  other_documents: {}
})

const submitForm = async () => {
  loading.value = true
  try {
    await dataStore.createItem('applications', { ...form })
    emit('saved')
  } catch (e) {
    alert('Failed to submit application!')
  }
  loading.value = false
}

</script>