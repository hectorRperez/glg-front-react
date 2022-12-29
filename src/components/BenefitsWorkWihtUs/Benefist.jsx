import React from 'react'
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components'

import element1 from "../../assets/img/jobs_1.svg"
import element2 from "../../assets/img/jobs_2.svg"
import element3 from "../../assets/img/jobs_3.svg"
import element4 from "../../assets/img/jobs_4.svg"

import "../BenefitsWorkWihtUs/styles.css";



const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`

export default function Benefist() {

  return (
    <Container className='benefist'>
      <h2 className='small-title'>Benefist</h2>
      <h1 className='big-title'>Count on us for</h1>
      <Row>
        <Col xs={12} sm={6} md={3} className="element">
          <img src={element1} alt="" />
          <h3>Paid time off</h3>
          <a href="">read more</a>
        </Col>
        <Col xs={12} sm={6} md={3} className="element">
          <img src={element2} alt="" />
          <h3>Dental Insurance</h3>
          <a href="">read more</a>
        </Col>
        <Col xs={12} sm={6} md={3} className="element">
          <img src={element3} alt="" />
          <h3>Health Insurance</h3>
          <a href="">read more</a>
        </Col>
        <Col xs={12} sm={6} md={3} className="element">
          <img src={element4} alt="" />
          <h3>Vision Insurance</h3>
          <a href="">read more</a>
        </Col>
      </Row>
    </Container>
  )
}
