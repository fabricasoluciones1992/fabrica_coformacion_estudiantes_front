<template>
 
  <div
    class="tab-pane fade row"
    id="emergency-contact-info"
    role="tabpanel"
    aria-labelledby="emergency-contact-info-tab"
  >
    <div
      v-for="contactItem in contactsArray"
      :key="contactItem.con_id"
      class="row shadow pb-3 ps-3 mb-5 bg-body rounded"
    >
      <div class="row col-sm-12 col-md-6 mt-3 ms-2">
        <div class="col-12">
          <label class="form-label">{{ $t('modalStudCreate.contactName') }}</label>
          <input disabled class="form-control shadow" type="text" v-model="contactItem.con_name" />
        </div>
        <label class="form-label mt-3">{{ $t('modalStudCreate.contactTelephone') }}</label>
        <div class="input-group">
          <select
            disabled
            class="form-select shadow col-md-3 col-sm-2 col-3 col-xl-2"
            v-model="defaultCountry"
          >
            <option v-for="country in countriesList" :key="country.code" :value="country.dial_code">
              <b> {{ country.dial_code }} </b> ({{ country.code }} )
            </option>
          </select>
          <input
            disabled
            class="form-control shadow"
            type="text"
            v-model="contactItem.con_telephone"
          />
        </div>
      </div>
      <div class="row col-sm-12 col-md-6 mt-3 ms-2">
        <label class="form-label">{{ $t('modalStudCreate.contactParentage') }}</label>
        <div class="col-12">
          <select disabled class="form-select shadow" v-model="contactItem.rel_name">
            <option
              v-for="relationshipItem in generalStore.relationships"
              :key="relationshipItem.rel_id"
              :value="relationshipItem.rel_name"
            >
              {{ relationshipItem.rel_name }}
            </option>
          </select>
        </div>
        <div class="col-12">
          <label class="form-label mt-3">{{ $t('modalStudCreate.contactEmail') }}</label>
          <input disabled class="form-control shadow" type="text" v-model="contactItem.con_mail" />
        </div>
      </div>
      <div class="mt-4 col text-end mr-2">
        <button
        @click="prepareEditForm(contactItem)"
          class="shadow btn btn-danger"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#editModal"
        >
          {{ $t('buttons.edit') }}
        </button>
      </div>
    </div>
  </div>
  <ModalEmergencyContacts 
  :con_id="con_id"
  :con_name="con_name"
  :con_mail="con_mail"
  :con_telphone="con_telphone"
  :rel_id="rel_id"
  :per_id="per_id"
  :edit="true" />
</template>
<script setup>
import { ref, defineProps, watchEffect, onMounted } from 'vue'
import { countriesList } from '@/countryCode.js'
import { useGeneralStore } from '@/stores/generalStore.js'
import { usePersonsStore } from '@/stores/personsStore.js'
import ModalEmergencyContacts from './ModalEmergencyContacts.vue';


const props = defineProps({
  contacts: {
    type: Object,
    required: true
  },
  loading: Boolean
})

const con_id = ref('')
const con_name = ref('')
const con_mail = ref('')
const con_telphone = ref('')
const rel_id = ref('')
const per_id = ref('')

const editing = ref(false)

const personsStore = usePersonsStore()
const generalStore = useGeneralStore()
const contactsArray = ref([])
const defaultCountry = '+57'


onMounted(async () => {
 
  await personsStore.readPersonDetailsById()

})
const prepareEditForm = (contactItem) => {
  console.log(contactsArray.value)
  con_id.value = contactItem.con_id
  con_name.value = contactItem.con_name
  con_mail.value = contactItem.con_mail
  con_telphone.value = contactItem.con_telephone
  rel_id.value = contactItem.rel_id
  per_id.value = contactItem.per_id
  editing.value = true
  console.log(con_id.value, contactItem.con_id)
}
watchEffect(() => {
  if (props.contacts.emergency_contacts && Array.isArray(props.contacts.emergency_contacts)) {
    contactsArray.value = props.contacts.emergency_contacts.map((contact) => ({
      con_id: contact.con_id || '',
      per_id: contact.per_id || '',
      rel_id: contact.rel_id || '',
      con_name: contact.con_name || '',
      rel_name: contact.rel_name || '',
      con_telephone: contact.con_telephone || '',
      con_mail: contact.con_mail || ''
    }))
  } else {
    contactsArray.value = ['No contact found']
  }
})

// const selectRelationship = (relationships) =>
//   relationships.rel_name == props.contacts.personal_contact[0].rel_name

// selectRelationship.rel_name ? selectRelationship.rel_name : ''
// selectRelationship.rel_id ? selectRelationship.rel_id : ''
</script>
