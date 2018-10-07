<template>
<el-main>
	<Profile :username="username" />
</el-main>
</template>

<script>
export default {
	name: "RouteProfile",
	components: {
		Profile: () => import("@/components/profile"),
	},
	data: () => ({
		username: null,
	}),
	updated() {
		this.username = this.$route.params.username;
	},
};
</script>

<style lang="scss" scoped>
</style>
