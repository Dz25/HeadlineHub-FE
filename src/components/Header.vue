<script setup>
import { ref, onMounted } from "vue";
import WeatherApi from "./WeatherApi.vue";
import { computed } from "vue";
const isScrolled = ref(false);

const userName = computed(() => {
    const username = localStorage.getItem("userName");
    return username ? username : "";
});

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});
const searchText = ref("");

function logout() {
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
    location.reload();
    this.$router.push({ name: "signin" });
}

function handleScroll() {
    isScrolled.value = window.pageYOffset > 0;
}
</script>

<template>
    <header class="header">
        <nav class="navbar navbar-expand-md navbar-light navbarTop">
            <div class="container-fluid">
                <router-link class="navbar-brand ms-3" to="/">
                    <img src="../assets/img/hh-icon.png" alt="Logo" width="" height="50" class="d-inline-block pt-1 pb-1" />
                    <img src="../assets/img/headlinehub-logo.png" alt="Logo" width="" height="40"
                        class="d-inline-block pt-2 pb-2 ps-3" />
                </router-link>

                <div class="d-flex justify-content-center mx-3 d-none d-md-inline">
                    <weather-api />
                </div>

                <router-link to="/profile">
                    <i v-if="userName" class="bi bi-person fs-1 mx-3 pf" style="color: white">
                        {{ userName }}</i>
                </router-link>
                <div class="d-flex justify-content-end">
                    <router-link to="/pages/signin" custom v-slot="{ navigate }">
                        <button @click="navigate" type="button" v-if="!userName" class="btn btn-light text-dark me-2"
                            role="link">
                            Login
                        </button></router-link>
                    <router-link to="/pages/signup" custom v-slot="{ navigate }">
                        <button type="button" v-if="!userName" class="btn btn-secondary" @click="navigate" role="link">
                            Sign-up
                        </button></router-link>
                    <button type="button" v-if="userName" class="btn btn-secondary" @click="logout" role="link">
                        Log out
                    </button>
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
                            <router-link to="/" class="nav-link" aria-current="page">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/pages/general" class="nav-link">General</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/pages/business" class="nav-link">Business</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/pages/entertainment" class="nav-link">Entertainment</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/pages/health" class="nav-link">Health</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/pages/science" class="nav-link">Science</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/pages/sports" class="nav-link">Sports</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/pages/technology" class="nav-link">Technology</router-link>
                        </li>
                    </ul>
                </div>
                <form class="d-flex ms-auto">
                    <input class="form-control me-2" type="text" v-model="searchText" placeholder="Enter the keyword"
                        aria-label="Search" />

                    <router-link :to="`/search/${searchText}`"><button class="btn btn-outline-light" role="link">
                            Search
                        </button></router-link>
                </form>
            </div>
        </nav>
    </header>
</template>

<style scoped>
.navbarTop {
    background-color: #05668d;
}

.navbarBottom {
    background-color: #02c39a;
}

.sticky-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    background-color: #05668d;
}

.pf {
    margin-left: 15px;
    text-decoration: none
}

.nav-link {
    color: white;
}
</style>
