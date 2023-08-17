import React from 'react'
import BecomeALeader from "../../images/become-a-leader.jpg";
import UamuziHome from "../../images/uamuzi-home.jpg";
import leftSideBottom from "../../images/Ellipse44.png";
import topLeft from "../../images/Ellipse45.png";
import topRight from "../../images/Ellipse41.png";
import rightSideTop from "../../images/Ellipse42.png";
import rightSideBottom from "../../images/Ellipse43.png";
import leftSideTop from "../../images/Ellipse40.png";

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
                    backgroundImage: `url(${topLeft})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: 'no-repeat',
                    top: 0,
                    left: 420
                }}
                ></div>
                <div className="d-none d-md-block d-lg-block tech-image img2 position-absolute"
                style={{
                    backgroundImage: `url(${leftSideTop})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: 'no-repeat',
                    left: 150
                }}
                ></div>
                <div className="d-none d-md-block d-lg-block tech-image img3 position-absolute" 
                style={{
                    backgroundImage: `url(${leftSideBottom})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: 'no-repeat',
                    left: 200,
                    bottom: 0,
                    transform: 'translateY(-50%)'
                }}
                ></div>
                <div className="d-none d-md-block d-lg-block tech-image img4 position-absolute"
                style={{
                    backgroundImage: `url(${rightSideBottom})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: 'no-repeat',
                    bottom: 0,
                    right: 60,
                    transform: 'translateY(-25%)'
                }}
                ></div>
                <div className="d-none d-md-block d-lg-block tech-image img5 position-absolute"
                style={{
                    backgroundImage: `url(${topRight})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: 'no-repeat',
                    right: 250,
                    top: 30
                }}
                ></div>
                <div className="d-none d-md-block d-lg-block tech-image img6 position-absolute"
                style={{
                    backgroundImage: `url(${rightSideTop})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: 'no-repeat',
                    top: '50%',
                    right: 10,
                    transform: 'translateY(-50%)'
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