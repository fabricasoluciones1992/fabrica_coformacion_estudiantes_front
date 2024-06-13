<template>
  <HeaderProtected></HeaderProtected>
  <HeaderAdmin></HeaderAdmin>
 <section class="container-fluid p-0">
       <main>
         <RouterView></RouterView>
       </main>
 </section>
 <FooterComponent></FooterComponent>
</template>
<script setup>
import  FooterComponent from '../../components/FooterComponent.vue'
import HeaderAdmin from '../header/HeaderAdminComponent.vue'
import HeaderProtected from '../header/HeaderProtected.vue';
</script>
<style>
@media (min-width: 992px) {
 .min-width-200 {
 min-width: 200px;
}
 .dashboard {
   display: grid;
   grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
   background-color: teal;
   height: 100vh;
   width: 100vw;
}


}
</style>

