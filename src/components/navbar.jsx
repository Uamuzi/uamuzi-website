import React from 'react'
import Logo from "../images/logo-uamuzi.png"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md bg-body-tertiary mx-auto">
            <div className="container">
                <a className="navbar-brand d-flex flex-column justify-content-start align-items-center gap-0" href="/">
                    <img src={Logo} href="Logo" width="150" height="40" className='m-0'/>
                    <p className="h4 text-secondary">foundation</p>
                </a>
                <button className="navbar-toggler collapsed d-flex d-md-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="toggler-icon top-bar"></span>
                    <span className="toggler-icon middle-bar"></span>
                    <span className="toggler-icon bottom-bar"></span>
                </button>
                <div className="collapse navbar-collapse mx-auto" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto gap-3 ">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        <a className="nav-link" href="/">About Us</a>
                        <a className="nav-link" href="/">Our Team</a>
                        <a className="nav-link" href="/">Pillars</a>
                        <a className="nav-link" href="/">Hub</a>
                        <a className="nav-link" href="/">Volunteers</a>
                        <a className="nav-link" href="/">Contact Us</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar