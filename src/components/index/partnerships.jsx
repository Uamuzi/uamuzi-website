import React from 'react'
import PartnershipsImage from "../../images/partnerships.png";

function Partnerships() {
    return (
        <div className='container mt-5 py-5'>
            <div className="row pt-4">
                <div className="col-6 col-sm-12 col-md-6 col-lg-6 mx-auto d-flex justify-content-center align-items-center">
                    <img src={PartnershipsImage} href="Our story" width={450} height={300} className="our-story-img" />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 py-3 our-story-col">
                    <p className="h5 event fs-6 text-uppercase">partners</p>
                    <p className="h3 text-start event-title mb-3 text-capitalize fw-bold">partnerships</p>
                    <p className="p">
                        Partnership is in our DNA. We are open to partner with a wide range of like-minded stakeholders on a variety of projects and campaigns. When we work together, we increase our impact and help do more to deliver global progress for everyone, everywhere.

                    </p>
                    <p className="p our-paragraph">We adhere to a deeply ethical approach to humanitarian, one that holds ourselves accountable to being a trustworthy partner and to approaching our work with humility and respect for the expertise of the communities we serve and of other stakeholders with whom we collaborate with.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Partnerships;