<template>
  <main class="container my-4">

    <!-- Header -->
    <div class="d-flex align-items-center mb-4">
      <button class="btn btn-outline-primary me-3" @click="$router.back()">
        <Icon name="fa6-solid:arrow-right"/>
      </button>
      <h2 class="text-primary fw-bold">Contact Us</h2>
    </div>

    <!-- Intro Card -->
    <div class="card shadow-sm mb-4">
      <div class="card-body text-center">
        <h3 class="fw-bold mb-2">We’re Here to Help!</h3>
        <p class="text-muted mb-0">Have questions, feedback, or need support? Reach out to us below.</p>
      </div>
    </div>

    <!-- Contact Form Card -->
    <div class="card shadow-sm mb-4">
      <div class="card-body">
        <h5 class="fw-bold mb-3"><Icon name="fa6-solid:envelope" class="me-2"/>Send Us a Message</h5>

        <form @submit.prevent="submitMessage">
          <div class="mb-3">
            <label class="form-label">Your Name</label>
            <input type="text" v-model="form.name" class="form-control" placeholder="Enter your name" required>
          </div>

          <div class="mb-3">
            <label class="form-label">Your Email</label>
            <input type="email" v-model="form.email" class="form-control" placeholder="Enter your email" required>
          </div>

          <div class="mb-3">
            <label class="form-label">Subject</label>
            <input type="text" v-model="form.subject" class="form-control" placeholder="Subject">
          </div>

          <div class="mb-3">
            <label class="form-label">Message</label>
            <textarea v-model="form.message" class="form-control" rows="5" placeholder="Your message..." required></textarea>
          </div>

          <button type="submit" class="btn btn-primary w-100" :disabled="loading">
            <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
            Send Message
          </button>
        </form>
      </div>
    </div>

    <!-- Contact Info Accordion -->
    <div class="card shadow-sm mb-4">
      <div class="card-body">
        <h5 class="fw-bold mb-3"><Icon name="fa6-solid:info-circle" class="me-2"/>Other Contact Info</h5>
        <div class="accordion" id="contactAccordion">
          <div class="accordion-item" v-for="(item, index) in contactInfo" :key="index">
            <h2 class="accordion-header" :id="'heading'+index">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse'+index" aria-expanded="false" :aria-controls="'collapse'+index">
                {{ item.title }}
              </button>
            </h2>
            <div :id="'collapse'+index" class="accordion-collapse collapse" :aria-labelledby="'heading'+index" data-bs-parent="#contactAccordion">
              <div class="accordion-body">
                {{ item.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Map Placeholder Card -->
    <div class="card shadow-sm mb-4">
      <div class="card-body">
        <h5 class="fw-bold mb-3"><Icon name="fa6-solid:map-location-dot" class="me-2"/>Our Location</h5>
        <div class="border rounded p-5 text-center text-muted">
          [Interactive Map Placeholder]
        </div>
      </div>
    </div>
    

  </main>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const contactInfo = ref([
  { title: 'Support Email', content: 'support@youthplatform.co.rw' },
  { title: 'Phone Number', content: '+250 788 123 456' },
  { title: 'Operating Hours', content: 'Mon-Fri: 8:00 AM - 6:00 PM' },
  { title: 'Social Media', content: 'Twitter: @YouthPlatform | LinkedIn: Youth Platform Rwanda' }
])

const submitMessage = async () => {
  if (!form.value.name || !form.value.email || !form.value.message) {
    alert('Please fill in all required fields!')
    return
  }
  loading.value = true
  try {
    await new Promise(resolve => setTimeout(resolve, 1500)) // simulate API
    alert('Message sent successfully!')
    form.value = { name: '', email: '', subject: '', message: '' }
  } catch (e) {
    alert('Failed to send message')
  } finally {
    loading.value = false
  }
}
</script>