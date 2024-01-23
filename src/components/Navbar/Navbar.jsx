import React from 'react'
import './Navbar.css'
function Navbar() {
    return (
        <div className='navbar-container container-fluid' id='home'>
            <div className="navbar-row row">
                <div className="logobox">
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                    <i className="fa-solid fa-envelope"></i>
                    <i className="fa-solid fa-phone"></i>
                </div>
                <div className="navlinks">
                    <i class="fa-solid fa-toggle-on"></i>
                    {/* <i class="fa-solid fa-toggle-off"></i> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar
