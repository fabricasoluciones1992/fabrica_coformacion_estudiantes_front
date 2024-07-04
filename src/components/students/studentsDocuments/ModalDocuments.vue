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
              {{ $t('titles.emergencyContact') }}
            </h5>
          </div>
          <div class="modal-body">
            <form class="" @submit.prevent="handleSubmit">
              <div class="">
                <label class="form-label">{{ $t('modalStudCreate.contactParentage') }}</label>
                <input
                  ref="updateFile"
                  class="form-control"
                  type="file"
                  @change="handleUpdateFile"
                />
              </div>
              <div class="row mt-5">
                <div class="col-md-12 d-flex justify-content-center">
                  <button :disabled="change" type="submit" class="btn btn-custom fw-semibold">
                    <span class="btn-content"  v-if="!loading">
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
  </div>
</template>

<script setup>
import { usePersonsStore } from '@/stores/personsStore.js'
// import { useGeneralStore } from '@/stores/generalStore.js'
import { ref, defineProps, watchEffect } from 'vue'

// const generalStore = useGeneralStore()
const loading = ref(false)
const personsStore = usePersonsStore()
const doc = ref('')
// const typepersonsStore = useTypepersonsStore()

const modalId = ref('docModal')
const file = ref(null)
const updateFile = ref(null)
const change = ref(true)

const handleUpdateFile = () => {
  file.value = updateFile.value.files[0]
  change.value = false
}
const props = defineProps({
  docUpdating: Object,
  name: String,
  editing: Boolean
})
console.log(props)

const editing = ref(props.editing)
const submitting = ref(false)

console.log(modalId.value)

const formatDate = (date) => {
  const d = new Date(date)
  const year = d.getFullYear()
  const month = `0${d.getMonth() + 1}`.slice(-2)
  const day = `0${d.getDate()}`.slice(-2)
  return `${year}-${month}-${day}`
}

const date = formatDate(new Date())

console.log(date)

watchEffect(() => {
  doc.value = props.name || props.docUpdating || ''
  editing.value = props.editing || ''
})

const handleSubmit = async () => {
  console.log(props)
  console.log(doc.value)
  console.log(editing.value)
  console.log(submitting.value)
  if (submitting.value) return
  submitting.value = true
  try {
    if (editing.value) {
      await personsStore.updateFiles(file.value, 1, doc.value.docId)
   
    } else {
      await personsStore.uploadFiles(file.value, doc.value.toLocaleUpperCase(), 1, date)
      
    }
  } catch (error) {
    console.log(error)
    updateFile.value.value = null
    
  } finally {
    updateFile.value.value = null
    change.value = true
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
  console.log()
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
