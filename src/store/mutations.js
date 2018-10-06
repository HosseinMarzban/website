// mutations
const mutations = {
	addUsers(state, payload) {
		state.users = payload;
	},
	addWorkshops(state, payload) {
		state.workshops = payload;
	},
	setLoading(state, payload) {
		state.loading = payload;
	},
};

export default mutations;
