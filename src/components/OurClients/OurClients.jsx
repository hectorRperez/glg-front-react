import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


import styled from "styled-components";

import "../../styles.scss";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import client_1 from "../../assets/img/client-1.jpg"
import client_2 from "../../assets/img/client-2.svg"
import client_3 from "../../assets/img/client-3.png"
import client_4 from "../../assets/img/client-4.png"

/* Custom class from Swiper */
import "./styles.css";


const Container = styled.section`
	width: 90%;
	margin: 0 auto;
	margin-top: 40px;
	margin-bottom: 80px;
`

const TitleSection = styled.h2`
	margin-bottom: 58px;
	font-family: var(--body-font-barlow);
	font-size: 32px;
	color: var(--white);
`

const Client = styled.img`
	width: 100px;
	height: 80px;
`

function OurClients() {


  /**
    * @param {integer} numbersOfElements value is the numbers of elements that slider show in display
   */
  let numbersOfElements = 4;

  if (window.innerWidth < 800) {
    numbersOfElements = 2;
  }

  if (window.innerWidth < 650) {
    numbersOfElements = 1;
  }

  return (
    <Container className="ourClientSection">
      <TitleSection>
        Our Clients
      </TitleSection>
      <Swiper
        slidesPerView={numbersOfElements}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          "delay": 1800,
          "disableOnInteraction": false
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Client src={client_1}></Client>
        </SwiperSlide>
        <SwiperSlide>
          <Client src={client_2}></Client>
        </SwiperSlide>
        <SwiperSlide>
          <Client src={client_3}></Client>
        </SwiperSlide>
        <SwiperSlide>
          <Client src={client_4}></Client>
        </SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default OurClients