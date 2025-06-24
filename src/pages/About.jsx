import React from "react";
import Navbar from "../component/navbar/Navbar.jsx";
import Banner from "../component/sections/Banner.jsx";
import pageContent from "../data/PageContent.js";
import FooterExtras from "../component/sections/FooterExtras.jsx";
import Footer from "../component/sections/Footer.jsx";
import AboutUsSection from "../component/sections/AboutSection.jsx";

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
