import React from 'react'
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import './style.css'
import { scrollTo } from '../scrollTo';
import { Link } from 'react-router-dom';
import Contact from './../Contact/Contact';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    const toggleShowNavbar = () => {
      setShowNav(!showNav);
   

    };

    const closeNavbar = () => {
      setShowNav(false);
  };
  
  const name1 = "Ukasha";
const name2 = "Shabbir";

const result1 = "<" + name1 + " / " + name2 + ">";


    return (
      <div>
        <nav className="navbarMain">
            <div className='navbar'>
            <Link  to="/">
            <h3 className='logo'>{result1} </h3>
            </Link>

            <ul className='navul'>
          
            <Link  to="/about">
                <li onClick={() => scrollTo("about")}>About  </li>
                </Link>
                <Link  to="/service ">
                <li onClick={() => scrollTo("service")}>Services</li>
                </Link>
                <Link to="/blogs" >
                <li onClick={() => scrollTo("blogs")}>Blogs</li>
                </Link>
                <Link  to="/client">
                <li onClick={() => scrollTo("client")}>Clients</li>
                </Link>
                <Link  to="/portfolio">
                <li onClick={() => scrollTo("portfolio")}>Portfolio</li>
                </Link>
                <Link  to="/testimonial">
                <li onClick={() => scrollTo("testimonial")}>Testimonial</li>
                </Link>
                <Link  to="/contact">
                <li onClick={() => scrollTo("contact")}>Contact</li>
                </Link>
             </ul>


              
              
          
          </div>

          <div  className='open' onClick={toggleShowNavbar} >  <RxHamburgerMenu /> </div>
  
          {/* responsive navbar */}
          <div className={`responsiveNav ${showNav ? "openNav" : "closeNav"} `}>
            <ul className='mobileul'>
            <div onClick={toggleShowNavbar}><IoClose className='closebtn' /></div>

          <Link   onClick={closeNavbar}>
                <li onClick={() => scrollTo("about")}>Home</li>
                </Link>
                <Link  onClick={closeNavbar}>
                <li onClick={() => scrollTo("about")}>About</li>
                </Link>
                <Link   onClick={closeNavbar}>
                <li onClick={() => scrollTo("about")}>SKills</li>
                </Link>
                <Link onClick={closeNavbar}>
                <li  onClick={() => scrollTo("about")}>Experience</li>
                </Link>
                <Link  onClick={closeNavbar}>
                <li onClick={() => scrollTo("about")}>Projects</li>
                </Link>
                <Link   onClick={closeNavbar}>
                <li onClick={() => scrollTo("about")} >Contact Me</li>
                </Link>

            </ul>
  
          </div>
        </nav>
      </div>
    );
  };
  

export default Navbar