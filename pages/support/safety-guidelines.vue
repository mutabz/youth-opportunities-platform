<template>
  <main class="container my-4">

    <!-- Header -->
    <div class="d-flex align-items-center mb-4">
      <button class="btn btn-outline-primary me-3" @click="$router.back()">
        <Icon name="fa6-solid:arrow-right"/>
      </button>
      <h2 class="text-primary fw-bold">Safety Guidelines</h2>
    </div>

    <!-- Search Box -->
    <div class="card shadow-sm mb-4">
      <div class="card-body d-flex align-items-center">
        <Icon name="fa6-solid:magnifying-glass" class="text-muted"/>
        <input type="text" class="form-control" placeholder="Search Safety Guidelines..." v-model="searchQuery"/>
      </div>
    </div>

    <!-- Safety Guidelines Accordion -->
    <div class="card shadow-sm">
      <div class="card-body">
        <h5 class="fw-bold mb-3">
          <Icon name="fa6-solid:shield-halved" class="me-2"/>Safety Guidelines
        </h5>

        <div v-if="filteredGuidelines.length === 0" class="text-muted">
          No guidelines found for "{{ searchQuery }}"
        </div>

        <div class="accordion" id="guidelinesAccordion" v-else>
          <div
            class="accordion-item"
            v-for="(guideline, index) in filteredGuidelines"
            :key="index"
          >
            <h2 class="accordion-header" :id="'heading'+index">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#collapse'+index"
                aria-expanded="false"
                :aria-controls="'collapse'+index"
              >
                {{ guideline.title }}
              </button>
            </h2>
            <div
              :id="'collapse'+index"
              class="accordion-collapse collapse"
              :aria-labelledby="'heading'+index"
              data-bs-parent="#guidelinesAccordion"
            >
              <div class="accordion-body">{{ guideline.content }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

const searchQuery = ref('')

// Safety Guidelines Data
const guidelines = ref([
  { title: 'Protect Your Account', content: 'Use a strong password, enable two-factor authentication, and never share your credentials.' },
  { title: 'Be Careful With Personal Information', content: 'Do not share sensitive personal info with strangers or outside the platform.' },
  { title: 'Recognize Scams', content: 'Be cautious of messages asking for money, gift cards, or suspicious links.' },
  { title: 'Safe Communication', content: 'Only communicate through the official platform channels with mentors, partners, or peers.' },
  { title: 'Verify Opportunities', content: 'Check eligibility and legitimacy of opportunities before applying.' },
  { title: 'Report Abuse', content: 'Immediately report any suspicious, abusive, or fraudulent activity to support.' },
  { title: 'Safe File Uploads', content: 'Upload only documents that belong to you and ensure links are from trusted sources like Google Drive.' },
  { title: 'Privacy Settings', content: 'Review your profile privacy settings to control what others can see.' },
  { title: 'Device Safety', content: 'Keep your device software updated and avoid using public devices to log in.' },
  { title: 'Cybersecurity Awareness', content: 'Learn about phishing, malware, and safe browsing practices.' }
])

const filteredGuidelines = computed(() => {
  if (!searchQuery.value) return guidelines.value
  return guidelines.value.filter(item =>
    item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    item.content.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>

<style scoped>
.card {
  border-radius: 12px;
}
.accordion-button:focus {
  box-shadow: none;
}
</style>