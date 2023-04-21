import React from 'react'
import Logo from "../images/logo-uamuzi.png";
import playstore from "../images/playstore.png";

function Footer() {
    return (
        <footer className='bg-footer mx-4 p-4 '>
            <div className='py-2'>
                <img src={Logo} alt="Uamuzi logo" />
                <h5 className='mx-4'>foundation</h5>
                <small className='mx-4'>Creating a culture where everyone matters</small><br />
                <img className='mx-4 py-2' src={playstore} alt='Uamuzi-playstore-logo' />
            </div>
            <div className='d-flex footers mx-4'>
                <div className='footer-section'>
                    <p>Contact details</p>
                    <a href='#' style={{display: 'flex', gap: '1rem'}}><box-icon color='#A0A09F' name='envelope'></box-icon>info@uamuzi.org</a>
                    <a href='#' style={{display: 'flex', gap: '1rem'}} className='py-2'><box-icon color='#A0A09F' name='phone-call' ></box-icon> +25400000000</a>
                    <a href='#' style={{display: 'flex', gap: '1rem'}}><box-icon color='#A0A09F' type='solid' name='user-rectangle'></box-icon> 26157-00100 Nairobi, Kenya</a>
                </div>
                <div className='footer-section'>
                    <p>Let's connect</p>
                    <a href='#'>Facebook</a>
                    <a href='#'>Instagram</a>
                    <a href='#'>Twitter</a>
                    <a href='#'>Linkedin</a>
                </div>
                <div className='footer-section'>
                    <p>More</p>
                    <a href='#'>Privacy policy</a>
                    <a href='#'>Cookie Policy</a>
                    <a href='#'>FAQ</a>
                    <a href='#'>Terms of use</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer