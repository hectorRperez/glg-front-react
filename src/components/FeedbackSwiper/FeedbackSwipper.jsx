import styled from 'styled-components';
import React from 'react'

import { Autoplay, Pagination, Navigation } from "swiper";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { feedbackCarriers } from "../../data";

//styles for Swiper
import "./styles.css";
import "../../styles.scss";

import Feebback from './Feedback';

const Container = styled.div`
  margin-top: 100px;
`

const Header = styled.header`
  width: 90%;
  margin: auto;
  margin-bottom: 42px;

  & h2{
    font-family: var(--body-font-gilroy-semi);
    color: var(--secondary-orange-2);
    font-size: 24px;
  }

  & h1{
    font-family: var(--body-font-barlow);
    color: var(--white);
    font-size: 32px;
  }
`


export default function FeedbackSwipper(props) {
  const { smallTitle, bigTitle } = props;
  return (
    <Container>
      <Header>
        <h2>{smallTitle}</h2>
        <h1>{bigTitle}</h1>
      </Header>
      <div className="feedBackContainer">
        <Swiper className="mySwiper"
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            "delay": 3500,
            "disableOnInteraction": false
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {
            feedbackCarriers.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <Feebback
                    urlImages={item.urlImages}
                    nameCarrier={item.nameCarrier}
                    feedbackInfo={item.feedbackInfo}
                    companyName={item.company}
                  />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </Container>
  )
}
