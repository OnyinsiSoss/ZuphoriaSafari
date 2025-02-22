import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Title from "../Components/Title/Title";
import About from "../Components/About/About";
import Testimonial from "../Components/Testimonial/Testimonial";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/footer1";
import Callaction from "../Components/cards/callaction";

const Abouut = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <About />
        <Callaction/>

        <Title subTitle="Our Team" title="Amazing team that makes it all happen.." />
        <Testimonial />
        <Title subTitle="Contact us" title="contact us" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Abouut;
