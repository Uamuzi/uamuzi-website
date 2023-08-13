import React from 'react'
import BecomeALeader from "../../images/become-a-leader.jpg";
import UamuziHome from "../../images/uamuzi-home.jpg";
import Akimbo from "../../images/akimbo.jpg";
import Elizeu from "../../images/elizeu.jpg";

function Technology() {
    return (
        <div className='container'>
            <p className="p text-uppercase fs-6 py-2 sdg-top fw-bold text-center">
                Technology
            </p>
            <h2 className="text-capitalize text-center fw-bold">The era of social networking</h2>
            <div className="pictorama position-relative d-flex justify-content-center align-items-center overflow-hidden">
                <div className="d-none d-md-block d-lg-block tech-image img1 position-absolute"
                style={{
                    backgroundImage: `url(${Akimbo})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: 'no-repeat'
                }}
                ></div>
                <div className="d-none d-md-block d-lg-block tech-image img2 position-absolute"
                style={{
                    backgroundImage: `url(${Elizeu})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: 'no-repeat'
                }}
                ></div>
                <div className="d-none d-md-block d-lg-block tech-image img3 position-absolute" 
                style={{
                    backgroundImage: `url(${Elizeu})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: 'no-repeat'
                }}
                ></div>
                <div className="d-none d-md-block d-lg-block tech-image img4 position-absolute"
                style={{
                    backgroundImage: `url(${Elizeu})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: 'no-repeat'
                }}
                ></div>
                <div className="d-none d-md-block d-lg-block tech-image img5 position-absolute"
                style={{
                    backgroundImage: `url(${Elizeu})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: 'no-repeat'
                }}
                ></div>
                <div className="d-none d-md-block d-lg-block tech-image img6 position-absolute"
                style={{
                    backgroundImage: `url(${Elizeu})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: 'no-repeat'
                }}
                ></div>
                <div className="tech-inner position-relative">
                    <img src={BecomeALeader} alt="become a leader" className='uamuzi-home-img' />
                    <img src={UamuziHome} alt="uamuzi-home" className='become-a-leader-img' />
                </div>
            </div>
                <div className="container pt-5 text-center w-75">
                    <h2 className="tech-title text-capitalize text-center">Join Us in creating social change</h2>
                    <p className='primary-color fs-6'>
                    The use of technology has become an important tool in championing for social change around the world. Uamuzi advocates for citizen participation in governance and peacebuilding, with a focus on the youth, women and persons with disabilities.
                    </p>
                </div>
        </div>
    )
}

export default Technology