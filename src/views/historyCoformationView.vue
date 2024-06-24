<template>
    <div v-if="loading">
      <LoadingComponent></LoadingComponent>
    </div>
    <div v-else class="m-sm-0 m-md-5">
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
        <actualCompany></actualCompany>

        <recentCompany></recentCompany>

        <recentProcess></recentProcess>

        <Companyhistory></Companyhistory>

        <Processhistory></Processhistory>
        
      </form>
    </div>
     </div>
  </template>

  <script setup>
  import { onMounted, ref } from 'vue'
  import LoadingComponent from '@/components/LoadingComponent.vue'
  import actualCompany from '../components/coformacionHistory/actualCompanyComponent.vue'
  import recentCompany from '../components/coformacionHistory/company/recentCompanyComponent.vue'
  import recentProcess from '../components/coformacionHistory/process/recentProcessComponent.vue'
  import Companyhistory from '../components/coformacionHistory/company/companiesHistoryComponent.vue'
  import Processhistory from '../components/coformacionHistory/process/processHistoryComponent.vue'
  import { useCoformacionHisStore } from '../stores/coformacionHisStore.js'

  const loading = ref(false)
  const coformacionStore = useCoformacionHisStore()

  onMounted(async () => {

   await coformacionStore.readCoformacion()
   await coformacionStore.readProcess()

  })


</script>