<template>
  <section class="gen-hero">

  </section>

  <section class="">

    <!-- MAIN -->
    <div class="main-content">

          <div class="top-bar">
              <div class="search-bar">
                  <input type="text" placeholder="Search opportunities...">
                  <button class="btn btn-filled">Search</button>
              </div>

              <select style="padding:0.8rem;border-radius:8px;border:1px solid #e2e8f0;">
                  <option>Sort by Latest</option>
                  <option>Deadline</option>
                  <option>Popularity</option>
              </select>
          </div>

          <div class="opp-grid">

              <!-- CARD -->
              <div class="card">
                  <div class="card-img">
                      <span class="card-badge">Fully Funded</span>
                  </div>
                  <div class="card-content">
                      <h3>Rhodes Scholarship 2026</h3>
                      <p>Study at Oxford University with full financial support.</p>
                      <div class="card-footer">
                          <span class="deadline">Ends in 10 days</span>
                          <a href="#" class="btn btn-outline" style="font-size:0.8rem;">View</a>
                      </div>
                  </div>
              </div>

              <div class="card">
                  <div class="card-img">
                      <span class="card-badge" style="background:#10b981;">Internship</span>
                      <img src="/assets/images/images.png"/>
                  </div>
                  <div class="card-content">
                      <h3>Google STEP Internship</h3>
                      <p>Gain real-world experience at Google as a student engineer.</p>
                      <div class="card-footer">
                          <span class="deadline">Rolling</span>
                          <a href="#" class="btn btn-outline" style="font-size:0.8rem;">View</a>
                      </div>
                  </div>
              </div>

          </div>

          <div class="pagination">
              <button>1</button>
              <button>2</button>
              <button>3</button>
          </div>
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