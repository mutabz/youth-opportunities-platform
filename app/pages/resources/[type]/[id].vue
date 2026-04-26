<template>
  <main class="container my-4">

    <!-- HEADER -->
    <header class="d-flex align-items-center mb-4 bg-info p-3 text-white rounded-4">
        <button class="btn btn-light me-3" @click="$router.back()">
          Back   <Icon class="ms-3" name="fa6-solid:arrow-right"/>
        </button>
      <h1 class="h4 m-0">{{ item.title }}</h1>
    </header>

    <div class="row g-4">
            <!-- CARD -->
      <div class="">
        <div class="resource-card">
            <div class="resource-icon">
                <i class="fa-solid fa-file-lines"></i>
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.content }}.</p>
            <div v-if="item.type" >
              <iframe class="mt-3 mb-4"  v-if="item.type.toLowerCase() === 'video' || 'tutorial'" style="width: 100%; height: 400px!important;" :src="item.file_path" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          
            <div v-for="(par, index) in item.data" class="mt-3">{{ par }}</div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useDataStore } from '~/stores/dataStore'
import { generateMetaTitle, generateMetaDescription, generateStructuredData } from '~/composables/utils'

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
</script>