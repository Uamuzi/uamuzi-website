import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo";
import Elvis from '../images/Elvis.jpg'
import bisagaya from '../images/Bisagaya.jpg'
import SharonO from '../images/SharonO.jpg'
import Novat from '../images/Novat.jpg'
import TeamMember from "../components/team/teamMember";

const TeamPage = () => (
  <Layout>
    <div className="container">
        <p className="text-center event">OUR AMAZING TEAM</p>
        <p className="text-center h3 event-title">Meet The Team</p>
        <p className="text-center p">Our leadership team drives the strategy and direction of our work to deliver impact at scale for the most vulnerable.</p>
    </div>
    <div className="container team py-4">
        <div className="team-inner m-0 p-0 position-relative">
            <div className="team-member-image position-relative" style={{
                backgroundImage: `url(${Elvis})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="long-purple-line position-absolute"></div>
                <div className="short-grey-line position-absolute"></div>
            </div>
            <div className="team-member-info text-center py-2">
                <p className="text-capitalize fw-bold">elvis sitati</p>
                <p className="primary-color text-capitalize">Founder & CEO</p>
                <span className="primary-color">
                    <a href="https://www.linkedin.com/in/elvis-sitati-2a282b79/" target='_blank'><box-icon name='linkedin-square' type='logo' color="#8067AD" ></box-icon></a>
                </span>
            </div>
        </div>
        <div className="team-inner m-0 p-0 position-relative">
            <div className="team-member-image position-relative" style={{
                backgroundImage: `url(${bisagaya})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="long-purple-line position-absolute"></div>
                <div className="short-grey-line position-absolute"></div>
            </div>
            <div className="team-member-info text-center py-2">
                <p className="text-capitalize fw-bold">Andrew bisagaya</p>
                <p className="primary-color text-capitalize">General Counsel</p>
                <span className="primary-color">
                    <a href="https://www.linkedin.com/in/bisagaya-andrew-309b9497/" target='_blank'><box-icon name='linkedin-square' type='logo' color="#8067AD" ></box-icon></a>
                </span>
            </div>
        </div>

        <div className="team-inner m-0 p-0 position-relative">
            <div className="team-member-image position-relative" style={{
                backgroundImage: `url(${SharonO})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="long-purple-line position-absolute"></div>
                <div className="short-grey-line position-absolute"></div>
            </div>
            <div className="team-member-info text-center py-2">
                <p className="text-capitalize fw-bold">Sharon Nechesa</p>
                <p className="primary-color text-capitalize">Social Affairs</p>
                <span className="primary-color">
                    <a href="https://www.linkedin.com/in/nechesa-oyuchi-llb-hons-dip-ksl-79053978/" target='_blank'><box-icon name='linkedin-square' type='logo' color="#8067AD" ></box-icon></a>
                </span>
            </div>
        </div>
        <div className="team-inner m-0 p-0 position-relative">
            <div className="team-member-image position-relative" style={{
                backgroundImage: `url(${Novat})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="long-purple-line position-absolute"></div>
                <div className="short-grey-line position-absolute"></div>
            </div>
            <div className="team-member-info text-center py-2">
                <p className="text-capitalize fw-bold">Novat Matoju</p>
                <p className="primary-color text-capitalize">Finance Officer</p>
                <span className="primary-color">
                    <a href="https://www.linkedin.com/in/novatmatoju/" target='_blank'><box-icon name='linkedin-square' type='logo' color="#8067AD" ></box-icon></a>
                </span>
            </div>
        </div>
        <div className="team-inner m-0 p-0 position-relative">
            <div className="team-member-image position-relative" style={{
                backgroundImage: `url(${Elvis})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="long-purple-line position-absolute"></div>
                <div className="short-grey-line position-absolute"></div>
            </div>
            <div className="team-member-info text-center py-2">
                <p className="text-capitalize fw-bold">Edward Mwangi</p>
                <p className="primary-color text-capitalize">Product $ Innovations Officer</p>
                <span className="primary-color">
                    <a href="https://www.linkedin.com/in/edward-mwangi-0148b923a/" target='_blank'><box-icon name='linkedin-square' type='logo' color="#8067AD" ></box-icon></a>
                </span>
            </div>
        </div>
        <div className="team-inner m-0 p-0 position-relative">
            <div className="team-member-image position-relative" style={{
                backgroundImage: `url(${Elvis})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="long-purple-line position-absolute"></div>
                <div className="short-grey-line position-absolute"></div>
            </div>
            <div className="team-member-info text-center py-2">
                <p className="text-capitalize fw-bold">Eugine Raburu</p>
                <p className="primary-color text-capitalize">Technology Officer</p>
                <span className="primary-color">
                    <a href="https://www.linkedin.com/in/eugene-raburu-kf/" target='_blank'><box-icon name='linkedin-square' type='logo' color="#8067AD" ></box-icon></a>
                </span>
            </div>
        </div>
        <div className="team-inner m-0 p-0 position-relative">
            <div className="team-member-image position-relative" style={{
                backgroundImage: `url(${Elvis})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="long-purple-line position-absolute"></div>
                <div className="short-grey-line position-absolute"></div>
            </div>
            <div className="team-member-info text-center py-2">
                <p className="text-capitalize fw-bold">Monicha Kimani</p>
                <p className="primary-color text-capitalize">Operations Officer</p>
                <span className="primary-color">
                    <a href="https://www.linkedin.com/in/monicah-kimani-561a1b69/" target='_blank'><box-icon name='linkedin-square' type='logo' color="#8067AD" ></box-icon></a>
                </span>
            </div>
        </div>
        <TeamMember imageUrl={bisagaya} fullName={"Monicah Kimani"} position={"Operations Officer"} linkedinUsername={"monicah-kimani-561a1b69"}/>
        <TeamMember imageUrl={bisagaya} fullName={"Antony Gakuru"} position={"Lead DevOps Engineer"} linkedinUsername={"muriithigakuru"}/>

        
    </div>
  </Layout>
)

export const Head = () => <Seo title="Team" />

export default TeamPage
