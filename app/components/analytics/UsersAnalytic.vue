<script setup>
import { onMounted, ref } from "vue"
import Chart from "chart.js/auto"
import { useDataStore } from '~/stores/dataStore'

const dataStore = useDataStore()

const users = ref([])
const roleCounts = ref({})
const verificationCounts = ref({})
const monthlyCounts = ref({})


let chartByRole = null
let chartVerification = null
let chartMonthly = null

const fetchUsers = async (force = false) => {

  await dataStore.fetchData('users', force)

  users.value = dataStore.items.users || []

  buildChart()
}

const buildChart = () => {

  roleCounts.value = {}
  verificationCounts.value = {}
  monthlyCounts.value = {}

  // initialize roles
  users.value.forEach(user => {

    const role = user.role || "Unknown"

    if(!roleCounts.value[role]){
      roleCounts.value[role] = 0
    }

    roleCounts.value[role]++

  })

  // initialize verification
  users.value.forEach(user => {

    const role = user.is_verified || 'Not Verified'

    if(!verificationCounts.value[role]){
      verificationCounts.value[role] = 0
    }

    verificationCounts.value[role]++

  })


  // initialize verification
  users.value.forEach(user => {
      const date = new Date(user.created_at)
      const month = date.toLocaleString("default",{month:"short"})

    if(!monthlyCounts.value[month]){
      monthlyCounts.value[month] = 0
    }

    monthlyCounts.value[month]++

  })


  const ctxByRole = document.getElementById("usersChartByRole")
  const ctxByVerification = document.getElementById("usersChartByVerification")
  const ctxMonthly = document.getElementById("userMonthlyChart")


  if(chartByRole){
    chartByRole.destroy()
  } 

  if(chartVerification){
    chartVerification.destroy()
  }

  if(chartMonthly){
    chartMonthly.destroy()
  }

  chartByRole = new Chart(ctxByRole, {

    type: "doughnut",

    data: {
      labels: Object.keys(roleCounts.value),

      datasets: [
        {
          label: "Users",

          data: Object.values(roleCounts.value),

          backgroundColor: [
            "#3b82f6",
            "#22c55e",
            "#f59e0b",
            "#ef4444",
            "#6366f1"
          ]
        }
      ]
    },

    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "bottom"
        }
      }
    }

  })

  chartVerification = new Chart(ctxByVerification, {

    type: "doughnut",

    data: {
      labels: Object.keys(verificationCounts.value),

      datasets: [
        {
          label: "Users",

          data: Object.values(verificationCounts.value),

          backgroundColor: [
            "#3b82f6",
            "#22c55e",
            "#f59e0b",
            "#ef4444",
            "#6366f1"
          ]
        }
      ]
    },

    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "bottom"
        }
      }
    }

  })
  
  chartMonthly = new Chart(ctxMonthly, {

    type:"line",

    data:{
      labels:Object.keys(monthlyCounts.value),

      datasets:[{
        data:Object.values(monthlyCounts.value),
        fill:false,
        borderColor:"#3b82f6",
        tension:0.3
      }]
    },

    options:{
      responsive:true,
      plugins:{
        legend:{ display:false }
      }
    }

  })

}

onMounted(fetchUsers)

</script>

<template>

<section>
  <h6 class="fw-bold text-uppercase text-center">Users by Role</h6>
  <canvas id="usersChartByRole" height="200"></canvas>
</section>
<section>
  <h6 class="fw-bold text-uppercase text-center">Users by Verification</h6>
  <canvas id="usersChartByVerification" height="200"></canvas>
</section>

  <!-- MONTHLY -->
<section class="mt-3">
  <h6 class="fw-bold text-uppercase text-center mb-4">Users Upload Activity</h6>
  <canvas id="userMonthlyChart" height="200"></canvas>
</section>

</template>