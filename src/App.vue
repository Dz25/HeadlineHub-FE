<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="overflow-hidden">
    <Header />

    <div class="container-fluid px-0">
      <RouterView :key="$route.fullPath" />
    </div>

    <Footer />
  </div>
</template>
