import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

import teachers from "../../data/teachers";

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		workshops: [],
		teachers,
	},
	getters,
	actions,
	mutations,
	strict: process.env.NODE_ENV !== "production",
	plugins: [],
});

if (module.hot) {
	// accept actions and mutations as hot modules
	module.hot.accept(["./mutations", "./actions", "./getters"], async () => {
		// import the updated modules
		// have to add .default here due to babel 6 module output
		const newMutations = await import("./mutations").default;
		const newActions = await import("./actions").default;
		const newGetters = await import("./getters").default;

		// swap in the new actions & mutations and getters
		store.hotUpdate({
			mutations: newMutations,
			actions: newActions,
			getters: newGetters,
		});
	});
}

export default store;
