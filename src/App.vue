<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="overflow-hidden">
      <Header/>

      <div class="container px-4">
        
        <RouterView />
      </div>

    <Footer/>
  </div>
</template>

<style scoped>

</style>
