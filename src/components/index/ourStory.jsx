import React from 'react'
import OurStoryImg from "../../images/our-story.png"
import {Link} from "gatsby";

function OurStory() {
    return (
        <div className='container mt-5 py-5'>
            <div className="row pt-4">
                <div className="col-6 col-sm-12 col-md-6 col-lg-6 mx-auto d-flex justify-content-center align-items-center">
                    <img src={OurStoryImg} href="Our story" width={450} height={350} className="our-story-img" />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 py-3 our-story-col">
                    <p className="h5 event">Our Story</p>
                    <p className="h3 text-start event-title mb-3">Who We Are</p>
                    <p className="p">
                        Uamuzi Foundation is a social enterpise advocating for social
                        justice with a specific focus on the youth, women and persons living with disabilities
                        who deserve equal economic, political and social rights; while integrating
                        technology and data. The youth make up the biggest population and the
                        largest voting block in our democratic space.
                    </p>
                    <p className="p our-paragraph"><strong>Our areas of work include</strong> Civic Engagement, Leadership,
                        Civic Education, Gender Equality, Disability Inclusion,
                        Policy and Advocacy, Diversity and Inclusion, Transparency and Accountability,
                        Environmental Conservation and Peacebuilding. We aim to open the doors of access and
                        opportunity for everyone. We believe that the youth are the future for the World we want.</p>
                    <Link to="/about" style={{textDecoration: "none"}}>
                        <button className="hero-read-more d-flex justify-content-center align-items-center">Find Out More
                            <box-icon className="hero-icon-btn" name='right-arrow-alt' size="sm" color="#8067AD"></box-icon>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default OurStory
