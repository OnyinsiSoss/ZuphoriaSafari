import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Title from "../Components/Title/Title";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/footer1";
import Callaction from "../Components/cards/callaction";
import Hero2 from "../Components/Hero/hero2";



const Gallery = () => {
  return (
    <div>

      <Navbar />
      <Hero2 />
      <div className="container">
        <Callaction/>
        <Title subTitle="Contact us" title="contact us" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Gallery;
