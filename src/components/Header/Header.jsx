import React from 'react'
import styled from 'styled-components'

import Navbar from "./Navbar";
import Slider from "./Slider";

const Container = styled.div`
  height: 100vh;
`

export default function Header() {
	return (
		<Container>
			<Navbar />
			<Slider />
		</Container>
	)
}
