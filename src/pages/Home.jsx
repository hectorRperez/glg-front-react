import React from 'react'

import GlobalStyle from '../globalStyles';
/* All Components */
import Header from "../components/Header/Header";
import Welcome from "../components/WelcomeSections/Welcome";
import OurClients from '../components/OurClients/OurClients';
import LogisticsServices from '../components/logistics-services/LogisticsServices';
import CarriersSection from '../components/CarriersSection/index';
import WorkWithUs from "../components/WorkWithUs/index";
import ContactUs from "../components/ContactUs/Index";
import Citys from "../components/Citys/Citys";
import Footer from "../components/Footer/Footer";

import videoForJob from "../assets/img/jobs.mp4";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Welcome />
      <OurClients />
      <LogisticsServices />
      <CarriersSection />
      <WorkWithUs
        title="Work with us and be part an amazing team!"
        contentInfo="With a company culture that empowers, every team member contributes to a network of connections built on trust."
        videoSrc={videoForJob}
      />
      <ContactUs />
      <Citys />
      <Footer />
    </>
  )
}
