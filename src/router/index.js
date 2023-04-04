
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GeneralPagecard from "../views/GeneralPageCard.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
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


});
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('user-info');

  // If the route requires authentication and the user is not authenticated, redirect to the login page
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'signin' });
  } else {
    next();
  }
});

export default router;
