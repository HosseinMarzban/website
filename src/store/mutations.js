// mutations
const mutations = {
	addUsers(state, payload) {
		state.teachers = payload;
		state.loading = false;
	},
};

export default mutations;
