// mutations
const mutations = {
	addTeachers(state, payload) {
		state.teachers = payload;
		state.loading = false;
	},
};

export default mutations;
