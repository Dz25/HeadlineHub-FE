<script setup>
import { RouterLink, RouterView } from 'vue-router'

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
