<template>
	<div class="slider-backdrop relative">
		<div id="referenzSlider" class="flex items-center">
			<div class="infoSlides w-5/12">
				<div
					v-swiper:swiperLeft="swiperOptionTop"
					class="swiper swiper-no-swiping gallery-top"
					ref="swiperTop"
				>
					<div class="swiper-wrapper">
						<div class="swiper-slide" v-for="item in referenz" :key="item.node.id">
							<div class="left-part">
								<span class="customer">{{item.node.customer}}</span>
								<h2 class="project-headline">{{item.node.project}}</h2>
								<a class="ext-link" :href="item.node.url" rel="noopnener noreferrer" target="_blank">
									<svg
										width="17px"
										height="17px"
										viewBox="0 0 17 17"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
									>
										<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
											<g transform="translate(-112.000000, -2785.000000)" fill="#ED6663" fill-rule="nonzero">
												<g id="link" transform="translate(112.000000, 2785.000000)">
													<path
														d="M9.682,10.998 C8.739,10.998 7.796,10.639 7.078,9.921 C6.883,9.726 6.883,9.409 7.078,9.214 C7.273,9.019 7.59,9.019 7.785,9.214 C8.831,10.26 10.532,10.26 11.578,9.214 L15.214,5.578 C16.26,4.532 16.26,2.831 15.214,1.785 C14.168,0.739 12.467,0.739 11.421,1.785 L8.353,4.853 C8.158,5.048 7.841,5.048 7.646,4.853 C7.451,4.658 7.451,4.341 7.646,4.146 L10.714,1.078 C12.15,-0.358 14.486,-0.358 15.921,1.078 C17.356,2.514 17.357,4.85 15.921,6.285 L12.285,9.921 C11.567,10.639 10.624,10.998 9.681,10.998 L9.682,10.998 Z"
														id="Path"
													/>
													<path
														d="M3.682,16.998 C2.739,16.998 1.796,16.639 1.078,15.921 C-0.358,14.485 -0.358,12.149 1.078,10.714 L4.714,7.078 C6.15,5.642 8.486,5.642 9.921,7.078 C10.116,7.273 10.116,7.59 9.921,7.785 C9.726,7.98 9.409,7.98 9.214,7.785 C8.168,6.739 6.467,6.739 5.421,7.785 L1.785,11.421 C0.739,12.467 0.739,14.168 1.785,15.214 C2.831,16.26 4.532,16.26 5.578,15.214 L8.646,12.146 C8.841,11.951 9.158,11.951 9.353,12.146 C9.548,12.341 9.548,12.658 9.353,12.853 L6.285,15.921 C5.567,16.639 4.624,16.998 3.681,16.998 L3.682,16.998 Z"
														id="Path"
													/>
												</g>
											</g>
										</g>
									</svg>
									{{item.node.urltext}}
								</a>
							</div>
						</div>
					</div>
					<div class="swiper-pagination" slot="pagination"></div>
					<div class="swiper-button-next" slot="button-next">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="swiper-next"
							width="23"
							height="17"
							viewBox="0 0 23 17"
						>
							<path
								d="M22.817,8.038,15.358.191a.6.6,0,0,0-.879,0,.679.679,0,0,0,0,.925l6.4,6.73H.622a.655.655,0,0,0,0,1.308H20.876l-6.4,6.73a.679.679,0,0,0,0,.925.6.6,0,0,0,.88,0l7.459-7.847a.679.679,0,0,0,0-.925Z"
							/>
						</svg>
					</div>
					<div class="swiper-button-prev" slot="button-prev">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="swiper-next"
							width="23"
							height="17"
							viewBox="0 0 23 17"
						>
							<path
								d="M22.817,8.038,15.358.191a.6.6,0,0,0-.879,0,.679.679,0,0,0,0,.925l6.4,6.73H.622a.655.655,0,0,0,0,1.308H20.876l-6.4,6.73a.679.679,0,0,0,0,.925.6.6,0,0,0,.88,0l7.459-7.847a.679.679,0,0,0,0-.925Z"
							/>
						</svg>
					</div>
				</div>
			</div>
			<div class="imageSlides w-7/12">
				<div
					v-swiper:swiperRight="swiperOptionThumbs"
					class="swiper swiper-no-swiping gallery-thumbs"
					ref="swiperThumbs"
				>
					<div class="swiper-wrapper">
						<div class="image swiper-slide" v-for="item in referenz" :key="item.node.id">
							<g-image :src="item.node.mainimage"></g-image>
							<div class="techstack">
								<span class="block mb-2 font-bold">Tech Stack:</span>
								<div class="stack-item" :class="tech" v-for="tech in item.node.techstack" :key="tech"></div>
								<!-- <div ></div> -->
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script >
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
	props: {
		referenz: {
			type: Array,
			required: true
		}
	},
	components: {
		Swiper,
		SwiperSlide
	},
	directives: !process.browser
		? {}
		: {
				swiper: require("vue-awesome-swiper").directive
		  },
	data() {
		return {
			swiperOptionTop: {
				loop: false,
				loopedSlides: 5, // looped slides should be the same
				spaceBetween: 30,
				speed: 700,
				noSwiping: true,
				pagination: {
					el: ".swiper-pagination",
					type: "fraction"
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				}
			},
			swiperOptionThumbs: {
				loop: false,
				loopedSlides: 5, // looped slides should be the same
				spaceBetween: 10,
				noSwiping: true,
				centeredSlides: true,
				slidesPerView: "auto"
			}
		};
	},
	mounted() {
		console.log("Swiper instance:", this.swiperLeft);
		this.$nextTick(() => {
			this.swiperLeft.controller.control = this.swiperRight;
			this.swiperRight.controller.control = this.swiperLeft;
		});
	}
};
</script>

<style lang="scss" scoped>
/////////////
.imageSlides {
	width: 60vw;
	overflow: hidden;
	.swiper-container {
		overflow: visible;
		width: 50vw;
		margin-left: 0;
	}
	.swiper-slide {
		width: 50vw;
	}
}
.infoSlides {
	padding: 0 8.555vw 0 5.555vw;
	h2,
	p,
	span,
	a {
		color: white;
	}

	.customer {
		font-family: "Gilroy";
		font-weight: 700;
		opacity: 0.5;
		font-size: 0.9vw;
		padding-left: 7vw;
	}
	h2 {
		margin-top: 3vw;
		margin-bottom: 3vw;
		font-size: 2.7vw;
	}
	.ext-link {
		font-family: "Gilroy";
		font-weight: 700;
		line-height: 3vw;
		svg {
			display: inline;
			margin-right: 6px;
			position: relative;
			bottom: 2px;
		}
	}
}

.slider-backdrop {
	padding: 5.555vw 0;
	margin: 5.555vw 0;
}
.slider-backdrop:before {
	content: " ";
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 40vw;
	background: theme("colors.dark");
	z-index: -1;
}
.swiper-pagination-fraction {
	display: inline-block;
	top: 2px;
	bottom: auto;
	color: white;
	font-family: "Gilroy";
	font-weight: 300;
	font-size: 0.9vw;
	text-align: left;
	font-weight: 700;
	width: 7vw;
	background: theme("colors.dark");
}

.swiper-pagination-fraction:after {
	content: "";
	height: 1px;
	background: theme("colors.primary");
	width: 3vw;
	display: inline-block;
	margin-left: 1vw;
	position: relative;
	bottom: 0.4vw;
}
.swiper-button-next,
.swiper-button-prev {
	bottom: 0;
	top: auto;
}

.swiper-button-next:after,
.swiper-button-prev:after {
	content: "";
}
.swiper-next {
	path {
		fill: theme("colors.primary");
		transition: all 0.3s ease-in-out;
	}
}
.swiper-button-prev {
	right: 5vw;
	left: auto;
	transform: rotate(180deg);
	path {
		fill: white;
	}
}
.swiper-button-next {
	border: 1px solid theme("colors.primary");
}
.swiper-button-next,
.swiper-button-prev {
	width: 3vw;
	height: 3vw;

	border-radius: 50%;
	background: theme("colors.dark");
	transition: all 0.3s ease-in-out;
}
.swiper-button-next:hover {
	background: theme("colors.primary");
	border-color: theme("colors.primary");
	path {
		fill: theme("colors.dark");
	}
}
.swiper-button-next:focus,
.swiper-button-prev:focus {
	outline: none;
	box-shadow: none;
}
.swiper-slide {
	.project-headline,
	.ext-link,
	.customer {
		position: relative;
		transition: all 1s;
	}
}

.swiper-slide-next {
	.customer {
		opacity: 0;
		left: 1rem;
	}
	.project-headline {
		opacity: 0;
		left: 3rem;
	}
	.ext-link {
		opacity: 0;
		left: 2rem;
	}
}
.swiper-slide-active {
	.customer {
		opacity: 1;
		left: 0rem;
		transition-delay: 1.1s;
	}
	.project-headline {
		opacity: 1;
		transition-delay: 0.5s;
		left: 0rem;
	}
	.ext-link {
		opacity: 1;
		left: 0rem;
		transition-delay: 0.8s;
	}
}
.swiper-slide-prev {
	.customer {
		opacity: 0;
		left: 1rem;
	}
	.project-headline {
		opacity: 0;
		left: -5rem;
	}
	.ext-link {
		opacity: 0;
		left: 2rem;
	}
}
.imageSlides {
	.swiper-slide {
		position: relative;
		background: theme("colors.dark");
		img {
			transition: opacity 0.5s;
		}
	}

	.techstack {
		position: absolute;
		bottom: 0;
		background: #f3f3f3;
		padding: 1vw;
		transition: opacity 0.5s;

		.stack-item {
			transition: opacity 0.5s;
			width: 25px;
			height: 25px;
			opacity: 0.5;
			margin-right: 20px;
			display: inline-block;
		}
	}

	.swiper-slide-next {
		img {
			opacity: 0.2;
		}
		.stack-item,
		.techstack {
			opacity: 0;
		}
	}
	.swiper-slide-active {
		img {
			opacity: 1;
		}
		.techstack {
			opacity: 1;
			transition-delay: 0.6s;
		}
		.stack-item {
			opacity: 0.5;
			transition-delay: 0.8s;
		}
		.stack-item:nth-of-type(1) {
			transition-delay: 0.9s;
		}
		.stack-item:nth-of-type(2) {
			transition-delay: 1s;
		}
		.stack-item:nth-of-type(3) {
			transition-delay: 1.1s;
		}
		.stack-item:nth-of-type(4) {
			transition-delay: 1.2s;
		}
		.stack-item:nth-of-type(5) {
			transition-delay: 1.3s;
		}
		.stack-item:nth-of-type(6) {
			transition-delay: 1.4s;
		}
		.stack-item:nth-of-type(7) {
			transition-delay: 1.5s;
		}
	}
	.swiper-slide-prev {
		img {
			opacity: 0.2;
		}
		.stack-item,
		.techstack {
			opacity: 0;
		}
	}

	/////// Techstack

	.angular:before {
		content: url(../../assets/images/techstack/angular.svg);
	}
	.bootstrap:before {
		content: url(../../assets/images/techstack/bootstrap.svg);
	}
	.craftcms:before {
		content: url(../../assets/images/techstack/craftcms.svg);
	}
	.css3:before {
		content: url(../../assets/images/techstack/css3.svg);
	}
	.drupal:before {
		content: url(../../assets/images/techstack/drupal.svg);
	}
	.gatsby:before {
		content: url(../../assets/images/techstack/gatsby.svg);
	}
	.graphql:before {
		content: url(../../assets/images/techstack/graphql.svg);
	}
	.gsap:before {
		content: url(../../assets/images/techstack/gsap.svg);
	}
	.html5:before {
		content: url(../../assets/images/techstack/html5.svg);
	}
	.angular:before {
		content: url(../../assets/images/techstack/angular.svg);
	}
	.jquery:before {
		content: url(../../assets/images/techstack/jquery.svg);
	}
	.js:before {
		content: url(../../assets/images/techstack/js.svg);
	}
	.react:before {
		content: url(../../assets/images/techstack/react.svg);
	}
	.sass:before {
		content: url(../../assets/images/techstack/sass.svg);
	}
	.shopware:before {
		content: url(../../assets/images/techstack/shopware.svg);
	}
	.tailwindcss:before {
		content: url(../../assets/images/techstack/tailwindcss.svg);
	}
	.typo3:before {
		content: url(../../assets/images/techstack/typo3.svg);
	}
	.vue:before {
		content: url(../../assets/images/techstack/vue.svg);
	}
	.vuetify:before {
		content: url(../../assets/images/techstack/vuetify.svg);
	}
	.woo:before {
		content: url(../../assets/images/techstack/woo.svg);
	}
	.wordpress:before {
		content: url(../../assets/images/techstack/wordpress.svg);
	}
	.sketch:before {
		content: url(../../assets/images/techstack/sketch.svg);
	}
	.shopify:before {
		content: url(../../assets/images/techstack/shopify.svg);
	}
	.forestry:before {
		content: url(../../assets/images/techstack/shopify.svg);
	}
}
</style>