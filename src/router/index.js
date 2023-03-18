import { createRouter, createWebHistory } from "vue-router";
import { auth } from "../firebase/config";
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
    component: () => import("@/views/ProductsPage.vue"),
  },
  {
    path: "/products/:id",
    name: "Product",
    component: () => import("@/pages/ProductPage.vue"),
    meta: {
      authIsRequired: true,
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "ErrorPage",
    component: () => import("@/pages/ErrorPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const isAuthenticated = () => !!auth.currentUser;

const canUserAccess = (to) => {
  if (!isAuthenticated() && to.meta.authIsRequired && to.name !== "Login") {
    return false;
  }

  return true;
};

router.beforeEach((to, from, next) => {
  const canAccess = canUserAccess(to);
  if (isAuthenticated() && to.name === "Login") {
    next({ name: "Home" });
  } else if (!canAccess) {
    next({ name: "Login" });
  } else if (to.path === "/products" && !isAuthenticated()) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
