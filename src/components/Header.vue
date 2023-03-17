<script setup>
import { onMounted, ref } from 'vue'

const isScrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

function handleScroll() {
  isScrolled.value = window.pageYOffset > 0
}
</script>

<template>
    <header class="header">

        <nav class="navbar navbar-expand-md navbar-light navbarTop">
            <div class="container-fluid">

                <a class="navbar-brand ms-3" href="#">
                    <img src="../assets/img/hh-icon.png" alt="Logo" width="" height="50"
                        class="d-inline-block pt-1 pb-1">
                    <img src="../assets/img/headlinehub-logo.png" alt="Logo" width="" height="40"
                        class="d-inline-block pt-2 pb-2 ps-3">
                </a>

                <div class="d-flex justify-content-center mx-4 d-none d-md-inline">
                    <span class="me-4">Wed, March 4, 2020</span>
                    <span>30°C,London</span>
                </div>
                <!-- Can you change this into like a Profile button. It will navigate to login page if user not sign in( The redirect will be dome by Jay) -->
                <div class="d-flex justify-content-end">
                    <button type="button" class="btn btn-light text-dark me-2">Login</button>
                    <button type="button" class="btn btn-warning">Sign-up</button>
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
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">General</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Business</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Entertainment</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Health</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Science</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sports</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Technology</a>
                        </li>
                    </ul>
                </div>
                <form class="d-flex ms-auto">
                    <input class="form-control me-2" type="search" placeholder="Enter the keyword" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>

    </header>
</template>
    
    
<style scoped>
.navbarTop {
    background-color: #0D19A3;
}
.navbarBottom {
    background-color: #15DB95;
}
.sticky-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  background-color: #0D19A3
}
.nav-link {
    color: white;
}
</style>