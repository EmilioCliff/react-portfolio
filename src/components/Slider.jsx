import React from "react";
import Blog from "./Blog";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

function Slider({ blogs }) {
	const categoryMapBuild = {};

	for (let index = blogs.length - 1; index >= 0; index--) {
		const blog = blogs[index];
		const category = blog.data.category.toLowerCase();

		if (!categoryMapBuild[category]) {
			categoryMapBuild[category] = [];
		}

		blog.data.index = index;
		categoryMapBuild[category].push(blog.data);
	}

	return (
		<Swiper
			modules={[Navigation, Pagination, A11y, Autoplay]}
			// spaceBetween={0}
			slidesPerView={1}
			pagination={{ clickable: true }}
			autoplay={{ delay: 5000 }}
			breakpoints={{
				992: {
					slidesPerView: blogs.lenght === 1 ? 1 : 2,
				},
				1200: {
					slidesPerView: blogs.lenght === 1 ? 1 : 3,
				},
			}}
		>
			{blogs.map((blog, index) => (
				<SwiperSlide key={index}>
					<Blog
						blog={blog.data}
						categories={categoryMapBuild}
						slider={true}
						currentBlogIndex={index}
						key={index}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default Slider;
