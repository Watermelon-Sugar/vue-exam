import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/LoginPage.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("@/views/SignUpPage.vue"),
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("@/components/ProductsPage.vue"),
  },
  {
    path: "/products/:id",
    name: "Product",
    component: () => import("@/pages/ProductPage.vue"),
    meta: {
      isAuthenticated: true,
    },
  },
  {
    path: "/:catchAll(.*)",
    component: () => import("@/pages/ErrorPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
