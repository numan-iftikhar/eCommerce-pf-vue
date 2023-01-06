// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/catalog",
    component: () => import("@/views/Catalog.vue"),
  },
  {
    name: "Catalog",
    path: "/catalog/:cat",
    component: () => import("@/views/CatProducts.vue"),
  },
  {
    name: "SingleProduct",
    path: "/product/:id",
    component: () => import("@/views/SingleProduct.vue"),
  },
  {
    name: "SearchedProducts",
    path: "/search/:query",
    component: () => import("@/views/SearchedProducts.vue"),
  },
  // {
  //   name: "CartPage",
  //   path: "/cartpage",
  //   component: () => import("@/views/CartPage.vue"),
  // },
  {
    path: "/:notFound(.*)",
    component: () => import("@/views/ErrorPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
