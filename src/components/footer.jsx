import React from 'react'
import Logo from "../images/logo-uamuzi.png";
import { Link } from 'gatsby';

function Footer() {
    return (
        <footer className='mx-2 bg-footer py-5 mb-2'>
            <div className='d-flex sections p-2 gap-0'>
                <div className=''>
                    <img src={Logo} alt="Uamuzi logo" className='pb-2' width="150" height="50"/>
                    <h5 className='mx-4 fs-4'>foundation</h5>
                    <p className='px-4 pt-2 text-nowrap' style={{color: "#A0A09F", fontSize: "14px"}}>Creating a culture where everyone matters</p><br />
                    {/* <img className='mx-4 pb-3' src={playstore} alt='Uamuzi-playstore-logo' width="130" height="70" /> */}
                </div>
                <div className='d-flex footers mx-4 flex-wrap justify-content-around gap-5 w-100'>
                    <div className='footer-section'>
                        <p>Contact details</p>
                        <a to='mailto:info@uamuzi.org' style={{display: 'flex', gap: '1rem'}}><box-icon color='#A0A09F' name='envelope'></box-icon>info@uamuzi.org</a>
                        <a to='tel:+254112729843' style={{display: 'flex', gap: '1rem'}} className='py-2'><box-icon color='#A0A09F' name='phone-call' ></box-icon> +254112729843</a>
                        <Link to='/' style={{display: 'flex', gap: '1rem'}}><box-icon color='#A0A09F' type='solid' name='user-rectangle'></box-icon> 25167-00100 Nairobi, Kenya</Link>
                        
                        <Link to='/' style={{display: 'flex', gap: '1rem'}} className="py-2"><box-icon color='#A0A09F' name='briefcase'></box-icon> Monday - Friday 8am - 6pm</Link>

                    </div>
                    <div className='footer-section'>
                        <p>Let's connect</p>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/profile.php?id=100090904118726'>Facebook</a>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/uamuziapp/'>Instagram</a>
                        <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/UamuziApp'>Twitter</a>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/company/uamuzi'>Linkedin</a>
                    </div>
                    <div className='footer-section'>
                        <p>More</p>
                        <Link to='/policy#top'>Privacy policy</Link>
                        <Link to='/'>Blog</Link>
                        <Link to='/'>FAQ</Link>
                        <Link to='/'>Gallery</Link>
                    </div>
                </div>
            </div>
            <h6>&copy; Copyright | All Rights Reserved | <span style={{color: '/8067AD'}} >Uamuzi Foundation</span></h6>
        </footer>
    )
}

export default Footer
