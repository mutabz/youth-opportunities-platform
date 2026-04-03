<template>
  <section class="gen-hero">
      <h1>Partner With YouthLink</h1>
      <p>Connect your organization with ambitious young talent across 120+ countries. Publish opportunities, discover future leaders, and amplify your impact.</p>
      <div class="">
        <NuxtLink to="/join-free" class="btn btn-primary rounded-5 px-5 mt-2 mb-2">Become a Partner</NuxtLink>
        <NuxtLink to="/join-free/LoginPage" class="btn btn-success rounded-5 px-5 mt-2 mb-2">Already a Partner continue</NuxtLink>
      </div>
  </section>

  <section class="section">
      <div class="section-title">
          <h2>Why Partner With Us?</h2>
          <p>We help organizations reach verified, high-potential youth worldwide.</p>
      </div>

      <div class="benefits-grid">

          <div class="benefit-card">
              <div class="benefit-icon">
                  <i class="fa-solid fa-globe"></i>
              </div>
              <h3>Global Reach</h3>
              <p>Access a growing community of ambitious students and young professionals.</p>
          </div>

          <div class="benefit-card">
              <div class="benefit-icon">
                  <i class="fa-solid fa-bullhorn"></i>
              </div>
              <h3>Increased Visibility</h3>
              <p>Promote your scholarships, grants, internships, or programs to targeted audiences.</p>
          </div>

          <div class="benefit-card">
              <div class="benefit-icon">
                  <i class="fa-solid fa-chart-line"></i>
              </div>
              <h3>Data Insights</h3>
              <p>Receive analytics on engagement and applicant demographics.</p>
          </div>

      </div>
  </section>

  <section class="section" style="background:#f1f5f9;">
      <div class="section-title">
          <h2>Who Can Partner?</h2>
          <p>We collaborate with organizations across sectors.</p>
      </div>

      <div class="types-grid">

          <div class="type-card">
              <h3>Universities</h3>
              <ul>
                  <li>✔ Promote scholarships</li>
                  <li>✔ Recruit international students</li>
                  <li>✔ Increase global applications</li>
              </ul>
          </div>

          <div class="type-card">
              <h3>Companies</h3>
              <ul>
                  <li>✔ Post internships & jobs</li>
                  <li>✔ Discover emerging talent</li>
                  <li>✔ Build employer branding</li>
              </ul>
          </div>

          <div class="type-card">
              <h3>NGOs & Foundations</h3>
              <ul>
                  <li>✔ Share grants & fellowships</li>
                  <li>✔ Amplify impact programs</li>
                  <li>✔ Reach underserved youth</li>
              </ul>
          </div>

      </div>
  </section>

  <section class="cta">
      <h2>Ready to Reach the Next Generation?</h2>
      <p>Let’s build opportunities together and empower future leaders worldwide.</p>
      <a href="#" class="btn btn-outline-primary rounded-5 px-5" style="background:white;color:var(--primary);border:none;">Contact Partnerships Team</a>
  </section>

</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script>