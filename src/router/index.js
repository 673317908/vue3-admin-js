import {
  createRouter,
  createWebHashHistory
} from "vue-router";

const routes = [
  {
    path: "/account",
    name: "Account",
    meta: {
      title: "账户",
      hidden: false,
      language: "account"
    },
    component: () => import("../views/acount/index.vue")
  },
  {
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
      language: "home",
      icon: "HomeOutlined"
    },
    component: () => import("../views/layout/layout.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    meta: {
      title: "管理总台",
      hidden: true,
      language: "management_desk",
      icon: "DashboardOutlined"
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
    {
      path: "/menu",
      name: "Menu",
      meta: {
        title: "菜单管理",
        hidden: true,
        language: "menu_management"
      },
      component: () => import("../views/admin/menu.vue")
    },
    ]
  },
  {
    path: "/message",
    name: "Message",
    meta: {
      title: "信息管理",
      hidden: true,
      language: "message_desk",
      icon: "ContainerOutlined"
    },
    component: () => import("../views/layout/layout.vue"),
    children: [{
      path: "/message_list",
      name: "MessageList",
      meta: {
        title: "信息列表",
        hidden: true,
        language: "message_list"
      },
      component: () => import("../views/message/list.vue")
    },
    {
      path: "/message_category",
      name: "MessageCategory",
      meta: {
        title: "信息分类",
        hidden: true,
        language: "message_category"
      },
      component: () => import("../views/message/categroy.vue")
    },
    ]
  },
  {
    path: "/product",
    name: "Product",
    meta: {
      title: "产品管理",
      hidden: true,
      language: "product_desk",
      icon: "CodeSandboxOutlined"
    },
    component: () => import("../views/layout/layout.vue"),
    children: [{
      path: "/product_list",
      name: "ProductList",
      meta: {
        title: "产品列表",
        hidden: true,
        language: "product_list"
      },
      component: () => import("../views/product/list.vue")
    },
    {
      path: "/product_category",
      name: "ProductCategory",
      meta: {
        title: "产品分类",
        hidden: true,
        language: "product_category"
      },
      component: () => import("../views/product/categroy.vue")
    },
    ]
  },
  {
    path: "/member",
    name: "Member",
    meta: {
      title: "会员管理",
      hidden: true,
      language: "member_desk",
      icon: "UserOutlined"
    },
    component: () => import("../views/layout/layout.vue"),
    children: [{
      path: "/member_list",
      name: "MemberList",
      meta: {
        title: "会员列表",
        hidden: true,
        language: "member_list"
      },
      component: () => import("../views/member/list.vue")
    },
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;