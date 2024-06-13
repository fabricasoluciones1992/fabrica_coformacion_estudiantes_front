<template>
  <HeaderMainComponent></HeaderMainComponent>
 <main  class="flex-shrink-0">
   <RouterView></RouterView>
 </main>
 <FooterComponent></FooterComponent>
</template>
<script setup>
import FooterComponent from '../../components/FooterComponent.vue'
import HeaderMainComponent from '../header/HeaderMainComponent.vue';
</script>