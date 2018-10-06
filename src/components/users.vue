<template>
<el-row :gutter="64">
	<el-col v-for="(user, index) in usersList" :xs="24" :sm="12" :md="8" :lg="8" :xl="8" :key="index">
		<div class="brick" v-on:click.prevent="goTo(user.id)">
			<div class="brick__image">
				<img :style="{backgroundImage: 'url('+ user.avatar +')'}" class="brick__image-inner">
			</div>
			<!-- End - Brick/avatar -->
			<div class="brick__caption">
				<div class="brick__caption-upper">
					<a href="#" class="brick__title">{{ user.name + " " + user.family }}</a>
					<span class="brick__tagline">{{ user.headline }}</span>
				</div>
				<!-- End - Caption/upper -->
				<div class="brick__caption-lower">
					<ul class="brick__caption-lower__social-list">
						<li v-for="(o, secondIndex) in user.social" :key="secondIndex">
							<el-tooltip :content="o.title" effect="dark" placement="top">
								<a :href="o.link" target="_blank" rel="nofollow"><i :class="['fab', 'fa-'+ o.icon]"/> </a>
							</el-tooltip>
						</li>
					</ul>
					<!-- End - Caption/Social/list -->
				</div>
				<!-- End - Caption/lower -->
			</div>
			<!-- End - Brick/Caption -->
		</div>
		<!-- End - Columns/Brick -->
	</el-col>
	<!-- End - Columns -->
</el-row>
</template>

<script>
import { mapState } from "vuex";

export default {
	name: "Users",
	props: {
		max: {
			type: Number,
			required: false,
		},
		want: {
			type: String,
			default: "users",
		},
	},
	data: () => ({
		usersList: [],
	}),
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
	computed: {
		...mapState(["users"]),
	},
	methods: {
		goTo(id) {
			this.$router.push({ path: `/users/${id}` });
		},
	},
};
</script>

<style scoped>
</style>
