import { React, useEffect, useState } from 'react'

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

import bodyCheckOverflow from "../utils/bodyCheckOverflow";

import videoForJob from "../assets/img/jobs.mp4";
import Loading from '../components/Loading/Loading';

export default function Home() {

  //set body overflow in "visible"
  bodyCheckOverflow();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);
    // window.addEventListener("load", () => {
    //   setLoading(false);
    // })
    // setTimeout(() => {
    // setLoading(false);
    // }, 5000);
  }, [])

  return (
    <>
      <GlobalStyle />
      {
        loading ?
          <Loading />
          :
          <div>
            <Header heroArea={false} />
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
          </div>
      }
    </>
  )
}
