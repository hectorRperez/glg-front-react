import React from 'react'

import { infoForBanners } from "../data";
import videoForCarriers from "../assets/img/carriers.mp4";

/** Custom components */
import Header from "../components/Header/Header";
import WorkWithUs from "../components/WorkWithUs/index";

import imagesForBanner from "../assets/img/banner-image-3.png"
import GlobalStyle from '../globalStyles';
import Benefits from '../components/Benefits/Benefits';
import PayOption from '../components/PayOption/PayOption';
import FeedbackSwipper from '../components/FeedbackSwiper/FeedbackSwipper';
import FAQ from '../components/FAQ/FAQ';
import ContactUs from "../components/ContactUs/Index";
import Citys from '../components/Citys/Citys';
import Footer from '../components/Footer/Footer';
import FloatingButton from '../components/FloatingButton/FloatingButton';

import bodyCheckOverflow from "../utils/bodyCheckOverflow";


function Carriers() {

  //set body overflow in "visible"
  bodyCheckOverflow();

  return (
    <>
      <GlobalStyle />
      <Header
        activeSwiper={false}
        imagesForBanner={imagesForBanner}
        InfoForBanner={infoForBanners[0].info}
        buttonTitle={infoForBanners[0].buttonTitle}
      >
      </Header>
      <Benefits />
      <PayOption />
      <WorkWithUs
        title="Haul with us"
        contentInfo="We use state-of-the-art technology to keep in touch with a wide network of carriers. Our specialists help customers choose from a large number of shipments per day."
        videoSrc={videoForCarriers}
      />
      <FeedbackSwipper
        smallTitle="Carriers Feed Back"
        bigTitle="What our carriers says"
      />
      <FAQ />
      <ContactUs />
      <Citys />
      <Footer />
      <FloatingButton />
    </>
  )
}

export default Carriers