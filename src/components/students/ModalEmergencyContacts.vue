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
              {{
                editing
                  ? $t('titles.emergencyContact')
                  : a
              }}
            </h5>
          </div>
          <div class="modal-body">
            <form class="row" @submit.prevent="handleSubmit">
              <div class="row mb-4 col-sm-12 col-md-6 mt-3 ms-2">
                <div class="col-12">
                  <label class="form-label mt-3">{{ $t('modalStudCreate.contactName') }}</label>
                  <input
                    type="text"
                    v-model="con_name"
                    class="form-control shadow"
                    id="exampleInputDocumentType"
                    aria-describedby="DocumentTypeHelp"
                  />
                  <label class="form-label mt-3">{{
                    $t('modalStudCreate.contactTelephone')
                  }}</label>
                  <input
                    type="text"
                    v-model="con_telphone"
                    class="form-control shadow"
                    id="exampleInputDocumentType"
                    aria-describedby="DocumentTypeHelp"
                  />
                </div>
              </div>
              <div class="row col-sm-12 col-md-6 mt-3 ms-2">
                <div class="col-12 mt-3">
                  <label class="form-label">{{ $t('modalStudCreate.contactParentage') }}</label>
                    <select v-model="rel_id" class="form-select shadow">
                      <option
                        v-for="relationshipItem in generalStore.relationships"
                        :key="relationshipItem.rel_id"
                        :value="relationshipItem.rel_id"
                        
                      >
                        {{ relationshipItem.rel_name }}
                      </option>
                    </select>
               
                 
                  <label class="form-label mt-3">{{
                    $t('modalStudCreate.contactEmail')
                  }}</label>
                  <input
                    type="text"
                    v-model="con_mail"
                    class="form-control shadow"
                    id="exampleInputDocumentType"
                    aria-describedby="DocumentTypeHelp"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 d-flex justify-content-center">
                  <button
                    type="submit"
                    class="btn btn-custom fw-semibold"
                    :disabled="edu_lev_name === ''"
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
  </div>
</template>

<script setup>
import { usePersonsStore } from '../../stores/personsStore.js'
import { useGeneralStore } from '@/stores/generalStore.js'
import { ref, defineProps, watchEffect } from 'vue'


const generalStore = useGeneralStore()
const loading = ref(false)
const personsStore = usePersonsStore()
// const typepersonsStore = useTypepersonsStore()

const props = defineProps({
  con_id: Number,
  con_name: String,
  con_mail: String,
  con_telphone: String,
  rel_id: Number,
  per_id: Number,
  edit: Boolean
})
console.log(props)
const con_id = ref(props.con_id || '')
const con_name = ref(props.con_name || '')
const con_mail = ref(props.con_mail || '')
const con_telphone = ref(props.con_telphone || '')
const rel_id = ref(props.rel_id || '')
const per_id = ref(props.per_id || '')

const editing = ref(props.editing)
const submitting = ref(false)

const modalId = ref(editing.value ? 'editModal' : 'createModal')
console.log(modalId.value)

watchEffect(() => {
  con_id.value = props.con_id || ''
  con_name.value = props.con_name || ''
  con_mail.value = props.con_mail || ''
  con_telphone.value = props.con_telphone || ''
  rel_id.value = props.rel_id || ''
  per_id.value = props.per_id || ''
  editing.value = props.edit
  modalId.value = editing.value ? 'editModal' : 'createModal'
})

const handleSubmit = async () => {
  if (submitting.value) return
  submitting.value = true
  loading.value = true
  try {
    if (editing.value) {
      await personsStore.updateEmergencyContacts(
        props.con_id,
        con_name.value.toUpperCase(),
        con_mail.value.toUpperCase(),
        con_telphone.value,
        rel_id.value,
        per_id.value
      )
      con_name.value = ''
      con_mail.value = ''
      con_telphone.value = ''
      rel_id.value = ''
      per_id.value = ''
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
  con_name.value = ''
  con_mail.value = ''
  con_telphone.value = ''
  rel_id.value = ''
  per_id.value = ''
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
