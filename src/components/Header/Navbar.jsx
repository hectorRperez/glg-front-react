import React from 'react'

import styled from "styled-components";

import Logo from "../../assets/img/logo-white.svg";

const Container = styled.div`
	height: 80vh;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
`


const Wrapper = styled.div`
	display:flex;
	justify-content: space-between;
`

const Nav = styled.nav`
	padding:42px 80px;
	display:flex;
    justify-content: space-between;
	width: 100%;
	position: relative;
	z-index: 10;
`

const Menu = styled.div`
	display:flex;
	justify-content: flex-end;
`

const MenuItem = styled.div`
	margin: 30px 20px;
`

export default function Navbar() {
	return (
		<Container>
			<Wrapper>
				<Nav>
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
