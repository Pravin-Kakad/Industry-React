import React from "react";
import Footer from "./Footer";
import Offer from "./Offers";
import img from '../image/about-img.png';
import Clientsay from "./Clientsay";
import Projectcount from "./Projectcount";
import Projectcontact from "./Projectcontact";
import Blogsection from "./Blogsection";
export default function Home() {

    return (
        <>
            <div>
                <div className="hero-section">
                    <div className="hero text-white">
                        <div className="d-flex align-items-center h-100">
                            <div className="container ">
                                <div className="col-6">
                                    <p>We provide best satisfied work</p>
                                    <h1 className="py-4">We turn vision<br /> <span className="head">Factory Solutions</span></h1>
                                    <p>Industrial Revolution, in modern history, the process of change from an agrarian and handicraft economy to one dominated by industry and machine manufacturing.</p>
                                    <button className="btn btn-hero">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container position-relative div-one">
                        <div className="row row-cols-3">
                            <div className="hero-div py-3 px-5 position-relative">
                                <p><i class="fa-solid fa-industry fs-1 text-dark"></i></p>
                                <h3 className="py-2">Industrial Solution</h3>
                                <p>Industry is main lorem ipsum dolor amet, consectetur adipisicing elit.</p>
                                <div className="div-bg"></div>
                            </div>
                            <div className="hero-div py-3 px-5 position-relative">
                                <p><i class="fa-solid fa-anchor-circle-xmark text-dark fs-1"></i></p>
                                <h3 className="py-2">Eco Development</h3>
                                <p>Industry is main lorem ipsum dolor amet, consectetur adipisicing elit.</p>
                                <div className="div-bg"></div>
                            </div>
                            <div className="hero-div py-3 px-5 position-relative">
                                <div>
                                    <p><i class="fa-solid fa-snowflake fs-1 text-dark"></i></p>
                                    <h3 className="py-2">Modern Technology</h3>
                                    <p>Industry is main lorem ipsum dolor amet, consectetur adipisicing elit.</p>
                                    <div className="div-bg"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="container bg-white py-5">
                        <div className="row row-cols-2 ">
                            <div>
                                <div>
                                    <img src={img} />
                                </div>

                            </div>
                            <div className=" pt-5">
                                <div className="position-relative">
                                    <p className="div-ones text-uppercase ms-4">Welcome to Industrify</p>
                                </div>
                                <h2 className="headh2">Great Experience for Industrial Solutions</h2>
                                <div className="position-relative">
                                    <p className="div-one-p ms-4">Industrify is a leading international infrastructure group. They finance, develop, build and maintain innovative and efficient infrastructure that underpins daily life. </p>
                                </div>
                                <p>It provides infrastructure consultancy, facilities management, property management, energy and healthcare services.The key sectors served include education, health and defence. </p>
                                <button className="btn-div">About More</button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Offer />
                    </div>

                    <div>
                        <Projectcontact />
                    </div>


                    <div>
                        <div>
                            <div>
                                <img src="" />
                            </div>
                            <div>
                                <img src="" />
                            </div>
                            <div>
                                <img src="" />
                            </div>
                            <div>
                                <img src="" />
                            </div>
                            <div>
                                <img src="" />
                            </div>
                        </div>
                    </div>



                    <div>
                        <Clientsay />
                    </div>



                    <div>
                        <Projectcount />
                    </div>


                    <div>
                        <Blogsection />
                    </div>


                    <div>
                        <Footer />
                    </div>


                </div>
            </div>
        </>
    )
}