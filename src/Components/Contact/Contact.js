import React from "react";
import { useState } from "react";

const Contact = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    message: "",
  });

  let name, value;

  const getUserdata = (event) => {
    name = event.target.name;
    value = event.target.value;

    setuser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, message } = user;
    const response = await fetch(
      "https://innovativetech-f47e0-default-rtdb.firebaseio.com/innovativetechform.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      }
    );
    if(response){
      setuser({
        name: "",
        email: "",
        message: "",
      });
        alert("Your form has been submitted")
    }
  };

  return (
    <>
      <div className="contact-main">
        <div className="contact-title">
          <h2>
            <i className="fa-regular fa-address-card"></i>CONTACT US
          </h2>
        </div>
        <div className="contact">
          <div className="contact-form">
            <form method="POST ">
              <label for="name">Name : </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                autoComplete="off"
                value={user.name}
                onChange={getUserdata}
              />
              <label for="name">Email address : </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                autoComplete="off"
                value={user.email}
                onChange={getUserdata}
              />
              <label for="name">Message : </label>
              <textarea
                name="message"
                id="message"
                cols="20"
                rows="7"
                required
                value={user.message}
                onChange={getUserdata}
              ></textarea>
              <button onClick={postData}>Submit</button>
            </form>
          </div>
          <div className="contact-info">
            <div className="address">
              <i className="fa-solid fa-house"></i>
              <p>155 Market St #101, Paterson, NJ 07505, United States</p>
            </div>
            <div className="call">
              <i className="fa-solid fa-phone"></i>
              <a href="tel:03320356431"><p>03320356431</p></a>
            </div>
            <div className="email">
              <i className="fa-solid fa-message"></i>
              <a href="mailto:innovativetechrgs@gmail.com"><p>innovativetechrgs@gmail.com</p></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
