import React from 'react';
import MS_Startups_FH from "../../images/MS_Startups_FH.png";
import CarelDevstudio from "../../images/CarelDevstudio.png";
import GillianNeky from "../../images/GillianNeky-xs.webp";
import HadithiFest from "../../images/Hadithi_Fest.png";
import Naturel from "../../images/Naturel2.png";


function OurPartners() {
  return (
    <div className="partner-container">
        <p className="h4 text-capitalize fw-bold">Our Partners</p>
    <div className='partner-image-container '>

        <div className='partner-image'>
        <a href="https://www.microsoft.com/en-us/startups" target="_blank" rel="noopener noreferrer">
          <img src={MS_Startups_FH} alt="microsoft logo" width={250} height={150} className='py-3 ' />
        </a>
        </div>

        <div className='partner-image'>
        <a href="https://careldevstudio.com/" target="_blank" rel="noopener noreferrer">
          <img src={CarelDevstudio} alt="carel devs tudio logo" width={150} height={150} className='py-3 ' />
        </a>
        </div>

        <div className='partner-image'>
        <a  href="https://nekyadvocates.com/" target="_blank" rel="noopener noreferrer">
          <img src={GillianNeky} alt="Gillian Neky logo" width={120} height={120} className='py-3 my-4' />
        </a>
        </div>

        <div className='partner-image'>
        <img src={HadithiFest} alt="HadithiFest Neky logo" width={150} height={150} className='py-3 ' />
        </div>

        <div className='partner-image'>
                <img src={Naturel} alt="Naturel Neky logo" width={150} height={100} className='py-3 my-4 ' />
        </div>

    </div>
    </div>
  )
}

export default OurPartners