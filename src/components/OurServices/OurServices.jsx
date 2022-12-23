import React from 'react'
import styled from 'styled-components'

import "../../styles.scss";

import Services from './Services';

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 80px;

  h2{
    font-size: 32px;
    color: var(--white);
    font-family: var(--body-font-barlow);
    font-weight: 700;
  }

  p{
    font-family: var(--body-font-gilroy-medium);
    font-size: 24px;
    color: var(--white);
  }
`

export default function OurServices() {
  return (
    <Container>
      <h2>Our Services</h2>
      <p>We provide our clients with immediate access to our wide variety of logistics services.</p>
      <div className="OurServicesWrapper">
        <Services />
      </div>
    </Container>
  )
}
