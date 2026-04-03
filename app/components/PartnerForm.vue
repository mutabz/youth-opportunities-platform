<template>
  <form @submit.prevent="handleSubmit" class="partner-form">

    <!-- Name -->
    <div class="mb-3">
      <label class="form-label">Partner Name</label>
      <input v-model="form.name" type="text" class="form-control" required />
    </div>

    <!-- Logo URL -->
    <div class="mb-3">
      <label class="form-label">Logo URL</label>
      <input v-model="form.logo_url" type="text" class="form-control" placeholder="https://example.com/logo.png" />
      <div v-if="form.logo_url" class="mt-2">
        <img :src="form.logo_url" alt="Logo Preview" class="img-thumbnail" style="max-height:100px;" />
      </div>
    </div>

    <!-- Website -->
    <div class="mb-3">
      <label class="form-label">Website URL</label>
      <input v-model="form.website_url" type="text" class="form-control" placeholder="https://partner.com" />
    </div>

    <!-- Description -->
    <div class="mb-3">
      <label class="form-label">Description</label>
      <textarea v-model="form.description" class="form-control" rows="3"></textarea>
    </div>

    <!-- Priority -->
    <div class="mb-3">
      <label class="form-label">Priority</label>
      <input v-model.number="form.priority" type="number" class="form-control" min="0" />
    </div>

    <!-- Visible -->
    <div class="form-check mb-3">
      <input v-model="form.visible" type="checkbox" class="form-check-input" id="visibleToggle" />
      <label class="form-check-label" for="visibleToggle">Visible</label>
    </div>

    <!-- Buttons -->
    <div class="d-flex justify-content-end gap-2">
      <button type="button" class="btn btn-secondary" @click="$emit('cancel')">Cancel</button>
      <button type="submit" class="btn btn-primary"><span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>  {{ isEdit ? 'Update' : 'Create' }}</button>
    </div>

  </form>
</template>

<script setup>
import { reactive, watch, computed, ref } from 'vue'
import { useDataStore } from '@/stores/dataStore'

const props = defineProps({
  initialForm: { type: Object, default: null }
})

const emit = defineEmits(['saved', 'cancel'])

const dataStore = useDataStore()

const form = reactive({
  name: '',
  logo_url: '',
  website_url: '',
  description: '',
  priority: 0,
  visible: true
})

const loading = ref(false)

const isEdit = computed(() => !!props.initialForm)

watch(
  () => props.initialForm,
  (val) => {
    if (val) Object.assign(form, val)
  },
  { immediate: true }
)

const handleSubmit = async () => {
  loading.value = true
  try {
    if (isEdit.value) {
      await dataStore.updateItem('partners', form.id, form)
    } else {
      await dataStore.createItem('partners', form)
    }
    emit('saved')
  } catch (err) {
    alert('Failed to save partner')
  }
  loading.value = false
}
</script>

<style scoped>
.partner-form img {
  max-width: 150px;
}
</style>