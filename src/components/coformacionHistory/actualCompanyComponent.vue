<template>
   <div v-if="loading">
      <LoadingComponent></LoadingComponent>
    </div>
    <div
      v-else
      class="tab-pane fade show active"
      id="actualCompany"
      role="tabpanel"
      aria-labelledby="actual-company-tab"
    >
      <div class="row">
        <div class="col-12 me-5">
          <div class="row shadow p-3 bg-body rounded">
            <div class="col-4 mb-3">
              <img
               :src="companyImage"
                class="figure-img border rounded shadow img-fluid object-fit-cover img_height"
                :alt="$t('profile.photoAlt')"
              />
            </div>

            <div class="row col-8">
              <div class="col-12">
                <label for="exampleInputName1" class="form-label mt-5">{{
                  $t('cofHistory.companies.name')
                }}</label>
                <input
                  disabled
                  type="text"
                  class="form-control shadow"
                  aria-describedby="NameHelp"
                  :value="company_item.com_name"
                />
              </div>

              <div class="col-12">
                <label for="exampleInputName1" class="form-label mt-3">{{
                  $t('cofHistory.companies.companyName')
                }}</label>
                <input
                disabled
                  type="text"
                  class="form-control shadow"
                  aria-describedby="NameHelp"
                  :value="company_item.com_reason"
                />
              </div>
  
              <div class="col-12">
                <label for="exampleInputName1" class="form-label mt-3">{{
                  $t('cofHistory.companies.address')
                }}</label>
                <input
                disabled
                  type="text"
                  class="form-control shadow"
                  aria-describedby="NameHelp"
                  :value="company_item.com_direction"
                />
              </div>
            </div>
  
            <div class="row mt-4">
              <div class="col-6">
                <label for="exampleInputName1" class="form-label mt-3">{{
                  $t('cofHistory.companies.startDate')
                }}</label>
                <input
                disabled
                  type="date"
                  class="form-control shadow"
                  aria-describedby="NameHelp"
                  :value="company_item.peri_start"
                />
              </div>
  
              <div class="col-6">
                <label for="exampleInputName1" class="form-label mt-3">{{
                  $t('cofHistory.companies.endDate')
                }}</label>
                <input
                disabled
                  type="date"
                  class="form-control shadow"
                  aria-describedby="NameHelp"
                  :value="company_item.peri_end"
                />
              </div>
  
  
              <div class="col-6">
                <label for="exampleInputName1" class="form-label mt-3">{{
                  $t('cofHistory.companies.workSchedule')
                }}</label>
                  <input
                disabled
                  type="text"
                  class="form-control shadow"
                  aria-describedby="NameHelp"
                  :value="company_item.cof_schedule"
                />
              </div>

              <div class="col-6">
                <label for="exampleInputName1" class="form-label mt-3">{{
                  $t('cofHistory.companies.contractType')
                }}</label>
                <input
                disabled
                  type="text"
                  class="form-select shadow"
                  aria-describedby="NameHelp"
                  :value="company_item.vin_typ_name"
                />
              </div>
  
              <div class="col-6">
                <label for="exampleInputName1" class="form-label mt-3">{{
                  $t('cofHistory.companies.stipend')
                }}</label>
                <input
                disabled
                  type="text"
                  class="form-control shadow"
                  aria-describedby="NameHelp"
                  :value="company_item.cof_pay"
                />
              </div>

              <div class="col-6">
                <label for="exampleInputName1" class="form-label mt-3">{{
                  $t('cofHistory.companies.payType')
                }}</label>
                <input
                disabled
                  type="text"
                  class="form-select shadow"
                  aria-describedby="NameHelp"
                  :value="company_item.pay_typ_name"
                />
              </div>
  
              <div class="col-6">
                <label for="exampleInputName1" class="form-label mt-3">{{
                  $t('cofHistory.companies.payFrecuency')
                }}</label>
                <input
                disabled
                  type="text"
                  class="form-select shadow"
                  aria-describedby="NameHelp"
                  :value="company_item.pay_tim_name"
                />
              </div>

              <div class="col-6">
                <label for="exampleInputName1" class="form-label mt-3">{{
                  $t('cofHistory.companies.compSup')
                }}</label>
                <input
                disabled
                  type="text"
                  class="form-control shadow"
                  aria-describedby="NameHelp"
                  :value="company_item.tut_name"
                />
              </div>
  
              <div class="col-6">
                <label for="exampleInputName1" class="form-label mt-3">{{
                  $t('cofHistory.companies.academicAd')
                }}</label>
                <input
                disabled
                  type="text"
                  class="form-control shadow"
                  aria-describedby="NameHelp"
                  :value="company_item.emp_per_name + company_item.emp_per_lastname"
                />
              </div>

              <div class="col-6 pb-5">
                <label for="exampleInputName1" class="form-label mt-3">{{
                  $t('cofHistory.companies.reason')
                }}</label>
                <input
                disabled
                  type="text"
                  class="form-control shadow"
                  :value="company_item.vin_reason"
                />
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script setup>

  import { ref, defineProps, watchEffect, computed } from 'vue';
  import LoadingComponent from '@/components/LoadingComponent.vue'

  const props = defineProps({
  company_info: Array
  })

  const company_item = ref(props.company_info || '')
  const loading = ref(false)

  const companyImage = computed(() => company_item.value.com_photo
 )

  watchEffect(() => {
    company_item.value = props.company_info || ''
    loading.value = company_item.value ? false : true
  })

 </script>