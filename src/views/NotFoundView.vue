<template>
    <div class="wrap-error">
        <div class="d-flex align-items-center h-100">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 offset-sm-2 text-center text-white">
                        <h1 class=""><span>4</span><span>0</span><span>4</span></h1>
                        <h5 class="">Oops! Page not found</h5>
                        <p class="mb-4">we are sorry, but the page you requested was not found</p>
                        <router-link to="/home" tag="button" class="btn btn-dark">Go Home</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrap-error {
  background-color: #667bf2;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23f0b608' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23e6d710' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23e7af05' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23e7d808' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23d8a408' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23f1e213' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23f0b607' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23e4d506' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23eab822' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23e8da14' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23e8b008' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23edde14' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  height: calc(var(--vh, 1vh) * 100);
}
.wrap-error h1 {
  font-size: 6.875rem;
  letter-spacing: -13px;
  line-height: 1;
  font-family: montserrat, sans-serif;
}
h1 span {
  text-shadow: -8px 0 0 rgb(102 123 242);
}
.text-9xl {
  font-size: 5.5rem;
}
</style>