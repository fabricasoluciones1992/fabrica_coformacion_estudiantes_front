<template>
 
  <div
    class="tab-pane fade"
    id="academic-info"
    role="tabpanel"
    aria-labelledby="academic-info-tab"
  >
    <div class="row shadow p-3 bg-body rounded mb-5">
      <div class="row mt-3 ms-2">
        <div class="col-6">
          <label class="form-label">{{ $t('students.programType') }}</label>
          <input disabled class="form-control" type="text" v-model="car_typ_name" />
        </div>

        <div class="col-6">
          <label class="form-label">{{ $t('students.program') }}</label>  
          <input disabled class="form-control" type="text" v-model="car_name" />
        </div>

        <div class="col-12">
          <label class="form-label mt-3">{{ $t('students.promotion') }}</label>
          <input disabled class="form-control" type="text" v-model="pro_name" />
        </div>
<!-- 
        <div class="col-6">
          <label class="form-label mt-3">{{ $t('students.group') }}</label>
          <input disabled class="form-control" type="text" v-model="per_rh" />
        </div> -->
        <div class="col-6">
          <label class="form-label mt-3">{{ $t('students.semester') }}</label>
          <input disabled class="form-control" type="text" v-model="stu_enr_semester" />
        </div>
        <div class="col-6">
          <label class="form-label mt-3">{{ $t('students.period') }}</label>
          <input disabled class="form-control" type="text" v-model="peri_name" />
        </div>
        <div class="col-6">
          <label class="form-label mt-3">{{ $t('students.journey') }}</label>
          <input disabled class="form-control" type="text" v-model="stu_enr_journey" />
        </div>
        <div class="col-6">
          <label class="form-label mt-3">{{ $t('students.actualPhase') }}</label>
          <input disabled class="form-control" type="text" v-model="pha_name" />
        </div>
        <div class="col-6">
          <label class="form-label mt-3">{{ $t('students.englishLevel') }}</label>
          <input disabled class="form-control" type="text" v-model="mul_name" />
        </div>
        <div class="col-6">
          <label class="form-label mt-3">{{ $t('students.monetaryState') }}</label>
          <input disabled class="form-control" type="text" v-model="mon_sta_name" />
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, defineProps, watchEffect, computed} from 'vue'
// import { useGeneralStore } from '../../stores/generalStore.js'
import {useI18n} from "vue-i18n"
const {t} = useI18n()
const props = defineProps({
  student: {
    type: Object,
    required: true
  },
  loading: Boolean
})


// const generalStore = useGeneralStore()
const car_typ_name = ref(props.student ? props.student.car_typ_name || '' : '')
const car_name = ref(props.student ? props.student.car_name || '' : '')
const pro_name = ref(props.student ? props.student.pro_name || '' : '')
const stu_enr_semester = ref(props.student ? props.student.stu_enr_semester || '' : '')
const peri_name = ref(props.student ? props.student.peri_name || '' : '')
const stu_enr_journey = computed(() => {
  if (props.student && props.student.stu_enr_journey === 0) {
    return t('profile.daily');
  } else if (props.student && props.student.stu_enr_journey === 1) {
    return t('profile.nigtly');
  } else {
    return "Nanai";
  }
});

const pha_name = ref(props.student ? props.student.pha_name || '' : '')
const mon_sta_name = ref([props.student ? props.student.mon_sta_name || '' : ''])


// onMounted (() =>{
  // await generalStore.
// })

watchEffect (() =>{
  car_typ_name.value = props.student.car_typ_name || ''
  car_name.value = props.student.car_name || ''
  peri_name.value = props.student.peri_name || ''
  pha_name.value = props.student.pha_name || ''
  stu_enr_semester.value = props.student.stu_enr_semester || ''
  pro_name.value = props.student.pro_name || ''
  stu_enr_journey.value = props.student.stu_enr_journey
 || ''
  if (props.student) {
    mon_sta_name.value = props.student.mon_sta_name || ''
  }
})

</script>

<style lang="scss" scoped></style>
