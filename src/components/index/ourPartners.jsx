import React from 'react';
import MS_Startups_FH from "../../images/MS_Startups_FH.png";
import CarelDevstudio from "../../images/CarelDevstudio.jpg";
import GillianNeky from "../../images/GillianNeky-xs.webp";

function OurPartners() {
  return (
    <div className='container my-5'>
        <p className="h4 text-capitalize fw-bold">Our Partners</p>
        <a href="https://www.microsoft.com/en-us/startups" target="_blank" rel="noopener noreferrer">
          <img src={MS_Startups_FH} alt="microsoft logo" width={250} height={180} className='py-3 mx-3 mb-5' />
        </a>

        <a href="https://careldevstudio.com/" target="_blank" rel="noopener noreferrer">
          <img src={CarelDevstudio} alt="carel devs tudio logo" width={250} height={200} className='py-3 mx-3 mb-5' />
        </a>

        <a  href="https://nekyadvocates.com/" target="_blank" rel="noopener noreferrer">
          <img src={GillianNeky} alt="Gillian Neky logo" width={150} height={120} className='py-3 mx-3 mb-5' />
        </a>


    </div>
  )
}

export default OurPartners