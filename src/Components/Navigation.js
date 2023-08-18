import React from "react";
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className="navigations d-flex align-items-center col-2 px-0 mx-0">
            <div className="container">
                <ul className="p-0 text-center">
                    <li className="mt-5"><Link className="px-1 pk anchor active" to="/">HOME</Link></li>
                    <li className="mt-5"><Link className="px-1 pk anchor" to="/Components/About">ABOUT</Link></li>
                    <li  className="mt-5"><Link className="pk anchor px-1" to="/Components/Services">SERVICES</Link></li>
                    <li  className="mt-5"><Link className="pk anchor px-1" to="/Components/Project">PROJECTS</Link></li>
                    {/* <li  className="mt-5"><Link className="pk anchor px-1" to="/Components/Team">TEAM</Link></li> */}
                    <li  className="mt-5"><Link className="pk anchor px-1" to="/Components/Blogs">BLOGS</Link></li>
                    <li className="mt-5"><Link className="px-1 pk anchor" to="/Components/Contact">CONTACT</Link></li>
                    {/* <li className="mt-5"><Link className="px-1 pk anchor" to="/Components/Footer">FOOTER</Link></li> */}
                </ul>
            </div>
        </div>
    )
}

export default Navigation;