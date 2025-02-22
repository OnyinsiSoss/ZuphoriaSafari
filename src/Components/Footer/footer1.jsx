import React from 'react'
import "./footer1.css"
import logo_img from "../../assets/IMG-202.png";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { LiaTripadvisor } from "react-icons/lia";



const footer1 = () => {
  return (
    <footer class="footer">
      <div className="container">
        <div class="row">
          <div class="footer-col">
            <img src={logo_img} alt="" />
          </div>
          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">about us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Our trips</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Socials</h4>
            <div class="social-links">
              <a href="#">< FaFacebook/></a>
              <a href="#">< FaYoutube/></a>
              <a href="https://instagram.com/zuphoria_safaris" target='blank'>< FaInstagram/></a>
              <a href="#">< LiaTripadvisor/></a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Contact info</h4>
            <ul>
              <li><a href="mailto:samuelonyinsi@gmail.com">Email: zuphoriasafaris@gmail.com</a></li>
              <li><a href="tel:+254716605815">Phone: (123) 456-7890</a></li>
              <li><a href="#">Address: 123 Lanet road, Nakuru</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2025 Zuphoria Safaris. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default footer1