import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GeneralPagecard from '../components/GeneralPageCard.vue'

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
      component: () => import('../views/AboutView.vue')
    }, { path: '/pages/business', component: GeneralPagecard },
    { path: '/pages/entertainment', component: GeneralPagecard },
    { path: '/pages/general', component: GeneralPagecard },
    { path: '/pages/health', component: GeneralPagecard },
    { path: '/pages/science', component: GeneralPagecard },
    { path: '/pages/sports', component: GeneralPagecard },
    { path: '/pages/technology', component: GeneralPagecard },
    { path: '/pages/signin', component: () => import('../components/Signin.vue') },
    { path: '/pages/signup', component: () => import('../components/Signup.vue') },
    // { path: '/weather', component: () => import('../components/WeatherApi.vue') }
  ]
})

export default router
