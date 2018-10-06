<template>
<el-row :gutter="64">
	<el-col v-for="(teacher, index) in teachersList" :xs="24" :sm="12" :md="8" :lg="8" :xl="8" :key="index">
		<div class="brick" v-on:click.prevent="goTo(teacher.id)">
			<div class="brick__image">
				<img :style="{backgroundImage: 'url('+ teacher.image +')'}" class="brick__image-inner">
			</div>
			<!-- End - Brick/image -->
			<div class="brick__caption">
				<div class="brick__caption-upper">
					<a href="#" class="brick__title">{{ teacher.nameFa }}</a>
					<span class="brick__tagline">{{ teacher.descriptionFa }}</span>
				</div>
				<!-- End - Caption/upper -->
				<div class="brick__caption-lower">
					<ul class="brick__caption-lower__social-list">
						<li v-for="(o, secondIndex) in teacher.social" :key="secondIndex">
							<el-tooltip :content="o.title" effect="dark" placement="top">
								<a :href="o.link" target="_blank" rel="nofollow"><i :class="['fab', 'fa-'+ o.icon]"/> </a>
							</el-tooltip>
						</li>
					</ul>
					<!-- End - Caption/Social/list -->
				</div>
				<!-- End - Caption/lower -->
			</div>
			<!-- End - Brick/Caption -->
		</div>
		<!-- End - Columns/Brick -->
	</el-col>
	<!-- End - Columns -->
</el-row>
</template>

<script>
import { mapState } from "vuex";

export default {
	name: "Teachers",
	props: {
		max: {
			type: Number,
			required: false
		}
	},
	data: () => ({
		teachersList: []
	}),
	mounted() {
		this.teachersList = this.teachers.slice();

		// set max display teachers
		if (this.max) {
			this.teachersList = this.teachersList.slice(0, this.max);
		}
	},
	computed: {
		...mapState(["teachers"])
	},
	methods: {
		goTo(id) {
			this.$router.push({ path: `/teachers/${id}` });
		}
	}
};
</script>

<style scoped>
</style>
