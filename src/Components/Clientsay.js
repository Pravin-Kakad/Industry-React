import React from 'react'
import one from '../image/four-one.png'
import two from '../image/four-two.png'
import three from '../image/four-three.jpg'
function Clientsay() {
  return (
    <div className="container py-5">
                        <div>
                            <div className="div-four text-center position-relative">
                                <div className="div-foura position-relative d-flex justify-content-center">
                                <p className="">Testimonial</p>
                                </div>
                                <h2 className="div-fourh2">Happy <span className="headh2">Client</span> Says</h2>
                                <h2 className="div-fourh2">About Us</h2>
                            </div>
                            <div className="d-flex justify-content-between mt-5">
                                <div className="four-div">
                                    <div></div>
                                    <p>"The magic formula that successful businesses have discovered is to treat customers "</p>
                                    <div className="d-flex mt-5">
                                        <div>
                                            <img className="img-fluid four-img" src={one}/>
                                        </div>
                                        <div className="ms-4">
                                            <h4>Albert Krish</h4>
                                            <p>Social Activist</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="four-div">
                                    <div></div>
                                    <p>"The magic formula that successful businesses have discovered is to treat customers "</p>
                                    <div className="d-flex mt-5">
                                        <div>
                                            <img className="img-fluid four-img" src={two}/>
                                        </div>
                                        <div className="ms-4">
                                            <h4>Bill Lorris</h4>
                                            <p>Business Man</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="four-div">
                                    <div></div>
                                    <p>"The magic formula that successful businesses have discovered is to treat customers "</p>
                                    <div className="d-flex mt-5">
                                        <div>
                                            <img className="img-fluid four-img" src={three}/>
                                        </div>
                                        <div className="ms-4">
                                            <h4>Joe Root</h4>
                                            <p>Industry Supervisor</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
  )
}

export default Clientsay