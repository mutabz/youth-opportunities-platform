<template>
  <form @submit.prevent="submitForm">
    <!-- Applicant Snapshot -->
    <h5>Applicant Info</h5>
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

    <!-- Documents -->
    <h5>Documents</h5>
    <div class="mb-3">
      <label class="form-label">Resume/CV (URL or file path)</label>
      <input v-model="form.resume_cv" type="text" class="form-control" />
    </div>
    <div class="mb-3">
      <label class="form-label">Transcript (URL or file path)</label>
      <input v-model="form.transcript" type="text" class="form-control" />
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
    <div class="mb-3">
      <label class="form-label">Other Documents (JSON)</label>
      <textarea v-model="form.other_documents" class="form-control" rows="2"></textarea>
      <small class="text-muted">Example: {"certificates":["cert1.pdf","cert2.pdf"]}</small>
    </div>

    <!-- Application Details -->
    <h5>Application Details</h5>
    <div class="row">
      <div class="col-md-6 mb-3">
        <label class="form-label">Status</label>
        <select v-model="form.status" class="form-select">
          <option value="pending">Pending</option>
          <option value="under_review">Under Review</option>
          <option value="shortlisted">Shortlisted</option>
          <option value="accepted">Accepted</option>
          <option value="rejected">Rejected</option>
          <option value="withdrawn">Withdrawn</option>
        </select>
      </div>
      <div class="col-md-6 mb-3">
        <label class="form-label">Score</label>
        <input v-model.number="form.score" type="number" class="form-control" min="0" max="100" />
      </div>
      <div class="col-md-6 mb-3">
        <label class="form-label">Interview Scheduled</label>
        <input v-model="form.interview_scheduled" type="datetime-local" class="form-control" />
      </div>
      <div class="col-md-6 mb-3">
        <label class="form-label">Interview Result</label>
        <select v-model="form.interview_result" class="form-select">
          <option value="pending">Pending</option>
          <option value="pass">Pass</option>
          <option value="fail">Fail</option>
        </select>
      </div>
      <div class="col-md-12 mb-3">
        <label class="form-label">Notes</label>
        <textarea v-model="form.notes" class="form-control" rows="2"></textarea>
      </div>
      <div class="col-md-12 mb-3">
        <label class="form-label">Review Comments</label>
        <textarea v-model="form.review_comments" class="form-control" rows="2"></textarea>
      </div>
    </div>

    <div class="d-flex justify-content-end gap-2 mt-3">
      <button type="button" class="btn btn-secondary" @click="$emit('cancel')">Cancel</button>
      <button type="submit" class="btn btn-primary">Save Application</button>
    </div>
  </form>
</template>

<script setup>
import { reactive, watch } from 'vue'
import { useDataStore } from '@/stores/dataStore'

const props = defineProps({
  initialForm: Object
})

const emit = defineEmits(['saved','cancel'])
const dataStore = useDataStore()

// reactive form
const form = reactive({
  full_name: props.initialForm?.full_name || '',
  email: props.initialForm?.email || '',
  phone_number: props.initialForm?.phone_number || '',
  date_of_birth: props.initialForm?.date_of_birth || '',
  address: props.initialForm?.address || '',
  country: props.initialForm?.country || '',
  city: props.initialForm?.city || '',
  education_level: props.initialForm?.education_level || '',
  institution: props.initialForm?.institution || '',
  resume_cv: props.initialForm?.resume_cv || '',
  transcript: props.initialForm?.transcript || '',
  cover_letter: props.initialForm?.cover_letter || '',
  motivation_statement: props.initialForm?.motivation_statement || '',
  portfolio_link: props.initialForm?.portfolio_link || '',
  other_documents: props.initialForm?.other_documents
    ? JSON.stringify(props.initialForm.other_documents, null, 2)
    : '{}',
  status: props.initialForm?.status || 'pending',
  score: props.initialForm?.score || 0,
  interview_scheduled: props.initialForm?.interview_scheduled || '',
  interview_result: props.initialForm?.interview_result || 'pending',
  notes: props.initialForm?.notes || '',
  review_comments: props.initialForm?.review_comments || '',
})

// keep JSON valid
watch(() => form.other_documents, val => {
  try { JSON.parse(val) } catch { /* ignore invalid */ }
})

const submitForm = async () => {
  const payload = { ...form }
  try {
    payload.other_documents = JSON.parse(form.other_documents)
  } catch (e) {
    alert('Other Documents JSON is invalid!')
    return
  }

  if(props.initialForm?.id){
    await dataStore.updateItem('applications', props.initialForm.id, payload)
  } else {
    await dataStore.createItem('applications', payload)
  }
  emit('saved')
}
</script>