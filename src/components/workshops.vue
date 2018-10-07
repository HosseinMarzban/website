<template>
<el-row :gutter="64">
	<el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" v-for="(workshop, index) in workshopsList" :key="index">
		<div class="brick" v-on:click.prevent="goTo(workshop.name)">
			<div class="brick__image">
				<div class="brick__image-inner" :style="{backgroundImage: 'url('+ workshop.image +')'}"></div>
				<div class="brick__hover ">
					<div class="brick__hover-action-wrap">
						<router-link :to="'/workshops/' + getURL(workshop.name)" class="brick__hover-action icon-icon-external"></router-link>
					</div>
				</div>
			</div>
			<!-- End - Brick/image -->
			<div class="brick__caption">
				<div class="brick__caption-upper">
					<a href="#" class="brick__title">{{workshop.name}}</a>
					<span class="brick__tagline">{{workshop.description}}</span>
				</div>
				<!-- End - Caption/upper -->
				<div class="brick__caption-lower">
					<el-row>
						<el-col :span="12" style="text-align: left;">
							<router-link :to="'/workshops/tags/' + 'redux'">#Redux</router-link>
							<router-link :to="'/workshops/tags/' + 'redux'">#Webpack</router-link>
						</el-col>
						<el-col :span="12">
							<div class="brick__views">
								<span class="u__va--middle">{{ workshop.interested_users.length | toFa }}</span>
								<i class="ion-ios-people"></i>
							</div>
						</el-col>
					</el-row>
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

import { digits } from "@/mixins";

export default {
	name: "Workshops",
	mixins: [digits],
	props: {
		max: {
			type: Number,
			required: false,
			default: null,
		},
		orderId: {
			type: Number,
			default: null,
		},
	},
	data: () => ({
		workshopsList: [],
	}),
	computed: {
		...mapState(["workshops"]),
	},
	mounted() {
		this.boot();
	},
	methods: {
		boot() {
			this.workshopsList = this.workshops.slice();

			// Filter by auther's id
			if (this.orderId) {
				this.workshopsList = this.workshopsList.filter(({ author_id }) => author_id === this.orderId);
			}

			// Max display workshops
			if (this.max) {
				this.workshopsList = this.workshopsList.slice(0, this.max);
			}
		},
		goTo(title) {
			title = this.getURL(title);

			this.$router.push({ path: `/workshops/${title}` });
		},
		getConcatenated(...arg) {
			return arg.join(" ");
		},
		getURL(title) {
			return title.split(" ").join("-");
		},
	},
};
</script>

<style lang="scss" scoped>
.brick {
	border-radius: 20px;
	overflow: hidden;
	background-color: #fff;
	width: 100%;
	height: 100%;
	transition: all 0.2s ease-out;
	box-shadow: 0 2px 43px -4px rgba(0, 0, 0, 0.19);
	display: flex;
	-webkit-box-direction: normal;
	-webkit-box-orient: vertical;
	-moz-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
	margin-top: 40px;
}

.brick:hover {
	transform: translateY(2px);
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.05);
}

.brick__inner .brick__image {
	-webkit-box-flex: 0;
	-moz-flex-grow: 0;
	-ms-flex-positive: 0;
	flex-grow: 0;
}

.brick__inner .brick__caption {
	-webkit-box-flex: 1;
	-moz-flex-grow: 1;
	-ms-flex-positive: 1;
	flex-grow: 1;
	display: -webkit-box;
	display: -moz-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-direction: normal;
	-webkit-box-orient: vertical;
	-moz-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	-moz-justify-content: space-between;
	justify-content: space-between;
}

.brick__hover {
	-webkit-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
	opacity: 0;
	background-color: rgba(67, 91, 113, 0.5);
	position: absolute;
	top: 100%;
	left: 0;
	height: 100%;
	width: 100%;
}

.brick__hover-action-wrap {
	position: absolute;
	top: 0;
	left: 0;
	padding: 8px;
	/* background-color: hsla(0, 0%, 100%, 0.7); */
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 38px;
	white-space: nowrap;
}

.brick__hover-action {
	color: #fff;
	background-color: #435b71;
	border-radius: 100%;
	display: block;
	margin-left: 5px;
	margin-right: 5px;
	float: left;
	height: 60px;
	width: 60px;
	background-position: 50%;
	overflow: hidden;
	text-indent: -9999px;
	-webkit-transition: all 0.2s ease-out;
	transition: all 0.2s ease-out;
	cursor: pointer;
}

.brick__hover-action:active,
.brick__hover-action:focus,
.brick__hover-action:hover {
	background-color: #304151;
}

.brick__image {
	overflow: hidden;
	cursor: pointer;
	position: relative;
	padding-top: 66.17647059%;
}

.brick:hover .brick__hover {
	top: 0;
	opacity: 1;
	filter: alpha(opacity=100);
}

.brick__image-inner {
	-webkit-transition: all 0.3s;
	transition: all 0.3s;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-repeat: no-repeat;
	background-position: 50%;
	background-size: cover;
	background-size: 100% auto;
	border-top-right-radius: 20px;
	border-top-left-radius: 20px;
}

.brick__caption {
	background-color: #fff;
	position: relative;
	border-bottom-right-radius: 20px;
	border-bottom-left-radius: 20px;
}

.brick__featured {
	position: absolute;
	top: -25px;
	right: 10px;
}

.brick__caption-upper {
	padding: 19px 20px 13px;
	min-height: 75px;
}

.brick__caption-lower {
	border-top: 1px solid rgba(67, 91, 113, 0.1);
	padding: 11px 20px 13px;
}

.brick__caption-lower:after,
.brick__caption-lower:before {
	content: ' ';
	display: table;
}

.brick__caption-lower:after {
	clear: both;
}

.brick__caption-lower span.dots {
	font-size: 12px;
	line-height: 12px;
	color: rgba(67, 91, 113, 0.5);
	display: inline-block;
	vertical-align: middle;
}

@media (min-width: 768px) {
	.brick__caption-lower span.dots {
		font-size: 14px;
		line-height: 14px;
	}
}

.brick__caption-lower a {
	font-size: 12px;
	line-height: 12px;
	color: rgba(67, 91, 113, 0.5);
	display: inline-block;
	vertical-align: middle;
}

@media (min-width: 768px) {
	.brick__caption-lower a {
		font-size: 14px;
		line-height: 14px;
	}
}

.brick__caption-lower a:active,
.brick__caption-lower a:focus,
.brick__caption-lower a:hover {
	text-decoration: underline;
}
.icon-icon-external {
	background-image: url('data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20width%3D%2223px%22%20height%3D%2223px%22%20viewBox%3D%220%200%2023%2023%22%20version%3D%221.1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%3E%0A%20%20%20%20%3C%21--%20Generator%3A%20Sketch%2046.2%20%2844496%29%20-%20http%3A//www.bohemiancoding.com/sketch%20--%3E%0A%20%20%20%20%3Ctitle%3Eicon-external%3C/title%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C/desc%3E%0A%20%20%20%20%3Cdefs%3E%3C/defs%3E%0A%20%20%20%20%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Icons%22%20transform%3D%22translate%28-355.000000%2C%20-63.000000%29%22%20fill-rule%3D%22nonzero%22%20fill%3D%22%23FFFFFF%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22icon-external%22%20transform%3D%22translate%28355.000000%2C%2063.000000%29%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M21.5428289%2C0.000471499729%20L14.8244079%2C0.197182026%20C14.3919285%2C0.209075201%2013.998646%2C0.450789966%2013.7927061%2C0.831274707%20C13.5867662%2C1.21175945%2013.599456%2C1.67320948%2013.8259955%2C2.04180104%20C14.052535%2C2.41039259%2014.4585074%2C2.63012785%2014.8909868%2C2.61823466%20L18.5679605%2C2.51533992%20L9.57677632%2C11.4913926%20C9.26971594%2C11.7984529%209.1497952%2C12.2460032%209.2621871%2C12.6654554%20C9.374579%2C13.0849077%209.70220852%2C13.4125372%2010.1216608%2C13.5249291%20C10.5411131%2C13.637321%2010.9886633%2C13.5174003%2011.2957237%2C13.2103399%20L20.2808553%2C4.21915571%20L20.1688816%2C7.89612939%20C20.1599302%2C8.2172148%2020.2789592%2C8.52869366%2020.4997596%2C8.76198141%20C20.7205599%2C8.99526917%2021.0250263%2C9.13123666%2021.3461184%2C9.13994518%20L21.3794079%2C9.13994518%20C22.0351756%2C9.14019319%2022.5719006%2C8.61822811%2022.5899342%2C7.96270834%20L22.7775658%2C1.24428729%20C22.7868464%2C0.911648528%2022.6587844%2C0.589858237%2022.4234817%2C0.354555587%20C22.1881791%2C0.119252936%2021.8663888%2C-0.00880906362%2021.53375%2C0.000471499729%20L21.5428289%2C0.000471499729%20Z%22%20id%3D%22Shape%22%3E%3C/path%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M10.3242763%2C22.7886294%20C16.0237958%2C22.7819557%2020.6420365%2C18.1623611%2020.6470395%2C12.4628399%20C20.6470395%2C11.7942847%2020.1050684%2C11.2523136%2019.4365132%2C11.2523136%20C18.7679579%2C11.2523136%2018.2259868%2C11.7942847%2018.2259868%2C12.4628399%20C18.2259868%2C16.8268341%2014.6882705%2C20.3645504%2010.3242763%2C20.3645504%20C5.96028209%2C20.3645504%202.42256579%2C16.8268341%202.42256579%2C12.4628399%20C2.42256579%2C8.0988457%205.96028209%2C4.56112939%2010.3242763%2C4.56112939%20C10.9928315%2C4.56112939%2011.5348026%2C4.0191583%2011.5348026%2C3.35060308%20C11.5348026%2C2.68204786%2010.9928315%2C2.14007676%2010.3242763%2C2.14007676%20C4.62233595%2C2.14007676%205.37581675e-16%2C6.76241272%200%2C12.4643531%20C-5.37581675e-16%2C18.1662934%204.62233595%2C22.7886294%2010.3242763%2C22.7886294%20Z%22%20id%3D%22Shape%22%3E%3C/path%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/g%3E%0A%20%20%20%20%20%20%20%20%3C/g%3E%0A%20%20%20%20%3C/g%3E%0A%3C/svg%3E');
	background-repeat: no-repeat;
}

.brick__views {
	span {
		vertical-align: middle;
		margin-top: -3px;
		display: inline-block;
	}

	i {
		margin-left: 2px;
		font-size: 1.5em;
	}
}

.brick__title {
	font-size: 24px;
	font-weight: 700;
	line-height: 27px;
	color: #435b71;
	display: inline-block;
	margin-bottom: 7px;
}

.brick__tagline {
	display: block;
	font-size: 13px;
	line-height: 22px;
	color: #435b71;
}

.brick__caption-lower__social-list {
	text-align: left;
}

.brick__caption-lower__social-list li {
	display: inline-block;
	margin-left: 20px;
}
.brick__caption-lower__social-list li:first-child {
	margin-left: 0;
}
.brick__caption-lower__social-list li > a {
	font-size: 2em;
}
.image-rocket {
	margin-right: 15px;
	margin-top: 13px;
}
</style>
