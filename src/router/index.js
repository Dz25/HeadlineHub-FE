import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GeneralPagecard from "../views/GeneralPageView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    {
      path: "/pages/business",
      component: GeneralPagecard,
      props: { category: "business" },
    },
    {
      path: "/pages/entertainment",
      component: GeneralPagecard,
      props: { category: "entertainment" },
    },
    {
      path: "/pages/general",
      component: GeneralPagecard,
      props: { category: "general" },
    },
    {
      path: "/pages/health",
      component: GeneralPagecard,
      props: { category: "health" },
    },
    {
      path: "/pages/science",
      component: GeneralPagecard,
      props: { category: "science" },
    },
    {
      path: "/pages/sports",
      component: GeneralPagecard,
      props: { category: "sports" },
    },
    {
      path: "/pages/technology",
      component: GeneralPagecard,
      props: { category: "technology" },
    },
    {
      path: "/search/:searchedText",
      name: "pageSearch",
      component: () => import("../views/SearchPage.vue"),
    },
    {
      path: "/pages/signin",
      name: "signin",
      component: () => import("../views/SigninView.vue"),
    },
    {
      path: "/pages/signup",
      name: "signup",
      component: () => import("../views/SignupView.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/ProfileView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

export default router;
