<template>
<el-main>
	<el-main class="profile-wrap">
		<div class="profile-wrap__image">
			<img src="https://avatars2.githubusercontent.com/u/9049092?s=460&v=4" border="0" />
		</div>
		<div class="profile-wrap__cnt">
			<div class="profile-wrap__name">علی ترکی</div>
			<div class="profile-wrap__txt">Creative Front-end developer at <strong>VistaMehr</strong></div>
			<div class="profile-wrap-loc">
				<span class="profile-wrap-loc__txt">ایران٬ تهران</span>
				<span class="profile-wrap-loc__icon">
						<i class="fa fa-map-marker-alt"></i>
					</span>
			</div>
			<!-- /location -->

			<div class="profile-wrap-inf">
				<div class="profile-wrap-inf__item">
					<div class="profile-wrap-inf__title">1598</div>
					<div class="profile-wrap-inf__txt">مورد تدریس</div>
				</div>

				<div class="profile-wrap-inf__item">
					<div class="profile-wrap-inf__title">65</div>
					<div class="profile-wrap-inf__txt">روز همکاری</div>
				</div>

				<div class="profile-wrap-inf__item">
					<div class="profile-wrap-inf__title">123</div>
					<div class="profile-wrap-inf__txt">حضور در کلاسها</div>
				</div>
			</div>
			<!-- /info -->

			<div class="profile-wrap-social">
				<a href="#" class="profile-wrap-social__item github" target="_blank">
						<span class="icon-font">
							<i class="fab fa-github"></i>
						</span>
					</a>
				<a href="#" class="profile-wrap-social__item twitter" target="_blank">
						<span class="icon-font">
							<i class="fab fa-twitter"></i>
						</span>
					</a>
				<a href="#" class="profile-wrap-social__item facebook" target="_blank">
						<span class="icon-font">
							<i class="fab fa-facebook"></i>
						</span>
					</a>
				<a href="#" class="profile-wrap-social__item linkedin" target="_blank">
						<span class="icon-font">
							<i class="fab fa-linkedin"></i>
						</span>
					</a>
				<a href="#" class="profile-wrap-social__item codepen" target="_blank">
						<span class="icon-font">
							<i class="fab fa-codepen"></i>
						</span>
					</a>
				<a href="#" class="profile-wrap-social__item email" target="_blank">
						<span class="icon-font">
							<i class="fas fa-at"></i>
						</span>
					</a>
				<a href="#" class="profile-wrap-social__item link" target="_blank">
						<span class="icon-font">
							<i class="fa fa-link"></i>
						</span>
					</a>
			</div>
		</div>
	</el-main>
	<!-- /profile -->
	<el-main>
		<h2 class="route-title">آخرین ورکشاپ های برگزار شده توسط <strong>علی ترکی</strong></h2>
		مقدار داخلی
	</el-main>
</el-main>
</template>

<script>
import { mapState } from "vuex";

import find from "lodash/find";
import isEmpty from "lodash/isEmpty";

export default {
	name: "Profile",
	data: () => ({
		teacher: {},
		existTeacher: true
	}),
	computed: {
		...mapState(["teachers"])
	},
	mounted() {
		const id = parseInt(this.$route.params.id, 10);
		const findedTeacher = find(this.teachers, ({ id: teacherId }) => teacherId === id);

		if(isEmpty(findedTeacher)) {
			this.existTeacher = false;
		}else{
			this.teacher = findedTeacher;
		}
	}
};
</script>

<style lang="scss" scoped>
.profile-wrap {
	min-height: 460px;
	margin: 70px auto;
	box-shadow: 0px 8px 60px -10px rgba(13, 28, 39, 0.6);
	background: #fff;
	border-radius: 12px;
	position: relative;

	&__image {
		width: 150px;
		height: 150px;
		margin-left: auto;
		margin-right: auto;
		transform: translateY(-50%);
		border-radius: 50%;
		overflow: hidden;
		position: relative;
		z-index: 4;
		box-shadow: 0px 5px 50px 0px #f1b000, 0px 0px 0px 7px #f3e0af;

		@media screen and (max-width: 576px) {
			width: 120px;
			height: 120px;
		}

		img {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 50%;
		}
	} // image
	&__cnt {
		margin-top: -35px;
		text-align: center;
		padding: 0 20px;
		padding-bottom: 40px;
		transition: all 0.3s;
	} // center > box

	&__name {
		font-weight: 700;
		font-size: 44px;
		background: linear-gradient(to right, #3f9dec, #a637ca);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		margin-bottom: 15px;
	} // name

	&__txt {
		font-size: 18px;
		font-weight: 500;
		color: #324e63;
		margin-bottom: 15px;

		strong {
			font-weight: 700;
		}
	} // description

	&-loc {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 18px;
		font-weight: 600;

		&__icon {
			display: inline-flex;
			font-size: 27px;
			margin-left: 10px;
			margin-top: -6px;
		}
	} // location

	&-inf {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		align-items: flex-start;
		margin-top: 35px;

		&__item {
			padding: 10px 35px;
			min-width: 150px;

			@media screen and (max-width: 768px) {
				padding: 10px 20px;
				min-width: 120px;
			}
		}

		&__title {
			font-weight: 700;
			font-size: 27px;
			//color: #6944ff;
			color: #324e63;
		}

		&__txt {
			font-weight: 500;
			margin-top: 7px;
		}
	} // info

	&-social {
		margin-top: 25px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;

		&__item {
			display: inline-flex;
			width: 55px;
			height: 55px;
			margin: 15px;
			border-radius: 50%;
			align-items: center;
			justify-content: center;
			color: #fff;
			background: #405de6;
			box-shadow: 0px 7px 30px rgba(43, 98, 169, 0.5);
			position: relative;
			font-size: 21px;
			flex-shrink: 0;
			transition: all 0.3s;

			@media screen and (max-width: 768px) {
				width: 50px;
				height: 50px;
				margin: 10px;
			}

			@media screen and (min-width: 768px) {
				&:hover {
					transform: scale(1.2);
				}
			}

			&.facebook {
				background: linear-gradient(45deg, #3b5998, #0078d7);
				box-shadow: 0px 4px 30px rgba(43, 98, 169, 0.5);
			}

			&.twitter {
				background: linear-gradient(45deg, #1da1f2, #0e71c8);
				box-shadow: 0px 4px 30px rgba(19, 127, 212, 0.7);
			}

			&.instagram {
				background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
				box-shadow: 0px 4px 30px rgba(120, 64, 190, 0.6);
			}

			&.linkedin {
				background: linear-gradient(45deg, #009cda, #0073b2);
				box-shadow: 0px 4px 30px rgba(120, 64, 190, 0.6);
			}

			&.email {
				background: linear-gradient(45deg, #1769ff, #213fca);
				box-shadow: 0px 4px 30px rgba(27, 86, 231, 0.7);
			}

			&.github {
				background: linear-gradient(45deg, #333333, #626b73);
				box-shadow: 0px 4px 30px rgba(63, 65, 67, 0.6);
			}

			&.codepen {
				background: linear-gradient(45deg, #324e63, #414447);
				box-shadow: 0px 4px 30px rgba(55, 75, 90, 0.6);
			}

			&.link {
				background: linear-gradient(45deg, #d5135a, #f05924);
				box-shadow: 0px 4px 30px rgba(223, 45, 70, 0.6);
			}
		}

		.icon-font {
			display: inline-flex;
		}
	} // social
}
</style>
