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

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Welcome />
      <OurClients />
      <LogisticsServices />
      <CarriersSection />
      <WorkWithUs />
      <ContactUs />
      <Citys />
      <Footer />
    </>
  )
}
