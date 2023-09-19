import React from "react";
import logo from "./man.png"
 

 const Banner = () => {
  return (
    <>
    <div className="main-banner">
    <div className="banner-info">
       <h4>Welcome to innovAtiveTech</h4>
       <h1> IT <span>Solution Company </span><br/> & Digital Agency</h1>
       <p>We are 100+ professional software engineers with more than 10 years of experience in delivering superior products.</p>
       <button>Contact US</button>
       </div>
       <div className="banner-pic">
    <img src={logo} alt="Logo"/>
       </div>
    </div>
    </>
  )
}
export default Banner;