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
	easing: "ease-out-quad",
	duration: 850,
	offset: -10,
	delay: 0,
	once: false
});

window.onresize = () => {
	AOS.refresh();
};
