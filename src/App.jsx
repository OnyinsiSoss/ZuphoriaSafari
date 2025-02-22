import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Servicescard from "./Components/cards/servicescard";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/footer1";
import Home from "./Components/her_o/home";
import Enquire from "./Components/cards/enquire";
import Callaction from "./Components/cards/callaction";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <div className="container">
        <About />
        <Title subTitle="our services" title="Let us be your trusted safari partner" />
        <Servicescard />
        <Callaction />
        <Title subTitle="Gallery" title="tours photos" />
        <Campus />
        <Title subTitle="Our Team" title="Amazing team that makes it all happen" />
        <Testimonial />
        <Enquire/>
        <Title subTitle="Contact us" title="contact us" />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
