import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes.config";

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
