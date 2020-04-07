import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";

Vue.use(Router);

const router = new Router({
	mode: "history",
	routes: [
		{ path: "/", name: "Home", component: Home }
	]
});

router.beforeEach((to, from, next) => {
	document.title = `${to.name} | Placeholder`;
	next();
});

export default router;
