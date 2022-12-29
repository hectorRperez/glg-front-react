import styled from "styled-components";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";


/* data from images slide */
import { imagesBanner } from "../../data"

/* Custom component */
import { Button } from "../Buttons/index";

import { movil } from "../../responsive"


// Import Swiper styles
import "swiper/css";
import "../../styles.scss";
import "./styles.css";



const SlideImage = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
`

const SlideInfo = styled.div`
	height: 100%;
	position: absolute;
	top: -5%;
	left: 5%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: flex-start;
`

const TitleInfo = styled.h1`
	color: var(--white);
	font-family: var(--body-font-barlow);
	font-size: 40px;
	font-weight: 900;
	text-align: left;
  width: 70%;
  ${movil({ width: "90%" })}
`

/**
* main Swiper
* @param {boolean} activeSwiper 
  determines if the main slider or a sticky banner is displayed 
  for default activedSwiper is will in true
* @param {String} imagesForBanner determines the rute for images it will that displayed in the banner
*/
export default function Slider(props) {

  const { activeSwiper = true, imagesForBanner, InfoForBanner, buttonTitle } = props;

  function ShowSwiper() {
    return (
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          "delay": 4800,
          "disableOnInteraction": false
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        {
          imagesBanner.map((img) => (
            <SwiperSlide key={img.id}>
              <SlideImage src={img.src} alt="" />
              <SlideInfo>
                <TitleInfo>
                  {img.info}
                </TitleInfo>
                <Button onClick={console.log} size="medium">
                  {img.buttonInfo}
                </Button>
              </SlideInfo>
            </SwiperSlide>
          ))
        }
      </Swiper>
    )
  }

  function StickyBanner(imagesForBanner, InfoForBanner) {
    return (
      <>
        <SlideImage src={imagesForBanner}>
        </SlideImage>
        <SlideInfo>
          <TitleInfo>
            {InfoForBanner}
          </TitleInfo>
          <Button size="medium">
            {buttonTitle}
          </Button>
        </SlideInfo>
      </>
    )
  }

  return (
    <>
      {
        activeSwiper ?
          ShowSwiper() :
          StickyBanner(imagesForBanner, InfoForBanner)
      }
    </>
  );
}
