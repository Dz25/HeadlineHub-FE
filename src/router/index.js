import { createRouter, createWebHistory } from 'vue-router'
import ProfileView from '../views/ProfileView.vue'
import GeneralPagecard from '../views/GeneralPageCard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    //pass in props as categories name, change the GeneralPageCard name to something generic
    { path: '/pages/business', component: GeneralPagecard },
    { path: '/pages/entertainment', component: GeneralPagecard },
    { path: '/pages/general', component: GeneralPagecard },
    { path: '/pages/health', component: GeneralPagecard },
    { path: '/pages/science', component: GeneralPagecard },
    { path: '/pages/sports', component: GeneralPagecard },
    { path: '/pages/technology', component: GeneralPagecard },
    { path: '/pages/signin', component: () => import('../components/Signin.vue') },
    { path: '/pages/signup', component: () => import('../components/Signup.vue') },
    // { path: '/weather', component: () => import('../components/WeatherApi.vue') }
    {
      path: '/profile',
      name: 'Profile',
      component: ProfileView
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
