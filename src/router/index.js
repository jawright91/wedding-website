import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Ceremony from "../views/Ceremony.vue";
import Gallery from "../views/Gallery.vue";
import RSVP from "../views/RSVP.vue";
import Registry from "../views/Registry.vue";
import Hotels from "../views/Hotels.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/ceremony",
    name: "Ceremony",
    component: Ceremony,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/rsvp",
    name: "RSVP",
    component: RSVP,
  },
  {
    path: "/registry",
    name: "Registry",
    component: Registry,
  },
  {
    path: "/hotels",
    name: "Hotels",
    component: Hotels,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
