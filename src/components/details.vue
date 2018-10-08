<template>
<el-main>
	<el-alert title="مهلت ثبت‌نام برای این رویداد به پایان رسیده است."
	          type="error"
	          show-icon
	          :closable="false"
	          class="alert-expired"
	          v-if="expired"></el-alert>
	<el-main class="workshop-details rounded-shadox-box">
		<el-row>
			<el-col :span="16" class="workshop-details__left-column">
				<div class="workshop-details__heading">
					<h1 class="route-title">{{ workshop.title }}</h1>
				</div>

				<div class="workshop-details__information clearfix">
					<ul class="clearfix">
						<li>
							<span>از ۱۸:۰۰ تا ۱۹:۱۵</span>
							<i class="ion-ios-clock"></i>
						</li>
						<li>
							<span :class="{red: expired}">{{ workshop.date_begin | jalaali("dddd jD jMMMM jYYYY") | toFa }}<strong>({{ getDiffDays(workshop.date_begin).message }})</strong></span>
							<i :class="{red: expired}" class="ion-ios-calendar"></i>
						</li>
						<li>
							<span><strong>{{ interested_users.length | toFa }}</strong> شرکت کننده</span>
							<i class="ion-ios-people"></i>
						</li>
						<li>
							<span>برگزار کننده:‌ <router-link :to="`/users/${teacher.username}`">{{ teacher.name + ' ' + teacher.lastName }}</router-link></span>
							<i class="ion-man"></i>
						</li>
					</ul>
				</div>
				<!-- /information -->
				<div class="workshop-details__desc clearfix">
					<h3 class="route-title">توضیحات کامل:</h3>
					<div class="workshop-details__desc-content">
						<div v-html="workshop.fullDescription"></div>
					</div>
					<!-- /content -->
				</div>
				<!-- /description -->

				<div class="workshop-details__tags">
					<h4>تگ ها:</h4>
					<el-tag type="info" v-for="(tag, index) in workshop.tags" :key="index">#{{tag}}</el-tag>
				</div>
			</el-col>
			<el-col :span="8">
				<div class="workshop-details__image">
					<img :src="workshop.image" alt="#" border="0" />
				</div>
				<div class="workshop-details__users">
					<h3 class="route-title">شرکت کنندگان:</h3>
					<div class="workshop-details__users-block">
						<el-row :gutter="5">
							<el-col :span="4" v-for="(user, index) in interested_users" :key="index">
								<el-tooltip class="item" effect="dark" :content="user.name + ' ' + user.lastName" placement="top-start">
									<router-link :to="`/users/${user.username}`">
										<img :src="user.avatar" :alt="user.name + ' ' + user.lastName" />
									</router-link>
								</el-tooltip>
							</el-col>
						</el-row>
						<!-- /users_link -->
					</div>
					<!-- /user_block -->
				</div>
				<!-- /users -->
			</el-col>
			<!-- /column/users_image -->
		</el-row>
	</el-main>
</el-main>
</template>

<script>
import { mapState } from "vuex";

import pick from "lodash/pick";

import { jalaali, digits } from "@/mixins";

export default {
	name: "Details",
	mixins: [jalaali, digits],
	data: () => ({
		workshop: {},
		interested_users: [],
		teacher: {},
		expired: false,
	}),
	props: {
		title: {
			type: String,
			default: "",
		},
	},
	computed: {
		...mapState(["users", "workshops"]),
	},
	mounted() {

		this.boot();
	},
	methods: {
		boot() {
			const workshopTitle = this.title || this.$route.params.title;
			if (workshopTitle) {
				const findedWorkshop = this.workshops.find(({ title }) => title === this.cleanTitle(workshopTitle));

				if (findedWorkshop) {
					this.workshop = findedWorkshop;
					this.teacher = this.prepareTeacher();
					this.interested_users = this.prepareInterstedUsers(this.workshop.interested_users);

					// check expired
					this.expired = this.getDiffDays(this.workshop.date_begin).expired;
				}
			}
		},
		prepareTeacher() {
			return this.users.find(({ id }) => id == this.workshop.author_id);
		},
		prepareInterstedUsers(intUsers) {
			intUsers = intUsers.map(intUsername => {
				// the find native function will return undefined if there aren't data to return.
				const resolved = this.users.find(({ username }) => username === intUsername); // data or undefined

				return resolved ? pick(resolved, ["name", "lastName", "avatar", "username"]) : null;
			});

			// clean up users and remove null items
			intUsers = intUsers.filter(user => !!user);

			return intUsers;
		},
		cleanTitle(title) {
			return title.split("-").join(" ");
		},
	},
};
</script>

<style lang="scss" scoped>
.workshop-details {
	&__image {
		margin: 15px;

		img {
			padding: 10px;
			border-radius: 10px;
			display: inline-block;
			border: 1px solid #e0e0e0;
			box-shadow: 0 23px 51px rgba(0, 0, 0, 0.08);
		}
	} // image
	&__left-column {
		padding-right: 50px;
	}

	&__heading {
		h1 {
			font-weight: 400;
			font-size: 2em;
			background: -webkit-linear-gradient(left, #3f9dec, #a637ca);
			background: linear-gradient(to right, #3f9dec, #a637ca);
			-webkit-background-clip: text;

			-webkit-text-fill-color: transparent;
		}
	} // heading

	&__information {
		margin: 0;
		margin-top: 65px;

		ul {
			padding: 0;
			margin: 0;

			li {
				text-align: right;
				list-style: none;
				display: inline-block;
				width: 49%;
				float: right;
				margin-bottom: 20px;

				i {
					text-align: right;
					font-size: 1.2em;
					color: #1070b9;
					width: 10px;
					height: 10px;
				}
			}
		}
	} // information

	&__desc {
		margin-top: 60px;
	} // description

	&__users {
		margin-top: 40px;
		margin-right: 20px;

		&-block {
			margin-top: 50px;

			.el-col {
				margin-bottom: 15px;
			}

			a {
				margin-left: 15px;

				img {
					box-shadow: 7px 7px 40px -7px rgba(0, 0, 0, 0.4);
					border-radius: 50%;
					max-width: 100%;
					object-fit: cover;
					width: 50px;
					height: 50px;
					padding: 3px;
					background: #fff;
					border: 1px solid rgba(0, 0, 0, 0.1);
					transition: all 0.2s;
				}

				&:hover {
					img {
						background: #ffe6a2;
					}
				}
			} // a
		} // block
	} // users

	&__tags {
		.el-tag + .el-tag {
			margin-left: 10px;
		}
	}
}

.alert-expired {
	margin-bottom: 20px;
	font-size: 2em;
	border-radius: 10px;
	font-weight: 500;
}
</style>
