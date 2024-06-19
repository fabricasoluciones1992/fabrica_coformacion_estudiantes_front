<template>
  <div
    class="tab-pane fade"
    id="aditional-info"
    role="tabpanel"
    aria-labelledby="aditional-info-tab"
  >
    <div class="row shadow p-3 bg-body rounded mb-5">
      <div class="row mt-3 ms-2">
        <div class="col-6">
          <label class="form-label">{{ $t('profile.socialStratum') }}</label>
          <input disabled class="form-control" type="text" v-model="stu_stratum" />
        </div>

        <div class="col-6">
          <label class="form-label">{{ $t('profile.relationship') }}</label>
          <input disabled class="form-control" type="text" v-model="civ_sta_name" />
        </div>

        <div class="col-6">
          <label class="form-label mt-3">{{ $t('profile.eps') }}</label>
          <input disabled class="form-control" type="text" v-model="eps_name" />
        </div>

        <div class="col-6">
          <label class="form-label mt-3">{{ $t('profile.bloodType') }}</label>
          <input disabled class="form-control" type="text" v-model="per_rh" />
        </div>
        <div class="col-6">
          <label class="form-label mt-3">{{ $t('profile.diseases') }}</label>
          <select  class="form-select" v-model="disease.dis_name">
          <option v-for="medicalInfoItem in medical_info.diseases" :key="medicalInfoItem.dis_id" :value="medicalInfoItem.dis_name">
            {{ medicalInfoItem.dis_name }}
          </option>
        </select>
        </div>
        <div class="col-6">
          <label class="form-label mt-3">{{ $t('profile.allergies') }}</label>
          <select class="form-select" v-model="allergie.all_name">
          <option v-for="medicalInfoItem in medical_info.allergies" :key="medicalInfoItem.all_id" :value="medicalInfoItem.all_name">
            {{ medicalInfoItem.all_name }}
          </option>
        </select>
        </div>
        <div class="col-6 border-bottom border-primary ">
          <label class="form-label my-4 w-75 ">{{ $t('modalStudCreate.studentDiseases') }}</label> +
        </div>
        <div class="col-6 border-bottom border-primary">
          <label class="form-label my-4 w-75">{{ $t('modalStudCreate.studentAllergies') }}</label> +
        </div>
        <div class="col-6">
          <label class="form-label mt-3">{{ $t('profile.multiculturalism') }}</label>
          <input disabled class="form-control" type="text" v-model="mul_name" />
        </div>
        <div class="col-6">
          <label class="form-label mt-3">{{ $t('profile.militaryPassbook') }}</label>
          <input disabled class="form-control" type="text" v-model="stu_military" />
        </div>
        <div class="col-12">
          <label class="form-label mt-3">{{ $t('profile.studentType') }}</label>
          <input disabled class="form-select" type="text" v-model="stu_typ_name" />
        </div>

       

        <pre>
          {{ allergie }}
        </pre>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, defineProps, watchEffect } from 'vue'
// import { useGeneralStore } from '../../stores/generalStore.js'

const props = defineProps({
  student: {
    type: Object,
    required: true
  }
})

const stu_stratum = ref(props.student ? props.student.stu_stratum || '' : '')
const civ_sta_name = ref(props.student ? props.student.civ_sta_name || '' : '')
const eps_name = ref(props.student ? props.student.eps_name || '' : '')
const per_rh = ref(props.student ? props.student.per_rh || '' : '')
const stu_military = ref(props.student ? props.student.stu_military || '' : '')
const mul_name = ref(props.student ? props.student.mul_name || '' : '')
const stu_typ_name = ref(props.student ? props.student.stu_typ_name || '' : '')
const medical_info = ref([props.student ? props.student.medical_info || '' : ''])
const allergie = ref([props.student ? props.student.medical_info.allergies || '' : ''])
const disease = ref([props.student ? props.student.medical_info.diseases || '' : ''])


watchEffect (() =>{
  stu_stratum.value = props.student.stu_stratum || ''
  civ_sta_name.value = props.student.civ_sta_name || ''
  stu_military.value = props.student.stu_military || ''
  stu_typ_name.value = props.student.stu_typ_name || ''
  per_rh.value = props.student.per_rh || ''
  eps_name.value = props.student.eps_name || ''
  mul_name.value = props.student.mul_name || ''
  if (props.student) {
    medical_info.value = props.student.medical_info || ''
    allergie.value = props.student.medical_info.allergies[0] || ''
    disease.value = props.student.medical_info.diseases[0] || ''
  }
})
</script>

<style lang="scss" scoped></style>
