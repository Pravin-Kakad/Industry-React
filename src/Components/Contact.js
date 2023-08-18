import React from "react";
import Footer from "./Footer";

export default function Contact() {
  return (
    <>


      <div className="about d-flex justify-content-center align-items-center">
        <div className="text-white">
          <h1>Contact</h1>
          {/* <nav aria-label="breadcrumb ">
                     <ol class="breadcrumb">
                       <li class="breadcrumb-item">Home</li>
                       <li class="breadcrumb-item list-abt">About</li>
                        </ol>
                        </nav> */
          }
          <p className="text-center">Home<span className="list-abt"> / Contact</span></p>
        </div>
      </div>

      <div className="container contact-star py-5">
        <div className="d-flex justify-content-between gap-2">
          <div className="">
            <iframe className="contact-iframe" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d60534.46174998527!2d73.875456!3d18.5106432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1691658403241!5m2!1sen!2sin" width="600" height="450"></iframe>
          </div>
          <div className="contact-div p-5 contact-iframe">
            <h2 className="  headcontat">Lets talk...</h2>

            <div className="d-flex justify-content-between gap-3 my-4 ">
              <div>
                <label>Your Name*</label><br />
                <input className="form-control p-3" type="text" placeholder="Your Full Name" />
              </div>

              <div>
                <label>Email Address*</label><br />
                <input className="form-control p-3" type="email" placeholder="E-Mail Address" />
              </div>
              <div></div>
            </div>
            <div>
              <label>Subject*</label><br />
              <input className="form-control p-3" type="text" placeholder="Website" />
            </div>
            <div className="my-3">
              <label>Message*</label><br />
              <textarea className="form-control p-3" cols="20" rows="5" placeholder="Write here" />

            </div>
            <div className="mt-4">
              <a className="contact-anchor" href="#">SEND NOW</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5 contact-ad">
        <div className="d-flex justify-content-between gap-3">
          <div className="cont-div">
            <span ><i class="fa-solid fa-location-dot"></i></span>
            <p className="mt-3">3567 Melbourn, EA 265,<br /> Australia</p>
          </div>
          <div className="cont-div">
            <span><i class="fa-regular fa-envelope"></i></span>
            <p className="mt-3">info@industrify.com</p>
            <p>admin@industrify.com</p>
          </div>
          <div className="cont-div">
            <span><i class="fa-solid fa-phone"></i></span>
            <p className="mt-3">+18-4675826</p>
            <p>+18-4675834</p>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>



    </>
  )
}