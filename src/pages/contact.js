import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo";
import vector from '../images/airplane1.png'
import ContactForm from "../components/contactForm";

const ContactPage = () => (
    <Layout>
        <div className="container pt-2 mb-4">
            <div className="d-flex vector">
                <h3 className="h3 text-start event">CONTACT US</h3>
                <img src={vector} width={100} height={100} alt="vector" />
            </div>
            <div className="container d-flex gap-4 our_c">
                <ContactForm />
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
                            <p className="p">+254112729843</p>
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
                            <box-icon name='message-rounded-dots' color='#8067AD'></box-icon>
                        </div>
                        <div>
                            <p className="event">SOCIALS</p>
                            <p className="p d-flex justify-content-center align-items-center gap-2" style={{textDecoration: 'none'}}>
                                <a className="primary-color" target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/profile.php?id=100090904118726'>Facebook</a>
                                <a className="primary-color" target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/uamuziapp/'>Instagram</a>
                                <a className="primary-color" target="_blank" rel="noopener noreferrer" href='https://twitter.com/UamuziApp'>Twitter</a>
                                <a className="primary-color" target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/company/uamuzi'>Linkedin</a>
                            </p>
                        </div>
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
