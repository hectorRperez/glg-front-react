import React from 'react'

import styled from "styled-components";

import '../../styles.scss';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import "./styles.css";

/** Data de los diferentes servicios */
import { services } from "../../data";

/* Custom components */
import { Button } from "../Buttons/index";

import ServicesItem from "./ServicesItem";

const Container = styled.section`
  text-align: center;
  `

const LogisticServicesContainer = styled.section`
  margin: 0 auto;
  width: 90%;
`

const SmallTitle = styled.h3`
	font-family: var(--body-font-gilroy-semi);
	font-size: 24px;
	color: var(--secondary-orange-2);
	margin-bottom: 8px;
`
const Title = styled.h2`
	font-size: 32px;
	color: var(--white);
	font-family: var(--body-font-barlow);
`

function LogisticsServices() {
  return (
    <LogisticServicesContainer>
      <SmallTitle>What we do</SmallTitle>
      <Title>Logistics Services</Title>
      <Container className='LogisticsSection'>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {
            services.map((item) => (
              <SwiperSlide key={item.id}>
                <ServicesItem
                  img={item.src}
                  title={item.nameServices}
                  info={item.infoServices}
                />
              </SwiperSlide >
            ))
          }
        </Swiper>
        <Button>Se more info</Button>
      </Container>
    </LogisticServicesContainer>
  )
}

export default LogisticsServices