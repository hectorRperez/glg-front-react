import React from 'react'
import styled from "styled-components";

/** Variables de estilos */
import "../../styles.scss";

const Service = styled.img`
  height: 302px;
  width: 380px;
  border-radius: 10px;
`
const InfoWrapper = styled.div`
  display: flex;
  height: 25px;
  flex-direction: column;
  text-align: left;
  width: 360px;
  height: 100%;
`

const Container = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  & :hover{
    cursor: grab;
  }
`

const Title = styled.h2`
  margin-top: 22px;
  margin-bottom: 8px;
  color: white;
  font-size: 18px;
  font-family: var(--body-font-barlow);
`

const Info = styled.p`
  font-size: 16px;
  color: white;
  margin-bottom: 16px;
`

function ServicesItem(props) {
  const { img, title, info } = props;
  return (
    <Container>
      <Service src={img} />
      <InfoWrapper>
        <Title>{title}</Title>
        <Info>{info}</Info>
      </InfoWrapper>
    </Container>
  )
}

export default ServicesItem