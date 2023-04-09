import React from 'react'
import YesLogo from "../../images/YESLogo.png"

function Events() {
    return (
        <div className='container bg-light mt-5 py-5'>
            <p className="h5 event">Events</p>
            <div className="row pt-4">
                <div className="col-12 col-md-6 py-3">
                    <p className="h3 text-start event-title mb-3">Upcoming events</p>
                    <p className="p">
                        This year <b>EnergyNet is hosting YES! (The Youth Energy Summit)</b> a large-scale youth and early-career focused initiative to build human capital in Africa’s energy sector, with the overarching goal of making energy projects more likely to fully succeed. YES! is investing in learning, networking and partnerships that will provide Africa’s students, entrepreneurs, educators and early career professionals the opportunities they need to thrive in the energy sector. They are recruiting from corporates, foundations, NGOs, universities and other initiatives.
                    </p>
                    <button className="hero-read-more d-flex justify-content-center align-items-center">Find Out More
                        <box-icon className="hero-icon-btn" name='right-arrow-alt' size="sm" color="#8067AD"></box-icon>
                    </button>
                </div>
                <div className="col col-md-6 yes-col d-flex justify-content-center align-items-center">
                    <img src={YesLogo} href="Yes logo" width={450} height={350} className='yes-img'/>
                </div>
            </div>
        </div>
    )
}

export default Events