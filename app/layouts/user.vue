<template>
  <section class="data-section" :class="{ 'data-section' : device === 'desktop', 'data-section-mobile' : device === 'mobile' }">
    <UserNavBar />
    <div :class="{ 'main-section' : device === 'desktop' }">
      <NuxtPage />
    </div>
</section>
</template>

<script setup>
import UserNavBar from '~/components/UserNavBar.vue'
import { useDataStore } from '~/stores/dataStore'
import { useRoute } from 'vue-router'
import { useDeviceType } from "@/composables/useDeviceType";

const { device } = useDeviceType();
const dataStore = useDataStore()

const route = useRoute()
const data = ref({
  page_url: '',
  referrer: ''
})

const trackPage = async () => {
  try {
    data.value = {
      page_url: window.location.pathname,
      referrer: document.referrer || null
    }

    await dataStore.createItem('track', data.value)
  } catch (e) {
    console.log("Tracking failed:", e)
  }
}

watch(
  () => route.fullPath,
  () => {
    trackPage()
  },
  { immediate: true } // also runs on first load
)
</script>


<style scoped>
.main-section {
  position: fixed;
  height: calc(100vh - 5.5rem);
  top: 4rem;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  overflow: scroll;

  margin: 1rem;
  padding: 2rem;
  background-color: var(--bg);
  border: 1.5px solid rgba(0, 0, 0, .5);
  border-radius: 2rem;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, .50);
}

.data-section {
  position: fixed;
  max-height: 100vh;
  max-width: 100vw;
  min-height: 100vh;
  min-width: 100vw;
  overflow: hidden;

  background-color: var(--bg);
  box-shadow: 2px 2px 20px rgba(0, 0, 0, .50);
}

@media (max-width: 1024px) {

  .data-section {
    position: fixed;
    max-height: 100vh;
    max-width: 100vw;
    min-height: 100vh;
    min-width: 100vw;
    overflow: hidden;
    overflow-y: scroll;

    background-color: var(--bg);
    box-shadow: 2px 2px 20px rgba(0, 0, 0, .50);
  }
}

</style>
