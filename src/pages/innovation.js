import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo";
import hub3 from '../images/hub3.png'
import innovation2 from '../images/innovation2.png'

const Innovationpage = () => (
    <Layout>
        <>
            <div className="container my-4">
                <p className="event text-center">UAMUZI HUB</p>
                <p className="h3 text-center event-title">Inovation Lab</p>
                <p className="text-center">
                    Our lab is an incubator and a springboard for new ideas and data-driven innovations which addresses some of the societal and business challenges. Our rich experience in integrating innovations into corporate businesses allows us to introduce cutting-edge methodologies, innovative solutions and bold practices for development of projects. We execute some of the best digital solutions and build technologies of the future. We provide: world class engineering, award winning design, end-to-end solutions, innovative approach & new technologies
                </p>
            </div>
            <div className='container my-4 p-4'>
                <div className="row align-items-center">
                    <div className="col-6 col-sm-12 col-md-6 col-lg-6 mx-auto d-flex justify-content-center align-items-center">
                        <img src={hub3} href="" width={400} height={350} className="" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 about-col">
                        <p className="h3 text-start event-title">Startups</p>
                        <p className="p py-2">
                            We partner with startups that have potential winning products in Artificial Intelligence and Machine Learning, FinTech, HealthTech, FoodTech, EdTech, AgriTech, InsurTech, BioTech, Entertainment, Media, Software, Internet, E-commerce, Cryptocurrency and Cyber security, at different stages of development (early, growth and scale-up). We help in raising capital, technical and business development, starting the business, entering new markets, and getting matched with investors and mentors.
                        </p>
                        <div className="p-bordes"><p><box-icon name='check-circle' color="#8067AD"></box-icon> </p><p><b>Concept</b> - The team begins by having a deep understanding of the innovation.</p></div>
                        <div className="p-bordes"><p><box-icon name='check-circle' color="#8067AD"></box-icon> </p><p><b>Brainstorming</b> - The team then conducts a brainstorming session with the founders on enhancing the concept of the product with a business plan.</p></div>
                        <div className="p-bordes"><p><box-icon name='check-circle' color="#8067AD"></box-icon> </p><p><b>Roadmap</b> - The team develops a detailed plan of action that lays out the process of product development, Beta testing, User acquisition and fundraising.</p></div>
                        <div className="p-bordes"><p><box-icon name='check-circle' color="#8067AD"></box-icon> </p><p><b>Evaluation</b> -Once all the stages have been finished successfully, we finally evaluate how the teams will work together to actualize the product.</p></div>
                    </div>
                </div>
            </div>
            <div className="container hub">
                <p className="h3 event-title">Why Join Our Network</p>
                <p className="p">
                    Once you join our network, we will save you the trouble of finding a technical team. We will cater for the costs of development and will continuously support the product for any modifications and improvements that might be required. You will have access to potential investors who will be ready to invest in your startup at any stage of development. We are ready to work with you on building your dream product.
                </p>
            </div>
            <div className="container my-4">
                <div className="row align-items-center">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 about-col py-4">
                        <p className="h3 text-start event-title">Network Partnership</p>
                        <p className="p">
                            We are always eager to partner up and join forces with hubs, incubators, accelerators, venture capitals, angel investors and think tanks interested in helping entrepreneurs grow their businesses. Our aim is to strengthen our network within the technology ecosystem and connect these partners to promising startups. This partnership will benefit both parties to expand their horizon and reach out to more interested clients.
                        </p>
                    </div>
                    <div className="col-6 col-sm-12 col-md-6 col-lg-6 mx-auto d-flex justify-content-center align-items-center">
                        <img src={innovation2} href="" width={400} height={300} className="" />
                    </div>
                </div>
            </div>
            <div className="container my-4">
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
                        <span>Attach Document</span>
                        <label for='file'>Upload Document</label>
                        <input type="file" id="file" className="file" />
                    </div>
                    <button className="join">Send</button>
                </form>
            </div>
        </>
    </Layout>
)

export const Head = () => <Seo title="Innovation" />

export default Innovationpage
