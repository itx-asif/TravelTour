import React from "react";
import Navbar from "../Component/navbar/Navbar.jsx";
import Banner from "../Component/Sections/Banner.jsx";
import pageContent from "../Data/pageContent.js";
import TripSection from "../Component/Sections/TripSections.jsx";
import FooterExtras from "../Component/Sections/FooterExtras.jsx";
import Footer from "../Component/Sections/Footer.jsx";

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
