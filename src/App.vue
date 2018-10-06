<template>
<div class="app">
	<el-header class="app-header">
		<el-row type="flex" justify="center">
			<el-col :span="18">
				<el-menu :default-active="activeIndex" router
				         class="top-navigation"
				         mode="horizontal"
				         background-color="#fecc44"
				         text-color="#33353f"
				         active-text-color="#FFF">
					<el-menu-item index="/">خانه</el-menu-item>
					<el-menu-item index="/about">درباره ما</el-menu-item>
					<el-menu-item index="/workshops">ورکشاپ ها</el-menu-item>
					<el-menu-item index="/teachers">مدرسین</el-menu-item>
				</el-menu>
			</el-col>
		</el-row>
	</el-header>
	<el-container class="app-container">
		<el-row type="flex" justify="center">
			<el-col :span="18">
				<transition name="fade" mode="out-in">
					<router-view />
				</transition>
			</el-col>
		</el-row>
	</el-container>
	<el-footer>
		<el-row type="flex" justify="center">
			<el-col :span="18">
				<hr class="footer-hr">
				<p>تمامی حقوق مادی و معنوی این اثر نزد گروه تهران جی اس محفوظ میباشد.</p>
			</el-col>
		</el-row>
	</el-footer>
</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
	name: "Root",
	data: () => ({
		activeIndex: "/"
	}),
	updated() {
		this.updateActiveIndex();
	},
	mounted(){
		this.updateActiveIndex();

		this.getTeachers().then(teachers => {
			console.log(teachers)
		});
	},
	methods: {
		...mapActions(["getTeachers"]),
		updateActiveIndex() {
			const splitedPath = this.$router.history.current.fullPath.split("/");
			const activeRoute = splitedPath.length > 1 ? `/${splitedPath[1]}` : "/";

			this.activeIndex = activeRoute;
		}
	}
};
</script>

<style lang="scss">
.top-navigation {
	&.el-menu--horizontal {
		border-bottom-width: 0;
	}
	> .el-menu-item {
		float: right;
		background: transparent !important;
	}
}
// header
.app-header {
	padding: 0;
	height: auto !important;
	background: #fecc44;
	border-bottom: 3px solid rgba(0, 0, 0, 0.1);
	color: #33353f;
	cursor: default;

	&__title {
		text-align: center;
	}
}
.app-container {
	flex-direction: column;
	margin: 60px 0;
}
</style>
