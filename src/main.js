/*
 * Main Script
 */

import "./main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App);
app.use(router);
app.mount("#app");

AOS.init({
  easing: "ease-out-cubic",
  duration: 700,
  delay: 400
});
