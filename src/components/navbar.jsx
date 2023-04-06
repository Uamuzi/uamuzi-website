import React from 'react'

function Navbar() {
    return (
        <nav className=" container navbar navbar-expand-lg bg-body-tertiary mx-auto">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mx-auto" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">About Us</a>
                        <a className="nav-link" href="#">Our Team</a>
                        <a className="nav-link">Pillars</a>
                        <a className="nav-link">Hub</a>
                        <a className="nav-link">Volunteers</a>
                        <a className="nav-link">Contact Us</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar