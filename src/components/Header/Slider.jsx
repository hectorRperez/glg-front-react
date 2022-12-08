import React, { useRef, useState } from "react";
import styled from "styled-components";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";


/* data from images slide */
import { imagesBanner } from "../../data"

/* Custom component */
import { Button } from "../Buttons/index";



// Import Swiper styles
import "swiper/css";
import "../../styles.scss";
import "./styles.css";



const SlideImage = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
`

const SlideInfo = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: -5%;
	left: 5%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: flex-start;
	width: 638px;
`

const TitleInfo = styled.h1`
	color: var(--white);
	font-family: var(--body-font-barlow);
	font-size: 48px;
	font-weight: 900;
	text-align: left;
`

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        // autoplay={{
        //   "delay": 1800,
        //   "disableOnInteraction": false
        // }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        {
          imagesBanner.map((img) => (
            <SwiperSlide key={img.id}>
              <SlideImage src={img.src} alt="" />
              <SlideInfo>
                <TitleInfo>
                  {img.info}
                </TitleInfo>
                <Button onClick={console.log}
                  size="medium">
                  {img.buttonInfo}
                </Button>
              </SlideInfo>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
