<template>
	<el-main>
		<h2 class="route-title">همراهان و وفادارن گروه تهران جی اس</h2>
		<el-main>
			<Workshops />
		</el-main>
	</el-main>
</template>

<script>
export default {
	name: "WorkshopsRoute",
	components: {
		Workshops: () => import("@/components/workshops"),
	},
};
</script>

<style scoped>
</style>
