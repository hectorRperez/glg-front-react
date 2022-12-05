import React from 'react'

import styled from "styled-components";

/** responsive only for Desktop */
import { desktop } from "../../responsive";

import 'boxicons'


const Card = styled.div`
  width: 100%;
  background-color: white;
  margin-top: 24px;
  border-radius: 20px;
  overflow: auto;
`

// style={{
// '&::before': {
// content: `''`,
// position: 'absolute',
// top: '0',
// left: '0',
// display: "block",
// width: "100%",
// height: "100%",
// background: "rgb(16, 31, 85)",
// background: "linear-gradient(190deg, rgba(16, 31, 85, 0.6) 38%, rgba(4, 20, 35, 1) 91%)",
// zIndex: "2",
// transition: "0.5s all",
// opacity: "0"
// }
// }}

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
  gap: 34px;
  margin-bottom: 14px;
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
  const { city, img, numberPhone, direcction } = props;

  return (
    <Card>
      <LocationImage src={img} />
      <BodyCard>
        <Title>
          {city}
        </Title>
        <InfoWrapper>
          <InfoContainer>
            <box-icon
              name='phone'
              type='solid'
              color="#333333"
              size={"24px"}
              style={{
                transform: "rotate(270deg)"
              }}></box-icon>
            <Number>
              {numberPhone}
            </Number>
          </InfoContainer>
          {direcction
            ? <InfoContainer>
              <box-icon
                name='map'
                type='solid'
                color="#333333"
                size={"24px"}
              >
              </box-icon>
              <Direcction>
                {direcction}
              </Direcction>
            </InfoContainer>
            : ""
          }
        </InfoWrapper>
      </BodyCard>
    </Card>
  )
}
