
import React from 'react'

import { infoForBanners } from "../data";
import imagesForBanner from "../assets/img/banner-jobs.png"

import GlobalStyles from "../globalStyles";

//import function for body overflow in "visible"
import bodyCheckOverflow from "../utils/bodyCheckOverflow";
import scrollToTop from "../utils/scrollToTop";

//custom componets
import Header from '../components/Header/Header'
import Benefist from '../components/BenefitsWorkWihtUs/Benefist';
import FeedbackSwipper from '../components/FeedbackSwiper/FeedbackSwipper';
import Footer from '../components/Footer/Footer';

export default function Jobs() {

  //set body overflow in "visible"
  bodyCheckOverflow();
  scrollToTop();

  return (
    <>
      <GlobalStyles />
      <Header
        activeSwiper={false}
        imagesForBanner={imagesForBanner}
        InfoForBanner={infoForBanners[3].info}
        buttonTitle={infoForBanners[3].buttonTitle}
      >
      </Header>
      <Benefist />
      <FeedbackSwipper
        smallTitle="Workers FeedBack"
        bigTitle="What our Workers says"
      />
      <Footer />
    </>
  )
}
