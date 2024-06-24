<template>
    <table class="table table-striped border rounded-3 shado">
        <thead>
          <tr>
            <th scope="col">{{$t('profile.diseases')}} </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(diseaseItem, index) in paginated"
          :key="index">
          <td>{{diseaseItem.dis_name}}</td>
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
import { ref, defineProps, watchEffect, computed } from 'vue'
import PaginatedComponent from "@/components/PaginationComponent.vue"


const props = defineProps({
  disease: {
    type: Object,
    required: true
  },
  
})
const currentPage = ref(1)
const itemsPerPage = 10
// const allergie = ref(props.disease.allergies || [])
const disease = ref(props.disease || [])
console.log(props.disease)
const paginated = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return disease.value.slice(startIndex, endIndex)
})
console.log(paginated.value)
const totalItems = computed(() =>disease.value.length)
const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage))

const handlePageChanged = (pageNumber) => {
  currentPage.value = pageNumber
}

console.log(paginated)

</script>

<style>

</style>