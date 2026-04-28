<script setup>
import { onMounted } from "vue"

const props = defineProps({
  applications: {
    type: Array,
    default: () => []
  }
})

onMounted(async () => {
  const Chart = (await import('chart.js/auto')).default

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
    type: "doughnut",
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
</script>


<template>
    <section class="">
      <h6 class="fw-bold text-uppercase text-center">Application by Status</h6>
      <canvas id="statusChart" height="200"></canvas>
    </section>
</template>