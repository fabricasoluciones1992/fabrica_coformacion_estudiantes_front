<template>
    <div  class="tab-pane fade"
       id="history"
       role="tabpanel"
       aria-labelledby="history-tab">
      <div class="row justify-content-evenly">

          <!-- Historial de Compañías -->
        <div class="col-5">
            <h5>{{$t('cofHistory.cards.historyComp')}}</h5>
         <div class="shadow rounded-4 p-3 bg-body rounded mb-5" >
            aaaaaa
         </div>
        </div>

      
         <!-- Historial de Procesos -->

         <div class="col-5">
            <h5>{{$t('cofHistory.cards.historyProcess')}}</h5>
         <div class="shadow rounded-4 p-3 bg-body rounded mb-5" >
        eeeeeeee
         </div>
        </div>

    </div>
    </div>
</template>


<script setup>

import { ref, defineProps, watchEffect} from 'vue';

const props = defineProps({
    company_history: Array,
    process_history:Array
})

const companiesHistory = ref(props.company_history || '')
const processHistory = ref(props.process_history || '')

watchEffect(() => {
    companiesHistory.value = props.company_history || ''
    processHistory.value = props.process_history || ''
})

</script>

