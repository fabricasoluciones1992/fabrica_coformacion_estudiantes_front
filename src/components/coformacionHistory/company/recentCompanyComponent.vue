<template>
     <div
       class="tab-pane fade"
       id="recentCompany"
       role="tabpanel"
       aria-labelledby="recent-company-tab"
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
                   :value="recentCompany.com_name"
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
                   :value="recentCompany.com_reason"
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
                   :value="recentCompany.com_direction"
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
                   :value="recentCompany.peri_start"
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
                   :value="recentCompany.peri_end"
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
                   :value="recentCompany.cof_schedule"
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
                   :value="recentCompany.vin_typ_name"
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
                   :value="recentCompany.cof_pay"
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
                   :value="recentCompany.pay_typ_name"
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
                   :value="recentCompany.pay_tim_name"
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
                   :value="recentCompany.tut_name"
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
                   :value="recentCompany.emp_per_name + recentCompany.emp_per_lastname"
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
                   :value="recentCompany.vin_reason"
                 />
               </div>
 
 
             </div>
           </div>
         </div>
       </div>
     </div>
   </template>

<script setup>

import { ref, defineProps, watchEffect} from 'vue';

const props = defineProps({
    recentCompany: Array
})

const recentCompany = ref(props.recentCompany || '')

watchEffect(() => {
  recentCompany.value = props.recentCompany || ''
})

</script>