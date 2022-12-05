import React from 'react'
import styled from "styled-components";



import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* Global Styles */
import "../../styles.scss";

import { locations } from "../../data";

import CardLocation from "./CardLocation";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 80px;
`
const Title = styled.h2`
  font-family: var(--body-font-barlow);
  font-weight: 700;
  font-size: 32px;
  color: var(--white);
`

export default function Citys() {
  return (
    <Container>
      <Title>
        Find us in the following cities
      </Title>
      <Row>
        {
          /* TODO: CONTINUAR CREANDO EL COMPONENTE */
          locations.map((item) => (
            <Col xs={4} key={item.id}>
              <CardLocation
                img={item.src}
                city={item.city}
                numberPhone={item.number}
                direcction={item.direcction}
              />
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}
