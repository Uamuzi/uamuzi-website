import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo";
import volunteer1 from "../images/volunteer1.png"
import volunteer2 from "../images/volunteer2.png"
import volunteer3 from "../images/volunteer3.png"


const VolunteersPage = () => (
  <Layout>
    <div className="container pb-5 pt-3">
    <div className='container bg-light my-4 py-4'>
        <p className="event">BE PART OF OUR UFV</p>
        <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 about-col">
              <p className="h3 text-start event-title">Volunteer</p>
                <p className="p">
                    Uamuzi Foundation Volunteers also known as UFV is a program engaging young people in tackling challenges and transform the pace and nature of development. We benefit both the society at large and the individual by strengthening trust, solidarity and reciprocity among the youth and creating opportunities for participation. 
                </p>
                <p className="p">
                    We offer vital help to people and communities in need, but the benefit is even greater for the volunteer. The right match can help find friends, connect with the community, learn new skills and even advance careers. We work with volunteers who are qualified and highly motivated in developing programs and promoting the value and recognition of volunteerism.
                </p>
            </div>
            <div className="col-6 col-sm-12 col-md-6 col-lg-6 mx-auto d-flex justify-content-center align-items-center">
                <img src={volunteer1} href="" width={400} height={300} className="" />
            </div>
        </div>
    </div>
    <div className='container my-4 py-4'>
      <div className="row">
        <div className="col-6 col-sm-12 col-md-6 col-lg-6 mx-auto d-flex justify-content-center align-items-center">
            <img src={volunteer2} href="" width={400} height={300} className="" />
        </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 about-col">
            <p className="h3 text-start event-title">Our Volunteers' Roles</p>
              <p className="p py-2">
                Social cohesion and trust are strengthened through individual and collective volunteer action which leads to sustainable outcomes for people, by people. 
              </p>
              <div className="p-border"><p>01. </p><p>Provide technical support and enhance capacity in our areas of focus.</p></div>
              <div className="p-border"><p>02. </p> <p>Facilitate new spaces for dialogue and action by reaching out to people thus bringing their voices and knowledge into collective action that is crucial in building ownership.</p></div>
              <div className="p-border"><p>03. </p><p>Raise awareness to champion changes and inspire others to facilitate durable changes in mindsets and behaviors in our communities.</p></div>
              <div className="p-border"><p>04. </p><p>Measure progress on our projects through collecting and analyzing data, providing expertise and support participatory forms of planning, monitoring and evaluation.</p></div>
          </div>
      </div>
    </div>
    <div className="container my-6 py-4 volunteer">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 about-col">
            <p className="event" style={{color: '#fff'}}>VOLUNTEERISM</p>
            <p className="h3 text-start event-title">Our Volunteers' Roles</p>
                <p className="p py-4">
                    Our volunteerism strengthens civic engagement and safeguards social inclusion, while deepening solidarity. Here's how you qualify to volunteer
                </p>
                <p className="p d-flex">
                  <span style={{paddingRight: '10px'}} className="d-flex"><box-icon name='check-circle' color="#fff"></box-icon></span> Should be below the age of 35 years.
                </p>
                <p className="p d-flex">
                  <span style={{paddingRight: '10px'}} className="d-flex"><box-icon name='check-circle' color="#fff"></box-icon> </span>Should read, write and communicate effectively in one or more local languages.
                </p>
                <p className="p d-flex">
                  <span style={{paddingRight: '10px'}} className="d-flex"><box-icon name='check-circle' color="#fff"></box-icon></span>Should have a strong community presence, local knowledge and networks.
                </p>
                <p className="p d-flex">
                  <span style={{paddingRight: '10px'}} className="d-flex"><box-icon name='check-circle' color="#fff"></box-icon> </span>Should demonstrate a strong commitment with respect for diversity.
                </p>
                <p className="p d-flex">
                  <span style={{paddingRight: '10px'}} className="d-flex"><box-icon name='check-circle' color="#fff"></box-icon> </span>Should be interested and committed to the values and principles of volunteering.
                </p>
                <p className="p d-flex">
                  <span style={{paddingRight: '10px'}} className="d-flex"><box-icon name='check-circle' color="#fff"></box-icon> </span>Higher technical diploma, Bachelor’s or Master’s degree is an added advantage.
                </p>
            </div>
            <div className="col-6 col-sm-12 col-md-6 col-lg-6 mx-auto d-flex justify-content-center align-items-center">
                <img src={volunteer3} href="" width={400} height={450} className="" />
            </div>
        </div>
    </div>
    <form className="container justify-content-center vol-form">
        <h2 className="event">JOIN US</h2>
        <p className="h3 text-center event-title">Be Part Of Uamuzi Foundation Volunteers (UFV)</p>
        <p className="p">It starts by filling the form below</p>
        <div className="d-flex gap-2 py-4">
            <div className="text-start name1">
                <label>First Name</label>
                <input type="text" placeholder="First Name" />
            </div>
            <div className="text-start name2">
                <label>Last Name</label>
                <input type="text" placeholder="Last Name" />
            </div>
        </div>
        <div className="text-start">
            <label>Email</label>
            <input type="email" placeholder="you@company.com" />
        </div>
        <div className="text-start py-4">
            <label>Phone Number</label>
            <input type="email" placeholder="Enter your phone number" />
        </div>
        <div className="d-flex text-start text_input">
            <div>
                <label>Country</label>
                <input type="text" />
            </div>
            <div>
                <label>County</label>
                <input type="text" />
            </div>
            <div>
                <label>Constituency</label>
                <input type="text" />
            </div>
            <div>
                <label>Ward</label>
                <input type="text"  />
            </div>
        </div>
        <div className="text">
            <label>A little bit about yourself</label>
            <textarea className="pt-4" />
        </div>
        <button className='join' type="submit">Join UFV</button>
    </form>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Volunteer" />

export default VolunteersPage
