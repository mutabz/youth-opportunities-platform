<script setup>
import { onMounted, ref } from "vue"
import Chart from "chart.js/auto"
import { useDataStore } from '~/stores/dataStore'

const dataStore = useDataStore()

const opportunities = ref([])
const opportunityTypes = ref([])
const opportunityCategories = ref([])

const categoryCounts = ref({})
const typesCounts = ref({})
const statusCounts = ref({})
const monthlyCounts = ref({})

let chartCate = null
let chartType = null
let chartStatus = null
let chartMonthly = null

const fetchOpportunities = async (force = false) => {

  await dataStore.fetchData('opportunities', force)
  await dataStore.fetchData('opp_category', force)
  await dataStore.fetchData('opp_type', force)

  opportunities.value = dataStore.items.opportunities || []
  opportunityCategories.value = dataStore.items.opp_category || []
  opportunityTypes.value = dataStore.items.opp_type || []

  buildChart()
}

const buildChart = () => {

  categoryCounts.value = {}
  typesCounts.value = {}
  statusCounts.value = {}
  monthlyCounts.value = {}

  // initialize categories
  opportunityCategories.value.forEach(cat => {
    categoryCounts.value[cat.name] = 0
  })

  // initialize types
  opportunityTypes.value.forEach(type => {
    typesCounts.value[type.name] = 0
  })

  // count opportunities
  opportunities.value.forEach(opp => {

    const type = opp.opportunity_type || "Other"

    if(!typesCounts.value[type]){
      typesCounts.value[type] = 0
    }

    typesCounts.value[type]++
  })

  // count opportunities
  opportunities.value.forEach(opp => {

    const status = opp.status || "Other"

    if(!statusCounts.value[status]){
      statusCounts.value[status] = 0
    }

    statusCounts.value[status]++
  })


  // count opportunities
  opportunities.value.forEach(opp => {

    const category = opp.category || "Other"

    if(!categoryCounts.value[category]){
      categoryCounts.value[category] = 0
    }

    categoryCounts.value[category]++
  })

      // ===== MONTHLY =====
  opportunities.value.forEach(opp => {
      const date = new Date(opp.created_at)
      const month = date.toLocaleString("default",{month:"short"})

      if(!monthlyCounts.value[month]){
        monthlyCounts.value[month] = 0
      }

      monthlyCounts.value[month]++
  })

  const ctxCate = document.getElementById("oppCateChart")
  const ctxType = document.getElementById("oppTypeChart")
  const ctxStatus = document.getElementById("oppStatusChart")
  const ctxMonthly = document.getElementById("oppMonthlyChart")

  if(chartCate){
    chartCate.destroy()
  }

 if(chartType){
    chartType.destroy()
  }

 if(chartStatus){
    chartStatus.destroy()
  } 

  if(chartMonthly){
    chartMonthly.destroy()
  }

  chartCate = new Chart(ctxCate, {

    type: "bar",

    data: {
      labels: Object.keys(categoryCounts.value),

      datasets: [
        {
          data: Object.values(categoryCounts.value),

          backgroundColor: [
            "#3b82f6",
            "#22c55e",
            "#f59e0b",
            "#ef4444",
            "#6366f1",
            "#14b8a6"
          ]
        }
      ]
    },

    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      }
    }

  })

  chartType = new Chart(ctxType, {

    type: "bar",

    data: {
      labels: Object.keys(typesCounts.value),

      datasets: [
        {
          data: Object.values(typesCounts.value),

          backgroundColor: [
            "#3b82f6",
            "#22c55e",
            "#f59e0b",
            "#ef4444",
            "#6366f1",
            "#14b8a6"
          ]
        }
      ]
    },

    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      }
    }

  })

  chartType = new Chart(ctxStatus, {

    type: "doughnut",

    data: {
      labels: Object.keys(statusCounts.value),

      datasets: [
        {
          data: Object.values(statusCounts.value),

          backgroundColor: [
            "#3b82f6",
            "#22c55e",
            "#f59e0b",
            "#ef4444",
            "#6366f1",
            "#14b8a6"
          ]
        }
      ]
    },

    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'bottom'
        }
      }
    }

  })

  // ===== MONTHLY CHART =====
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

onMounted(fetchOpportunities)

</script>
<template>
  <!-- PIE CHART -->
  <section>
    <h6 class="fw-bold text-uppercase text-center mb-4">Opportunities by Categories</h6>
    <canvas id="oppCateChart" height="200"></canvas>
  </section>
  <hr>
  <section class="mt-3">
    <h6 class="fw-bold text-uppercase text-center mb-4">Opportunities by Types</h6>
    <canvas id="oppTypeChart" height="200"></canvas>
  </section>
  <hr>
  <section class="mt-3">
    <h6 class="fw-bold text-uppercase text-center mb-4">Opportunities by Status</h6>
    <canvas id="oppStatusChart" height="200"></canvas>
  </section>

  <!-- MONTHLY -->
  <section class="mt-3">
    <h6 class="fw-bold text-uppercase text-center mb-4">Opportunities Upload Activity</h6>
    <canvas id="oppMonthlyChart" height="200"></canvas>
  </section>

</template>