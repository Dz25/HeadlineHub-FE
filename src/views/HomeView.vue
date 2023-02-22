<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import Card from '../components/Card.vue'
import Weather from '../components/Weather.vue'
</script>

<template>
   <main>
      <div class="container-fluid mt-5 pt-5">
         <div class="row">
            <div class="col-md-8">
               <!-- Latest News -->
               <Card />
               <Card />

            </div>
            <div class="col-md-4">
               <Weather />
            </div>
         </div>
         <div class="row">
            <div class="col-md-7">
               <!-- General News -->
            </div>
            <div class="col-md-5">
               <!-- Nearby News -->
            </div>
         </div>
         <div class="row">
            <div class="col-md-6">
               <!-- Business News -->
            </div>
            <div class="col-md-6">
               <!-- Entertainment News -->
            </div>
         </div>
         <div class="row">
            <div class="col-md-6">
               <!-- Health News -->
            </div>
            <div class="col-md-6">
               <!-- Science News -->
            </div>
         </div>
         <div class="row">
            <div class="col-md-6">
               <!-- Sports News -->
            </div>
            <div class="col-md-6">
               <!-- Tech News -->
            </div>
         </div>
      </div>


      <!-- <TheWelcome /> -->
   </main>
</template>
