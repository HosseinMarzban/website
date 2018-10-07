<template>
<el-main>
	در دست ساخت
</el-main>
</template>

<script>
import { mapState } from "vuex";

export default {
	name: "Details",
	data: () => ({

	}),
	computed: {
		...mapState(["users", "workshops"]),
	},
};
</script>

<style lang="scss" scoped>
</style>
