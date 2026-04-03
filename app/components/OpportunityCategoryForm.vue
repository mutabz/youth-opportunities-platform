<template>
  <form @submit.prevent="submitForm">
    <div class="mb-3">
      <label class="form-label">Key</label>
      <input v-model="form.key" type="text" class="form-control" required />
    </div>
    <div class="mb-3">
      <label class="form-label">Name</label>
      <input v-model="form.name" type="text" class="form-control" required />
    </div>
    <div class="d-flex justify-content-end gap-2">
      <button type="button" class="btn btn-secondary" @click="$emit('cancel')">Cancel</button>
      <button type="submit" class="btn btn-primary"><span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>  Save</button>
    </div>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useDataStore } from '@/stores/dataStore'

const props = defineProps({
  initialForm: Object
})

const emit = defineEmits(['saved','cancel'])
const dataStore = useDataStore()
const loading = ref(false)

const form = reactive({
  key: props.initialForm?.key || '',
  name: props.initialForm?.name || ''
})

const submitForm = async () => {
  loading.value = true
  if(props.initialForm?.id){
    await dataStore.updateItem('opp_category', props.initialForm.id, form)
  } else {
    await dataStore.createItem('opp_category', form)
  }
  emit('saved')
  loading.value = false
}
</script>