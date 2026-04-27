<script setup>
import { onMounted, ref } from "vue"
import Chart from "chart.js/auto"
import { useDataStore } from '~/stores/dataStore'

const dataStore = useDataStore()

const resources = ref([])

const typeCounts = ref({})
const contentCounts = ref({})
const monthlyCounts = ref({})

let chartType = null
let chartContent = null
let chartMonthly = null


const fetchResources = async (force=false) => {

  await dataStore.fetchData('resources', force)

  resources.value = dataStore.items.resources || []

  buildChart()
}



const buildChart = () => {

  typeCounts.value = {}
  contentCounts.value = {
    "File":0,
    "Text":0
  }

  monthlyCounts.value = {}


  resources.value.forEach(res => {

    // ===== TYPE COUNT =====
    const type = res.type || "Other"

    if(!typeCounts.value[type]){
      typeCounts.value[type] = 0
    }

    typeCounts.value[type]++


    // ===== FILE vs TEXT =====
    if(res.file_path){
      contentCounts.value["File"]++
    }else{
      contentCounts.value["Text"]++
    }


    // ===== MONTHLY =====
    if(res.created_at){

      const date = new Date(res.created_at)

      const month = date.toLocaleString("default",{month:"short"})

      if(!monthlyCounts.value[month]){
        monthlyCounts.value[month] = 0
      }

      monthlyCounts.value[month]++
    }

  })


  const ctxType = document.getElementById("resTypeChart")
  const ctxContent = document.getElementById("resContentChart")
  const ctxMonthly = document.getElementById("resMonthlyChart")


  if(chartType) chartType.destroy()
  if(chartContent) chartContent.destroy()
  if(chartMonthly) chartMonthly.destroy()



  // ===== TYPE CHART =====

  chartType = new Chart(ctxType, {

    type:"bar",

    data:{
      labels:Object.keys(typeCounts.value),

      datasets:[{
        data:Object.values(typeCounts.value),

        backgroundColor:[
          "#3b82f6",
          "#22c55e",
          "#f59e0b",
          "#ef4444",
          "#6366f1",
          "#14b8a6"
        ]
      }]
    },

    options:{
      responsive:true,
      plugins:{
        legend:{ display:false }
      }
    }

  })



  // ===== FILE vs TEXT =====

  chartContent = new Chart(ctxContent, {

    type:"doughnut",

    data:{
      labels:Object.keys(contentCounts.value),

      datasets:[{
        data:Object.values(contentCounts.value),

        backgroundColor:[
          "#3b82f6",
          "#22c55e"
        ]
      }]
    },

    options:{
      responsive:true,
      plugins:{
        legend:{
          display:true,
          position:"bottom"
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


onMounted(fetchResources)
</script>



<template>

<!-- TYPE -->
<section>
<h6 class="fw-bold text-uppercase text-center mb-4">
Resources by Type
</h6>

<canvas id="resTypeChart" height="200"></canvas>

</section>

<hr>


<!-- FILE vs TEXT -->
<section class="mt-3">

<h6 class="fw-bold text-uppercase text-center mb-4">
File vs Text Resources
</h6>

<canvas id="resContentChart" height="200"></canvas>

</section>

<hr>


<!-- MONTHLY -->
<section class="mt-3">

<h6 class="fw-bold text-uppercase text-center mb-4">
Resources Upload Activity
</h6>

<canvas id="resMonthlyChart" height="200"></canvas>

</section>

</template>