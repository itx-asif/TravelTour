import React from "react";
import Navbar from "../component/navbar/Navbar.jsx";
import Banner from "../component/sections/Banner.jsx";
import pageContent from "../data/PageContent.js";
import TripSection from "../component/sections/TripSections.jsx";
import FooterExtras from "../component/sections/FooterExtras.jsx";
import Footer from "../component/sections/Footer.jsx";

const Tour = () => {
  return (
      <>
        <Navbar />
          <Banner content={pageContent.tours} />
          <TripSection/>
          <FooterExtras/>
          <Footer/>
      </>
  )
};

export default Tour;
