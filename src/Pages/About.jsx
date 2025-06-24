import React from "react";
import Navbar from "../Component/navbar/Navbar.jsx";
import Banner from "../Component/Sections/Banner.jsx";
import pageContent from "../Data/pageContent.js";
import FooterExtras from "../Component/Sections/FooterExtras.jsx";
import Footer from "../Component/Sections/Footer.jsx";
import AboutUsSection from "../Component/Sections/AboutSection.jsx";

const About = () => {
  return (
      <>
        <Navbar />
        <Banner content={pageContent.about} />
          <AboutUsSection/>
          <FooterExtras/>
          <Footer/>
      </>
  )
};

export default About;
