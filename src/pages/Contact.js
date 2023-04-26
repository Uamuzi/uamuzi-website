import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo";
import vector from '../images/Vector.png'


const ContactPage = () => (
  <Layout>
     <div className="container">
        <div className="d-flex vector">
            <h3 className="h3 text-start event">CONTACT US</h3>
            <img src={vector} width={100} height={100} alt="vector" />
        </div>
     </div>
     <div className="container d-flex gap-4 our_c">
        <form className="contact_form">
            <p className="h3 text-start event-title">Get In Touch</p>
            <p className="p">Our friendly team would love to hear from you</p>
            <div className="text-start py-4">
                <label>Your Name</label>
                <input type="email" placeholder="Eg, John Doe" />
            </div>
            <div className="text-start py-4">
                <label>Email</label>
                <input type="email" placeholder="example@gmail.com" />
            </div>
            <div className="text">
                <label>Message</label>
                <textarea className="pt-4" />
            </div>
            <button className="join">Send Mesage</button>
        </form>
        <div className="borders" />
        <div className="contacts my-4">
            <div className="contact">
                <div>
                    <box-icon name='envelope' color='#8067AD'></box-icon>
                </div>
                <div>
                    <p className="event">ADDRESS</p>
                    <p className="p">P.O Box 25167-00100 Nairobi, Kenya.</p>
                </div>
            </div>
            <div className="contact">
                <div>
                <box-icon name='phone-call' color='#8067AD'></box-icon>
                </div>
                <div>
                    <p className="event">PHONE</p>
                    <p className="p">+254731301009</p>
                </div>
            </div>
            <div className="contact">
                <div>
                    <box-icon name='envelope' color='#8067AD'></box-icon>
                </div>
                <div>
                    <p className="event">EMAIL</p>
                    <p className="p">info@uamuzi.org</p>
                </div>
            </div>
            <div className="contact">
                <div>
                    <box-icon name='envelope' color='#8067AD'></box-icon>
                </div>
                <div>
                    <p className="event">SOCIALS</p>
                    <p className="p">Facebook. Twitter. Instagram. LinkedIn.</p>
                </div>
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
export const Head = () => <Seo title="Contact" />

export default ContactPage
