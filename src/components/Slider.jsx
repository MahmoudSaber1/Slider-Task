import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { Text } from "@chakra-ui/react";
import CardImage from "./CardImage";

const Slider = ({ data }) => {
	return (
		<>
			<Text
				fontSize={["md", "xl", "3xl"]}
				fontWeight="bold"
				mb="5"
				mt={"4"}
				ml={[10, 14, 16]}
			>
				{data.header}
			</Text>
			<Swiper
				slidesPerView={1}
				spaceBetween={10}
				loop={true}
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 10,
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 10,
					},
				}}
				navigation={true}
				modules={[Navigation]}
				className="mySwiper"
			>
				{data.data.map((item) => (
					<SwiperSlide key={item.id}>
						<CardImage item={item} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default Slider;
