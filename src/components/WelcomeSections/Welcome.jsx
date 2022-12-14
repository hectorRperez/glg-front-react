import React from 'react'

import styled from "styled-components";

/* Custom components */
import { Button } from "../Buttons/index";
import ProgressBar from './ProgressBar';

import "../../styles.scss";

import bg from "../../assets/img/bg.svg"

import { desktop, tablet } from "../../responsive";

const Container = styled.section`
	background-image: url(${(props) => props.bg});
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	border-color:white;
	margin-top: 100px;
	margin: 0 auto;
	text-align: center;
  width: 90%;
`

const SmallTitle = styled.p`
	font-size: var(--h2-font-size);
	font-family: var(--body-font-gilroy-bold);
	color: var(--white);
	padding: 25px 15px;
	text-align: center;
`

const Title = styled.h2`
	font-size: 42px;
	color: var(--secondary-orange-2);
	font-family: var(--body-font-barlow);
	font-weight: 800;
	text-align: center;
	padding: 10px 20px;
	margin-bottom: 8px;
`
const Info = styled.p`
	font-size: 18px;
	text-align: center;
	font-family: var(--body-font-gilroy-medium);
	color: var(--white);
	letter-spacing: 0.2px;
	width: 80%;
	margin: 0 auto;
	margin-bottom: 48px;
`

const StatisticsWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 40px;
	justify-content: space-evenly;
	margin: 0 auto;
`


const StatisticsItem = styled.div`
	text-align: center;
	width: 33.3%;
  ${tablet({ marginTop: "25px" })}
`

const WrapperItems = styled.div`
	display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
	width: 100%;
	margin-bottom: 25px;
  ${tablet({
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
})}
`

const NumberStatistics = styled.h2`
	font-size: 42px;
	color: var(--white);
	font-family: var(--body-font-gilroy-black);
`

const InfoStatistics = styled.span`
	font-size: 14px;
	font-family: var(--body-font-gilroy-semi);
	color: var(--white);
`

const WrapperProgressBar = styled.div`
  display: flex;
  gap: 50px;
  padding: 25px 0;
  justify-content: center;
  width: 60%;
  align-items: center;
  ${tablet({
  flexDirection: "column",
  gap: "1px",
  textAlign: "initial",
  alignItems: "flex-start"
})}

  p{
    color: white;
    width: 250px;
  }
`

export default function Welcome() {
  return (
    <Container bg={bg}>
      <SmallTitle>
        Welcome to Global Logistics Grouppp
      </SmallTitle>
      <Title>
        Making transportation fast and safe
      </Title>
      <Info>
        As a leading provider of domestic
        logistics and freight broker in Stafford,
        Virginia, we help you move
        your freight quickly, safely, and efficiently. Our expertise in freight forwarding guarantees the
        best
        possible results for all parties involved in the transportation process. Don???t waste your
        investment.
      </Info>

      <StatisticsWrapper>

        <WrapperItems>
          <WrapperProgressBar>
            <p>daily loads</p>
            <ProgressBar counter={90} />
          </WrapperProgressBar>
          <WrapperProgressBar>
            <p>trucks en route</p>
            <ProgressBar counter={75} />
          </WrapperProgressBar>
          <WrapperProgressBar>
            <p>customers served</p>
            <ProgressBar counter={93} />
          </WrapperProgressBar>
        </WrapperItems>
        <Button>
          More about us
        </Button>
      </StatisticsWrapper>
    </Container>
  )
}
