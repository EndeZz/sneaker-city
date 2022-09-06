import CartView from "@/views/CartView.vue";
import HomeView from "@/views/HomeView.vue";
import { RouteRecordRaw } from "vue-router";
import { routePath } from "./route-path";

export const routes: Array<RouteRecordRaw> = [
  {
    path: routePath.home.path,
    name: routePath.home.name,
    component: HomeView,
    children: [
      {
        path: ":category",
        name: "Categories",
        props: true,
        component: HomeView,
      },
    ],
  },
  {
    path: routePath.cart.path,
    name: routePath.cart.name,
    component: CartView,
  },
];
