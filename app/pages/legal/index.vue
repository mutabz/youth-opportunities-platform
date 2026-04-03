<template>
  <main class="container my-4">

    <!-- Header -->
    <div class="d-flex align-items-center mb-4">
      <button class="btn btn-outline-primary me-3" @click="$router.back()">
        <Icon name="fa6-solid:arrow-right"/>
      </button>
      <h2 class="text-primary fw-bold">Privacy Policy</h2>
    </div>

    <p class="text-muted mb-4">
      Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.
    </p>

    <div class="accordion" id="privacyAccordion">
      <div class="accordion-item" v-for="(item, index) in sections" :key="index">
        <h2 class="accordion-header" :id="'heading'+index">
          <button
            class="accordion-button collapsed text-primary"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#collapse'+index"
            aria-expanded="false"
            :aria-controls="'collapse'+index"
          >
            {{ item.title }}
          </button>
        </h2>
        <div
          :id="'collapse'+index"
          class="accordion-collapse collapse"
          :aria-labelledby="'heading'+index"
          data-bs-parent="#privacyAccordion"
        >
          <div class="accordion-body bg-light">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<script setup>
const sections = [
  { title: 'Information We Collect', content: 'We collect information you provide directly to us, such as account details and messages.' },
  { title: 'How We Use Information', content: 'We use your information to provide services, improve the platform, and communicate updates.' },
  { title: 'Sharing of Information', content: 'We may share data with trusted partners for service purposes only; we do not sell personal data.' },
  { title: 'Data Security', content: 'We implement strong security measures to protect your data against unauthorized access.' },
  { title: 'Your Rights', content: 'You can request access, correction, or deletion of your personal data by contacting support.' },
  { title: 'Policy Updates', content: 'We may update this policy periodically. Changes will be posted here.' }
]
</script>

<style scoped>
.accordion-button {
  font-weight: 600;
}
.accordion-button:focus {
  box-shadow: none;
}
.accordion-body {
  color: #333;
}
</style>