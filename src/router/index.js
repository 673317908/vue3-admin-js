import {
  createRouter,
  createWebHashHistory
} from "vue-router";

const routes = [{
  path: "/login",
  name: "Login",
  meta: {
    title: "登录",
    hidden: false,
    language: "login"
  },
  component: () => import("../views/acount/login.vue")
},
{
  path: "/register",
  name: "Register",
  meta: {
    title: "注册",
    hidden: false,
    language: "register"
  },
  component: () => import("../views/acount/register.vue")
},
{
  path: "/forget",
  name: "Forget",
  meta: {
    title: "忘记密码",
    hidden: false,
    language: "forget"
  },
  component: () => import("../views/acount/forget.vue")
},
{
  path: "/index",
  name: "Index",
  meta: {
    title: "首页",
    hidden: true,
    language: "home"
  },
  component: () => import("../views/layout/layout.vue"),
},
{
  path: "/admin",
  name: "Admin",
  meta: {
    title: "管理总台",
    hidden: true,
    language: "management_desk"
  },
  component: () => import("../views/layout/layout.vue"),
  children: [{
    path: "/role",
    name: "Role",
    meta: {
      title: "角色管理",
      hidden: true,
      language: "role_management"
    },
    component: () => import("../views/admin/role.vue")
  },
  {
    path: "/user",
    name: "User",
    meta: {
      title: "用户管理",
      hidden: true,
      language: "user_management"
    },
    component: () => import("../views/admin/user.vue")
  },
  ]
},
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;