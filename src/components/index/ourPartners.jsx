import React from 'react';
import MS_Startups_FH from "../../images/MS_Startups_FH.png";
import ebu from "../../images/ebu.png";
import GillianNeky from "../../images/GillianNeky-xs.webp";
import HadithiFest from "../../images/Hadithi_Fest.png";
import Naturel from "../../images/Naturel2.png";
import IEBC from "../../images/IEBC.png";
import YDC from "../../images/YDC.webp";
import { motion } from "framer-motion";



const partnerImages = [
  {
    name: "ebulux",
    image: ebu,
    link: "https://ebulux.lu/civic-education/",
    width: 300,
    height: 80,
  },
  {
    name: "YDC",
    image: YDC,
    link: "https://youthdemocracycohort.com/",
    width: 250,
    height: 100,
  },
  {
    name: "IEBC",
    image: IEBC,
    link: "https://www.iebc.or.ke/",
    width: 250,
    height: 100,
  },
  {
    name: "microsoft",
    image: MS_Startups_FH,
    link: "https://www.microsoft.com/en-us/startups",
    width: 250,
    height: 100,
  },
  {
    name: "Gillian Neky",
    image: GillianNeky,
    link: "https://nekyadvocates.com/",
    width: 150,
    height: 150,
  },
  {
    name: "HadithiFest",
    image: HadithiFest,
    link: "https://www.instagram.com/hadithifest/",
    width: 200,
    height: 140,
  },
  {
    name: "Naturel",
    image: Naturel,
    link: "https://www.instagram.com/naturel_still_water/",
    width: 200,
    height: 110,
  },
]


function OurPartners() {

  const marqueeVariants = {
     animate: {
       x: ["-50%", "0%"],
       transition: {
         x: { repeat: Infinity, duration: 25, ease: "linear" },
       },
     }
  }


  return (

    <div className="partner-container border-2 border-green-500 bg-yellow-500">
        <p className="h4 text-capitalize fw-bold">Our Partners</p>
    <motion.div className='partner-image-container'  variants={marqueeVariants} animate="animate">

{/* Render images twice for a perfect loop */}
{[...partnerImages, ...partnerImages].map((partner, index) => (
  <div key={index} className="partner-image">
    <a href={partner.link} target="_blank" rel="noopener noreferrer">
      <img src={partner.image} alt={`${partner.name} logo`} className="pt-3" width={partner.width} height={partner.height} style={{ objectFit: "contain" }} />
    </a>
  </div>
))}
    </motion.div>
    </div>
  )
}

export default OurPartners