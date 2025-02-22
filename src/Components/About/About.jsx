import React from "react";
import "./About.css";
import about_img from "../../assets/about.jpg";

const About = ({setplaystate}) => {
  return (
    <div className="about">
      {/* <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
      </div> */}

      <div className="about-right">
        <h1>“Karibu! Welcome to Zuphoria,</h1>
        <p>
            A travel companion rooted in the heart
            of Africa,Kenya. Our journey began with a simple yet profound idea:
            to share the beauty, diversity, and rich cultural tapestry of this
            incredible continent with the world.
        </p>
      </div>
    </div>
  );
};

export default About;
