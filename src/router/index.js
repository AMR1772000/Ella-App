import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductsCategory from "../views/ProductsCategory.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/products/:category/:title",
      name: "products-category",
      component: ProductsCategory,
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
