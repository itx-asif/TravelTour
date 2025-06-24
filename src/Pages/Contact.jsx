import React from 'react';
import Navbar from "../Component/navbar/Navbar.jsx";
import Banner from "../Component/Sections/Banner.jsx";
import pageContent from "../Data/pageContent.js";
import ContactUS from "../Component/Sections/ContactUS.jsx";
import Footer from "../Component/Sections/Footer.jsx";
import FooterExtras from "../Component/Sections/FooterExtras.jsx";

function Contact() {
    return (
        <>
        <Navbar />
        <Banner content={pageContent.contact} />
            <ContactUS/>
            <FooterExtras/>
            <Footer/>
        </>
    );
}

export default Contact;