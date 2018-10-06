<template>
<el-main>
	<h2 class="route-title">همراهان و وفادارن گروه تهران جی اس</h2>
	<el-main>
		<Users />
	</el-main>
</el-main>
</template>

<script>
export default {
	name: "UsersRoute",
	components: {
		Users: () => import("@/components/users.vue")
	}
};
</script>

<style scoped>
</style>
