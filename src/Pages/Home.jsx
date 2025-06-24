import React from 'react';
import Navbar from "../Component/navbar/navbar";
import Hero from "../Component/Sections/Hero";
import KeyBenefits from "../Component/Sections/KeyBenefits.jsx";
import DestinationSection from "../Component/Sections/DestinationSection.jsx";
import PopularTripsSection from "../Component/Sections/PopularTripsSection.jsx";
import Footer from "../Component/Sections/Footer.jsx";
import PromoBanner from "../Component/Sections/PromoBanner.jsx";
import FooterExtras from "../Component/Sections/FooterExtras.jsx";

function Home() {
    return (
       <>
           <Navbar />
           <Hero />
           <KeyBenefits/>
           <DestinationSection columns={3}/>
           <PopularTripsSection/>
           <PromoBanner/>
           <FooterExtras/>
           <Footer/>
       </>
    );
}

export default Home;