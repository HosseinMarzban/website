<template>
<el-main>
	<h2 class="route-title">تمامی مدرسین گروه تهران جی اس</h2>
	<el-main>
		<Users want="teachers" />
	</el-main>
</el-main>
</template>

<script>
import Users from "@/components/users.vue";

export default {
	name: "UsersRoute",
	components: {
		Users
	}
};
</script>

<style scoped>
</style>
