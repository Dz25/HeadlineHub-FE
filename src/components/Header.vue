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
    <header class="header container-fluid">

        <nav class="navbar navbar-expand-md navbar-light">
            <div class="container-fluid">

                <a class="navbar-brand" href="#">
                    <img src="../assets/img/hh-icon.png" alt="Logo" width="25" height=""
                        class="d-inline-block align-text-top">
                    <span class="ms-1 fs-3">HeadlineHub</span>
                </a>

                <div class="d-flex justify-content-center mx-4 d-none d-md-inline">
                    <span class="me-4">Wed, March 4, 2020</span>
                    <span>30°C,London</span>
                </div>

                <div class="d-flex justify-content-end">
                    <button type="button" class="btn btn-light text-dark me-2">Login</button>
                    <button type="button" class="btn btn-secondary">Sign-up</button>
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