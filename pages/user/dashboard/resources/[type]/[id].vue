<template>
  <main class="user-dashboard container my-4">


  <!-- HEADER -->
  <header class="app-header d-flex justify-content-between align-items-center mb-4">
    <div class="d-flex">
      <button class="btn me-3" @click="$router.back()">
        <Icon name="fa6-solid:arrow-left"/>
      </button>
      <h3>{{ item.title }}</h3>
    </div>

    <div class="d-flex gap-2" v-if="device === 'desktop'">
      <NuxtLink to="/user/dashboard/opportunities" class="btn btn-primary">
        Browse Opportunities
      </NuxtLink>

      <NuxtLink to="/user/dashboard/profile" class="btn btn-secondary">
        My Profile
      </NuxtLink>

      <button class="btn btn-secondary" @click="fetchRequirements(true)">
        Refresh
      </button>
    </div>
  </header>

    <div class="row g-4">
            <!-- CARD -->
      <div class="">
            <h3 class="text-capitalize">{{ item.title.toLowerCase() }}</h3>
            <p class="text-capitalize">{{ item.content.toLowerCase() }}.</p>
            <div v-if="item.type" >
              <iframe class="mt-3 mb-4"  v-if="item.type.toLowerCase() === 'video' || 'tutorial'" style="width: 100%; height: 400px!important;" :src="item.file_path" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            
            <div v-for="(par, index) in item.data" class="mt-3 text-capitalize">{{ par.toLowerCase() }}</div>
      </div>
    </div>

  </main>
</template>


<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useDataStore } from '~/stores/dataStore'
import { generateMetaTitle, generateMetaDescription, generateStructuredData } from '~/composables/utils'
import { useDeviceType } from "@/composables/useDeviceType";
import { formatDate } from "@/composables/utils";

const { device } = useDeviceType();

const route = useRoute()
const dataStore = useDataStore()
const userStore = useUserStore()

const user = computed(()=> userStore.user)
// Reactive references
const item = ref({})
const category = ref('')

// Computed properties
const type = ref('')

const fetchRequirements = async () => {  
  await dataStore.fetchData('resources')
  item.value = dataStore.items.resources.find(o => o.id === route.params.id)
  category.value = item.type || null
}
// Fetch resources and category data on mount
onMounted(fetchRequirements)


// Fallback useHead for SSR / Nuxt meta
useHead(() => {
  if (!item.value?.title) return {}

  return {
    title: item.value.title,
    meta: [
      {
        name: "content",
        content: item.value.content
      },
      {
        name: "keywords",
        content: item.value.title
      }
    ]
  }
})

definePageMeta({
  layout:'user',
  middleware:'auth'
})
</script>


<style scoped>
.user-dashboard header{
  padding:1rem 0;
  border-bottom:1px solid #ccc;
  margin-top: 5rem;
}
.user-dashboard {
  padding-bottom: 3rem;
}

</style>
