import React from 'react';
import MS_Startups_FH from "../../images/MS_Startups_FH.png";
import ebu from "../../images/ebu.png";
import GillianNeky from "../../images/GillianNeky-xs.webp";
import HadithiFest from "../../images/Hadithi_Fest.png";
import Naturel from "../../images/Naturel2.png";
import GDCLogo from "../../images/GDCLogo.jpg";


function OurPartners() {
  return (
    <div className="partner-container">
        <p className="h4 text-capitalize fw-bold">Our Partners</p>
    <div className='partner-image-container '>

        <div className='partner-image'>
        <a href="https://globaldemocracycoalition.org/" target="_blank" rel="noopener noreferrer">
          <img src={GDCLogo} alt="GDC logo"  className=' w-1/2' />
        </a>
        </div>
        <div className='partner-image'>
        <a href="https://ebulux.lu/civic-education/" target="_blank" rel="noopener noreferrer">
          <img src={ebu} alt="ebu logo"  className='pt-3 w-4' />
        </a>
        </div>
        <div className='partner-image'>
        <a href="https://www.microsoft.com/en-us/startups" target="_blank" rel="noopener noreferrer">
          <img src={MS_Startups_FH} alt="microsoft logo" width={250} height={150} className='py-3 ' />
        </a>
        </div>


        <div className='partner-image'>
        <a  href="https://nekyadvocates.com/" target="_blank" rel="noopener noreferrer">
          <img src={GillianNeky} alt="Gillian Neky logo" width={120} height={120} className='py-3 my-4' />
        </a>
        </div>

        <div className='partner-image'>
        <a  href="https://www.instagram.com/hadithifest/" target="_blank" rel="noopener noreferrer">
        <img src={HadithiFest} alt="HadithiFest Neky logo" width={150} height={150} className='py-3 ' />
        </a>
        </div>

        <div className='partner-image'>
        <a  href="https://www.instagram.com/naturel_still_water/" target="_blank" rel="noopener noreferrer">
           <img src={Naturel} alt="Naturel Neky logo" width={150} height={100} className='py-3 my-4 ' />
        </a>
        </div>

    </div>
    </div>
  )
}

export default OurPartners