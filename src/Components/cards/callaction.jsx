import React from 'react';
import "./callaction.css";
import { Link as Link1} from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo(0, 0)
}

const callaction = () => {
  return (
    <div>
        <section class="card3">
      <div class="call-card">
        <div class="banner1">
          <h1>ready to get away ?</h1>
        </div>
        <p>
          We have many experiences for you, with our Safari Experts and Tour
          Leaders. Choose the trip that suits you and request information.
        </p>
        <Link1 onClick={scrollToTop}  to= "/contacts" className="btn" >get in touch. </Link1>
      </div>
    </section>
    </div>
  )
}

export default callaction