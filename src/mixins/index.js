import { digitsEnToFa, digitsFaToEn } from "persian-tools";
import moment from "moment-jalaali";

moment.loadPersian({ dialect: "persian-modern" });

export const getIconClass = {
	methods: {
		getIconClass(link) {
			if (link.includes("facebook.com")) {
				return {
					site: "facebook",
					icon: "ion-social-facebook-outline",
				};
			} else if (link.includes("linkedin.com")) {
				return {
					site: "linkedin",
					icon: "ion-social-linkedin-outline",
				};
			} else if (link.includes("twitter.com")) {
				return {
					site: "twitter",
					icon: "ion-social-twitter-outline",
				};
			} else if (link.includes("github.com")) {
				return {
					site: "github",
					icon: "ion-social-github-outline",
				};
			} else if (link.includes("codepen.com")) {
				return {
					site: "codepen",
					icon: "ion-social-codepen-outline",
				};
			}
		},
	},
};

// digits
export const digits = {
	filters: {
		toFa: value => (value ? digitsEnToFa(value) : value),
		toEn: value => (value ? digitsFaToEn(value) : value),
	},
};

// moment jalaali
export const jalaali = {
	methods: {
		getDiffDays(value) {
			const current = moment();
			value = moment(value, "jYYYY/jM/jD");
			const days = value.diff(current, "day");

			if (days > 0) {
				return {
					expired: false,
					message: `${days} روز تا برگزاری`,
				};
			} else {
				return {
					expired: true,
					message: "این رویداد منقضی شده است",
				};
			}
		},
	},
	filters: {
		jalaali: (value, format) => (value ? moment(value, "jYYYY/jM/jD").format(format) : value),
	},
};
