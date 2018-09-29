<template>
	<el-main>
		<h2 class="route-title">تمامی مدرسین گروه تهران جی اس</h2>
		<el-main>
			<Teachers />
		</el-main>
	</el-main>
</template>

<style>
</style>

<script>
import Teachers from './teachers.vue'

export default {
  name: 'Teachers-route',
  components: {
    Teachers
  }
}
</script>

<style scoped>
</style>
