<template>
  <div class="ad-container" :style="wrapperStyle">
    <ClientOnly>
      <Adsbygoogle
        :ad-slot="slotId"
        :ad-format="format"
        :ad-style="adStyle"
      />
      <!--      
        <p class="ad-label">Advertisement</p>
      -->
    </ClientOnly>
  </div>
</template>

<script setup>
defineProps({
  slotId: {
    type: String,
    required: true
  },
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
    default: () => ({ margin: '20px 0', textAlign: 'center' })
  }
})
</script>

<style scoped>
.ad-label {
  font-size: 10px;
  color: #999;
  margin-top: 4px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.ad-container {
  min-height: 50px; /* Prevents layout shift */
  width: 100%;
  overflow: hidden;
}
</style>