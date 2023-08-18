import React from "react";
import Offer from "./Offers";
import Footer from "./Footer";
import ones from '../image/about-one.png'
import twos from '../image/about-three-one.jpg'
import threes from '../image/about-three-two.jpg'
import fours from '../image/about-three-three.jpg'
import five from '../image/about-three-four.jpg'
export default function About() {
    return (
        <div>

            <div className="about d-flex justify-content-center align-items-center">
                <div className="text-white">
                    <h1>About Us</h1>
                    {/* <nav aria-label="breadcrumb ">
                     <ol class="breadcrumb">
                       <li class="breadcrumb-item">Home</li>
                       <li class="breadcrumb-item list-abt">About</li>
                        </ol>
                        </nav> */
                    }
                    <p className="text-center">Home<span className="list-abt"> / About</span></p>
                </div>
            </div>

            <div className="container py-5">
                <div className="row row-cols-2">
                    <div>
                        <img className="img-fluid" src={ones} />
                    </div>
                    <div>
                        <div className="position-relative div-twos">
                            <p className="ms-4 about-p">About Us</p>
                        </div>
                        <p className="about-one">We're leading <span className="headh2">Industrial</span> </p>
                        <p className="about-one"><span className="headh2">Solution</span> in Worldwide</p>
                        <p>We are build construction site lorem ipsum dolor sit amet, consectetur elit. Ea enim et, similique,minus soluta ducimus. The Most Eminent factory and Industrial Consultant service provider. Branches in USA and overseas. </p>
                        <p>industrify is famous construction factory to build a company that can compete with large construction firms while operating with the flexibility and customer-focus of a small, family-run business. </p>
                        <ul className="row row-cols-2 about-list">
                            <li><span className="about-icon"><i class="fa-regular fa-square-check"></i></span>Best Industrial</li>
                            <li><span className="about-icon"><i class="fa-regular fa-square-check"></i></span>Quality Construction</li>
                            <li><span className="about-icon"><i class="fa-regular fa-square-check"></i></span>Expert Contractor</li>
                            <li><span className="about-icon"><i class="fa-regular fa-square-check"></i></span>Affordable Cost Rate</li>
                        </ul>
                        <div className="row row-cols-2 mt-5 ">
                            <div>
                                <div className="d-flex">
                                    <div>
                                        <p className="about-para"><i class="fa-solid fa-phone"></i></p>
                                    </div>
                                    <div className="ms-3">
                                        <span className="about-div">Call Us Anytime</span>
                                        <pre>92 666 888 0000</pre>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <a className="about-anchor" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Offer />
            </div>

            <div className="container">
                <div className="row">
                    <div className="about-ab col-4 text-white">
                        <div className="position-relative div-twos">
                            <p className="ms-4 about-p text-white">Why Choose Us</p>
                        </div>
                        <h3 className="py-5 text-white fs-2">We only provide top industrial services</h3>
                        <div className="pt-5">
                            <a className="about-anchors" href="#">Know More</a>
                        </div>
                    </div>
                    <div className="col-8 ps-0 about-bg">
                        <div className="about-twos">
                            <a href="https://www.youtube.com/watch?v=SZEflIVnhH8&t=5s" target="_blank"><i class="fa-solid fa-circle-play"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-5 about-six">
                <div>
                    <div className="text-center">
                        <div className="position-relative div-foura d-flex justify-content-center">
                            <p className="ms-1 about-p">Our Team</p>
                        </div>
                        <h2 className="pb-4 "> Meet Our Proffesionals</h2>
                        <div className="row row-cols-4 py-3">
                            <figure>
                                <div>
                                    <img className="img-fluid about-imgs" src={twos} />
                                </div>
                                <figcaption className="text-center p-3">
                                    <h6>James Cameron</h6>
                                    <p>Mechanical Engineer</p>
                                </figcaption>
                            </figure>
                            <figure>
                                <div>
                                    <img className="img-fluid about-imgs" src={threes} />
                                </div>
                                <figcaption className="text-center p-3">
                                    <h6>Mich Thomson</h6>
                                    <p>Site Contractor</p>
                                </figcaption>
                            </figure>
                            <figure>
                                <div>
                                    <img className="img-fluid about-imgs" src={fours} />
                                </div>
                                <figcaption className="text-center p-3">
                                    <h6>Josh Batlar</h6>
                                    <p>Senior Contractor</p>
                                </figcaption>
                            </figure>
                            <figure>
                                <div>
                                    <img className="img-fluid about-imgs" src={five} />
                                </div>
                                <figcaption className="text-center p-3">
                                    <h6>Albert Gill</h6>
                                    <p>Contractor</p>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>

        </div>
    )
}