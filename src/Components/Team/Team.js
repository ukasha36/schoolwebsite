import React from 'react';
import member1 from "./person_2.jpg.webp";
import member2 from "./person_3.jpg.webp";
import member3 from "./person_4.jpg.webp";
import member4 from "./copy.jpg";

 const Team = () => {
  return (
    <>
        <div className='main-team'>
            <div className='team-title'>
            <h4>TEAM MEMBER</h4>
          <h3>
          Our Awesome Creative <br/>Team Member
          </h3>
            </div>
        <div className='team-member'>
        <div className='member-1'>
      <img src={member1}  alt='member1'/>
      <h4>Shaheer Abbas</h4>
      <h5>CEO</h5>

        </div>
        <div className='member-2'>
      <img src={member3}  alt='member1'/>
      <h4>Azizullah </h4>
      <h5>Sales Executive</h5>
      
        </div>
        <div className='member-3'>
      <img src={member2}  alt='member1'/>
      <h4>Faizan </h4>
      <h5>Sales Executive</h5>
      
        </div>
        <div className='member-4'>
      <img src={member4}  alt='member1'/>
      <h4>Ukasha </h4>
      <h5>Web Developer</h5>
     
        </div>
        </div>
        </div>
    </>
  )
}
export default Team;