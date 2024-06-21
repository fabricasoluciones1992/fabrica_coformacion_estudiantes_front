<template>
  
  <div
   
    class="tab-pane fade show active"
    id="student-info"
    role="tabpanel"
    aria-labelledby="student-info-tab"
  >
    <div class="row">
      <div class="col-12 me-5">
        <div class="row shadow p-3 bg-body rounded">
          <div class="col-4 mb-3">
            <img
              :src="profileImage"
              class="figure-img border rounded shadow img-fluid object-fit-cover img_height"
              :alt="$t('profile.photoAlt')"
            />
          </div>
          <div class="row col-8">
            <div class="col-12">
              <label for="exampleInputName1" class="form-label mt-5">{{
                $t('students.names')
              }}</label>
              <input
                disabled
                type="text"
                :value="profileStore.persons.per_name"
                class="form-control shadow"
                aria-describedby="NameHelp"
              />
            </div>
            <div class="col-12">
              <label for="exampleInputName1" class="form-label mt-3">{{
                $t('students.lastNames')
              }}</label>
              <input
              disabled
                type="text"
                :value="profileStore.persons.per_lastname"
                class="form-control shadow"
                aria-describedby="NameHelp"
              />
            </div>

            <div>
              <label for="exampleInputName1" class="form-label mt-3">{{ $t('students.id') }}</label>
              <div class="row">
                <div class="col-2">
                  <input
                  disabled
                    type="text"
                    :value="idAbr"
                    class="form-control shadow"
                    aria-describedby="NameHelp"
                  />
                </div>
                <div class="col-10">
                  <input
                  disabled
                    type="text"
                    :value="profileStore.persons.per_document"
                    class="form-control shadow"
                    aria-describedby="NameHelp"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-6">
              <label for="exampleInputName1" class="form-label mt-3">{{
                $t('students.gender')
              }}</label>
              <input
              disabled
                type="text"
                :value="profileStore.persons.gen_name"
                class="form-control shadow"
                aria-describedby="NameHelp"
              />
            </div>

            <div class="col-6">
              <label for="exampleInputName1" class="form-label mt-3">{{
                $t('students.birthdate')
              }}</label>
              <input
              disabled
                type="date"
                :value="profileStore.persons.per_birthdate"
                class="form-control shadow"
                aria-describedby="NameHelp"
              />
            </div>

            <div class="col-6">
              <label for="exampleInputName1" class="form-label mt-3">{{
                $t('students.age')
              }}</label>
              <input
              
                type="text"
                :value="age"
                class="form-control shadow"
                aria-describedby="NameHelp"
                disabled
              />
            </div>

            <div class="col-6">
              <label for="exampleInputName1" class="form-label mt-3">{{
                $t('students.location')
              }}</label>
              <input
              disabled
                type="text"
                :value="profileStore.persons.loc_name"
                class="form-control shadow"
              />
            </div>
            <div class="col-12">
              <label for="exampleInputName1" class="form-label mt-3">{{
                $t('students.address')
              }}</label>
              <input
              disabled
                type="text"
                :value="profileStore.persons.per_direction"
                class="form-control shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed} from 'vue'
import { usePersonsStore } from '@/stores/personsStore.js'
const profileStore = usePersonsStore()

const profileImage = computed(() => profileStore.persons.use_photo)
console.log(profileImage.value)

// eslint-disable-next-line vue/return-in-computed-property
const idAbr = computed(() => {
  switch (profileStore.persons.doc_typ_id) {
    case 1:
      return "C.C"
    case 2:
      return "T.I"
    case 3:
      return "C.E"
    default:
      return "Indefinido";
  }
})

const age = computed(() =>{
  const today = new Date()
  const birthDate = new Date(profileStore.persons.per_birthdate)
  const age = today.getFullYear() - birthDate.getFullYear()
  const m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    return age - 1
  }
  return age
})

console.log(idAbr)

const props = defineProps({
  student: {
    type: Object,
    required: true
  },
  loading: Boolean
})

console.log(profileStore)
</script>

<style>
.img_height {
  height: 110%;
}
</style>
