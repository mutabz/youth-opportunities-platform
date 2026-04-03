<template>
  <main class="container my-4">

    <!-- Header -->
    <div class="d-flex align-items-center mb-4">
      <button class="btn btn-outline-primary me-3" @click="$router.back()">
        <Icon name="fa6-solid:arrow-right"/>
      </button>
      <h2 class="text-primary fw-bold">Terms of Use</h2>
    </div>

    <p class="text-muted mb-4">
      By using our platform, you agree to comply with these Terms of Use and all applicable laws and regulations.
    </p>

    <div class="accordion" id="termsAccordion">
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
          data-bs-parent="#termsAccordion"
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
  { title: 'Acceptance of Terms', content: 'By using the platform, you accept these terms and all applicable laws.' },
  { title: 'User Conduct', content: 'You agree to use the platform responsibly and legally, without harming others.' },
  { title: 'Account Responsibility', content: 'Keep your account credentials secure; you are responsible for all actions.' },
  { title: 'Intellectual Property', content: 'All platform content is owned by us; do not copy without permission.' },
  { title: 'Limitation of Liability', content: 'We are not liable for any damages resulting from use of the platform.' },
  { title: 'Termination', content: 'Accounts may be suspended or terminated for violating terms or laws.' }
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