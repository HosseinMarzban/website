<template>
<el-main>
	<h2 class="route-title">تمامی مدرسین گروه تهران جی اس</h2>
	<el-main>
		<Teachers />
	</el-main>
</el-main>
</template>

<script>
import Teachers from "@/components/teachers.vue";

export default {
	name: "TeachersRoute",
	components: {
		Teachers
	}
};
</script>

<style scoped>
</style>
