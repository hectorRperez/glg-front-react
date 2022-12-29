import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'boxicons'

import { Link } from "react-router-dom";

import styled from "styled-components";

import bg_footer from "../../assets/img/bg-footer.png"
import glg_logo from "../../assets/img/logo-white.svg";

import "../../styles.scss";

const Container = styled.footer`
  width: 100%;
  position: relative;
  z-index: 1;

  margin: 0 auto;
  margin-top: 89px;


  &::before{
    content: "";
    background-image: url(${(props) => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.4;
    }
`

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  padding: 80px 0;
`

const Col_1 = styled.div`
`

const Title = styled.h2`
  font-size: 24px;
  font-weight: 900;
  margin-bottom: ${(props) => props.marginBottom}px;
  margin-top: ${(props) => props.marginTop}px;
  font-family: var(--body-font-barlow);
  color: var(--white);
`

const LinkItem = styled.li`
  margin: 24px 0;
`

const Col_2 = styled.div`
`

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const Item = styled.span`
  font-family: var(--body-font-barlow);
  font-size: 16px;
  color: var(--white);
  margin: 14px 0;
`

const SocialMediaWrapper = styled.div`
  display: flex;
  gap: 10px;
`

const SocialLink = styled.div`
  i{
    font-size: 30px;
    color: #041320;
    background-color: white;
  }
`

export default function Footer() {
  return (
    <Container img={bg_footer}>
      <Wrapper>
        <Row>
          <Col md={12} lg={5} className="d-flex justify-content-center mb-5">
            <img src={glg_logo} width="40%" alt="" />
          </Col>
          <Col md={12} lg={3}>
            <Col_1>
              <Title>
                QUICK LINK
              </Title>
              <ul>
                <LinkItem>
                  <Link to={"/shippers"}>Shippers</Link>
                </LinkItem>
                <LinkItem>
                  <Link to={"/carriers"}>
                    Carriers
                  </Link>
                </LinkItem>
                <LinkItem>
                  <Link to={"/aboutUs"}>
                    About Us
                  </Link>
                </LinkItem>
                <LinkItem>
                  <Link to={"/jobs"}>
                    Jobs&Careers
                  </Link>
                </LinkItem>
                <LinkItem>
                  <Link>
                    Blog
                  </Link>
                </LinkItem>
              </ul>
            </Col_1>
          </Col>
          <Col md={12} lg={3}>
            <Col_2>
              <Title
                marginTop={0}
                marginBottom={24}>
                CONTACT US
              </Title>
              <ContactWrapper>
                <box-icon
                  name='phone'
                  type='solid'
                  color="white"
                  size={"24px"}
                  style={{
                    transform: "rotate(270deg)"
                  }}></box-icon>
                <Item>0001-2304-402921</Item>
              </ContactWrapper>
              <ContactWrapper>
                <box-icon
                  name='map'
                  type='solid'
                  color="white"
                >
                </box-icon>
                <Item>125 woodstream Blvd Suite 301, Stafford va 22556</Item>
              </ContactWrapper>
              <Title
                marginBottom="21"
                marginTop="31"
              >
                SOCIAL MEDIA
              </Title>
              <SocialMediaWrapper>
                {/* TODO: AGREGAR LOS ENLACES*/}
                <SocialLink>
                  <a target="_blank" href="https://www.linkedin.com/company/global-logistics-group-va/mycompany/">
                    <i class='bx bxl-twitter' ></i>
                  </a>
                </SocialLink>
                <SocialLink>
                  <i class='bx bxl-facebook' ></i>
                </SocialLink>
                <SocialLink>
                  <i class='bx bxl-instagram' ></i>
                </SocialLink>
                <SocialLink>
                  <i class='bx bxl-linkedin' ></i>
                </SocialLink>
              </SocialMediaWrapper>
            </Col_2>
          </Col>
        </Row>
      </Wrapper>
    </Container >
  )
}
