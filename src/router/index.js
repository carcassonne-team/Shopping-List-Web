import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
      path: "/",
      name: "Home",
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
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
