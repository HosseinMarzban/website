<template>
<el-main>
	<h2 class="route-title">تمامی مدرسین گروه تهران جی اس</h2>
	<el-main>
		<Users want="teachers" />
	</el-main>
</el-main>
</template>

<script>
export default {
	name: "UsersRoute",
	components: {
		Users: () => import("@/components/users.vue"),
	},
};
</script>

<style scoped>
</style>
