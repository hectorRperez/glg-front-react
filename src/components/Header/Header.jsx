import React from 'react'
import styled from 'styled-components'

//Custom
import Navbar from "./Navbar";
import Slider from "./Slider";
import HeroVideo from './HeroVideo';


const Container = styled.div`
  height: 100vh;
`

/* TODO: Usar GPT3 para documentar mejor */
/**
* main header
* @param {boolean} activeSwiper determines if the main slider or a sticky banner is displayed 
* @param {String} imagesForBanner determines the rute for images it will that displayed in the banner
*/

export default function Header(props) {
  const { activeSwiper, imagesForBanner, InfoForBanner, buttonTitle, heroArea = true } = props;
  return (
    <Container>
      <Navbar />
      {
        heroArea ?
          <Slider
            activeSwiper={activeSwiper}
            imagesForBanner={imagesForBanner}
            InfoForBanner={InfoForBanner}
            buttonTitle={buttonTitle}
          />
          :
          <HeroVideo />
      }

    </Container>
  )
}
