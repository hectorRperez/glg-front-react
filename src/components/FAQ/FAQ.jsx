import React from 'react'
import styled from 'styled-components'

import "../../styles.scss";
import FlushExample from './Accordion';

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 80px;
`

const Title = styled.h2`
  font-size: 32px;
  color: var(--white);
  font-family: var(--body-font-barlow);
  font-weight: 800;
  margin-bottom: 20px;
`

export default function FAQ() {
  return (
    <Container>
      <Title>
        FAQ'S
      </Title>
      <FlushExample />
    </Container>
  )
}
