import { createRouter, createWebHistory } from "vue-router";
import { auth } from "../firebase/config";
import HomePage from "@/views/HomePage.vue";
import ProductsPage from "@/views/ProductsPage.vue";
import ProductPage from "@/pages/ProductPage.vue";


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
    component: ProductsPage,
    meta: {
      authIsRequired: true,
    },
   
  },
  {
    path: "/products/:id",
    name: "Product",
    component: ProductPage,
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
    next({ name: "Home" });
  } else if (to.path === "/products" && !isAuthenticated()) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
