import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/simplewiki-page",
			name: "home",
			component: HomeView
		},
		{
			path: "/simplewiki-page/page/:id",
			name: "page",
			component: () => import("../views/Page.vue")
		},
		{
			path: "/simplewiki-page/search",
			name: "search",
			component: () => import("../views/Search.vue")
		},
		{
			path: "/simplewiki-page/:pathMatch(.*)*",
			name: "notfound",
			component: () => import("../views/NotFound.vue")
		}
	]
});

export default router;
