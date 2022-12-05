import React from 'react'
import styled from "styled-components";

/* local assets  */
import video from "../../assets/img/jobs.mp4"


/*  Custom CSS class */
import "./styles.css"
import "../../styles.scss";

/*  Custom Button component */
import { Button } from "../Buttons/index";

const Container = styled.div`
  height: 572px;
  width: 100%;
  margin-top: 212px;
  position: relative;
`

const InfoContent = styled.div`
  height: 100%;
  width: 45%;
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 49px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const Title = styled.h2`
  font-family: var(--body-font-barlow);
  font-weight: 900;
  color: var(--white);
  width: 70%;
  margin-bottom: 20px;
`
const Info = styled.p`
  font-size: 18px;
  font-family: var(--body-font-gilroy-bold);
  color: var(--white);
`

function index() {
  return (
    <Container className='workWithUs'>
      <video autoPlay loop muted playsInline className='video'>
        <source src={video} type="video/mp4" />
      </video>
      <InfoContent>
        <Title>
          Work with us and be part an amazing team!
        </Title>
        <Info>
          With a company culture that empowers, every team member contributes to a network of connections built on trust.
        </Info>
        <Button>Find your Job</Button>
      </InfoContent>
    </Container>
  )
}

export default index