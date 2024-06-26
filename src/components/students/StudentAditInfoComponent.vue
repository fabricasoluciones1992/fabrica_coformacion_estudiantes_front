<template>
  <div
    class="tab-pane fade"
    id="aditional-info"
    role="tabpanel"
    aria-labelledby="aditional-info-tab"
  >
    <div class="row p-3">
      <div class="col-6-5 shadow p-3 bg-body rounded mb-5 mr-2">
        <div class="row mt-3 ms-2">
          <div class="col-6 " >
            <label class="form-label">{{ $t('profile.socialStratum') }}</label>
            <input disabled class="form-control" type="text" v-model="stu_stratum" />
          </div>

          <div class="col-6 ">
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
            <label class="form-label mt-3">{{ $t('profile.multiculturalism') }}</label>
            <input disabled class="form-control" type="text" v-model="mul_name" />
          </div>
          <div class="col-6">
            <label class="form-label mt-3">{{ $t('profile.militaryPassbook') }}</label>
            <input disabled class="form-control" type="text" v-model="stu_military" />
          </div>
          <div class="col-12">
            <label class="form-label mt-3">{{ $t('profile.studentType') }}</label>
            <input disabled class="form-control mb-5" type="text" v-model="stu_typ_name" />
          </div>
        </div>
      </div>
      <div class="col-5 shadow rounded-4 p-3 bg-body rounded mb-5">
        <tableDiseases
        :disease="disease"
        
        />
        <tableAllergies
        :allergies="allergie"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, watchEffect} from 'vue'
import tableDiseases from "@/components/students/studentsTables/studentDiseaseTables.vue"
import tableAllergies from "@/components/students/studentsTables/studentAllergiesTable.vue"
// import { useGeneralStore } from '../../stores/generalStore.js'

const props = defineProps({
  student: {
    type: Object,
    required: true
  },
  loading: Boolean
})

const stu_stratum = ref(props.student ? props.student.stu_stratum || '' : '')
const civ_sta_name = ref(props.student ? props.student.civ_sta_name || '' : '')
const eps_name = ref(props.student ? props.student.eps_name || '' : '')
const per_rh = ref(props.student ? props.student.per_rh || '' : '')
const stu_military = ref(props.student ? props.student.stu_military || '' : '')
const mul_name = ref(props.student ? props.student.mul_name || '' : '')
const stu_typ_name = ref(props.student ? props.student.stu_typ_name || '' : '')
const medical_info = ref(props.student ? props.student.medical_info || {} : {})
const allergie = ref(medical_info.value.allergies || [])
const disease = ref(medical_info.value.diseases || [])

// const searchTerm = ref('')

watchEffect(() => {
  stu_stratum.value = props.student.stu_stratum || ''
  civ_sta_name.value = props.student.civ_sta_name || ''
  stu_military.value = props.student.stu_military || ''
  stu_typ_name.value = props.student.stu_typ_name || ''
  per_rh.value = props.student.per_rh || ''
  eps_name.value = props.student.eps_name || ''
  mul_name.value = props.student.mul_name || ''
  medical_info.value = props.student.medical_info || {}
  allergie.value = medical_info.value.allergies || []
  disease.value = medical_info.value.diseases || []
})

// const filter = computed(() => {
//   const lowerSearchTerm = searchTerm.value.toLowerCase()
//   return props.student.medical_info[0].filter((diseaseItem) => {
//     const matchesId = diseaseItem.dis_id.toString().includes(lowerSearchTerm)
//     const matchesName = diseaseItem.dis_name.toLowerCase().includes(lowerSearchTerm)
//     return matchesId || matchesName
//   })
// })


</script>

<style lang="scss" scoped>


.col-6-5{
width: 57.7%;
}

</style>
