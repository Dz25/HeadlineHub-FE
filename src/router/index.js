import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GeneralPagecard from "../views/GeneralPageCard.vue";
import signin from "../components/Signin.vue";
import signup from "../components/SignUp.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView, meta: { requiresAuth: true } },
    { path: "/pages/business", component: GeneralPagecard, props: { catagory: "business" }, meta: { requiresAuth: true } },
    { path: "/pages/entertainment", component: GeneralPagecard, props: { catagory: "entertainment" }, meta: { requiresAuth: true } },
    { path: "/pages/general", component: GeneralPagecard, props: { catagory: "general" }, meta: { requiresAuth: true } },
    { path: "/pages/health", component: GeneralPagecard, props: { catagory: "health" }, meta: { requiresAuth: true } },
    { path: '/pages/science', component: GeneralPagecard, props: { catagory: "science" }, meta: { requiresAuth: true } },
    { path: "/pages/sports", component: GeneralPagecard, props: { catagory: "sports" }, meta: { requiresAuth: true } },
    { path: "/pages/technology", component: GeneralPagecard, props: { catagory: "technology" }, meta: { requiresAuth: true } },
    { path: "/pages/signin", name: "signin", component: signin, },
    { path: "/pages/signup", name: "signup", component: signup, },
  ],

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
