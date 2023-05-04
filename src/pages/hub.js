import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo";
import hub1 from '../images/hub1.png'
import hub2 from '../images/hub2.png'
import hub3 from '../images/hub3.png'
import michael from '../images/michael.png'


const HubPage = () => {
  const [open, setOpen] = React.useState(false);

if (open) {
  return (
      <Layout>
          <div className="pop_up">
              <div className="icon">
                  <box-icon style={{cursor: 'pointer'}} onClick={() => setOpen(false)} color='#8067AD' name='x'></box-icon>
              </div>
              <div className="line" />
              <h5 className="event text-center py-2">Skills</h5>
              <p className="p">We accept requests from a wide range of skills in:</p>
              <p className="p d-flex">
                <span style={{ paddingRight: '10px' }} className="d-flex"><box-icon name='check-circle' color="#8067AD"></box-icon> </span>Artificial Intelligence and Machine Learning
              </p>
              <p className="p d-flex">
                <span style={{ paddingRight: '10px' }} className="d-flex"><box-icon name='check-circle' color="#8067AD"></box-icon></span>Data Management (Science, Analytics, Engineering and Visualization)
              </p>
              <p className="p d-flex">
                <span style={{ paddingRight: '10px' }} className="d-flex"><box-icon name='check-circle' color="#8067AD"></box-icon> </span>Networking and Information Security (Cyber security)
              </p>
              <p className="p d-flex">
                <span style={{ paddingRight: '10px' }} className="d-flex"><box-icon name='check-circle' color="#8067AD"></box-icon> </span>Cloud Computing
              </p>
              <p className="p d-flex">
                <span style={{ paddingRight: '10px' }} className="d-flex"><box-icon name='check-circle' color="#8067AD"></box-icon> </span>Extended Reality (Virtual Reality and Augmented Reality)
              </p>
              <p className="p d-flex">
                <span style={{ paddingRight: '10px' }} className="d-flex"><box-icon name='check-circle' color="#8067AD"></box-icon> </span>Internet of Things(IoT)
              </p>
              <p className="p d-flex">
                <span style={{ paddingRight: '10px' }} className="d-flex"><box-icon name='check-circle' color="#8067AD"></box-icon></span>Mobile Development (Android, IOS)
              </p>
              <p className="p d-flex">
                <span style={{ paddingRight: '10px' }} className="d-flex"><box-icon name='check-circle' color="#8067AD"></box-icon> </span>User Interface (UI) and User Experience (UX) Design
              </p>
              <p className="p d-flex">
                <span style={{ paddingRight: '10px' }} className="d-flex"><box-icon name='check-circle' color="#8067AD"></box-icon> </span>Blockchain
              </p>
              <p className="p d-flex">
                <span style={{ paddingRight: '10px' }} className="d-flex"><box-icon name='check-circle' color="#8067AD"></box-icon> </span>Robotics
              </p>
              <p className="p d-flex">
                <span style={{ paddingRight: '10px' }} className="d-flex"><box-icon name='check-circle' color="#8067AD"></box-icon></span>Quantum Computing
              </p>
              <p className="p d-flex">
                <span style={{ paddingRight: '10px' }} className="d-flex"><box-icon name='check-circle' color="#8067AD"></box-icon> </span>Product Management
              </p>
              <p className="p d-flex">
                <span style={{ paddingRight: '10px' }} className="d-flex"><box-icon name='check-circle' color="#8067AD"></box-icon> </span>Game Development
              </p>
              <p className="p d-flex">
                <span style={{ paddingRight: '10px' }} className="d-flex"><box-icon name='check-circle' color="#8067AD"></box-icon> </span>Animation Development
              </p>
              <div className="close">
                  <button onClick={() => setOpen(false)}>Close</button>
              </div>
          </div>
      </Layout>
  )
}
  return (
    <Layout>
      <>
        <div className="container my-4">
          <p className="event text-center">UAMUZI HUB</p>
          <p className="h3 text-center event-title">Engineering Academy</p>
          <p className="text-center">
            Uamuzi Hub is an engineering group with fresh insights, new ideas, and diverse skills learning and working collaboratively and strategically to strengthen our community. The Hub is committed to generating, disseminating, and preserving knowledge, and to working with others to bring to existence some of the best innovations. We are primarily focused on young developers aged below 35 years who are selected through online applications, interviews and boot camps. We accept requests on a rolling basis.
            Intensely curious and driven to explore, our developers value rigorous analytical thinking, ingenuity, hands-on problem solving and big new ideas. Stimulating, supportive, and playful, our Hub is a second home for many engineers.
          </p>
        </div>
        <div className='container my-4 py-4'>
          <div className="row">
            <div className="col-6 col-sm-12 col-md-6 col-lg-6 mx-auto d-flex justify-content-center align-items-center">
              <img src={hub1} href="" width={400} height={300} className="" />
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 about-col">
              <p className="h3 text-start event-title">Values</p>
              <p className="p py-2">
                We believe in the power of participation and active engagement in the process of creating practical solutions to the challenges we face. We work with integrity, humility, respect and maintain an optimistic belief that we can do something to create a better world defined by equitable opportunity. We pursue our work with a commitment to excellence, good stewardship of the resources we use, accountability for achieving measurable and durable impact, and taking joy in the opportunity to collectively build a better world. We are committed to creativity, diversity and inclusion in our work environment and our community to constantly learn, communicate honestly and to continuously improve our programs, products, and partnerships.
              </p>
            </div>
          </div>
        </div>
        <div className="container my-4 hub">
          <p className="h3 text-start event-title">Benefits</p>
          <div className="p-borders"><p><box-icon name='check-circle' color="#fff"></box-icon> </p><p>Community - We create a safe space yet challenging environment for engineers to connect among themselves and showcase their skills, get feedback, consider other perspectives, invite creative tension and take risks. </p></div>
          <div className="p-borders"><p><box-icon name='check-circle' color="#fff"></box-icon> </p> <p>Exposure - We help them to explore their interests and discover their true passion early and learn how to work with others with complementary abilities.</p></div>
          <div className="p-borders"><p><box-icon name='check-circle' color="#fff"></box-icon> </p><p>Support to grow - We provide them the ability to be agile and try new technologies and processes along the way that will shape them to be more on the cutting edge in the tech world.</p></div>
          <div className="p-borders"><p><box-icon name='check-circle' color="#fff"></box-icon> </p><p>Programme and Network - We support them to feel part of our network by gaining visibility and credibility and connect to like-minded individuals locally and globally..</p></div>
          <div className="p-borders"><p><box-icon name='check-circle' color="#fff"></box-icon> </p><p>Mentorship and collaboration - We connect our engineers to a diverse community of entrepreneurs, practitioners, investors and organizations by providing access to mentors and expert coaches for collaboration and support towards each other’s ambitions.</p></div>
        </div>
        <div className='container my-4 py-4'>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 about-col">
              <p className="h3 text-start event-title">Skills</p>
              <p className="p">We accept requests from a wide range of skills in:</p>
              <p className="p d-flex">
                <span style={{ paddingRight: '10px' }} className="d-flex"><box-icon name='check-circle' color="#8067AD"></box-icon> </span>Artificial Intelligence and Machine Learning
              </p>
              <p className="p d-flex">
                <span style={{ paddingRight: '10px' }} className="d-flex"><box-icon name='check-circle' color="#8067AD"></box-icon></span>Data Management (Science, Analytics, Engineering and Visualization)
              </p>
              <p className="p d-flex">
                <span style={{ paddingRight: '10px' }} className="d-flex"><box-icon name='check-circle' color="#8067AD"></box-icon> </span>Networking and Information Security (Cyber security)
              </p>
              <p className="p d-flex">
                <span style={{ paddingRight: '10px' }} className="d-flex"><box-icon name='check-circle' color="#8067AD"></box-icon> </span>Cloud Computing
              </p>
              <p className="p d-flex">
                <span style={{ paddingRight: '10px' }} className="d-flex"><box-icon name='check-circle' color="#8067AD"></box-icon> </span>Extended Reality (Virtual Reality and Augmented Reality)
              </p>
              <button className="btn-primary" onClick={() => setOpen(true)}>Read More <box-icon name='right-arrow-alt' color='#8067AD'></box-icon></button>
            </div>
            <div className="col-6 col-sm-12 col-md-6 col-lg-6 mx-auto d-flex justify-content-center align-items-center">
              <img src={hub2} href="" width={400} height={300} className="" />
            </div>
          </div>
        </div>
        <div className='container bg-light my-4 p-4 '>
          <div className="row align-items-center">
            <div className="col-12 col-sm-12 col-md-6 my_bg col-lg-6 about-col">
              <p className="event text-start">FROM OUR LEAD DEVELOPER</p>
              <p className="h3 text-start event-title">Michael Munavu</p>
              <p className="p py-2">
                “We hire smart engineers for their potential, not their past. Our biggest expectation is that they stay curious, keep learning and take on more responsibility. In return, we’ll equip them to develop into an even more awesome version of themselves”
              </p>
            </div>
            <div className="col-6 col-sm-12 col-md-6 col-lg-6 mx-auto d-flex justify-content-center align-items-center">
              <img src={michael} href="" width={350} height={400} className="" />
            </div>
          </div>
        </div>
        <div className='container my-4 p-4'>
          <div className="row align-items-center">
            <div className="col-6 col-sm-12 col-md-6 col-lg-6 mx-auto d-flex justify-content-center align-items-center">
              <img src={hub3} href="" width={400} height={350} className="" />
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 about-col">
              <p className="h3 text-start event-title">Diversity</p>
              <p className="p py-2">
                We are keener on promoting diversity and inclusion in the tech industry since women have been under represented in the tech workforce. We have a lot of work to do to realize our potential as a truly diverse and inclusive community. We help them source the right knowledge and skill as well as advice and opportunities from peers and experts both within and outside our Hub. Together we can build a community that thrives because of its diversity, where everyone has a chance to create and benefit from the technology that we build to solve global problems.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <form className="contact_forms">
            <p className="event text-center">JOIN OUR COMMUNITY</p>
            <p className="h3 text-center event-title">Be Part Of Uamuzi Community</p>
            <p className="p text-center">We are always keen to meet passionate and talented engineers.</p>
            <div className="text-start py-4">
              <label>Your Name</label>
              <input type="email" placeholder="Eg, John Doe" />
            </div>
            <div className="text-start py-4">
              <label>Email</label>
              <input type="email" placeholder="example@gmail.com" />
            </div>
            <div className="text">
              <label>A little bit about yourself</label>
              <textarea className="p-1" />
            </div>
            <div className="file-input">
              <label for='file'>Upload CV</label>
              <input type="file" id="file" className="file" />
            </div>
            <button className="join">Send</button>
          </form>
        </div>
      </>
  </Layout>
  )
}

export const Head = () => <Seo title="Hub" />

export default HubPage
