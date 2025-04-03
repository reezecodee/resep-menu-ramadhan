import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "../pages/HomeView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
