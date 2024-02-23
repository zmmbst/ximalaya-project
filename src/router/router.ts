import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const history = createWebHistory();

const routes: RouteRecordRaw[] = [

  {
    path: "/listeningList",
    name: "ListeningList",
    component: () => import("../views/listeningList/index.vue"),
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
