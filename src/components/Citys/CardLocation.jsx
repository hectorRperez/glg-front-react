import React from 'react'

import styled from "styled-components";

import 'boxicons'

import "./styles.css";

const LocationImage = styled.img`
  height: 50%;
  width: 100%;
  object-fit: cover;
`

const BodyCard = styled.div`
  padding: 5px 5px;
`

const Title = styled.div`
  font-family: var(--body-font-barlow);
  font-weight: 700;
  color: var(--secondary-gris);
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`

const InfoWrapper = styled.div`
  margin-left: 34px;
`

const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 14px;
  gap: 24px;
`
const Number = styled.small`
  font-family: var(--body-font-gilroy-medium);
  font-size: 18px;
  color: var(--secondary-gris);
`


const Direcction = styled.small`
  font-family: var(--body-font-gilroy-medium);
  font-size: 18px;
  color: var(--secondary-gris);
`

export default function CardLocation(props) {
  const { city, img, numberPhone, OfficeDirecction } = props;

  return (
    <div className='cardLocation'>
      <LocationImage src={img} />
      <BodyCard className='cardBody'>
        <Title>
          {city}
        </Title>
        <InfoWrapper>
          <InfoContainer className='cardItem'>
            <box-icon
              name='phone'
              type='solid'
              color="#333333"
              size={"30px"}
              style={{
                transform: "rotate(270deg)"
              }}></box-icon>
            <Number>
              {numberPhone}
            </Number>
          </InfoContainer>
          {OfficeDirecction
            ? <InfoContainer>
              <box-icon
                name='map'
                type='solid'
                color="#333333"
                size={"30px"}
              >
              </box-icon>
              <Direcction>
                {OfficeDirecction}
              </Direcction>
            </InfoContainer>
            : ""
          }
        </InfoWrapper>
      </BodyCard>
    </div>
  )
}
