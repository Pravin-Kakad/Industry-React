import React from "react";
import img1 from "../image/footer.png"
export default function Footer() {
    return (
        <div className="footer text-white">
            <div className="container pt-5">
                <div className="row py-5">
                    <div className="col-lg-4">
                        <div>
                            <img src={img1} />
                        </div>
                        <p>Consectetur adipisicing elit.
                            maxime dolor voluptatibus natus eligendi </p>
                    </div>
                    <div className="col-lg-3">
                        <h4>Office</h4>
                        <address>Australia-
                        175 24th Street, Office 3567 Melbourn, EA 265 </address>
                        <a href="mailto:info@industrify.com">info@industrify.com</a>
                        <p>+18-4675826</p>
                    </div>
                    <div className="col-lg-2 div-pk position-relative">
                        <h5>Links</h5>
                        <ul className="ps-0">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Servist</a></li>
                            <li><a href="#">Projest</a></li>
                            <li><a href="#">Pricit</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 div-pk position-relative">
                        <h5>Get in Touch</h5>
                        <ul className="ps-0">
                            <li><a href="#"><span></span>Facebook</a></li>
                            <li><a href="#"><span></span>Instagram</a></li>
                            <li><a href="#"><span></span>Twitter</a></li>
                            <li><a href="#"><span></span>Twitter</a></li>
                        </ul>
                    </div>

                </div>
                
            </div>
            <div className="last-footer">
                    <div className="container pt-4">
                    <div className="d-flex justify-content-between align-items-center ">
                        <small>© 2023 Industrify. All rights reserved.</small>
                        <p>Privacy Policy | Terms & Conditions</p>
                    </div>
                    </div>
                </div>
        </div>
    )
}