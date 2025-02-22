import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero3 from "../Components/Hero/hero3";
import Contact from "../Components/Contact/Contact";
import Footer1 from "../Components/Footer/footer1";

const Contacts = () => {
  return (
    <div>
      <Navbar />
      <Hero3 />
      <div className="container">
        <Contact />
        <Footer1 />
      </div>
    </div>
  );
};

export default Contacts;
