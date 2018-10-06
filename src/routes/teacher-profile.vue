<template>
<el-main>
	<Profile :username="username" />
</el-main>
</template>

<script>
export default {
	name: "Route-Profile",
	components: {
		Profile: () => import("@/components/profile")
	},
	data: () => ({
		username: null
	}),
	mounted() {
		this.username = this.$route.params.username;
	}
};
</script>

<style lang="scss" scoped>
</style>
