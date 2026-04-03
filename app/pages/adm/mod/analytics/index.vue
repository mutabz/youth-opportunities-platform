<script setup>
import { onMounted } from "vue"
import Chart from "chart.js/auto"

const props = defineProps({
  applications: {
    type: Array,
    default: () => []
  }
})

onMounted(() => {

  const statusCounts = {
    Pending: 5,
    Shortlisted: 1,
    Accepted: 2,
    Rejected: 2
  }

  props.applications.forEach(app => {
    if(statusCounts[app.status] !== undefined){
      statusCounts[app.status]++
    }
  })

  const ctx = document.getElementById("statusChart")

  new Chart(ctx, {
    type: "pie",
    data: {
      labels: Object.keys(statusCounts),
      datasets: [
        {
          data: Object.values(statusCounts),
          backgroundColor: [
            "#fbbf24", // pending
            "#3b82f6", // shortlisted
            "#22c55e", // accepted
            "#ef4444"  // rejected
          ]
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom"
        }
      }
    }
  })

})

definePageMeta({
  layout:'admin',
  middleware:'admin'
})
</script>


<template>

  <main class="container mt-4">

    <header class="d-flex justify-content-between align-items-center mb-3">
      <h3>Application Analytics</h3>

      <NuxtLink to="/adm/mod" class="btn btn-outline-secondary">
        Back
      </NuxtLink>
    </header>

    <section class="row g-3 mb-4">

<div class="col-md-3">
<div class="card p-3 text-center">
<h6>Pending</h6>
<h3>{{ pendingCount }}</h3>
</div>
</div>

<div class="col-md-3">
<div class="card p-3 text-center">
<h6>Shortlisted</h6>
<h3>{{ shortlistedCount }}</h3>
</div>
</div>

<div class="col-md-3">
<div class="card p-3 text-center">
<h6>Accepted</h6>
<h3>{{ acceptedCount }}</h3>
</div>
</div>

<div class="col-md-3">
<div class="card p-3 text-center">
<h6>Rejected</h6>
<h3>{{ rejectedCount }}</h3>
</div>
</div>

</section>

    <section class="card p-4">

      <h5 class="mb-3">Applications by Status</h5>

      <canvas id="statusChart" height="200"></canvas>

    </section>

  </main>

</template>