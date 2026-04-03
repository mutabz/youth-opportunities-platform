<template>
  <div class="container py-5">

    <!-- Page Title -->
    <div class="text-center mb-5">
      <h1 class="fw-bold">Join Opportunities Portal</h1>
      <p class="text-muted">
        Become part of a growing platform that connects people with jobs, internships,
        scholarships, and global opportunities.
      </p>
    </div>

    <!-- CTA Buttons -->
    <div class="container w-100 mb-5 d-flex justify-content-center align-items-center">
      <NuxtLink to="/join-free/LoginPage" class="btn btn-primary btn-SM me-3">
        <div class="d-flex justify-content-center align-items-center">
          <Icon class="mt-1" name="fa6-solid:arrow-right"/><span>Login or Create Free Account here</span>  
        </div>
      </NuxtLink>
    </div>

    <!-- Accordion -->
    <div class="accordion" id="joinAccordion">

      <!-- Normal User -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed text-blue fw-bold"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#userJoin"
          >
            Join as a normal users
          </button>
        </h2>

        <div id="userJoin" class="accordion-collapse collapse" data-bs-parent="#joinAccordion" >
          <div class="accordion-body">

            <p>
              Joining as a normal user allows you to explore thousands of opportunities
              including jobs, internships, scholarships, and global programs. Our platform
              is designed to help individuals discover opportunities that match their
              interests and career goals.
            </p>

            <p>
              Once you create an account, you can browse opportunities, save your favorites,
              and stay updated with the latest listings from organizations around the world.
              The platform makes it easy to search by category, location, or opportunity type.
            </p>

            <p>
              As a registered user, you will also receive notifications about new
              opportunities that match your interests. This helps you stay ahead and never
              miss an important opportunity.
            </p>

            <p>
              Creating a user account is completely free and takes less than a minute.
              Simply register with your email and start exploring opportunities
              immediately.
            </p>

          </div>
        </div>
      </div>

      <!-- Partner -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed text-blue fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#partnerJoin" >
            Join as a partner organization for sharing opportunities
          </button>
        </h2>

        <div id="partnerJoin" class="accordion-collapse collapse" data-bs-parent="#joinAccordion" >
          <div class="accordion-body">

            <p>
              Partner organizations can publish opportunities such as jobs,
              internships, scholarships, events, and training programs.
              By becoming a partner, you can reach a large audience of students,
              professionals, and opportunity seekers worldwide.
            </p>

            <p>
              Our platform helps organizations showcase their programs and
              connect with motivated individuals who are actively searching
              for career and development opportunities.
            </p>

            <p>
              Partners are given access to a dedicated dashboard where they
              can manage opportunity listings, update information, and
              monitor engagement from users.
            </p>

            <h6 class="fw-bold mt-4">Partner Requirements</h6>

            <ul>
              <li>Must represent a registered organization or institution</li>
              <li>Provide valid contact information</li>
              <li>Submit accurate and verified opportunity listings</li>
              <li>Follow platform guidelines and posting policies</li>
              <li>Maintain professional communication with applicants</li>
            </ul>

            <p>
              If your organization meets these requirements, you can apply
              to become a partner and start sharing opportunities with
              our growing community.
            </p>

          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup>
definePageMeta({
  layout: "default"
})
</script>