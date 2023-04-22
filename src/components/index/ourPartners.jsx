import React from 'react';
import OurPartnersImg from "../../images/Microsoft_logo.png"

function OurPartners() {
  return (
    <div className='container my-5'>
        <p className="h4 text-capitalize fw-bold">Our Partners</p>
        <img src={OurPartnersImg} alt="microsoft logo" width={180} height={70} className='py-3 mb-5'  />
    </div>
  )
}

export default OurPartners