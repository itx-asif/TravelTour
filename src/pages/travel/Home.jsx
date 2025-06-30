import React from 'react';
import Navbar from "../../component/navbar/Navbar.jsx";
import Hero from "../../component/sections/Hero.jsx";
import KeyBenefits from "../../component/sections/KeyBenefits.jsx";
import DestinationSection from "../../component/sections/DestinationSection.jsx";
import PopularTripsSection from "../../component/sections/PopularTripsSection.jsx";
import Footer from "../../component/sections/Footer.jsx";
import PromoBanner from "../../component/sections/PromoBanner.jsx";
import FooterExtras from "../../component/sections/FooterExtras.jsx";
import Progressbar from "../../component/ui/ui25/progressbar.jsx";

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