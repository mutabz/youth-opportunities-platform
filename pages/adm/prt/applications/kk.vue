<template>
  <main class="admin-application-review">

    <!-- HEADER -->
    <header class="app-header d-flex justify-content-between align-items-center">
      <h3>Application Review</h3>

      <NuxtLink
        to="/adm/prt/applications"
        class="btn btn-secondary"
      >
        Back
      </NuxtLink>
    </header>


    <section v-if="application" class="mt-4">

      <div class="row">

        <!-- LEFT SIDE : APPLICANT INFO -->

        <div class="col-md-7">

          <div class="card mb-3">

            <div class="card-header">
              <strong>Applicant Information</strong>
            </div>

            <div class="card-body">

              <p><strong>Name:</strong> {{ application.full_name }}</p>
              <p><strong>Email:</strong> {{ application.email }}</p>
              <p><strong>Phone:</strong> {{ application.phone_number }}</p>
              <p><strong>Country:</strong> {{ application.country }}</p>
              <p><strong>City:</strong> {{ application.city }}</p>
              <p><strong>Address:</strong> {{ application.address }}</p>

            </div>

          </div>



          <!-- EDUCATION -->

          <div class="card mb-3">

            <div class="card-header">
              <strong>Education</strong>
            </div>

            <div class="card-body">

              <p>
                <strong>Education Level:</strong>
                {{ application.education_level }}
              </p>

              <p>
                <strong>Institution:</strong>
                {{ application.institution }}
              </p>

            </div>

          </div>



          <!-- MOTIVATION -->

          <div class="card mb-3">

            <div class="card-header">
              <strong>Motivation Statement</strong>
            </div>

            <div class="card-body">

              {{ application.motivation_statement }}

            </div>

          </div>



          <!-- COVER LETTER -->

          <div class="card mb-3">

            <div class="card-header">
              <strong>Cover Letter</strong>
            </div>

            <div class="card-body">

              {{ application.cover_letter }}

            </div>

          </div>

        </div>



        <!-- RIGHT SIDE : REVIEW PANEL -->

        <div class="col-md-5">

          <div class="card mb-3">

            <div class="card-header">
              <strong>Application Status</strong>
            </div>

            <div class="card-body">

              <select
                v-model="application.status"
                class="form-select"
              >

                <option value="pending">Pending</option>
                <option value="under_review">Under Review</option>
                <option value="shortlisted">Shortlisted</option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>
                <option value="withdrawn">Withdrawn</option>

              </select>

            </div>

          </div>



          <!-- SCORE -->

          <div class="card mb-3">

            <div class="card-header">
              <strong>Score</strong>
            </div>

            <div class="card-body">

              <input
                v-model="application.score"
                type="number"
                class="form-control"
                placeholder="Score (0-100)"
              />

            </div>

          </div>



          <!-- INTERVIEW -->

          <div class="card mb-3">

            <div class="card-header">
              <strong>Interview</strong>
            </div>

            <div class="card-body">

              <label>Schedule Interview</label>

              <input
                v-model="application.interview_scheduled"
                type="datetime-local"
                class="form-control mb-2"
              />

              <label>Interview Result</label>

              <select
                v-model="application.interview_result"
                class="form-select"
              >

                <option value="pending">Pending</option>
                <option value="pass">Pass</option>
                <option value="fail">Fail</option>

              </select>

            </div>

          </div>



          <!-- DOCUMENTS -->

          <div class="card mb-3">

            <div class="card-header">
              <strong>Documents</strong>
            </div>

            <div class="card-body">

              <a
                v-if="application.resume_cv"
                :href="application.resume_cv"
                target="_blank"
                class="btn btn-outline-primary w-100 mb-2"
              >
                View CV
              </a>

              <a
                v-if="application.transcript"
                :href="application.transcript"
                target="_blank"
                class="btn btn-outline-secondary w-100 mb-2"
              >
                View Transcript
              </a>

              <a
                v-if="application.portfolio_link"
                :href="application.portfolio_link"
                target="_blank"
                class="btn btn-outline-dark w-100"
              >
                Portfolio
              </a>

            </div>

          </div>



          <!-- REVIEW NOTES -->

          <div class="card mb-3">

            <div class="card-header">
              <strong>Reviewer Notes</strong>
            </div>

            <div class="card-body">

              <textarea
                v-model="application.review_comments"
                rows="4"
                class="form-control"
              ></textarea>

            </div>

          </div>



          <!-- SAVE -->

          <button
            class="btn btn-success w-100"
            @click="saveApplication"
          >
            Save Review
          </button>

        </div>

      </div>

    </section>


    <div v-else class="text-center mt-5">
      Loading application...
    </div>

  </main>
</template>


<script setup>

import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"
import { useDataStore } from "@/stores/dataStore"

const route = useRoute()
const dataStore = useDataStore()

const application = ref(null)



const fetchApplication = async () => {

  const id = route.params.id

  const res = await dataStore.fetchSingle("applications", id)

  application.value = res

}



const saveApplication = async () => {

  try {

    await dataStore.updateItem(
      "applications",
      application.value.id,
      application.value
    )

    alert("Application updated")

  }

  catch {

    alert("Failed to update")

  }

}



definePageMeta({
  layout: "admin",
  middleware: "admin"
})


onMounted(fetchApplication)

</script>


<style scoped>

.admin-application-review header {
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;
}

.card-header {
  background: #f8f9fa;
}

</style>