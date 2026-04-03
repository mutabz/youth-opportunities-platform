<template>
  <main class="admin-application-dashboard">

    <!-- HEADER -->
    <header class="app-header d-flex justify-content-between align-items-center">
      <h3>Application Dashboard</h3>
      <NuxtLink to="/adm/mod/applications" class="btn btn-secondary">Back to Applications</NuxtLink>
    </header>

    <!-- MAIN SECTION -->
    <section v-if="application" class="mt-4">

      <div class="row">

        <!-- LEFT PANEL: Applicant + Documents -->
        <div class="col-lg-6">

          <!-- Applicant Info -->
          <div class="card mb-3">
            <div class="card-header"><strong>Applicant Information</strong></div>
            <div class="card-body">
              <p><strong>Name:</strong> {{ application.full_name }}</p>
              <p><strong>Email:</strong> {{ application.email }}</p>
              <p><strong>Phone:</strong> {{ application.phone_number }}</p>
              <p><strong>Country/City:</strong> {{ application.country }}, {{ application.city }}</p>
              <p><strong>Address:</strong> {{ application.address }}</p>
              <p><strong>Education:</strong> {{ application.education_level }} - {{ application.institution }}</p>
            </div>
          </div>

          <!-- CV / Transcript Preview -->
          <div class="card mb-3">
            <div class="card-header"><strong>Documents</strong></div>
            <div class="card-body">
              <div v-if="application.resume_cv">
                <strong>Resume/CV</strong>
                <iframe
                  :src="application.resume_cv"
                  class="w-100"
                  style="height:400px"
                ></iframe>
              </div>
              <div v-if="application.transcript" class="mt-3">
                <strong>Transcript</strong>
                <iframe
                  :src="application.transcript"
                  class="w-100"
                  style="height:300px"
                ></iframe>
              </div>
              <div v-if="application.portfolio_link" class="mt-3">
                <strong>Portfolio:</strong>
                <a :href="application.portfolio_link" target="_blank">{{ application.portfolio_link }}</a>
              </div>
            </div>
          </div>

        </div>

        <!-- RIGHT PANEL: Review + AI + Timeline -->
        <div class="col-lg-6">

          <!-- Status + Bulk Actions -->
          <div class="card mb-3">
            <div class="card-header"><strong>Application Status</strong></div>
            <div class="card-body">
              <select v-model="application.status" class="form-select mb-2">
                <option value="pending">Pending</option>
                <option value="under_review">Under Review</option>
                <option value="shortlisted">Shortlisted</option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>
                <option value="withdrawn">Withdrawn</option>
              </select>
              <div class="d-flex gap-2">
                <button class="btn btn-success" @click="bulkAction('shortlisted')">Bulk Shortlist</button>
                <button class="btn btn-danger" @click="bulkAction('rejected')">Bulk Reject</button>
                <button class="btn btn-warning" @click="bulkAction('withdrawn')">Withdraw</button>
              </div>
            </div>
          </div>

          <!-- Scoring Rubric -->
          <div class="card mb-3">
            <div class="card-header"><strong>Application Scoring Rubric</strong></div>
            <div class="card-body">
              <div v-for="(score, key) in rubric" :key="key" class="mb-2">
                <label>{{ key }} (Weight: {{ score.weight }}%)</label>
                <input type="number" v-model.number="score.value" class="form-control" min="0" max="100" />
              </div>
              <div class="mt-2">
                <strong>Total Score:</strong> {{ totalScore }}
              </div>
            </div>
          </div>

          <!-- Interview -->
          <div class="card mb-3">
            <div class="card-header"><strong>Interview</strong></div>
            <div class="card-body">
              <label>Schedule Interview</label>
              <input type="datetime-local" v-model="application.interview_scheduled" class="form-control mb-2" />
              <label>Interview Result</label>
              <select v-model="application.interview_result" class="form-select">
                <option value="pending">Pending</option>
                <option value="pass">Pass</option>
                <option value="fail">Fail</option>
              </select>
            </div>
          </div>

          <!-- Reviewer Notes -->
          <div class="card mb-3">
            <div class="card-header"><strong>Reviewer Notes</strong></div>
            <div class="card-body">
              <textarea v-model="application.review_comments" class="form-control" rows="4"></textarea>
            </div>
          </div>

          <!-- AI Applicant Ranking -->
          <div class="card mb-3">
            <div class="card-header"><strong>AI Applicant Ranking</strong></div>
            <div class="card-body">
              <p v-if="aiRanking !== null">Ranking Score: {{ aiRanking }}</p>
              <p v-else class="text-muted">AI ranking not calculated</p>
            </div>
          </div>

          <!-- Timeline -->
          <div class="card mb-3">
            <div class="card-header"><strong>Application Timeline</strong></div>
            <div class="card-body">
              <ul class="timeline list-unstyled">
                <li v-for="event in timeline" :key="event.time">
                  <strong>{{ event.status }}:</strong> {{ event.time | formatDate }} <br />
                  <em>{{ event.note }}</em>
                </li>
              </ul>
            </div>
          </div>

          <!-- SAVE BUTTON -->
          <button class="btn btn-primary w-100" @click="saveApplication">Save Review</button>

        </div>

      </div>

    </section>

    <div v-else class="text-center mt-5">
      Loading application...
    </div>

  </main>
</template>

<script setup>
import { ref, computed, onMounted } from "vue"
import { useRoute } from "vue-router"
import { useDataStore } from "@/stores/dataStore"

const route = useRoute()
const dataStore = useDataStore()
const application = ref(null)

// Rubric for scoring
const rubric = ref({
  "Education": { value: 0, weight: 30 },
  "Experience": { value: 0, weight: 30 },
  "Skills": { value: 0, weight: 20 },
  "Motivation": { value: 0, weight: 20 },
})

const totalScore = computed(() => {
  let total = 0
  for (const key in rubric.value) {
    total += (rubric.value[key].value * rubric.value[key].weight) / 100
  }
  return total.toFixed(2)
})

// Timeline for application events
const timeline = ref([])

// Placeholder AI ranking
const aiRanking = ref(null)

const fetchApplication = async () => {
  const id = route.params.id
  await dataStore.fetchData("applications")
  application.value = dataStore.items.applications.filter( a => a.id === id)[0]

  // Populate timeline
  timeline.value = [
    { status: "Submitted", time: application.value.submitted_at, note: "Application submitted by applicant" },
    { status: application.value.status, time: application.value.updated_at, note: "Current status" }
  ]

  // Simulate AI ranking
  aiRanking.value = Math.floor(Math.random() * 100) + 1
}

// Save application
const saveApplication = async () => {
  application.value.score = totalScore.value
  try {
    await dataStore.updateItem("applications", application.value.id, application.value)
    alert("Application saved successfully")
  } catch {
    alert("Failed to save")
  }
}

// Bulk actions (works if selecting multiple applications)
const bulkAction = (action) => {
  application.value.status = action
  alert(`Application marked as ${action}`)
}

definePageMeta({
  layout: "admin",
  middleware: "admin"
})

onMounted(fetchApplication)
</script>

<style scoped>
.admin-application-dashboard header {
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;
}

.card-header {
  background: #f8f9fa;
}

.timeline li {
  padding: 0.5rem 0;
  border-left: 2px solid #0d6efd;
  margin-left: 1rem;
  position: relative;
}

.timeline li::before {
  content: '';
  width: 10px;
  height: 10px;
  background: #0d6efd;
  border-radius: 50%;
  position: absolute;
  left: -6px;
  top: 0.25rem;
}
</style>
