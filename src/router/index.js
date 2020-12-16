import {
  createRouter,
  createWebHashHistory
} from "vue-router";

const routes = [{
    path: "/login",
    name: "Login",
    component: () => import("../views/acount/login.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/acount/register.vue")
  },
  {
    path: "/forget",
    name: "Forget",
    component: () => import("../views/acount/forget.vue")
  },
  {
    path: "/index",
    name: "Index",
    component: () => import("../views/layout/index.vue")
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;