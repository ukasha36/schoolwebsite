import React from "react";
import './Banner.css';
import banner from './banner-logo.jpeg'
import { SquarePen , UsersRound , MapPin , Globe , CirclePlay} from 'lucide-react';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="logo-container">
          <img src={banner} alt="School Logo" className="logo"/>
        </div>
        <div className="school-info">
          <h1>The Smart School</h1>
          <p>The Hortan Road New YORK</p>
        </div>
        <div className="icon-nav">
        <div className="icons" onClick={() => scrollTo('service')}><SquarePen /></div>
            <div className="icons" onClick={() => scrollTo('client')}><UsersRound /></div>
            <div className="icons" onClick={() => scrollTo('contact')}><MapPin /></div>
            <div className="icons" onClick={() => scrollTo('academics')}><CirclePlay /></div>
            <div className="icons" onClick={() => scrollTo('contact')}><Globe /></div>
      
       
       
       
      
        </div>
      </div>
    </div>
  );
};

export default Banner;


export const scrollTo = (id) => {
   document.getElementById(id)?.scrollIntoView({
       behavior: "smooth",
       block: "start"
   });
};