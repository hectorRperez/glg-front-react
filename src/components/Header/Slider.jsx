import React, { useRef, useState } from "react";

import item_1 from "../../assets/img/banner-image-1.png";
import item_2 from "../../assets/img/banner-image-2.png";
import item_3 from "../../assets/img/banner-image-3.png";
import item_4 from "../../assets/img/banner-image-4.png";

import styled from "styled-components";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./styles.css";

const Slide = styled.div`
	width: 100%;
	height: 100%;
`

const SlideImage = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
`

export default function Slider() {
	return (
		<>
			<Swiper className="mySwiper">
				<SwiperSlide>
					<Slide>
						<SlideImage src={item_1} alt="" />
					</Slide>
				</SwiperSlide>
				<SwiperSlide>
					<Slide>
						<SlideImage src={item_2} alt="" />
					</Slide>
				</SwiperSlide>
				<SwiperSlide>
					<Slide>
						<SlideImage src={item_3} alt="" />
					</Slide>
				</SwiperSlide>
				<SwiperSlide>
					<Slide>
						<SlideImage src={item_4} alt="" />
					</Slide>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
