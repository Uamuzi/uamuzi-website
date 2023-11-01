import React from 'react'
// import Layout from '../layout'

function SDGs() {
    const [open, setOpen] = React.useState(false);

    if (open) {
        return (
                <div className="pop_up">
                    <div className="icon">
                        <box-icon style={{cursor: 'pointer'}} onClick={() => setOpen(false)} color='#8067AD' name='x'></box-icon>
                    </div>
                    <div className="line" />
                    <h5 className="event text-center py-2">Our SDG's</h5>
                    <ul className="landing-goals m-0 p-0">
                        <li className="goals d-flex gap-2">
                            <span className='check-icon'>
                                <box-icon name='check-circle' size="sm" color="#8067AD" ></box-icon>
                            </span>
                            <p><span className="primary-color" > Goal 5:</span> <b>Gender Equality</b> - We ensures women full and effective participation and equal opportunities for leadership at all levels of decision making in political, economic and public life.
                            </p>
                        </li>
                        <li className="goals d-flex gap-2">
                            <span className='check-icon'>
                                <box-icon name='check-circle' size="sm" color="#8067AD" ></box-icon>
                            </span>
                            <p><span className="primary-color" > Goal 9:</span> <b>Industry, Innovation and Infrastructure</b> - We significantly increases access to information and communication and strive to provide affordable and equal access to technology for everyone.
                            </p>
                        </li><li className="goals d-flex gap-2">
                            <span className='check-icon'>
                                <box-icon name='check-circle' size="sm" color="#8067AD"></box-icon>
                            </span>
                            <p><span className="primary-color" > Goal 13:</span> <b> Climate Action</b> - We conduct civic education and raise awareness on climate change mitigation, adaptation, impact reduction and early warning.
                            </p>
                        </li>
                        <li className="goals d-flex gap-2">
                            <span className='check-icon'>
                                <box-icon name='check-circle' size="sm" color="#8067AD" ></box-icon>
                            </span>
                            <p><span className="primary-color" > Goal 16:</span> <b>Peace, Justice and Strong institutions</b> - We establish responsive, inclusive, participatory and representative of marginalized groups in decision-making at all levels of governance and promote the rule of law at the local, national and international levels and ensure equity and equality for all.
                            </p>
                        </li>
                        <li className="goals d-flex gap-2">
                            <span className='check-icon'>
                                <box-icon name='check-circle' size="sm" color="#8067AD" ></box-icon>
                            </span>
                            <p><span className="primary-color" > Goal 17:</span> <b>Partnership for the goal</b> - We enhance support for implementing effective and targeted capacity-building to support local, national and international plans to implement the sustainable development goals.                            </p>
                        </li>
                    </ul>
                    <div className="close">
                        <button onClick={() => setOpen(false)}>Close</button>
                    </div>
                </div>
        )
    }
    return (
        <div className="container py-5">
            <div className="row px-3">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 our-sdgs p-0">
                    <p className="p text-uppercase fs-6 py-2 sdg-top fw-bold">
                        Sustainable development goals (SDGs)
                    </p>
                    <h4 className="h4 sdg-title fw-bold py-2">
                        OUR SDGS
                    </h4>
                    <h4 className="h4 sdg-paragraph fw-light py-2 pr-3">
                        Sustainable Development Goals provides a shared blueprint for peace and prosperity for people and the planet, now and into the future.
                    </h4>


                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 p-0">
                    <p className="p text-uppercase fs-6 fw-bold pb-4 pt-2 ">
                        The Uamuzi Foundation incorporates to its works:
                    </p>
                    <ul className="landing-goals m-0 p-0">
                        <li className="goals d-flex gap-2">
                            <span className='check-icon'>
                                <box-icon name='check-circle' size="sm" color="#8067AD" ></box-icon>
                            </span>
                            <p><span className="primary-color" > Goal 5:</span> <b>Gender Equality</b> - We ensures women full and effective participation and equal opportunities for leadership at all levels of decision making in political, economic and public life.
                            </p>
                        </li>
                        <li className="goals d-flex gap-2">
                            <span className='check-icon'>
                                <box-icon name='check-circle' size="sm" color="#8067AD" ></box-icon>
                            </span>
                            <p><span className="primary-color" > Goal 9:</span> <b>Industry, Innovation and Infrastructure</b> - We significantly increases access to information and communication and strive to provide affordable and equal access to technology for everyone.
                            </p>
                        </li>
                        <li className="goals d-flex gap-2">
                            <span className='check-icon'>
                                <box-icon name='check-circle' size="sm" color="#8067AD"></box-icon>
                            </span>
                            <p><span className="primary-color" > Goal 13:</span> <b> Climate Action</b> - We conduct civic education and raise awareness on climate change mitigation, adaptation, impact reduction and early warning.
                            </p>
                        </li>
                        <button className="btn-primary" onClick={() => setOpen(true)}>Show More
                            <box-icon className="hero-icon-btn" name='right-arrow-alt' size="sm" color="#8067AD"></box-icon>
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SDGs