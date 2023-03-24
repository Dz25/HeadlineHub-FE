<script setup>
import { onMounted, ref } from 'vue'
import WeatherApi from './WeatherApi.vue';

const isScrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

function handleScroll() {
  isScrolled.value = window.pageYOffset > 0
}
</script>

<template>
    <header class="header container-fluid">

        <nav class="navbar navbar-expand-md navbar-light">
            <div class="container-fluid">

                <a class="navbar-brand" href="#">
                    <img src="../assets/img/hh-icon.png" alt="Logo" width="25" height=""
                        class="d-inline-block align-text-top">
                    <span class="ms-1 fs-3">HeadlineHub</span>
                </a>

                <div class="d-flex justify-content-center mx-4 d-none d-md-inline">
                    <span class="me-4"><weather-api/></span>
                    <!-- <span>30°C,London</span> -->
                </div>
                <!-- Can you change this into like a Profile button. It will navigate to login page if user not sign in( The redirect will be dome by Jay) -->
                <div class="d-flex justify-content-end">
                    <router-link to="/pages/signin" custom v-slot="{ navigate }"> <button @click="navigate" type="button"
                            class="btn btn-light text-dark me-2" role="link">Login</button></router-link>
                    <router-link to="/pages/signup" custom v-slot="{ navigate }"> <button type="button"
                            class="btn btn-secondary" @click="navigate" role="link">Sign-up</button></router-link>
                </div>
            </div>
        </nav>

        <nav class="navbar navbar-expand-md navbar-light bg-light" :class="{ 'sticky-top': isScrolled }">
            <div class="container-fluid">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link active" aria-current="page" href="#">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/pages/general" class="nav-link" href="#">General</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/pages/business" class="nav-link" href="#">Business</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/pages/entertainment" class="nav-link" href="#">Entertainment</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/pages/health" class="nav-link" href="#">Health</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/pages/science" class="nav-link" href="#">Science</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/pages/sports" class="nav-link" href="#">Sports</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/pages/technology" class="nav-link" href="#">Technology</router-link>
                        </li>
                    </ul>
                </div>
                <form class="d-flex ms-auto">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>

    </header>
</template>
    
    
<style scoped>
.sticky-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}
</style>