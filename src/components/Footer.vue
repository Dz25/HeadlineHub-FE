<script setup></script>

<template>
    <footer class="text-center text-lg-start text-white">
    <div class="container-fluid text-center text-md-start pt-3">
        <div class="row pt-3 mb-3">
            <!-- Grid column -->
            <div class="col-md-5 mx-auto mb-3">
                <h5 class="fw-bold mb-3">HeadlineHub</h5>
                <p>
                    HeadlineHub, your go-to source for the latest news and information from around the world. 
                    We are committed to bringing you the most up-to-date  news, covering a wide range of categories.
                </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-2 mx-auto mb-3">
                <h6 class="text-uppercase fw-bold mb-3">Categories</h6>
                <ul class="list-unstyled mb-0">
                    <li><router-link to="/pages/general"><a href="#" class="text-decoration-none text-white">General</a></router-link></li> 
                   <li> <router-link to="/pages/business"><a href="#" class="text-decoration-none text-white">Business</a></router-link ></li>
                    <li><router-link to="/pages/entertainment"><a href="#" class="text-decoration-none text-white">Entertainment</a></router-link></li>
                    <li><router-link to="/pages/eealth"><a href="#" class="text-decoration-none text-white">Health</a></router-link></li>
                    <li><router-link to="/pages/science"><a href="#" class="text-decoration-none text-white">Science</a></router-link></li>
                    <li><router-link to="/pages/sports"><a href="#" class="text-decoration-none text-white">Sports</a></router-link></li>
                    <li><router-link to="/pages/technology"><a href="#" class="text-decoration-none text-white">Technology</a></router-link></li>
                </ul>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-3 mx-auto mb-3">
                <h6 class="text-uppercase fw-bold mb-3">Contact</h6>
                <p>Vancouver, BC Canada</p>
                <p>info@example.com</p>
                <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>
            <!-- Grid column -->
        </div>
    </div>

    <!-- Copyright -->
    <div class="text-center p-3">
        Copyright © 2023 HeadlineHub -  CSIS3275
    </div>
    <!-- Copyright -->
  </footer>
</template>
    
    
<style>
footer {
    background-color: #05668D;
}
</style>