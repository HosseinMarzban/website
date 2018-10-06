import axios from "axios";

import { teachersURL } from "@/config";

// console.log("teachersURL", teachersURL);
const actions = {
	getTeachers({ commit }) {
		return new Promise((resolve, reject) => {
			axios.get(teachersURL).then(({ data: teachers }) => {
				commit("addTeachers", teachers);

				resolve(teachers);
			});
		});
	}
};

export default actions;
