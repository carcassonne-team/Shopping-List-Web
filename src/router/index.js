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
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/lists/Login"),
    },
    {
      path: "/settings",
      name: "Settings",
      component: () => import("../views/lists/Settings.vue"),
    },
    {
        path: "/register",
        name: "Register",
        component: () => import("../views/lists/Register"),
    },
    { path: '/:pathMatch(.*)*', component: () => import("../views/lists/PageNotFound"), },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
