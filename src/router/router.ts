import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const history = createWebHistory();

const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login/index.vue"),
    meta: {
      hidden: true,
    },
  },
  {
    path: "/video-details",
    name: "video-details",
    component: () => import("../views/video-details/index.vue"),
    meta: {
      hidden: true,
    },
  },
];

const router = createRouter({
  history,
  scrollBehavior: () => ({ top: 0 }),
  routes,
});

export default router;
