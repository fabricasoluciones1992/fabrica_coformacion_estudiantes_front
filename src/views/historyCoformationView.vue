<template>
    <div class="m-sm-0 m-md-5">
    <div class="container-fluid">
      <h2 class="text-danger text-center"></h2>

      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link custom-nav-link active"
            id="actual-company-tab"
            data-bs-toggle="tab"
            data-bs-target="#actualCompany"
            type="button"
            role="tab"
            aria-controls="actualCompany"
            aria-selected="true"
          >
            {{ $t('cofHistory.cards.actComp') }}
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link custom-nav-link"
            id="recent-company-tab"
            data-bs-toggle="tab"
            data-bs-target="#recentCompany"
            type="button"
            role="tab"
            aria-controls="recentCompany"
            aria-selected="false"
          >
            {{ $t('cofHistory.cards.recentComp') }}
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link custom-nav-link"
            id="recent-process-tab"
            data-bs-toggle="tab"
            data-bs-target="#recentProcess"
            type="button"
            role="tab"
            aria-controls="recentProcess"
            aria-selected="false"
          >
            {{ $t('cofHistory.cards.recentProcess') }}
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link custom-nav-link"
            id="history-tab"
            data-bs-toggle="tab"
            data-bs-target="#history"
            type="button"
            role="tab"
            aria-controls="history"
            aria-selected="false"
          >
            {{ $t('cofHistory.cards.history') }}
          </button>
        </li>
      </ul>
  
      <form
        action=""
        class="tab-content my-5"
      >
        <actualCompany
        :company_info = "actCompany"
        ></actualCompany>

        <recentCompany
        :recentCompany = "recentComp"
        ></recentCompany>

        <recentProcess
        :recentProc = "recentProc"
        ></recentProcess>

        <history
        :company_history = "comHistory"
        :process_history = "processHistory"
        ></history>
        
      </form>
    </div>
     </div>
  </template>

  <script setup>
  import { onMounted, ref } from 'vue'
  import { usePersonsStore } from '@/stores/personsStore.js'
  import actualCompany from '../components/coformacionHistory/actualCompanyComponent.vue'
  import recentCompany from '../components/coformacionHistory/company/recentCompanyComponent.vue'
  import recentProcess from '../components/coformacionHistory/process/recentProcessComponent.vue'
  import history from '../components/coformacionHistory/coformacionHis.vue'
  import { useCoformacionHisStore } from '../stores/coformacionHisStore.js'

  const coformacionStore = useCoformacionHisStore()
  const personStore = usePersonsStore()
  const actCompany = ref('')
  const recentComp = ref('')
  const comHistory = ref('')
  const recentProc = ref('')
  const processHistory = ref('')

  onMounted(async () => {
   await personStore.readPersonDetailsById()
   const student = personStore.persons
   await coformacionStore.readCoformacion(student.per_document)
   actCompany.value = coformacionStore.coformacion[0]
   recentComp.value = coformacionStore.coformacion[1]
   comHistory.value = coformacionStore.coformacion
   await coformacionStore.readProcess(student.per_document)
   recentProc.value = coformacionStore.processes[0]
   processHistory.value = coformacionStore.processes
  })


</script>

<style lang="scss" scoped>
.blue-color-bg {
  background-color: var(--blue-color);
}
.custom-nav-link {
  color: black;
  border: 0.2px solid black;/* Color del texto para los botones inactivos */
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