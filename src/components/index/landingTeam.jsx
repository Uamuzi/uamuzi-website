import React from 'react'
import Elvis from "../../images/Elvis.jpg"
import Andrew from "../../images/Andrew.jpg"
import SharonK from "../../images/SharonK.jpg"
import Novat from "../../images/Novat.jpg"
import SharonO from "../../images/SharonO.jpg"
import { Link } from 'gatsby';

function LandingTeam() {
    const teamImages = {
        backgroundImage: `url(${Elvis})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className='container py-5 px-2'>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 pt-3">
                    <p className="p text-uppercase fs-6 py-2 sdg-top fw-bold">
                        Our amazing team
                    </p>
                    <h4 className="h4 sdg-title fw-bold py-2 text-capitalize">
                        Meet the team
                    </h4>
                    <p className="p sdg-paragraph fw-light py-2 pr-3">
                        Our leadership team drives the strategy and direction of our work to deliver impact at scale for the most vulnerable.
                    </p>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex gap-5 justify-content-center align-items-center flex-wrap pt-3">
                    <div className="team-inner m-0 p-0 position-relative">
                        <div className="team-member-image position-relative" style={{
                            backgroundImage: `url(${Elvis})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: 'no-repeat'
                        }}>
                            <div className="long-purple-line position-absolute"></div>
                            <div className="short-grey-line position-absolute"></div>
                        </div>
                        <div className="team-member-info text-center py-2">
                            <p className="text-capitalize fw-bold">elvis sitati</p>
                            <p className="primary-color text-capitalize">Founder & CEO</p>
                            <span className="primary-color">
                                <box-icon name='linkedin-square' type='logo' color="#8067AD" ></box-icon>
                            </span>

                        </div>
                    </div>
                    <div className="team-inner m-0 p-0 position-relative">
                        <div className="team-member-image position-relative" style={{
                            backgroundImage: `url(${Andrew})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: 'no-repeat',
                        }}>
                            <div className="long-purple-line position-absolute"></div>
                            <div className="short-grey-line position-absolute"></div>
                        </div>
                        <div className="team-member-info text-center py-2">
                            <p className="text-capitalize fw-bold">Andrew Bisagaya</p>
                            <p className="primary-color text-capitalize">General counsel</p>
                            <span className="primary-color">
                                <box-icon name='linkedin-square' type='logo' color="#8067AD" ></box-icon>
                            </span>

                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex gap-5 justify-content-center align-items-center flex-wrap pt-5 ">
                    <Link to="/about" className="see-all fw-bold text-capitalize d-flex justify-content-center align-items-center">See all members <span ><box-icon name='right-arrow-alt' color="#8067AD" className="rogue"></box-icon></span></Link>
                    <div className="team-inner m-0 p-0 position-relative">
                        <div className="team-member-image position-relative" style={{
                            backgroundImage: `url(${SharonK})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: 'no-repeat'
                        }}>
                            <div className="long-purple-line position-absolute"></div>
                            <div className="short-grey-line position-absolute"></div>
                        </div>
                        <div className="team-member-info text-center py-2">
                            <p className="text-capitalize fw-bold">Sharon Kombe</p>
                            <p className="primary-color text-capitalize">Social affairs</p>
                            <span className="primary-color">
                                <box-icon name='linkedin-square' type='logo' color="#8067AD" ></box-icon>
                            </span>

                        </div>
                    </div><div className="team-inner m-0 p-0 position-relative">
                        <div className="team-member-image position-relative" style={{
                            backgroundImage: `url(${Novat})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: 'no-repeat'
                        }}>
                            <div className="long-purple-line position-absolute"></div>
                            <div className="short-grey-line position-absolute"></div>
                        </div>
                        <div className="team-member-info text-center py-2">
                            <p className="text-capitalize fw-bold">Novat Matoju</p>
                            <p className="primary-color text-capitalize">Finance Officer</p>
                            <span className="primary-color">
                                <box-icon name='linkedin-square' type='logo' color="#8067AD" ></box-icon>
                            </span>

                        </div>
                    </div><div className="team-inner m-0 p-0 position-relative">
                        <div className="team-member-image position-relative" style={{
                            backgroundImage: `url(${SharonO})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: 'no-repeat'
                        }}>
                            <div className="long-purple-line position-absolute"></div>
                            <div className="short-grey-line position-absolute"></div>
                        </div>
                        <div className="team-member-info text-center py-2">
                            <p className="text-capitalize fw-bold">Sharon Ochieng</p>
                            <p className="primary-color text-capitalize">Programs Officer</p>
                            <span className="primary-color">
                                <box-icon name='linkedin-square' type='logo' color="#8067AD" ></box-icon>
                            </span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingTeam;