import React from 'react';
import HeroImage from './heroImage';

function Hero() {
    const img1Style = {
        margin: "30px auto 0",
        zIndex: -1,
    }
    const img2Style = {
        width: "100px",
        height: "100px",
        top: "0px",
        right: "0px",
        zIndex: -1,
    }
    const img3Style = {
        width: "100px",
        height: "100px",
        marginRight: "20px",
        borderRadius: "50 %",
        position: "absolute",
        top: "320px",
        left: "50px",
        zIndex: -1
    }
    const img4Style = {
        width: "200px",
        height: "200px",
        borderRadius: "50 %",
        margin: "30px auto 0",
        boxShadow: "inset - 25px - 25px 30px rgba(0, 0, 0, 0.7)",
        position: "absolute",
        top: "300px",
        right: "0px",
        zIndex: -1
    }

    const hero1 = "hero-1.png"
    const hero2 = "hero-2.png"
    const hero3 = "hero-3.png"
    const hero4 = "hero-4.png"


    return (
        <div className='container hero-container'>
            <div className="row m-0">
                <div className="col col-md-4  col-lg-4 left-hero py-5 position-relative">
                    <figure className='bgCircle'></figure>
                    <h1 className="hero-title fw-bold">The Youth Are The <br /> Hope Of The  <br /> Future</h1>
                    <p className="hero-text">We dignify the expectations, aspirations and priorities
                        of our community. Our transformative agenda places equality
                        and dignity at the center and calls for changes in our development
                        pattern while respecting the environment.
                    </p>
                    <figure className='tiny tiny-2'></figure>
                    <figure className='tiny tiny-2-1'></figure>

                </div>
                <div className="d-none col d-md-block col-md-8 col-lg-8 left-hero  position-relative">
                
                <div className='hero-img1'>
                    <HeroImage imageName={hero1} imgStyle={img1Style} />
                </div>

                <div className='hero-img2'>
                    <HeroImage imageName={hero4} imgStyle={img2Style} />
                </div>

                <div className='hero-img3'>
                    <HeroImage imageName={hero2} imgStyle={img3Style} />
                </div>

                <div className='hero-img4'>
                    <HeroImage imageName={hero3} imgStyle={img4Style} />
                </div>

                   
                    <figure className='tiny tiny-1'></figure>
                    <figure className='tiny tiny-1-1'></figure>
                </div>
            </div>
        </div>
    )
}

export default Hero