import React from 'react';
import OurPartnersImg from "../../images/Microsoft_logo.png";

function OurPartners() {
  return (
    <div className='container my-5'>
        <p className="h4 text-capitalize fw-bold">Our Partners</p>
        <a href="https://www.microsoft.com/en-us/startups" target="_blank" rel="noopener noreferrer">
          <img src={OurPartnersImg} alt="microsoft logo" width={180} height={70} className='py-3 mb-5' />
        </a>
    </div>
  )
}

export default OurPartners