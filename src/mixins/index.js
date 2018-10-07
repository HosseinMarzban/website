import { digitsEnToFa, digitsFaToEn } from "persian-tools";

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
