<template>
  <form @submit.prevent="submitForm">

    <div class="row g-3">

      <!-- FULL NAME -->
      <div class="col-md-6">
        <label class="form-label">Full Name</label>
        <input
          v-model="form.full_name"
          type="text"
          class="form-control"
          required
        />
      </div>

      <!-- EMAIL -->
      <div class="col-md-6">
        <label class="form-label">Email</label>
        <input
          v-model="form.email"
          type="email"
          class="form-control"
          required
        />
      </div>


      <!-- PHONE -->
      <div class="col-md-6">
        <label class="form-label">Phone</label>
        <input
          v-model="form.phone_number"
          type="text"
          class="form-control"
        />
      </div>


      <!-- LOCATION -->
      <div class="col-md-6">
        <label class="form-label">Location</label>
        <input
          v-model="form.location"
          type="text"
          class="form-control"
        />
      </div>


      <!-- ROLE -->
      <div class="col-md-6">
        <label class="form-label">Role</label>

        <select
          v-model="form.role"
          class="form-select"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="partner">Partner</option>
        </select>
      </div>


      <!-- VERIFIED -->
      <div class="col-md-6 d-flex align-items-end">

        <div class="form-check">

          <input
            v-model="form.is_verified"
            class="form-check-input"
            type="checkbox"
            id="verifiedCheck"
          >

          <label class="form-check-label" for="verifiedCheck">
            Verified User
          </label>

        </div>

      </div>


      <!-- PASSWORD -->
      <div class="col-md-6">

        <label class="form-label">
          Password
          <small v-if="isEdit">(leave empty to keep current)</small>
        </label>

        <input
          v-model="form.password"
          type="password"
          class="form-control"
          :required="!isEdit"
        />

      </div>


      <!-- BIO -->
      <div class="col-12">
        <label class="form-label">Bio</label>

        <textarea
          v-model="form.bio"
          class="form-control"
          rows="3"
        ></textarea>
      </div>

    </div>


    <!-- ACTION BUTTONS -->

    <div class="mt-4 d-flex justify-content-end gap-2">

      <button
        type="button"
        class="btn btn-secondary"
        @click="$emit('cancel')"
      >
        Cancel
      </button>

      <button
        type="submit"
        class="btn btn-primary"
        :disabled="loading"
      >

        <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>

        {{ isEdit ? 'Update User' : 'Create User' }}

      </button>

    </div>

  </form>
</template>


<script setup>

import { ref, computed, watch } from 'vue'
import { useDataStore } from '@/stores/dataStore'

const props = defineProps({
  initialForm: Object
})

const emit = defineEmits(['saved', 'cancel'])

const dataStore = useDataStore()

const loading = ref(false)

const form = ref({
  full_name: '',
  email: '',
  phone_number: '',
  role: 'user',
  location: '',
  bio: '',
  password: '',
  is_verified: false
})


const isEdit = computed(() => !!props.initialForm)



watch(
  () => props.initialForm,
  (val) => {

    if (val) {

      form.value = {
        ...val,
        password: ''
      }

    }

  },
  { immediate: true }
)



const submitForm = async () => {

  loading.value = true

  try {

    if (isEdit.value) {

      await dataStore.updateItem(
        'users',
        form.value.id,
        form.value
      )

    } else {

      await dataStore.createItem(
        'users',
        form.value
      )

    }

    emit('saved')

  }

  catch (err) {

    alert('Failed to save user')

  }

  finally {

    loading.value = false

  }

}

</script>