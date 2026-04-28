<template>
  <section class="gen-hero">

  </section>

  <section class=" ">
    <!-- MAIN -->
    <div class="main-content">

      <div class=" p-4">
        <!-- Loading -->
        <div v-if="loading" class="text-blue-500">Loading...</div>
        <!-- Error -->
        <div v-if="error" class="text-red-500">{{ error }}</div>

        <div v-if="filteredItems && filteredItems.length" class="opp-grid">
          <div class="card shadow-lg h-100 rounded-4" v-for="opp in items" key="opp.id">
            <div class="card-header">
              <NuxtLink :to="'/opportunities/' + opp.category + '-data/' + opp.id" class="text-blue fw-bold">{{ opp.title }}</NuxtLink>
            </div>
            <div class="card-body">                        
              <div>{{ truncate(opp.description[0] || '', 100) }}</div>
              <div class="d-flex align-items-center justify-content-between mt-3 mb-0">
                <div class="bg-primary badge">{{ opp.category  || 'Opportunity' }}</div>
                <div class="text-danger"><strong class="me-3">Deadline: </strong>{{ opp.details.application.deadline }}</div>
              </div>
            </div>
            <div class="card-footer">
              <span class="deadline"><Icon name="fa6-solid:location-pin"/> {{ truncate(opp.host_country, 10) }}, {{ truncate(opp.location.city, 10) }}</span>
              <NuxtLink :to="'/opportunities/' + opp.category + '-data/' + opp.id" class="btn btn-outline-primary rounded-4" style="font-size: 0.8rem; padding: 0.4rem 1rem;">View Details</NuxtLink>
            </div>
          </div>
        </div>

        <!-- Empty state -->
        <div v-else-if="!loading && !error">No opportunities found.</div>
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