import React from 'react'
import "./home.css";
import homevid from "../../assets/bckgrd-vid.mov"
import { Link as Link1 } from 'react-router-dom';

const scrollToTop = () => {
  window.scrollTo(0, 0)
}
const home = () => {
  return (
    <div className='home'>
        <div className="overlay"></div>
        <video src={homevid} autoPlay loop muted/>
        <div className="content">
            <h1>Zuphoria Safaris</h1>
            <h2> Turning dreams into destination</h2>
            <Link1 onClick={scrollToTop}  to= "/services" className="btn" >Explore Our Safari Experience </Link1>

        </div>

    </div>
  )
}

export default home