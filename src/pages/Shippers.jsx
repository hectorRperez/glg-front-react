import React from 'react'
import GlobalStyle from '../globalStyles'

import videoForCarriers from "../assets/img/carriers.mp4";

//Custom componets
import Header from '../components/Header/Header'

import imagesForBanner from "../assets/img/banner-image-shippers.png"
import { infoForBanners } from "../data";
import WhychooseGlg from '../components/WhychooseGLG/WhychooseGlg';
import OurServices from '../components/OurServices/OurServices';
import WorkWithUs from "../components/WorkWithUs";
import FeedbackSwipper from "../components/FeedbackSwiper/FeedbackSwipper";

import FAQ from '../components/FAQ/FAQ';
import ContactUs from "../components/ContactUs/Index";
import Citys from '../components/Citys/Citys';
import Footer from '../components/Footer/Footer';
import FloatingButton from '../components/FloatingButton/FloatingButton';


import bodyCheckOverflow from "../utils/bodyCheckOverflow";


export default function Shippers() {
  //set body overflow in "visible"
  bodyCheckOverflow();
  return (
    <>
      <GlobalStyle />
      <Header
        activeSwiper={false}
        imagesForBanner={imagesForBanner}
        InfoForBanner={infoForBanners[1].info}
        buttonTitle={infoForBanners[1].buttonTitle}
      >
      </Header>
      <WhychooseGlg />
      <OurServices />
      <WorkWithUs
        title="Haul with us"
        contentInfo="We use state-of-the-art technology to keep in touch with a wide network of carriers. Our specialists help
        customers choose from a large number of shipments per day."
        videoSrc={videoForCarriers}
      />
      <FeedbackSwipper
        smallTitle="Shippers Feedback"
        bigTitle="What our Shippers says"
      />
      <FAQ />
      <ContactUs />
      <Citys />
      <Footer />
      <FloatingButton />
    </>
  )
}
