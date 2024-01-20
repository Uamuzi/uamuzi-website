import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo";
import Elvis from '../images/Elvis.jpg'
import bisagaya from '../images/Bisagaya.jpg'
import SharonO from '../images/SharonO.png'
import Novat from '../images/Novat.jpg';
import TeamMember from "../components/team/teamMember";
import EugeneRaburu from "../images/EugeneRaburu.png";
import MonicaKimani from "../images/MonicaKimani.jpg";
import AntonyGakuru from "../images/AntonyGakuru.png";
import JoanGichuhi from "../images/JoanGichuhi.jpg"
import NjengaKarori from "../images/NjengaKarori.png"
import GabrielTindi from "../images/gabrielTindi.png"
import GeorgeKinyanjui from "../images/GeorgeKinyanjui.png"
import JeremyWachira from "../images/JeremyWachira.jpg"
import FelixNyamai from "../images/felixNyamai.png"
import CollinsOmondi from "../images/CollinsOmondi.jpg"
import SamiWafula from "../images/SamiWafula.jpeg"

const TeamPage = () => (
    <Layout>
        <div className="container">
            <p className="text-center event">OUR AMAZING TEAM</p>
            <p className="text-center h3 event-title">Meet The Team</p>
            <p className="text-center p">Our leadership team drives the strategy and direction of our work to deliver impact at scale for the most vulnerable.</p>
            <div className="team py-4">
                {/* <TeamMember imageUrl={Elvis} fullName={"elvis sitati"} position={"Founder & Chief Executive Officer"} linkedinUsername={"elvis-sitati-2a282b79"} email={"mailto:elvis.sitati@uamuzi.org"}/> */}
                <div className="team-inner m-0 p-0 position-relative">
                <StaticImage className='team-img' src="../images/Elvis.jpg" placeholder="blurred" />
                            <div className="long-purple-line position-absolute"></div>
                            <div className="short-grey-line position-absolute"></div>
                        
                        <div className="team-member-info text-center py-2">
                            <p className="text-capitalize fw-bold">Elvis Sitati</p>
                            <p className="primary-color text-capitalize">Founder & Chief Executive Officer</p>
                            <span className="primary-color d-flex gap-3 flex-nowrap justify-content-center align-items-center">
                                <a href="https://www.linkedin.com/in/elvis-sitati-2a282b79" rel="noopener noreferrer" target='_blank'><box-icon name='linkedin-square' type='logo' color="#8067AD" ></box-icon></a>
                                <a href="mailto:elvis.sitati@uamuzi.org"><box-icon name='envelope' type='solid' color="#8067AD" ></box-icon></a>
                            </span>

                        </div>
                    </div>
                <TeamMember imageUrl={bisagaya} fullName={"Andrew bisagaya"} position={"Legal"} linkedinUsername={"bisagaya-andrew-309b9497"} />
                <TeamMember imageUrl={Novat} fullName={"Novat Matoju"} position={"Finance"} linkedinUsername={"novatmatoju"} />
                <TeamMember imageUrl={SharonO} fullName={"Sharon Ochieng"} position={"Programs"} linkedinUsername={"sharon-ochieng-2167757a"} />
                <TeamMember imageUrl={MonicaKimani} fullName={"Monica Kimani"} position={"Marketing"} linkedinUsername={"monicah-kimani-561a1b69"} />
                <TeamMember imageUrl={JeremyWachira} fullName={"Jeremy Wachira"} position={"Volunteer Coordinator"} linkedinUsername={"jeremy-wachira-610a221b1"} />
    <TeamMember imageUrl={EugeneRaburu} fullName={"Eugene Raburu"} position={"Technology"} linkedinUsername={"eugene-raburu-kf"} />
            
	<TeamMember imageUrl={AntonyGakuru} fullName={"Antony Gakuru"} position={"Lead Engineer"} linkedinUsername={"muriithigakuru"} />
                <TeamMember imageUrl={JoanGichuhi} fullName={"Joan Gichuhi"} position={"Lead Designer"} linkedinUsername={"joan-gichuhi"} />
                <TeamMember imageUrl={FelixNyamai} fullName={"Felix Nyamai"} position={"Lead Frontend"} linkedinUsername={"felixnyamai"} style={{height:'50px'}}/>
                <TeamMember imageUrl={NjengaKarori} fullName={"Njenga Karori"} position={"UI/UX Designer"} linkedinUsername={"njenga-karori-2b9bb6223"} />
                <TeamMember imageUrl={GabrielTindi} fullName={"Gabriel Tindi"} position={"Frontend"} linkedinUsername={"gabrieltindi"}/>
                <TeamMember imageUrl={GeorgeKinyanjui} fullName={"George Kinyanjui"} position={"Frontend"} linkedinUsername={"georgekinyanjui"}/>
                <TeamMember imageUrl={CollinsOmondi} fullName={"Collins Omondi"} position={"Frontend"} linkedinUsername={"c-o-m-o-n"}/>
                <TeamMember imageUrl={SamiWafula} fullName={"Sami Wafula"} position={"Frontend"} linkedinUsername={"sami-wafula"}/>
            </div>
        </div>
    </Layout>
)

export const Head = () => <Seo title="Team" />

export default TeamPage
