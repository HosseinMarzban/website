import axios from "axios";

import { usersURL, workshopsURL } from "@/config";

const actions = {
	getUsers({ commit }) {
		axios.get(usersURL).then(({ data: users }) => {
			commit("addUsers", users);
		});
	},
	getWorkshops({ commit }) {
		axios.get(workshopsURL).then(({ data: workshops }) => {
			commit("addWorkshops", workshops);
		});
	},
};

export default actions;
