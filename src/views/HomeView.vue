<template>
<div></div>
</template>
<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from '../stores/authStore.js'


const authStore = useAuthStore()
onMounted(async () => {
  try {
    await authStore.access();

  } catch (error) {
    // console.error(error);
  }
});
</script>