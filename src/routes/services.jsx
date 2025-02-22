import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero1 from "../Components/Hero/hero1";
import Title from "../Components/Title/Title";
import Servicescard from "../Components/cards/servicescard";
import Testimonial from "../Components/Testimonial/Testimonial";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/footer1";
import Enquire from "../Components/cards/enquire";
import Callaction from "../Components/cards/callaction";


const services = () => {
  return (
    <div>
      <Navbar />
      <Hero1 />
      <div className="container">
        <Servicescard />
        <Enquire/>
        <Testimonial />
        <Title subTitle="Contact us" title="contact us" />
        <Callaction/>
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default services;
