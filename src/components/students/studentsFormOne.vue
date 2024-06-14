<template>
  <div
    class="tab-pane fade show active"
    id="student-info"
    role="tabpanel"
    aria-labelledby="student-info-tab"
  >
    <div class="row pt-4">
      <div class="col-12 me-5">
        <div class="row shadow p-3 bg-body rounded">
          <div class="col-4 mb-3">
              <img
                :src="profileImage"
                class="figure-img img-fluid object-fit-cover pb-3 img_height"
                :alt="$t('profile.photoAlt')"
              />
          </div>
          <div class="row col-8">
            <div class="col-12">
              <label for="exampleInputName1" class="form-label mt-3">{{
                $t('students.names')
              }}</label>
              <input
                type="text"
                :value="profileStore.persons.per_name"
                class="form-control shadow"
                aria-describedby="NameHelp"
              />
            </div>
            <div class="col-12">
              <label for="exampleInputName1" class="form-label mt-3">{{$t('students.lastNames')}}</label>
              <input
                type="text"
                :value="profileStore.persons.per_name"
                class="form-control shadow"
                aria-describedby="NameHelp"
              />
            </div>

            <label for="exampleInputName1" class="form-label mt-3">{{
              $t('students.id')
            }}</label>
            <div class="col-12">
              <input
                type="text"
                :value="profileStore.persons.per_name"
                class="form-control shadow"
                aria-describedby="NameHelp"
              />
            </div>
          </div>

          <div class="row">
            <div class="col-6">
              <label for="exampleInputName1" class="form-label mt-3">{{
                $t('students.birthdate')
              }}</label>
              <input
                type="date"
                :value="profileStore.persons.per_name"
                class="form-control shadow"
                aria-describedby="NameHelp"
              />
            </div>

            <div class="col-6">
              <label for="exampleInputName1" class="form-label mt-3">{{
                $t('students.birthdate')
              }}</label>
              <input
                type="date"
                :value="profileStore.persons.per_name"
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
                :value="profileStore.persons.per_name"
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
                type="text"
                :value="profileStore.persons.per_name"
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
import { ref, onMounted } from 'vue'
import { usePersonsStore } from '@/stores/personsStore.js'
const profileStore = usePersonsStore()
const loading = ref(true)


const profileImage = ref(profileStore.persons.use_photo)

onMounted(async () => {
  await profileStore.readPersonDetailsById()
  loading.value = false
})

</script>


<style>

.img_height{
  height: 110%;
}
</style>