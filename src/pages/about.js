import * as React from "react"

import Layout from "../components/layout"
import Seo from '../components/seo';
import about from "../images/about.png"
import values from '../images/about-values.png'
// import { sizes } from 'gatsby-plugin-sharp'


const AboutPage = () => (
  <Layout>
     <div className='container my-4'>
            <p className="event">Our Aim</p>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 about-col" >
                  <p className="h3 text-start event-title">What We Do</p>
                    <p className="p ">
                      We bring together diverse voices around innovative ideas to drive progress and tackle problems on social justice. We build communities of support and nurture initiatives to advance the dignity and well-being of the people and planet. 
                    </p>
                    <p className="p">
                      We are open-minded, learn constantly, listen intently to different experiences and perspectives, build strong and diverse coalitions and support community engagement in decision-making. We partner with like-minded stakeholders to make an impact on our communities most pressing needs using technology and real time data.
                    </p>
                </div>
                <div className="col-6 col-sm-12 col-md-6 col-lg-6 mx-auto d-flex justify-content-center align-items-center">
                    <img src={about} href="" width={420} height={350} className="" />
                </div>
            </div>
        </div>
        <div className="bg-blue position-relative">
          <div className="top"></div>
          <p className="py-4 text-center fs-4">
            Our mission is to promote sustainable development and better standards of life; with the vision to build a world where everyone has an equal opportunity to learn and prosper. 
          </p>
          <div className="bottom"></div>
          <div className="bottom-1"></div>
        </div>
        <div className="container my-4">
        <div className="row">
          <div className="col-6 col-sm-12 col-md-6 col-lg-6 mx-auto d-flex justify-content-center align-items-center">
              <img src={values} href="" width={330} height={400} className="" />
          </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 about-col" style={{fontSize: '13.5px'}}>
              <p className="event">OUR VALUES</p>
              <p className="h3 text-start event-title">What Drives Us</p>
                <p className="py-2" style={{"fontSize" : "16px"}}>
                  The values that govern all aspects of our work and operations include: 
                </p>
                <p className="p d-flex">
                  <span className="d-flex"><box-icon name='check-circle' color="#8067AD"></box-icon> <p className="p-text">Accountability  - <span style={{color: '#000'}}>Be transparent and open in all dealings.</span></p> </span>
                </p>
                <p className="p d-flex">
                  <span className="d-flex"><box-icon name='check-circle' color="#8067AD"></box-icon> <p className="p-text">Inclusion  - <span style={{color: '#000'}}>Be inclusive and collaborative as we strive to progress and evolve.</span></p> </span>
                </p>
                <p className="p d-flex">
                  <span className="d-flex"><box-icon name='check-circle' color="#8067AD"></box-icon> <p className="p-text">Innovative  - <span style={{color: '#000'}}>Push for breakthrough innovations and explore the possibilities of the future.</span></p> </span>
                </p>
                <p className="p d-flex">
                  <span className="d-flex"><box-icon name='check-circle' color="#8067AD"></box-icon> <p className="p-text">Integrity - <span style={{color: '#000'}}>Be ethical and honest in all dealings and responsibility for our actions.</span></p> </span>
                </p>
                <p className="p d-flex">
                  <span className="d-flex"><box-icon name='check-circle' color="#8067AD"></box-icon> <p className="p-text">Passion   - <span style={{color: '#000'}}>Set a culture for continuous improvement and excellence while attracting and developig the best talent.</span></p></span>
                </p>
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
