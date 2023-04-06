import React from 'react'

function Hero() {
    return (
        <div className='container hero-container'>
            <div className="row m-0">
                <div className="col-6 col-md-6 left-hero py-5">
                    <h1 className="hero-title fw-bold">The Youth Are The <br /> Hope Of The  <br /> Future</h1>
                    <p className="hero-text">We dignify the expectations, aspirations and priorities 
                    of our community. Our transformative agenda places equality 
                    and dignity at the center and calls for changes in our development 
                    pattern while respecting the environment.
                    </p>
                    <button className="hero-read-more d-flex justify-content-center align-items-center">Read More
                        <box-icon className="hero-icon-btn" name='right-arrow-alt' size="sm" color="#8067AD"></box-icon>
                    </button>
                </div>
                <div className="col-6 col-md-6 left-hero py-5">
                    <figure className='ball'>

                    </figure>

                </div>
            </div>
        </div>
    )
}

export default Hero