import React from 'react'

 const Contact = () => {
  return (
  <>
 <div class="contact-main" >
 <div class="contact-title">
      <h2><i class="fa-regular fa-address-card"></i>CONTACT US</h2>
    </div>
    <div class="contact">
      <div class="contact-form">
      <form>
          <label for="name">Name : </label>
          <input type="text" name="name" id="name" required/>
          <label for="name">Email address : </label>
          <input type="email" name="email" id="email" required/>
          <label for="name">Message : </label>
          <textarea name="message" id="message" cols="20" rows="7" required></textarea>
          <button   onclick="SendMail()">Submit</button>
          </form>
      </div>
      <div class="contact-info">
        <div class="address"><i class="fa-solid fa-house"></i>
          <p>155 Market St #101, Paterson, NJ 07505, United States</p>
        </div>
        <div class="call"><i class="fa-solid fa-phone"></i>
          <p>+1 202 2020 200</p>
        </div>
        <div class="email"><i class="fa-solid fa-message"></i>
          <p>@info@mydomain.com</p>
        </div>
      </div>
    </div>

     </div>
  </>
  )
}
export default Contact;