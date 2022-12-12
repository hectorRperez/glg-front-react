import React from 'react'

import styled from "styled-components";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

import Img from '../../assets/img/carrier_1.png';
import map from "../../assets/img/map.png";


/** layouts  */
import { tablet } from "../../responsive";

/* Custom class */
import "../../styles.scss";

import { Button } from "../Buttons/index";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 77px;
  background-image: url(${(props) => props.map});
  background-repeat: no-repeat;
  background-position: center right;
  background-size: contain;
`

const CarriersImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 450px;
  border-radius: 20px;
`

const Info = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  ${tablet({ marginTop: "20px" })};
`

const SmallTag = styled.div`
  background-color: red;
  padding: 5px 10px;
  text-align: center;
  font-size: 16px;
  font-family: var(--body-font-gilroy-bold);
  background-color: rgba(255, 119, 0, 0.2);
  color: var(--secondary-orange-2);
  border-radius: 10px;
  margin-bottom: 20px;
`

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  font-weight: 700;
  font-family: var(--body-font-barlow);
  color: white;
`

const InfoContent = styled.p`
  font-family: var(--body-font-gilroy-regular);
  font-size: 18px;
  color: var(--white);
  text-align: justify;
`

export default function CarriersSection() {
  return (
    <Container map={map}>
      <Row>
        <Col xl={6}>
          <CarriersImg src={Img} />
        </Col>
        <Col xl={6}>
          <Info>
            <SmallTag>
              Carriers
            </SmallTag>
            <Title>
              Finding the lanes you want, made easier!
            </Title>
            <InfoContent>
              Global Logistics Group uses state-of-the-art technology to keep in touch with a wide network of freight carriers. Our specialists help clients choose from an extensive number of shipments per day.
            </InfoContent>
            <Button>Join our network</Button>
          </Info>
        </Col>
      </Row>
    </Container>
  )
}
