// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/pages/Home.vue"),
  },
  {
    path: "/login",
    component: () => import("@/pages/Login.vue"),
  },
  {
    path: "/catalog",
    component: () => import("@/pages/Catalog.vue"),
  },
  {
    name: "Catalog",
    path: "/catalog/:cat",
    component: () => import("@/pages/CatProducts.vue"),
  },
  {
    name: "SingleProduct",
    path: "/product/:id",
    component: () => import("@/pages/SingleProduct.vue"),
  },
  {
    name: "SearchedProducts",
    path: "/search/:query",
    component: () => import("@/pages/SearchedProducts.vue"),
  },
  {
    path: "/:notFound(.*)",
    component: () => import("@/pages/ErrorPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
