import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
      path: "/",
      redirect: '/lists'
    },
    {
      path: "/lists",
      name: "Lists",
      component: () => import("../views/lists/Home.vue"),
    },
    {
      path: "/test",
      name: "Test",
      component: () => import("../views/lists/Test.vue"),
    },
    {
        path: "/lists/:id",
        name: "List",
        component: () => import("../views/lists/ListView"),
        meta: {
          requiresAuth: true,
        },
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/lists/Login"),
        beforeEnter: (to, from, next) => {
          let token = localStorage.getItem("token");
          if (token) {
            next();
            router.push("/")
          } else {
            next(true)
          }
        }
    },
    {
      path: "/settings",
      name: "Settings",
      component: () => import("../views/lists/Settings.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
        path: "/register",
        name: "Register",
        component: () => import("../views/lists/Register"),
        beforeEnter: (to, from, next) => {
          let token = localStorage.getItem("token");
          if (token) {
            next();
            router.push("/")
          } else {
            next(true)
          }
        }
    },
    {
        path: "/code",
        name: "Access Code",
        component: () => import("../views/lists/AccessCode"),
        meta: {
          requiresAuth: true,
        },
    },
    { path: '/:pathMatch(.*)*', component: () => import("../views/lists/PageNotFound"), },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("token")) {
      return next();
    } else {
      next("/login");
    }
  } else {
    return next();
  }
});

export default router
