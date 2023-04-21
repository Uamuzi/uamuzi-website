import React from 'react'
import Logo from "../images/logo-uamuzi.png";
import { Link } from "gatsby"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md bg-body-tertiary mx-auto ">
            <div className="container">
                <Link to="/" className="navbar-brand d-flex flex-column justify-content-start align-items-center gap-0" href="/">
                    <img src={Logo} href="Logo" width="150" height="40" className='m-0'/>
                    <p className="h4" style={{color: "#A0A09F"}}>foundation</p>
                </Link>
                <button className="navbar-toggler collapsed d-flex d-md-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="toggler-icon top-bar"></span>
                    <span className="toggler-icon middle-bar"></span>
                    <span className="toggler-icon bottom-bar"></span>
                </button>
                <div className="collapse navbar-collapse mx-auto" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto gap-3 ">
                        <Link to="/" className='nav-link active' aria-current="page">Home</Link>
                        <Link to="/about" className='nav-link'>About Us</Link>
                        <Link className="nav-link" to="/">Our Team</Link>
                        <Link className="nav-link" to="/">Pillars</Link>
                        <Link className="nav-link" to="/">Hub</Link>
                        <Link className="nav-link" to="/">Volunteers</Link>
                        <Link className="nav-link" to="/">Contact Us</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar