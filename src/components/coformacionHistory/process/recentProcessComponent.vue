<template>
 <div
       class="tab-pane fade"
       id="recentProcess"
       role="tabpanel"
       aria-labelledby="recent-process-tab"
     >
       <div class="row">
         <div class="col-12 me-5">
           <div class="row shadow p-3 bg-body rounded justify-content-center">
 
             <div class="row col-4">
               <div class="col-12">
                 <label for="exampleInputName1" class="form-label mt-5">{{
                   $t('cofHistory.processes.proDate')
                 }}</label>
                 <input
                   disabled
                   type="date"
                   class="form-control shadow"
                   aria-describedby="NameHelp"
                   :value="recentProcess.mon_sta_name"
                 />
               </div>
 
               <div class="col-12">
                 <label for="exampleInputName1" class="form-label mt-3">{{
                   $t('cofHistory.companies.name')
                 }}</label>
                 <input
                 disabled
                   type="text"
                   class="form-control shadow"
                   aria-describedby="NameHelp"
                   :value="recentProcess.com_name"
                 />
               </div>
             </div>
   
             <div class="row col-4">
               <div class="col-12">
                 <label for="exampleInputName1" class="form-label mt-5">{{
                   $t('cofHistory.processes.proType')
                 }}</label>
                 <input
                   disabled
                   type="text"
                   class="form-select shadow"
                   aria-describedby="NameHelp"
                   :value="recentProcess.cof_pro_typ_name"
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
                   :value="recentProcess.com_reason"
                 />
               </div>
             </div>

             <div class="row col-4">
               <div class="col-12">
                 <label for="exampleInputName1" class="form-label mt-5">{{
                   $t('cofHistory.processes.proPeriod')
                 }}</label>
                 <input
                   disabled
                   type="text"
                   class="form-select shadow"
                   aria-describedby="NameHelp"
                   :value="recentProcess.peri_name"
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
                   :value="recentProcess.com_direction"
                 />
               </div>
             </div>

             <div class="col-12 pb-3">
                 <label for="exampleInputName1" class="form-label mt-3">{{
                   $t('cofHistory.processes.proResult')
                 }}</label>
                   <input
                 disabled
                   type="text"
                   class="form-select shadow"
                   aria-describedby="NameHelp"
                   :value="recentProcess.cof_proc_observation"
                 />
               </div>
           </div>
         </div>
       </div>
     </div>
</template>

<script setup>

import { ref, defineProps, watchEffect} from 'vue';

const props = defineProps({
    recentProc: Array
})

const recentProcess = ref(props.recentProc || '')

watchEffect(() => {
  recentProcess.value = props.recentProc || ''
})

</script>