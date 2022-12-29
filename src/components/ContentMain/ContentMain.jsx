import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'

import "./styles.css";

import Image1 from "../../assets/img/element-about-us-1.png";
import Image2 from "../../assets/img/element-about-us-2.png";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 80px;

  & .aboutWrapper:nth-child(2){
    margin-top: 80px;
  }

  @media (max-width: 767px) {
    & .aboutWrapper:nth-child(2){
      flex-direction: column-reverse;
    }
  }
`

export default function ContentMain() {
  return (
    <Container>
      <Row className='aboutWrapper align-items-center'>
        <Col className='aboutContent' sm={12} md={6}>
          <span>Who son?</span>
          <h2>GLG Global Logistics Group</h2>
          <p>Global Logistics Group – GLG is one of the fastest growing third-party logistics providers in the industry. We offer the latest equipment, workforce, and expertise as a trusted freight broker in Stafford, Virginia. Our team of experts can identify the right solutions for any destination to the size, weight, or mode. If you need domestic shipments done within North America, our local market experts draw on our range of resources for ground and air expedited service.</p>
        </Col>
        <Col className='aboutImage d-flex justify-content-center' sm={12} md={6}>
          <img src={Image1} alt="" />
        </Col>
      </Row>
      <Row className='aboutWrapper align-items-center'>
        <Col className='aboutImage aboutImage d-flex justify-content-center' sm={12} md={6}>
          <img src={Image2} alt="" />
        </Col>
        <Col className='col_2 aboutContent' sm={12} md={6}>
          <span>What we want to achieve?</span>
          <h2>Our Mision</h2>
          <p>Our mission is to deliver quality freight forwarding services at fair and
            affordable rates. Unlike many companies today, we maintain pride in what we do. Our company policies
            are built on common courtesy and the Golden Rule, not just the bare minimum set by state and
            national logistics standards</p>
        </Col>
      </Row>
    </Container>
  )
}
