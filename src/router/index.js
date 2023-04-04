
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GeneralPagecard from "../views/GeneralPageCard.vue";
import signin from "../components/Signin.vue";
import signup from "../components/SignUp.vue";
import profile from "../views/ProfileView.vue";
import search from "../views/SearchPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/pages/business", component: GeneralPagecard, props: { catagory: "business" }, },
    { path: "/pages/entertainment", component: GeneralPagecard, props: { catagory: "entertainment" }, },
    { path: "/pages/general", component: GeneralPagecard, props: { catagory: "general" }, },
    { path: "/pages/health", component: GeneralPagecard, props: { catagory: "health" }, },
    { path: '/pages/science', component: GeneralPagecard, props: { catagory: "science" }, },
    { path: "/pages/sports", component: GeneralPagecard, props: { catagory: "sports" }, },
    { path: "/pages/technology", component: GeneralPagecard, props: { catagory: "technology" }, },
    { path: "/search/:searchedText", name: "pageSearch", component: search },
    { path: "/pages/signin", name: "signin", component: signin, },
    { path: "/pages/signup", name: "signup", component: signup, },
    { path: "/profile", name: "profile", component: profile, },
  ],

});



export default router;
