<template>
  <div v-if="loading">
    <LoadingComponent></LoadingComponent>
  </div>
  <div v-else class="container">
    <h2 class="mb-4 mt-5 text-danger text-center">
      {{ studentItem.per_name }} {{ studentItem.per_lastname }}
    </h2>
    <!-- Nav tabs -->
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link custom-nav-link active"
          id="student-info-tab"
          data-bs-toggle="tab"
          data-bs-target="#student-info"
          type="button"
          role="tab"
          aria-controls="student-info"
          aria-selected="true"
        >
          {{ $t('modalStudCreate.studentsInfo') }}
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link custom-nav-link"
          id="emergency-contact-info-tab"
          data-bs-toggle="tab"
          data-bs-target="#emergency-contact-info"
          type="button"
          role="tab"
          aria-controls="emergency-contact-info"
          aria-selected="false"
        >
          {{ $t('modalStudCreate.studentsEmergencyContInfo') }}
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link custom-nav-link"
          id="contact-tab"
          data-bs-toggle="tab"
          data-bs-target="#contact"
          type="button"
          role="tab"
          aria-controls="contact"
          aria-selected="false"
        >
          {{ $t('modalStudCreate.studentsContactInfo') }}
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link custom-nav-link"
          id="aditional-info-tab"
          data-bs-toggle="tab"
          data-bs-target="#aditional-info"
          type="button"
          role="tab"
          aria-controls="aditional-info"
          aria-selected="false"
        >
          {{ $t('modalStudCreate.studentsAdicInfo') }}
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link custom-nav-link"
          id="academic-info-tab"
          data-bs-toggle="tab"
          data-bs-target="#academic-info"
          type="button"
          role="tab"
          aria-controls="academic-info"
          aria-selected="false"
        >
          {{ $t('modalStudCreate.studentsAcademInfo') }}
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link custom-nav-link"
          id="documents-tab"
          data-bs-toggle="tab"
          data-bs-target="#documents"
          type="button"
          role="tab"
          aria-controls="documents"
          aria-selected="false"
        >
          {{ $t('modalStudCreate.companiesDocuments') }}
        </button>
      </li>
    </ul>

    <!-- Tab panes -->
    <form
      action=""
      class="tab-content my-5"
      @submit.prevent="storeDocuments, changePhoto, sendRegisterCompany"
    >
      <StudentInfoComponent :student="studentItem" :loading="loading"></StudentInfoComponent>

      <EmergencyContactStudentInfoComponent
        :contacts="studentItem"
        :loading="loading"
      ></EmergencyContactStudentInfoComponent>

      <StudentContactInfoComponent
        :studentContactInfo="studentItem.personal_contacts"
        :loading="loading"
      ></StudentContactInfoComponent>

      <StudentAditInfoComponent
        :student="studentItem"
        :loading="loading"
      ></StudentAditInfoComponent>

      <StudentAcademicInfoComponent
        :student="studentItem"
        :loading="loading"
      ></StudentAcademicInfoComponent>

      <StudentDocumentsComponent
      :studentItem="studentItem"
    ></StudentDocumentsComponent>
    </form>
  </div>
</template>
<script setup>
import { onMounted, ref, watch } from 'vue'

import { useGeneralStore } from '@/stores/generalStore.js'
import { usePersonsStore } from '@/stores/personsStore.js'
import StudentInfoComponent from '@/components/students/studentsFormOne.vue'
import EmergencyContactStudentInfoComponent from '@/components/students/EmergencyContactStudentInfoComponent.vue'
import StudentContactInfoComponent from '@/components/students/StudentContactInfoComponent.vue'
import StudentAditInfoComponent from '@/components/students/StudentAditInfoComponent.vue'
import StudentAcademicInfoComponent from '@/components/students/StudentAcademicInfoComponent.vue'
import StudentDocumentsComponent from '@/components/students/StudentDocumentsComponent.vue'
import LoadingComponent from '@/components/LoadingComponent.vue'

// import { useRoute } from 'vue-router'

const generalStore = useGeneralStore()
const personStore = usePersonsStore()

// const route = useRoute()

const studentItem = ref('')

const loading = ref(false)
// const loadingButton = ref(false)
console.log(personStore.stu_id)
console.log(loading.value)
onMounted(async () => {
  loading.value = true

  await generalStore.readRelationships()
  await personStore.readPersonDetailsById()
  studentItem.value = personStore.persons
  await generalStore.readContacts(personStore.persons.per_id)


  for (let i = 0; i < studentItem.value.personal_contacts.telephones.length; i++) {
    // console.log(studentItem.value.personal_contacts.telephones[i]);
    switch (studentItem.value.personal_contacts.telephones[i].tel_description) {
      case 'LABORAL':
        studentItem.value.personal_contacts.tel_laboral =
          studentItem.value.personal_contacts.telephones[i].tel_number
        break
      case 'PERSONAL':
        studentItem.value.personal_contacts.tel_personal =
          studentItem.value.personal_contacts.telephones[i].tel_number
        break
      case 'EMERGENCIA':
        studentItem.value.personal_contacts.tel_backup =
          studentItem.value.personal_contacts.telephones[i].tel_number
        break
      case 'FIJO':
        studentItem.value.personal_contacts.tel_landline =
          studentItem.value.personal_contacts.telephones[i].tel_number
        break
      default:
        break
    }
  }

  for (let i = 0; i < studentItem.value.personal_contacts.mails.length; i++) {
    // console.log(studentItem.value.personal_contacts.telephones[i]);
    switch (studentItem.value.personal_contacts.mails[i].mai_description) {
      case 'INSTITUCIONAL':
        studentItem.value.personal_contacts.mai_institutional =
          studentItem.value.personal_contacts.mails[i].mai_mail
        break
      case 'PERSONAL':
        studentItem.value.personal_contacts.mai_personal =
          studentItem.value.personal_contacts.mails[i].mai_mail
        break

      case 'EMERGENCIA':
        studentItem.value.personal_contacts.tel_backup =
          studentItem.value.personal_contacts.mails[i].mai_mail
        break

      case 'FIJO':
        studentItem.value.personal_contacts.tel_landline =
          studentItem.value.personal_contacts.mails[i].mai_mail
        break
      default:
        break
    }
  }
  loading.value = false
})

// Actualizar la imagen si cambia en el store
watch(
  () => personStore.persons.use_photo,
  (newValue) => {
    personStore.value = newValue
  }
)

// const validateNameWrapper = () => {
//   const fields = [{ name: 'per_name', value: per_name.value }]

//   return validateFields(fields, 'validations.inputRequired')
// }
</script>

<style lang="scss" scoped>
.blue-color-bg {
  background-color: var(--blue-color);
}
.custom-nav-link {
  border-left: 1px solid rgb(28, 26, 185);
  border-top: 1px solid rgb(28, 26, 185);
  color: black; /* Color del texto para los botones inactivos */
}

.custom-nav-link.active {
  background-color: var(--button-red-color); /* Color de fondo para el botón activo */
  color: #ffffff; /* Color del texto para el botón activo */
}

.custom-nav-link:hover {
  background-color: var(--button-red-color); /* Color de fondo cuando el botón está en hover */
  color: #ffffff; /* Color del texto cuando el botón está en hover */
}

.custom-nav-link:focus {
  outline: none;
  box-shadow: 0 0 0 0.25rem rgba(0, 123, 255, 0.25); /* Sombra de enfoque */
}
</style>
