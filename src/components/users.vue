<template>
<el-row :gutter="64">
	<el-col v-for="(user, index) in usersList"
	        :xs="24"
	        :sm="12"
	        :md="8"
	        :lg="8"
	        :xl="8"
	        :key="index">
		<figure class="profile-card" @click.prevent="goTo(user.username)">
			<img :alt="getConcatenated(user.name, user.lastName)"
			     src="https://avatars2.githubusercontent.com/u/9049092?s=460&v=4"
			     class="background">
			<img :alt="getConcatenated(user.name, user.lastName)"
			     src="https://avatars2.githubusercontent.com/u/9049092?s=460&v=4"
			     class="profile">
			<figcaption>
				<h3 class="headline">
					{{ getConcatenated(user.name, user.lastName) }}
					<span>{{ user.headline }}</span>
				</h3>
				<div class="social-icons">
					<a v-for="(sc, index) in user.social"
					   :href="sc.link"
					   :key="index"
					   target="_blank"
					   rel="nofollow">
							<i :class="getIconClass(sc.link).icon"/>
						</a>
				</div>
			</figcaption>
		</figure>
	</el-col>
	<!-- End - Columns -->
</el-row>
</template>

<script>
import { mapState } from "vuex";

import { getIconClass } from "@/mixins";

export default {
	name: "Users",
	mixins: [getIconClass],
	props: {
		max: {
			type: Number,
			required: false,
			default: null,
		},
		want: {
			type: String,
			default: "users",
		},
	},
	data: () => ({
		usersList: [],
	}),
	computed: {
		...mapState(["users"]),
	},
	mounted() {
		this.usersList = this.users.slice();

		if (this.want === "teachers") {
			this.usersList = this.usersList.filter(({ hasTeachingExperience }) => !!hasTeachingExperience);
		}

		// set max display users
		if (this.max) {
			this.usersList = this.usersList.slice(0, this.max);
		}
	},
	methods: {
		goTo(username) {
			this.$router.push({ path: `/users/${username}` });
		},
		getConcatenated(...arg) {
			return arg.join(" ");
		},
	},
};
</script>

<style lang="scss" scoped>
.profile-card {
	position: relative;
	overflow: hidden;
	width: 100%;
	color: #ffffff;
	text-align: center;
	line-height: 1.4em;
	background-color: #141414;
	border-radius: 25px;
	box-shadow: 0 2px 43px -4px rgba(0, 0, 0, 0.5);
	cursor: pointer;

	* {
		box-sizing: border-box;
		transition: all 0.25s ease;
	}

	.background {
		width: 100%;
		vertical-align: top;
		opacity: 0.2;
		filter: grayscale(100%) blur(10px);
		transition: all 2s ease;
	}
	.profile {
		border-radius: 50%;
		position: absolute;
		bottom: 50%;
		left: 50%;
		max-width: 100px;
		opacity: 1;
		box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
		border: 2px solid rgba(255, 255, 255, 0.5);
		transform: translate(-50%, 0%);
	} // profile-image

	&:hover .background {
		transform: scale(1.3);
	}

	figcaption {
		width: 100%;
		padding: 15px 25px;
		position: absolute;
		left: 0;
		top: 50%;

		> .headline {
			margin: 0 0 5px;
			font-weight: 400;

			span {
				display: block;
				font-size: 0.6em;
				color: #f39c12;
				opacity: 0.75;
			}
		} // headline
	} // figcaption
	.social-icons > a {
		text-decoration: none;
		margin-left: 7px;
		cursor: pointer;

		i {
			padding: 10px 5px;
			display: inline-block;
			font-size: 32px;
			color: #ffffff;
			text-align: center;
			opacity: 0.65;

			&:hover {
				opacity: 1;
				transition: all 0.35s ease;
			}
		}
	}
}
</style>
