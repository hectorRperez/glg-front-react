import React from 'react'
import styled from "styled-components";

import { movil } from "../../responsive";

import video from "../../assets/img/hero-video.mp4";

import { Button } from "../Buttons/index";
import { Link } from 'react-router-dom';

const SlideInfo = styled.div`
	height: 100%;
	position: absolute;
	top: -5%;
	left: 5%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: flex-start;
`

const TitleInfo = styled.h1`
	color: var(--white);
	font-family: var(--body-font-barlow);
	font-size: 40px;
	font-weight: 900;
	text-align: left;
  width: 70%;
  ${movil({ width: "90%" })}
`

export default function HeroVideo() {
  return (
    <div>
      <video autoPlay loop muted playsInline width="100%" className='hero-video'>
        <source src={video} type='video/mp4' />
      </video>
      <SlideInfo>
        <TitleInfo>
          Making Transportation Fast and Safe
        </TitleInfo>
        <a target="_blank" href="https://haulforglg.rmissecure.com/_c/std/carrier/Login.aspx">
          <Button size="medium">
            Get a Quote
          </Button>
        </a>
      </SlideInfo>
    </div >
  )
}
