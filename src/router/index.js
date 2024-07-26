import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.base_url),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView
		},
		{
			path: "/page/:id",
			name: "page",
			component: () => import("../views/Page.vue")
		},
		{
			path: "/search",
			name: "search",
			component: () => import("../views/Search.vue")
		},
		{
			path: "/:pathMatch(.*)*",
			name: "notfound",
			component: () => import("../views/NotFound.vue")
		}
	]
});

export default router;
