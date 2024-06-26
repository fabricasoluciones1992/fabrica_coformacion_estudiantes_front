<template>
  <div class="container">
    <!-- Modal -->
    <div
      class="modal fade border-primary"
      :id="modalId"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content border-primary shadow-lg">
          <div class="modal-header">
            <h5 class="modal-title blue-color-text" id="exampleModalLabel1">
              {{ editing ? $t('titles.emergencyContact') : a }}
            </h5>
          </div>
          <div class="modal-body"></div>
          <form class="row" @submit.prevent="handleSubmit">
            <div class="col-md-12 d-flex justify-content-center">

              <div class="mb-3">
                <label for="formFileDisabled" class="form-label">Disabled file input example</label>
                <input class="form-control" type="file" id="formFileDisabled" disabled>
              </div>
              <div class="col-md-12 d-flex justify-content-center">

              <button
                type="submit"
                class="btn btn-custom fw-semibold"

              >
                <span class="btn-content" v-if="!loading">
                  {{ $t('buttons.save') }}
                </span>
                <span class="btn-content" v-else>
                  <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                  <span role="status"> {{ $t('errors.loading') }}</span>
                </span>
              </button>
              <button
                type="button"
                class="btn btn-cancel ml-5 fw-semibold"
                data-bs-dismiss="modal"
                @click="cancelChanges()"
              >
                {{ $t('buttons.cancel') }}
              </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePersonsStore } from '@/stores/personsStore.js'
import { useGeneralStore } from '@/stores/generalStore.js'
import { ref, defineProps, watchEffect } from 'vue'

const generalStore = useGeneralStore()
const loading = ref(false)
const personsStore = usePersonsStore()
// const typepersonsStore = useTypepersonsStore()

const modalId = ref('docModal')

const props = defineProps({
  doc_url: String,
  edition: Boolean
})
console.log(props)
const doc_url = ref(props.doc_url || '')

const editing = ref(props.editing)
const submitting = ref(false)

console.log(modalId.value)



const handleSubmit = async () => {
  if (submitting.value) return
  submitting.value = true
  loading.value = true
  try {
    if (editing.value) {
      await personsStore.updateEmergencyContacts(props.con_id)
      doc_url.value = ''

      editing.value = false
    }
  } catch (error) {
    console.log(error)
  } finally {
    submitting.value = false
    loading.value = false
  }
}
const cancelChanges = () => {
  if (!editing.value) {
    clearForm()
  }
}

const clearForm = () => {
  doc_url.value = ''
}
</script>

<style lang="scss" scoped>
.btn-custom {
  background-color: var(--blue-color);
  color: #ffffff;
  padding: 1rem 4rem;
  font-size: 1.25rem;
}

.btn-custom:hover {
  background-color: var(----color-background);
  color: var(--red-color);
  border: 2px solid var(--red-color);
}
.btn-cancel {
  background-color: var(--button-red-color);
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
}

.btn-cancel:hover {
  background-color: var(----color-background);
  color: var(--button-red-color);
  border: 2px solid var(--button-red-color);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  transition: 0.5s ease;
}
</style>
