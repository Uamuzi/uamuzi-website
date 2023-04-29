import React from 'react'
import Logo from "../images/logo-uamuzi.png";
import playstore from "../images/playstore.png";
import { Link } from 'gatsby';

function Footer() {
    return (
        <footer className='mx-5 bg-footer py-5 mb-2'>
            <div className='d-flex sections p-2'>
                <div className=''>
                    <img src={Logo} alt="Uamuzi logo" className='pb-2'/>
                    <h5 className='mx-4 fs-2'>foundation</h5>
                    <p className='px-4 pt-2 text-nowrap' style={{color: "#A0A09F", fontSize: "14px"}}>Creating a culture where everyone matters</p><br />
                    <img className='mx-4 pt-4' src={playstore} alt='Uamuzi-playstore-logo' />
                </div>
                <div className='d-flex footers mx-4 flex-wrap justify-content-around gap-5 w-100'>
                    <div className='footer-section'>
                        <p>Contact details</p>
                        <Link to='mailto:info@uamuzi.org' style={{display: 'flex', gap: '1rem'}}><box-icon color='#A0A09F' name='envelope'></box-icon>info@uamuzi.org</Link>
                        <Link to='tel:+25400000000' style={{display: 'flex', gap: '1rem'}} className='py-2'><box-icon color='#A0A09F' name='phone-call' ></box-icon> +25400000000</Link>
                        <Link to='/' style={{display: 'flex', gap: '1rem'}}><box-icon color='#A0A09F' type='solid' name='user-rectangle'></box-icon> 25167-00100 Nairobi, Kenya</Link>
                    </div>
                    <div className='footer-section'>
                        <p>Let's connect</p>
                        <a href='/'>Facebook</a>
                        <a href='/'>Instagram</a>
                        <a href='/'>Twitter</a>
                        <a href='/'>Linkedin</a>
                    </div>
                    <div className='footer-section'>
                        <p>More</p>
                        <Link to='/'>Privacy policy</Link>
                        <Link to='/'>Cookie Policy</Link>
                        <Link to='/'>FAQ</Link>
                        <Link to='/'>Terms of use</Link>
                    </div>
                </div>
            </div>
            <h6>&copy; Copyright | All Rights Reserved | <span style={{color: '/8067AD'}} >Uamuzi Foundation</span></h6>
        </footer>
    )
}

export default Footer