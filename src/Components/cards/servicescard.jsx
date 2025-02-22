import React from 'react'
import "./servicescard.css"
import { Link as Link1 } from 'react-router-dom'

const scrollToTop = () => {
  window.scrollTo(0, 0)
}

const servicescard = () => {
  return (
    <div class="cards">
      <div class="card11">
        <div class="carde">
          <h1>Destination</h1>
          <div>
            <p>
              Are you ready to go? We have created many experiences for you, with
              our Safari Experts and Tour Leaders. Choose the trip that's right
              for you!
            </p>
            <div class="card-btn">
              <Link1 onClick={scrollToTop} to='/services' class="btn">learn more</Link1>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="carde">
          <h1>accomodation</h1>
          <div>
            <p>
              Are you ready to go? We have created many experiences for you, with
              our Safari Experts and Tour Leaders. Choose the trip that's right
              for you!
            </p>
            <div class="card-btn">
              <Link1 onClick={scrollToTop} to='/services' class="btn">learn more</Link1>
            </div>
          </div>
        </div>
      </div>
      <div class="card22">
        <div class="carde">
          <h1>Experiences</h1>
          <div>
            <p>
              Are you ready to go? We have created many experiences for you, with
              our Safari Experts and Tour Leaders. Choose the trip that's right
              for you!
            </p>
            <div class="card-btn">
              <Link1 onClick={scrollToTop} to='/services' class="btn">learn more</Link1>
            </div>  
          </div>
        </div>
      </div>
    </div>

  )
}

export default servicescard