import React from 'react'
import styled from "styled-components";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import iconCard_1 from "../../assets/img/iconCard_1.png";
import iconCard_2 from "../../assets/img/iconCard_2.png";
import iconCard_3 from "../../assets/img/iconCard_3.png";
import iconCard_4 from "../../assets/img/iconCard_4.png";
import iconCard_5 from "../../assets/img/iconCard_5.png";
import iconCard_6 from "../../assets/img/iconCard_6.png";

import "../../styles.scss";


const Container = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 32px;
`

const Header = styled.header`
  font-family: var(--body-font-barlow);
  font-size: 2em;
  color: white;
  font-weight: 700;

  & p{
    margin-top: 24px;
    font-family: var(--body-font-gilroy-semi);
    font-size: 18px;
    color: var(--white);
  }
`

const Body = styled.div`
  margin-top: 48px;
`

const SmallTitle = styled.h2`
  font-family: var(--body-font-gilroy-semi);
  font-size: 24px;
  color: var(--secondary-orange-2);
  margin-bottom: 5px;
`

const BigTitle = styled.h1`
  font-family: var(--body-font-barlow);
  font-size: 32px;
  color: white;
`

const WrapperItems = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 54px;
`

const BenefitsCard = styled.div`
  position: relative;
  padding: 42px 42px;
  border-radius: 20px;
  background-color: transparent;
  overflow: hidden;
  margin: 25px 0;
  min-height: 241px;

  &::before{
    content: "";
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(104,111,118,0.4);
    z-index: -1;
  }
`

const BenefitsCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;

  & h2{
    font-size: 16px;
    font-weight: 700;
    font-family: var(--body-font-barlow);
    color: white;
  }
`

const BenefitsCardBody = styled.div`
  margin-top: 8px;
  color: white;
  text-align: justify;
  margin-bottom: 14px;
  
  & p{
    font-family: var(--body-font-gilroy-regular);
    font-size: 14px;
  }

  & a{
    color: var(--secondary-orange-2);
    font-size: 14px;
    text-decoration: underline;
  }
`

function Benefits() {
  return (
    <>
      <Container>
        <Header>
          <h2>Reliability Guaranteed</h2>
          <p>Global Logistics Group – GLG never falters in its quality in every step of the freight transportprocess. As a top-of-the-line freight broker, we make sure every carrier carries the right load allthe time, whatever the equipment type. Our dedicated logistics team provides support even afterhours.
          </p>
        </Header>
        <Body>
          <SmallTitle>
            Benefits
          </SmallTitle>
          <BigTitle>
            Count on us for
          </BigTitle>
          <WrapperItems>
            <Row>
              <Col xs={12} lg={4}>
                <BenefitsCard>
                  <BenefitsCardHeader>
                    <img src={iconCard_1} alt="" />
                    <h2>Access to a divers selection of loads</h2>
                  </BenefitsCardHeader>
                  <BenefitsCardBody>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, eum.</p>
                    <a href="">Read more</a>
                  </BenefitsCardBody>
                </BenefitsCard>
              </Col>
              <Col xs={12} lg={4}>
                <BenefitsCard>
                  <BenefitsCardHeader>
                    <img src={iconCard_2} alt="" />
                    <h2>Freigh of all types and commodities</h2>
                  </BenefitsCardHeader>
                  <BenefitsCardBody>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, eum.</p>
                    <a href="">Read more</a>
                  </BenefitsCardBody>
                </BenefitsCard>
              </Col>
              <Col xs={12} lg={4}>
                <BenefitsCard>
                  <BenefitsCardHeader>
                    <img src={iconCard_3} alt="" />
                    <h2>Convenient payment options</h2>
                  </BenefitsCardHeader>
                  <BenefitsCardBody>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, eum.</p>
                    <a href="">Read more</a>
                  </BenefitsCardBody>
                </BenefitsCard>
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={4}>
                <BenefitsCard>
                  <BenefitsCardHeader>
                    <img src={iconCard_4} alt="" />
                    <h2>Dedicated carrier relations</h2>
                  </BenefitsCardHeader>
                  <BenefitsCardBody>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, eum.</p>
                    <a href="">Read more</a>
                  </BenefitsCardBody>
                </BenefitsCard>
              </Col>
              <Col xs={12} lg={4}>
                <BenefitsCard>
                  <BenefitsCardHeader>
                    <img src={iconCard_5} alt="" />
                    <h2>Round the clock assitance</h2>
                  </BenefitsCardHeader>
                  <BenefitsCardBody>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, eum.</p>
                    <a href="">Read more</a>
                  </BenefitsCardBody>
                </BenefitsCard>
              </Col>
              <Col xs={12} lg={4}>
                <BenefitsCard>
                  <BenefitsCardHeader>
                    <img src={iconCard_6} alt="" />
                    <h2>Perfectly tailored shipment</h2>
                  </BenefitsCardHeader>
                  <BenefitsCardBody>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, eum.</p>
                    <a href="">Read more</a>
                  </BenefitsCardBody>
                </BenefitsCard>
              </Col>
            </Row>
          </WrapperItems>
        </Body>
      </Container>
    </>
  )
}

export default Benefits