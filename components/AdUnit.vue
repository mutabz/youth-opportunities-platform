<template>
  <div class="ad-container" :style="wrapperStyle">
    <ClientOnly>
      <ins
        ref="adRef"
        class="adsbygoogle"
        :style="adStyle"
        data-ad-client="ca-pub-4671012380656073"
        :data-ad-slot="slotId"
        :data-ad-format="format"
        data-full-width-responsive="true"
      />
    </ClientOnly>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const props = defineProps({
  slotId: String,
  format: {
    type: String,
    default: 'auto'
  },
  adStyle: {
    type: Object,
    default: () => ({ display: 'block' })
  },
  wrapperStyle: {
    type: Object,
    default: () => ({
      margin: '20px 0',
      textAlign: 'center'
    })
  }
})

const adRef = ref(null)
const loaded = ref(false)

onMounted(async () => {
  await nextTick()

  if (!process.client) return
  if (!window.adsbygoogle) return
  if (!adRef.value) return
  if (loaded.value) return

  try {
    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    loaded.value = true
  } catch (e) {
    console.warn('AdSense skipped:', e.message)
  }
})
</script>

<style scoped>
.ad-container {
  min-height: 50px;
  width: 100%;
  overflow: hidden;
}
</style>