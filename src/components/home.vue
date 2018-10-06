<template>
  <el-main class="app-main">
    <h2 class="route-title">گروه برنامه نویسان جوان تهران جی اس</h2>
    <el-main>
      <p>
        این گروه از سال ۹۵ با هدف گردهمایی برنامه نویس جوان و خلاق در زمینه جاوا اسکریپت به منظور به اشتراک گذاری مباحث علمی و تجارب شخصی هر یک از افراد تشکیل شد. <br >
        تمامی گردهمایی های این گروه به صورت منظم و هر دو هفته یکبار برگزار و اطلاع رسانی میشود.<br >
        به منظور ارتباط هرچه بیشتر با این گروه میتوانید از پل های ارتباطی در این صفحه به این منظور استفاده کنید.
      </p>
    </el-main>
    <el-main>
      <h2 class="route-title">آخرین مدرسین:</h2>
      <Teachers :max="3" />
    </el-main>
  </el-main>
</template>

<style>
</style>

<script>
import Teachers from "./teachers.vue";
export default {
	name: "Home",
	components: {
		Teachers
	}
};
</script>

<style scoped>
</style>
