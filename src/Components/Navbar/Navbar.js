import React from "react";
import { useState } from "react";
import { scrollTo } from "../scrollTo";
import companylogo from "./companylogo.jpg"

export const Navbar = () => {
  const [shownavbar, setshownavbar] = useState(false);
  return (
    <>
      <div className="main-nav">
        <div className="logo">
        <img src={companylogo} alt="Logo"/>
        </div>
        <div className={shownavbar ? " mobile-menu-link" : "menu-links "}>
          <ul>
            <li>Home</li>
            <li onClick={() => scrollTo("about")}>About</li>
            <li onClick={() => scrollTo("service")}>Services</li>
            <li onClick={()=>scrollTo("team")}>
              Team
            </li>
            <li onClick={() => scrollTo("contact")}>Contact</li>
          </ul>
        </div>
        <div>
          <i
            class="fa-solid fa-bars icon"
            onClick={() => setshownavbar(!shownavbar)}
          >
            {" "}
          </i>
        </div>
      </div>
    </>
  );
};
