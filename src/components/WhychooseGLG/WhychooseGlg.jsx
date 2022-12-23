import styled from 'styled-components';
import React from 'react'

import "./styles.css";

import bg from "../../assets/img/bg.png";

console.log(bg)

import { Col, Row } from 'react-bootstrap';

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`

export default function WhychooseGlg() {
  return (
    <>
      <Container bg={bg}>
        <h1 className='whyChooseTitle'>Why choose GLG?</h1>
        <Row>
          <Col md={12} lg={4}>
            <div className="whyChooseCard">
              <h3 className='WhyChooseGLG__card__title'>
                SHIPPING ANYWHERE IN AMERICA
              </h3>
              <p className='WhyChooseGLG__card__content'>
                We mobilize a dynamic network of shippers and carriers
                prepared to deliver any kind of shipment
                intact and on time.
              </p>
            </div>
          </Col>
          <Col md={12} lg={4}>
            <div className="whyChooseCard">
              <h3 className='WhyChooseGLG__card__title'>
                THE BEST SERVICE ALWAYS GUARANTEED
              </h3>
              <p className='WhyChooseGLG__card__content'>
                Our experts provide custom solutions that meet every client’s
                unique transport requirements. Customer satisfaction is always our priority.
              </p>
            </div>
          </Col>
          <Col md={12} lg={4}>
            <div className="whyChooseCard">
              <h3 className='WhyChooseGLG__card__title'>
                EFFECTIVE LOGISTICS SOLUTIONS
              </h3>
              <p className='WhyChooseGLG__card__content'>
                We mobilize a dynamic network of shippers and carriers
                prepared to deliver any kind of shipment intact and on time.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
