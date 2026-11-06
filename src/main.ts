import { ViteSSG } from "vite-ssg";
import "virtual:uno.css";
import { routes } from "vue-router/auto-routes";

import App from "./app.vue";

import "@/assets/styles/index.scss";

export const createApp = ViteSSG(App, {
  routes,
  base: import.meta.env.BASE_URL,
});
