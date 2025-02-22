import React, { useEffect, useState } from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu-icon.png";
import { Link as Link1} from "react-router-dom";
// import { Link as Link2} from "react-scroll";
import logo_img from "../../assets/IMG-202.png";

const scrollToTop = () => {
  window.scrollTo(0, 0)
}

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 560 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const togglemenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav onClick={scrollToTop} className={`container ${sticky ? "dark-nav" : ""}`}>
      <Link1 to= "/" > <img src={logo_img} alt="" class="logo"/> 
      </Link1>

      <ul className={mobileMenu?'':'hide-mobile-menu'}>       
        <li>  
          <Link1 to= "/Abouut" >
            About Us
          </Link1>
        </li>
        <li>
          <Link1 to="/Services" >
          Services
          </Link1>
        </li>

        <li>
          <Link1 to="/Gallery" > Gallery
          </Link1>
        </li>

        <li>
        <Link1 to= "/contacts"  className="btn" >
            get in touch.
          </Link1>
        </li>

        
        {/* <li>
          <Link2 to="campus" smooth={true} offset={-260} duration={500}>
            Gallery
          </Link2>
        </li> */}
      </ul>
       
      <img src={menu_icon} className="menu-icon" onClick={togglemenu} />
    </nav>
  );
};

export default Navbar;
