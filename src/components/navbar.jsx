import React, { useState } from 'react';
import Logo from "../images/FoundationLogo.png";
import { Link } from "gatsby";
import { animateScroll as scroll} from "react-scroll";

function Navbar() {
   const [isNavOpen, setIsNavOpen] = useState(false);

   const handleNavToggle = () => {
     setIsNavOpen(!isNavOpen);
   };

   const scrollToTop = () => {
    scroll.scrollToTop();
   };
    
    return (
        <nav className="navbar navbar-expand-md bg-body-tertiary mx-auto sticky-top bg-white">
            <div className="container">
                <Link to="/" className="navbar-brand d-flex flex-column justify-content-start align-items-center gap-0" href="/">
                    <img src={Logo} href="Logo" width="150" height="50" className='m-2' alt='Uamuzi Logo' />
                    {/* <p className="h4" style={{ color: "#A0A09F" }}>foundation</p> */}
                </Link>
                <button className="navbar-toggler collapsed d-flex d-md-none flex-column justify-content-around" onClick={handleNavToggle} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="toggler-icon top-bar"></span>
                    <span className="toggler-icon middle-bar"></span>
                    <span className="toggler-icon bottom-bar"></span>
                </button>
                <div className={`collapse navbar-collapse mx-auto ${isNavOpen ? 'show' : ''}`} id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto gap-3 ">
                        <Link to="/" className='nav-link' activeClassName="active" aria-current="page" onClick={() => { handleNavToggle(); scrollToTop(); }}>Home</Link>
                        <Link to="/about" className='nav-link' activeClassName="active" onClick={() => { handleNavToggle(); scrollToTop(); }}>About Us</Link>
                        <Link className="nav-link" activeClassName="active" to="/team" onClick={() => { handleNavToggle(); scrollToTop(); }}>Our Team</Link>
                        <Link className="nav-link" activeClassName="active" to="/pillars" onClick={() => { handleNavToggle(); scrollToTop(); }}>Pillars</Link>
                        <li className="nav-item dropdown" activeClassName="active">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Hub
                            </a>
                            <ul className="dropdown-menu">
                                <li className='drop-li'><Link className="dropdown-item drop-link" to="/hub">Engineering Academy</Link></li>
                                <li className='drop-li'><Link className="dropdown-item drop-link" to="/innovation">Innovation Lab</Link></li>
                            </ul>
                        </li>
                        <Link className="nav-link" activeClassName="active" to="/volunteers" onClick={() => { handleNavToggle(); scrollToTop(); }}>Volunteers</Link>
                        <Link to="/contact" activeClassName="active" className="nav-link" onClick={() => { handleNavToggle(); scrollToTop(); }}>Contact Us</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar