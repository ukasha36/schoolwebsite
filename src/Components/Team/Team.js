import React from 'react';
import member1 from "./shaheer.jpg";
import member2 from "./faizan.jpg";
import member3 from "./aziz.jpg";
import member4 from "./ukasha.jpg";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
 const Team = () => {
  return (
    <>
        <div className='main-team'>
        <div className='team-title' data-aos="fade-down" >
            <h4>TEAM MEMBER</h4>
          <h3>
          Our Awesome Creative <br/>Team Member
          </h3>
            </div>
        <div className='team-member' data-aos="fade-right">
        <div className='member-1'>
      <img src={member1}  alt='member1'/>
      <h4>Shaheer Abbas</h4>
      <h5>CEO</h5>

        </div>
        <div className='member-4'>
      <img src={member4}  alt='member1'/>
      <h4> Muhammad Ukasha </h4>
      <h5>Web Developer</h5>
     
        </div>
        <div className='member-2'>
      <img src={member3}  alt='member1'/>
      <h4>Azizullah Naik </h4>
      <h5> Artist </h5>
      
        </div>
        <div className='member-3'>
      <img src={member2}  alt='member1'/>
      <h4> Faizan Khan </h4>
      <h5> Content Writer </h5>
      
        </div>
  
        </div>
        </div>
    </>
  )
}
export default Team;