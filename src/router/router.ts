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
    path: "/fication",
    name: "fication",
    component: () => import("../views/fication/index.vue"),
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
