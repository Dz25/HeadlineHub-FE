<script setup>
import { onMounted, ref } from "vue";

import { computed ,watch} from 'vue';

const isScrolled = ref(false);
const user = computed(() => JSON.parse(localStorage.getItem('user-info')));
;
function logout() {
  localStorage.removeItem('user-info');
  location.reload();
  this.$router.push({name:'signin'});
 
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

function handleScroll() {
  isScrolled.value = window.pageYOffset > 0;
    isScrolled.value = window.pageYOffset > 0
}
</script>

<template>
    <header class="header">

        <nav class="navbar navbar-expand-md navbar-light navbarTop">
            <div class="container-fluid">

                <router-link to="/home" class="navbar-brand ms-3">
                    <img src="../assets/img/hh-icon.png" alt="Logo" width="" height="50" class="d-inline-block pt-1 pb-1">
                    <img src="../assets/img/headlinehub-logo.png" alt="Logo" width="" height="40"
                        class="d-inline-block pt-2 pb-2 ps-3">
                </router-link>

                <div class="d-flex justify-content-center mx-4 d-none d-md-inline">
                   <weather-api/>
                    <!-- <span>30°C,London</span> -->
                </div>
                <!-- Can you change this into like a Profile button. It will navigate to login page if user not sign in( The redirect will be dome by Jay) -->
                <router-link to="/profile"><i class="bi bi-person fs-1 mx-3" style="color: white;"></i></router-link>
                <div class="d-flex justify-content-end">
                    <router-link to="/pages/signin" custom v-slot="{ navigate }"> <button @click="navigate" type="button"
                            class="btn btn-light text-dark me-2" role="link">Login</button></router-link>
                    <router-link to="/pages/signup" custom v-slot="{ navigate }"> <button type="button"
                            class="btn btn-secondary" @click="navigate" role="link">Sign-up</button></router-link>
                </div>

            </div>
        </nav>

        <nav class="navbar navbar-expand-md navbar-light navbarBottom" :class="{ 'sticky-top': isScrolled }">
            <div class="container-fluid">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
                        <li class="nav-item">
                            <router-link to="/home" class="nav-link" aria-current="page">Home</router-link>
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
                    <input class="form-control me-2" type="search" placeholder="Enter the keyword" aria-label="Search">
                    <button class="btn btn-outline-light" type="submit">Search</button>
                </form>
            </div>
        </nav>

    </header>
</template>

<style scoped>
.navbarTop {
    background-color: #05668D;
}

.navbarBottom {
    background-color: #02C39A;
}

.sticky-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    background-color: #05668D
}

.nav-link {
    color: white;
}</style>