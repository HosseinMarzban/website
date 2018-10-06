import axios from "axios";

import { teachersURL } from "@/config";

const actions = {
	getTeachers({ commit }) {
		axios.get(teachersURL).then(({ data: teachers }) => {
			commit("addTeachers", teachers);
		});
	}
};

export default actions;
