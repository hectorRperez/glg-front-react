import React from 'react'
import styled from 'styled-components'

import "../../styles.scss";

import { tablet, smallTablet } from "../../responsive";

/* All icons  */
import iconCard_1 from "../../assets/img/iconCard_5.png";
import iconCard_2 from "../../assets/img/option_2.png";
import iconCard_3 from "../../assets/img/iconCard_3.png";
import iconCard_4 from "../../assets/img/option_4.png";
import iconCard_5 from "../../assets/img/option_5.png";

const Container = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 100px;
`

const PayOptionHeader = styled.div`
    font-family: var(--body-font-gilroy-semi);
    
    & h2{
      color: var(--secondary-orange-2);
      font-size: 24px;
    }

    & h1{
      font-family: var(--body-font-barlow);
      color: var(--white);
      font-size: 32px;
    }
`

const PayOptionBody = styled.div`
  width: 90%;
  margin: 54px auto;
  display: flex;
  gap: 16px;
  padding: 10px;
  justify-content: space-between;
  ${tablet({ flexWrap: "wrap" })}
`

const ItemOption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 20%;
  ${smallTablet({ width: "100%" })}

  & img{
    width: 40px;
    height: 40px;
  }

  & h2{
    font-size: 24px;
    font-family: var(--body-font-barlow);
    font-weight: 900;
    color: var(--white);
  }
`

function PayOption() {
  return (
    <Container>
      <PayOptionHeader>
        <h2> Payment options </h2>
        <h1>Quick Pay Option</h1>
      </PayOptionHeader>
      <PayOptionBody>
        <ItemOption>
          <img src={iconCard_1} alt="" />
          <h2>Payment 24 Hours</h2>
        </ItemOption>
        <ItemOption>
          <img src={iconCard_2} alt="" />
          <h2>EFS Fuel Advance</h2>
        </ItemOption>
        <ItemOption>
          <img src={iconCard_3} alt="" />
          <h2>ACH Direct Deposit</h2>
        </ItemOption>
        <ItemOption>
          <img src={iconCard_4} alt="" />
          <h2>Payment 7 Days</h2>
        </ItemOption>
        <ItemOption>
          <img src={iconCard_5} alt="" />
          <h2>21 days, no fee</h2>
        </ItemOption>
      </PayOptionBody>
    </Container>
  )
}

export default PayOption