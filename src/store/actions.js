import axios from "axios";

import { usersURL, workshopsURL } from "@/config";

const actions = {
	getUsers({ commit }) {
		return new Promise(resolve => {
			axios.get(usersURL).then(({ data: users }) => {
				commit("addUsers", users);

				resolve(users);
			});
		});
	},
	getWorkshops({ commit }) {
		return new Promise(resolve => {
			axios.get(workshopsURL).then(({ data: workshops }) => {
				commit("addWorkshops", workshops);

				resolve(workshops);
			});
		});
	},
};

export default actions;
