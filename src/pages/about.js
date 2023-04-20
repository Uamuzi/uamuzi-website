import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo";
import about from "../images/about.png"


const AboutPage = () => (
  <Layout>
     <div className='container bg-light my-4'>
            <p className="event">Our Aim</p>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 about-col">
                  <p className="h3 text-start event-title">What We Do</p>
                    <p className="p">
                      We bring together diverse voices around innovative ideas to drive progress and tackle problems on social justice. We build communities of support and nurture initiatives to advance the dignity and well-being of the people and planet. 
                    </p>
                    <p className="p">
                      We are open-minded, learn constantly, listen intently to different experiences and perspectives, build strong and diverse coalitions and support community engagement in decision-making. We partner with like-minded stakeholders to make an impact on our communities most pressing needs using technology and real time data.
                    </p>
                </div>
                <div className="col-6 col-sm-12 col-md-6 col-lg-6 mx-auto d-flex justify-content-center align-items-center">
                    <img src={about} href="" width={400} height={300} className="" />
                </div>
            </div>
        </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="About" />

export default AboutPage
