import React from 'react';
import "./enquire.css";
import { Link as Link1} from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo(0, 0)
}

const enquire = () => {
  return (
    <div>
        <section class="card2">
      <div class="info-card">
        <div class="banner">
          <h1>Are you ready to go ?</h1>
        </div>
        <p>
          We have many experiences for you, with our Safari Experts and Tour
          Leaders. Choose the trip that suits you and request information.
        </p>
        <Link1 onClick={scrollToTop} to= "/contacts" className="btn" > get in touch. </Link1>
      </div>
    </section>
    </div>
  )
}

export default enquire