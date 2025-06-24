import React from 'react';
import Navbar from "../component/navbar/Navbar.jsx";
import Banner from "../component/sections/Banner.jsx";
import pageContent from "../data/PageContent.js";
import ContactUS from "../component/sections/ContactUS.jsx";
import Footer from "../component/sections/Footer.jsx";
import FooterExtras from "../component/sections/FooterExtras.jsx";

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