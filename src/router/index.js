import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
	mode: "history",
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { x: 0, y: 0 };
		}
	},
	routes: [
		{
			path: "/",
			name: "Home",
			component: () => import("@/components/home"),
		},
		{
			path: "/users",
			name: "Users",
			component: () => import("@/routes/users"),
		},
		{
			path: "/users/:username",
			name: "Teachers-profile",
			component: () => import("@/routes/profile"),
		},
		{
			path: "/teachers",
			name: "Teachers",
			component: () => import("@/routes/teachers"),
		},
		{
			path: "/workshops",
			name: "Workshops",
			component: () => import("@/routes/workshops"),
		},
		{
			path: "/workshops/:title",
			name: "Workshops-Details",
			component: () => import("@/routes/details"),
		},
	],
});
