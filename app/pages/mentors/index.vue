<template>
  <section class="gen-hero">
    <h1>Learn From World-Class Mentors</h1>
    <p>Connect with experienced professionals to guide your career and academic journey.</p>

    <!-- Search Box -->
    <div class="card shadow-sm mb-4">
      <div class="card-body d-flex align-items-center">
        <Icon name="fa6-solid:magnifying-glass" class="text-muted"/>
        <input type="text" class="form-control" placeholder="Search mentors by skill, company, or name..." v-model="searchQuery" />
      </div>
      <div class="card-footer">
        fdg
      </div>
    </div>
  </section>

  <section class="filter-bar">
      <div>
          <strong>Filter by Expertise:</strong>
      </div>

      <select>
          <option>All Fields</option>
          <option>Software Engineering</option>
          <option>Business & Startups</option>
          <option>Scholarship Applications</option>
          <option>Public Speaking</option>
      </select>

      <select>
          <option>Sort by Rating</option>
          <option>Most Experienced</option>
          <option>Recently Joined</option>
      </select>
  </section>

  <section class="grid-2 mx-4 my-2 mb-5">

      <!-- CARD -->
      <div class="mentor-card">
          <div class="mentor-img"></div>
          <h3>Sarah Johnson</h3>
          <div class="role">Software Engineer @ Google</div>

          <div class="rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
              (4.8)
          </div>

          <p class="bio">
              Helping students break into Big Tech through mentorship and interview preparation.
          </p>

          <div class="skills">
              <span class="skill">Data Structures</span>
              <span class="skill">System Design</span>
              <span class="skill">Interview Prep</span>
          </div>

          <a href="#" class="btn btn-outline-primary rounded-5 mx-5">Book Session</a>
      </div>

      <!-- CARD -->
      <div class="mentor-card">
          <div class="mentor-img"></div>
          <h3>David Kim</h3>
          <div class="role">Scholarship Advisor</div>

          <div class="rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              (5.0)
          </div>

          <p class="bio">
              Guided 200+ students to win fully-funded scholarships worldwide.
          </p>

          <div class="skills">
              <span class="skill">Essay Review</span>
              <span class="skill">CV Optimization</span>
              <span class="skill">Application Strategy</span>
          </div>

          <a href="#" class="btn btn-outline-primary rounded-5 mx-5">Book Session</a>
      </div>

  </section>

</template>

<script setup>
import { ref } from 'vue'

const opportunities = ref([
  {
    id: 1,
    title: 'Youth Leadership Program',
    description: 'A 6-month leadership training for youth aged 18-25.',
    type: 'Training',
    location: 'Kigali, Rwanda'
  },
  {
    id: 2,
    title: 'Startup Internship',
    description: 'Internship at a tech startup in Kigali.',
    type: 'Internship',
    location: 'Kigali, Rwanda'
  },
  {
    id: 3,
    title: 'Volunteer Opportunity',
    description: 'Community volunteer work in education.',
    type: 'Volunteer',
    location: 'Ruhango, Rwanda'
  }
])
</script>