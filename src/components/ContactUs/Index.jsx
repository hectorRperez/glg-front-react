import React from 'react'



/** bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* styled-components */
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 77px;
  `

const MapContact = styled.div`
  width: 100%;
  height: 458px;
`

const Title = styled.div`
  font-family: var(--body-font-barlow);
  font-weight: 700;
  font-size: 32px;
  color: var(--white);
`

const SmallText = styled.div`
  font-family: var(--body-font-gilroy-regular);
  font-size: 18px;
  color: var(--white);
`

const ContactInfo = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 12px;
`

const ContactList = styled.div`
`

const Item = styled.li`
  display: flex;
  gap: 25px;
  align-items: center;
  margin: 25px 0;
`
const ItemInfo = styled.span`
  font-family: var(--body-font-gilroy-medium);
  font-size: 16px;
  color: white;
`

export default function Index() {
  return (
    <Container>
      <Row>
        <Col xl={6}>
          <MapContact>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6247.135096514392!2d-77.411147!3d38.474544!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6f027944f0373%3A0x25b6e07e3231c54d!2s125%20Woodstream%20Blvd%20%23301%2C%20Stafford%2C%20VA%2022556%2C%20USA!5e0!3m2!1sen!2sph!4v1665672913198!5m2!1sen!2sph" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              width={"100%"}
              height={"100%"}
              style={{
                "borderRadius": "20px",
              }}
            >
            </iframe>
          </MapContact>
        </Col>
        <Col xl={6}>
          <ContactInfo>
            <Title>
              Contact Us
            </Title>
            <SmallText>
              Hey there, lets get in touch
            </SmallText>
            <ContactList>
              <ul>
                <Item>
                  <box-icon
                    name='phone'
                    type='solid'
                    color="white"
                    size="md"
                    style={{
                      transform: "rotate(270deg)"
                    }}></box-icon>
                  <ItemInfo>
                    703-552-8753
                  </ItemInfo>
                </Item>
                <Item>
                  <box-icon
                    name='map'
                    type='solid'
                    color="white"
                    size="md"
                  >
                  </box-icon>
                  <ItemInfo>
                    125 woodstream Blvd Suite 301, Stafford va 22556
                  </ItemInfo>
                </Item>
                <Item>
                  <box-icon
                    name='envelope'
                    color="white"
                    size="md"
                  >
                  </box-icon>
                  <ItemInfo>
                    Info@glgfreight.com
                  </ItemInfo>
                </Item>
              </ul>
            </ContactList>
          </ContactInfo>
        </Col>
      </Row>
    </Container>
  )
}
