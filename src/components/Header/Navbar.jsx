import clsx from 'clsx';
import { React, useState, useEffect } from 'react'

import styled from "styled-components";
import { Link } from 'react-router-dom';

import Logo from "../../assets/img/logo-white.svg";

import { Button } from "../Buttons/index";

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
  align-items: center;
`

const Menu = styled.div`
	display:flex;
	justify-content: flex-end;
`

const MenuItem = styled.div`
	margin: 30px 20px;

  & a{
    display: inline-block;
    position: relative;
    padding-bottom: 0px;
    transition: color .35s ease;
  }

  & a:hover{
    color: white;
  }

  & a::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    transition: width 0s ease, background .35s ease;
  }

  & a::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background: var(--secondary-orange-1);
    transition: width .35s ease;
}

  & a:hover::before {
    width: 100%;
    background-color: var(--secondary-orange-1);
    transition: width .35s ease;
  }

  & a:hover::after {
    width: 100%;
    background: transparent;
    transition: all 0s ease;
  }
`

/** Only Navbar movil components */

const ContainerMovil = styled.div`
  width: 95%;
  margin: 0 auto;
  position: relative;
`

const NavbarOnlyMovil = styled.nav`
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  background-color: transparent;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 101;
  transition: all 0.5s ease;
`

const MenuMovil = styled.div`
  background-color: #041320;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  height: 100%;
  width: 100%;
  display: table;
  text-align: center;
`

export default function Navbar() {

  const [isMovil, setIsMovil] = useState(() => {
    return window.innerWidth <= 800 ? true : false;
  });
  const [isScroll, setIsScroll] = useState(false);
  const [isToggle, setIsToggle] = useState(false);

  const setBackgroundNav = () => {
    if (window.scrollY > 80) {
      setIsScroll(true)
    } else {
      setIsScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", setBackgroundNav)
  })


  function NavbarDesktop() {

    const path = window.location.pathname;

    return (
      <Container>
        <Wrapper>
          <Nav className={isScroll ? "activeNavScroll" : " "}>
            <Link to={"/"}>
              <img src={Logo} alt="" />
            </Link>
            <Menu>
              <MenuItem>
                <a href="">Shippers</a>
              </MenuItem>
              <MenuItem>
                <Link to={"/carriers"} className={path === "/carriers" ? "activeLink" : ""}>
                  Carriers
                </Link>
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

  function NavbarMovil() {

    const classNav = clsx("btnMovilMenu", {
      "toggleAct": isToggle,
    })

    return (
      <ContainerMovil>
        <NavbarOnlyMovil className={isScroll ? "activeNavScroll" : " "}>
          <a href="">
            <img src={Logo} alt="" />
          </a>
          <a onClick={() => {
            setIsToggle(!isToggle)
            let body = document.querySelector("body")

            if (!isToggle) {
              body.style.overflow = "hidden";
            } else {
              body.style.overflow = "auto";
            }
          }}
            className={classNav}>
            <span className='lines'></span>
          </a>
        </NavbarOnlyMovil>
        {isToggle &&
          <MenuMovil className="item animate__animated animate__zoomIn">
            <ul className='menu-list'>
              <li className="item animate__animated animate__fadeInRight">
                <a href="">Home</a>
              </li>
              <li className="item animate__animated animate__fadeInLeft">
                <a href="">Shippers</a>
              </li>
              <li className="item animate__animated animate__fadeInRight">
                <a href="">Carriers</a>
              </li>
              <li className="item animate__animated animate__fadeInLeft">
                <a href="">About Us</a>
              </li>
              <li className="item animate__animated animate__fadeInRight">
                <a href="">Job&Careers</a>
              </li>
              <li className="item animate__animated animate__fadeInLeft">
                <a href="">Blog</a>
              </li>
              <Button>
                Join our network
              </Button>
              <div className="socialMedia__wrapper">
                <a href="">
                  <i class='bx bxl-facebook' ></i>
                </a>
                <a href="">
                  <i class='bx bxl-twitter' ></i>
                </a>
                <a href="">
                  <i class='bx bxl-instagram' ></i>
                </a>
                <a href="">
                  <i class='bx bxl-linkedin' ></i>
                </a>
              </div>
            </ul>
          </MenuMovil>
        }
      </ContainerMovil>
    )
  }

  /** 
  * Custom Button 
  * @param {Boolean} isMovil it is true or false 
  * @return {Function} return NavbarMovil if it is in movil or NavbarDesktop if it is in Desktop 
  */

  return (
    <>
      {
        isMovil ?
          NavbarMovil() :
          NavbarDesktop()
      }
    </>
  )
}

function CustomLink(params) {

}
