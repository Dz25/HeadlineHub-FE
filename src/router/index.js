import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< Updated upstream
import HomeView from '../views/HomeView.vue'
=======
// import Vue from 'vue';
// import JwPagination from 'jw-vue-pagination';
// Vue.component('jw-pagination', JwPagination);
import HomeView from '../views/HomeView.vue'
import General from '../components/Pages/General.vue'
// import SignIn from '../components/Pages/SignIn.vue'
>>>>>>> Stashed changes

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
<<<<<<< Updated upstream
      component: () => import('../views/AboutView.vue')
    }
=======

    },
    { path: '/pages/business', component: () => import('../components/Pages/Business.vue') },
    { path: '/pages/entertainment', component: () => import('../components/Pages/Entertainment.vue') },
    { path: '/pages/general', component: General },
    { path: '/pages/health', component: () => import('../components/Pages/Health.vue') },
    { path: '/pages/science', component: () => import('../components/Pages/Sciencenews.vue') },
    { path: '/pages/sports', component: () => import('../components/Pages/Sports.vue') },
    { path: '/pages/technology', component: () => import('../components/Pages/Technology.vue') },
    { path: '/pages/signin', component: () => import('../components/Pages/SignIn.vue') },
    { path: '/pages/signup', component: () => import('../components/Pages/SignUp.vue') },
    { path: '/weather', component: () => import('../components/WeatherApi.vue') }
>>>>>>> Stashed changes
  ]
})

export default router
