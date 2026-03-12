import React, { useRef, useState } from 'react';
import MS_Startups_FH from "../../images/MS_Startups_FH.png";
import ebu from "../../images/ebu.png";
import GillianNeky from "../../images/gillian-nicky-logo-colored.png";
import HadithiFest from "../../images/Hadithi_Fest.png";
import Naturel from "../../images/Naturel2.png";
import IEBC from "../../images/IEBC.png";
import YDC from "../../images/YDC.webp";
import OIDP from "../../images/logo-oidp.png";
import VAR from "../../images/var-logo-nobg.png";
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'framer-motion';


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
  {
    name: "OIDP",
    image: OIDP,
    link: "https://www.oidp.net/",
    width: 250,
    height: 100,
  },
  {
    name: "VAR",
    image: VAR,
    link: "https://www.var3738.org/",
    width: 250,
    height: 100,
  }
]

// Simple wrap function for infinite loop
const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

function OurPartners() {
  const baseX = useMotionValue(0);
  const contentRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Auto-scroll speed
  const speed = 0.025;
  const REPETITIONS = 4;

  useAnimationFrame((t, delta) => {
    if (!isHovered && !isDragging) {
      // Move left continuously
      let moveBy = speed * (delta / 16); // Normalize by ~60fps
      baseX.set(baseX.get() - moveBy);
    }
  });

  // Transform baseX into a wrapped percentage for infinite scroll
  // Wrapping at -100/REPETITIONS ensures we jump back exactly one set
  const x = useTransform(baseX, (v) => `${wrap(-100 / REPETITIONS, 0, v)}%`);

  return (
    <div className="partner-container overflow-hidden">
      <p className="h4 text-capitalize fw-bold">Our Partners</p>
      <div 
        className="partner-image-container relative flex cursor-grab active:cursor-grabbing w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          ref={contentRef}
          className="flex flex-row flex-nowrap"
          style={{ x, display: 'flex', flexDirection: 'row', width: 'max-content' }}
          drag="x"
          dragMomentum={false}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          onDrag={(e, info) => {
            if (contentRef.current) {
              const fullWidth = contentRef.current.scrollWidth;
              // Convert pixel delta to percentage of total width
              const deltaPercentage = (info.delta.x / fullWidth) * 100;
              baseX.set(baseX.get() + deltaPercentage);
            }
          }}
        >
          {/* Multiple repetitions ensure a seamless loop on any screen width */}
          {[...Array(REPETITIONS)].flatMap(() => partnerImages).map((partner, index) => (
            <div key={index} className="partner-image">
              <a 
                href={partner.link} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => isDragging && e.preventDefault()} // Prevent click if dragging
              >
                <img 
                  src={partner.image} 
                  alt={`${partner.name} logo`} 
                  className="pt-3" 
                  width={partner.width} 
                  height={partner.height} 
                  style={{ objectFit: "contain", pointerEvents: "none" }} 
                />
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default OurPartners