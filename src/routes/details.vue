<template>
	<el-main>
		<Details :title="title" />
	</el-main>
</template>

<script>
export default {
	name: "RouteDetails",
	components: {
		Details: () => import("@/components/details")
	},
	data: () => ({
		title: null
	}),
	mounted() {
		this.title = this.$route.params.title;
	}
};
</script>

<style lang="scss" scoped>
</style>
