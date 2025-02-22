import React, { useRef } from "react";
import "./Testimonial.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/WhatsApp Image 2025-02-01 at 13.54.39_87c2d0cc.jpg";
import user_2 from "../../assets/WhatsApp Image 2025-02-01 at 13.54.39_cf521428.jpg";
import user_3 from "../../assets/brian.jpg";
import user_4 from "../../assets/james.jpg";

const Testimonial = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx <0) {
        tx += 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testmonial">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Simon Mwaura</h3>
                  <span>Photographic Safari Director</span>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Kobi Wanjohi</h3>
                  <span>Tour advisor</span>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>James Mwaura</h3>
                  <span>Travel Consultant</span>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Brian Mwaura</h3>
                  <span>Tour Guide</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
