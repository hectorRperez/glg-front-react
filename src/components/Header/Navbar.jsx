import { React, useState } from 'react'

import styled from "styled-components";

import Logo from "../../assets/img/logo-white.svg";

const Container = styled.div`
	position: relative;
	top: 0;
	right: 0;
	left: 0;
`


const Wrapper = styled.div`
	display:flex;
	justify-content: space-between;
`

const Nav = styled.nav`
  background-color: transparent;
	padding:42px 80px;
	display:flex;
    justify-content: space-between;
	width: 100%;
  top: 0;
  left: 0;
	position: fixed;
	z-index: 10;
  transition: all 0.5s ease;
`

const Menu = styled.div`
	display:flex;
	justify-content: flex-end;
`

const MenuItem = styled.div`
	margin: 30px 20px;
`

export default function Navbar() {

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener("scroll", changeBackground)

  return (
    <Container>
      <Wrapper>
        <Nav className={navbar ? "activeNavScroll" : " "}>
          <img src={Logo} alt="" />
          <Menu>
            <MenuItem>
              <a href="">Shippers</a>
            </MenuItem>
            <MenuItem>
              <a href="">Carriers</a>
            </MenuItem>
            <MenuItem>
              <a href="">About Us</a>
            </MenuItem>
            <MenuItem>
              <a href="">Job&Careers</a>
            </MenuItem>
            <MenuItem>
              <a href="">Blog</a>
            </MenuItem>
          </Menu>
        </Nav>
      </Wrapper>
    </Container>
  )
}
