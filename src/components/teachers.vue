<template>
	<el-row :gutter="64">
		<el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" v-for="(teacher, index) in teachersList" :key="index">
			<div class="brick">
				<div class="brick__image">
					<img class="brick__image-inner" :style="{backgroundImage: 'url('+ teacher.image +')'}" />
				</div><!-- End - Brick/image -->
				<div class="brick__caption">
					<div class="brick__caption-upper">
						<a href="#" class="brick__title">{{teacher.nameFa}}</a>
						<span class="brick__tagline">{{teacher.descriptionFa}}</span>
					</div><!-- End - Caption/upper -->
					<div class="brick__caption-lower">
						<ul class="brick__caption-lower__social-list">
							<li v-for="(o, secondIndex) in teacher.social" :key="secondIndex">
								<el-tooltip effect="dark" :content="o.title" placement="top">
									<a :href="o.link" target="_blank" rel="nofollow">
										<i :class="['fab', 'fa-'+ o.icon]"></i>
									</a>
								</el-tooltip>
							</li>
						</ul><!-- End - Caption/Social/list -->
					</div><!-- End - Caption/lower -->
				</div><!-- End - Brick/Caption -->
			</div><!-- End - Columns/Brick -->
		</el-col><!-- End - Columns -->
	</el-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Teachers',
  data: () => ({
    teachersList: []
  }),
  props: {
    max: {
      type: Number,
      required: false
    }
  },
  mounted() {
    this.teachersList = this.teachers.slice()

    // set max display teachers
    if (this.max) {
      this.teachersList = this.teachersList.slice(0, this.max)
    }
  },
  computed: {
    ...mapState(['teachers'])
  }
}
</script>

<style scoped>
</style>
