import React from 'react';
import HeroImage from './heroImage';
import hero1 from "../../images/hero-1.png"
import hero2 from "../../images/hero-2.png"
import hero3 from "../../images/hero-3.png"
import hero4 from "../../images/hero-4.png"

function Hero() {
    const img1Style = {
        width: "280px",
        height: "280px",
        // margin: "30px auto 0",
        backgroundImage: `url(${hero1})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderRadius: "50 %",
        // boxShadow: "inset - 25px - 25px 30px rgba(0, 0, 0, 0.7)",
        position: "absolute",
        top: "30px",
        right: "100px",
    }
    const img2Style = {
        width: "100px",
        height: "100px",
        // margin: "30px auto 0",
        backgroundImage: `url(${hero4})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderRadius: "50 %",
        // boxShadow: "inset - 25px - 25px 30px rgba(0, 0, 0, 0.7)",
        position: "absolute",
        top: "0px",
        right: "0px",
    }
    const img3Style = {
        width: "100px",
        height: "100px",
        marginRight: "20px",
        backgroundImage: `url(${hero2})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderRadius: "50 %",
        boxShadow: "inset - 25px - 25px 30px rgba(0, 0, 0, 0.7)",
        position: "absolute",
        top: "320px",
        left: "50px",
        zIndex: -1
    }
    const img4Style = {
        width: "200px",
        height: "200px",
        // margin: "30px auto 0",
        backgroundImage: `url(${hero3})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderRadius: "50 %",
        boxShadow: "inset - 25px - 25px 30px rgba(0, 0, 0, 0.7)",
        position: "absolute",
        top: "300px",
        right: "0px",
        zIndex: 1
    }
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
                    {/* <button className='button-primary'>Read More <box-icon name='right-arrow-alt' color='#fff'></box-icon></button> */}
                    <figure className='tiny tiny-2'></figure>
                    <figure className='tiny tiny-2-1'></figure>

                </div>
                <div className="d-none col d-md-block col-md-8 col-lg-8 left-hero  position-relative">
                    <HeroImage imgStyle={img1Style} />
                    <HeroImage imgStyle={img2Style} />
                    <HeroImage imgStyle={img3Style} />
                    <HeroImage imgStyle={img4Style} />
                    <figure className='tiny tiny-1'></figure>
                    <figure className='tiny tiny-1-1'></figure>
                </div>
            </div>
        </div>
    )
}

export default Hero