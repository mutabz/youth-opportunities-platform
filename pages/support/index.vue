<template>
  <main class="container my-4">

    <!-- Header -->
    <div class="d-flex align-items-center mb-4">
      <button class="btn text-primary me-3" @click="$router.back()">
        <Icon name="fa6-solid:arrow-right"/>
      </button> 
      <h2 class="text-primary fw-bold">Help Center</h2>
    </div>

    <!-- Search Box -->
    <div class="card shadow-sm mb-4">
      <div class="card-body d-flex align-items-center">
        <Icon name="fa6-solid:magnifying-glass" class="text-muted"/>
        <input
          type="text"
          class="form-control"
          placeholder="Search FAQs..."
          v-model="searchQuery"
        />
      </div>
    </div>

    <!-- FAQ Accordion -->
    <div class="card shadow-sm">
      <div class="card-body">
        <h5 class="fw-bold mb-3">
          <Icon name="fa6-solid:circle-question" class="me-2"/>Frequently Asked Questions
        </h5>

        <div v-if="filteredFaqs.length === 0" class="text-muted">
          No FAQs found for "{{ searchQuery }}"
        </div>

        <div class="accordion" id="faqAccordion" v-else>
          <div
            class="accordion-item"
            v-for="(faq, index) in filteredFaqs"
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
                {{ faq.question }}
              </button>
            </h2>
            <div
              :id="'collapse'+index"
              class="accordion-collapse collapse"
              :aria-labelledby="'heading'+index"
              data-bs-parent="#faqAccordion"
            >
              <div class="accordion-body">{{ faq.answer }}</div>
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

// FAQ Data
const faqs = ref([
  { question: 'How do I create an account?', answer: 'Click Join Free on the home page and fill the form.' },
  { question: 'How do I reset my password?', answer: 'Go to Login > Forgot Password and follow the steps.' },
  { question: 'How can I contact support?', answer: 'Use the Contact Us page or email support@youthplatform.co.rw.' },
  { question: 'Can I change my profile information?', answer: 'Yes, go to Edit Profile and save changes.' },
  { question: 'How do I upload documents?', answer: 'Upload documents via Google Drive link and share here.' },
  { question: 'How to become a partner?', answer: 'Visit the For Partners page to see requirements and apply.' },
  { question: 'What job opportunities are available?', answer: 'Check the Explore page for the latest opportunities.' },
  { question: 'Can I track my applications?', answer: 'Yes, via your User Dashboard > Applications.' },
  { question: 'How to add skills to my profile?', answer: 'Go to Edit Profile > Skills section and add them.' },
  { question: 'Is there a mobile app?', answer: 'Currently, the platform is web-only. Mobile app is in development.' },
  { question: 'How to change email?', answer: 'Email cannot be changed directly. Contact support for assistance.' },
  { question: 'How to reset two-factor authentication?', answer: 'Contact support for resetting 2FA.' },
  { question: 'Can I delete my account?', answer: 'Yes, contact support to request account deletion.' },
  { question: 'What is the eligibility for opportunities?', answer: 'Eligibility varies by opportunity. Check each listing.' },
  { question: 'How do I become a mentor?', answer: 'Apply via the Mentors page and complete the mentor application form.' },
])

// Computed filtered FAQs
const filteredFaqs = computed(() => {
  if (!searchQuery.value) return faqs.value
  return faqs.value.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.value.toLowerCase())
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