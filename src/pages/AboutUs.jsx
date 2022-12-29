import React from 'react'


//data for header in the banner
import { infoForBanners } from "../data";
import imagesForBanner from "../assets/img/banner-about-us.png"

import GlobalStyle from "../globalStyles";

import videoForCarriers from "../assets/img/carriers.mp4";


//Custom components
import Header from "../components/Header/Header";
import ContentMain from "../components/ContentMain/ContentMain";
import WhychooseGlg from '../components/WhychooseGLG/WhychooseGlg';
import WorkWithUs from "../components/WorkWithUs/index";
import FeedbackSwipper from '../components/FeedbackSwiper/FeedbackSwipper';
import ContactUs from "../components/ContactUs/Index";
import Citys from '../components/Citys/Citys';
import Footer from '../components/Footer/Footer';

import bodyCheckOverflow from "../utils/bodyCheckOverflow";
import scrollToTop from "../utils/scrollToTop";

export default function AboutUs() {

  //set body overflow in "visible"
  bodyCheckOverflow();
  scrollToTop();

  return (
    <>
      <GlobalStyle />
      <Header
        activeSwiper={false}
        imagesForBanner={imagesForBanner}
        InfoForBanner={infoForBanners[2].info}
        buttonTitle={infoForBanners[2].buttonTitle}
      >
      </Header>
      <ContentMain />
      <WhychooseGlg />
      <WorkWithUs
        title="Join our great team"
        contentInfo="Are you interested in a promising logistics career? Take this opportunity and join Global Logistics Group."
        videoSrc={videoForCarriers}
      />
      <FeedbackSwipper
        smallTitle="workers feedback"
        bigTitle="What our workers says"
      />
      <ContactUs />
      <Citys />
      <Footer />
    </>
  )
}
