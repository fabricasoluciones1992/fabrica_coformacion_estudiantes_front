<template>
    <table class="table table-striped   shadow-sm ">
        <thead>
          <tr>
            <th scope="col">{{$t('profile.allergies')}} </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(diseaseItem, index) in paginated"
          :key="index">
          <td>{{diseaseItem.all_name}}</td>
          </tr>
        </tbody>
      </table>  
      <PaginatedComponent
          :currentPage="currentPage"
          :totalPages="totalPages"
          @changePage="handlePageChanged"
        />
      
      
</template>

<script setup>
import { ref, defineProps, computed } from 'vue'
import PaginatedComponent from "@/components/PaginationComponent.vue"


const props = defineProps({
  allergies: {
    type: Object,
    required: true
  },
  
})
const currentPage = ref(1)
const itemsPerPage = 2
// const allergie = ref(props.disease.allergies || [])
const allergies = ref(props.allergies || [])
console.log(props.allergies)
const paginated = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return allergies.value.slice(startIndex, endIndex)
})
console.log(paginated.value)
const totalItems = computed(() =>allergies.value.length)
const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage))

const handlePageChanged = (pageNumber) => {
  currentPage.value = pageNumber
}

console.log(paginated)

</script>

<style>

</style>