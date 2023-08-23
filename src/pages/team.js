import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo";
import Elvis from '../images/Elvis.jpg'
import bisagaya from '../images/Bisagaya.jpg'
import SharonO from '../images/SharonO.png'
import Novat from '../images/Novat.jpg';
// import GraceMuthui from "../images/GraceMuthui.jpg"
import TeamMember from "../components/team/teamMember";
// import MichaelMunavu from "../images/MichaelMunavu.png"
import EugeneRaburu from "../images/EugeneRaburu.png";
import MonicaKimani from "../images/MonicaKimani.jpg";
import AntonyGakuru from "../images/AntonyGakuru.jpeg";
// import StephenKimoi from "../images/StephenKimoi.png";
import SharonKombe from "../images/SharonK.jpg";
// import IvySifuma from "../images/IvySifuma.png";
// import KiprotichKimutai from "../images/KiprotichKimutai.jpg";
// import NemwelNyandoro from "../images/NemwelBonface.jpg";
// import EdwardMwangi from "../images/EdwardMwangi.jpg"
// import AbbyRita from "../images/AbbyRita.jpg";
import JoanGichuhi from "../images/JoanGichuhi.jpg"
// import SamiWafula from "../images/SamiWafula.png"
// import RichardOgola from "../images/RichardOgola.jpg";
import ObedKertich from "../images/ObedKertich.png";
// import SalvatoLuis from "../images/salvato.png";
// import empty from "../images/empty.png";
import NjengaKarori from "../images/NjengaKarori.png"
import GabrielTindi from "../images/GabrielTindi.jpg"
import ImmanuelKibet from "../images/ImmanuelKibet.jpg"
import LindaApollo from "../images/LindaApollo.jpg"
import GeorgeKinyanjui from "../images/GeorgeKinyanjui.png"
import AnneOgongo from "../images/AnneOgongo.jpg"
import KashifSaleem from "../images/KashifSaleem.png"
import JeremyWachira from "../images/JeremyWachira.jpg"

const TeamPage = () => (
    <Layout>
        <div className="container">
            <p className="text-center event">OUR AMAZING TEAM</p>
            <p className="text-center h3 event-title">Meet The Team</p>
            <p className="text-center p">Our leadership team drives the strategy and direction of our work to deliver impact at scale for the most vulnerable.</p>
            <div className="team py-4">
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
                            <p className="primary-color text-capitalize">Founder & Chief Executive Officer</p>
                            <span className="primary-color d-flex gap-3 flex-nowrap justify-content-center align-items-center">
                                <a href="https://www.linkedin.com/in/elvis-sitati-2a282b79" rel="noopener noreferrer" target='_blank'><box-icon name='linkedin-square' type='logo' color="#8067AD" ></box-icon></a>
                                <a href="mailto:elvis.sitati@uamuzi.org"><box-icon name='envelope' type='solid' color="#8067AD" ></box-icon></a>
                            </span>

                        </div>
                    </div>

                {/* <TeamMember imageUrl={Elvis} fullName={"elvis sitati"} position={"Founder & Chief Executive Officer"} linkedinUsername={"elvis-sitati-2a282b79"} email={"mailto:elvis.sitati@uamuzi.org"}/> */}
                <TeamMember imageUrl={bisagaya} fullName={"Andrew bisagaya"} position={"General Counsel"} linkedinUsername={"bisagaya-andrew-309b9497"} />
                <TeamMember imageUrl={SharonKombe} fullName={"Sharon Nechesa"} position={"Social Affairs"} linkedinUsername={"nechesa-oyuchi-llb-hons-dip-ksl-79053978"} />
                <TeamMember imageUrl={Novat} fullName={"Novat Matoju"} position={"Finance"} linkedinUsername={"novatmatoju"} />
                <TeamMember imageUrl={SharonO} fullName={"Sharon Ochieng"} position={"Programs"} linkedinUsername={"sharon-ochieng-2167757a"} />
                <TeamMember imageUrl={MonicaKimani} fullName={"Monica Kimani"} position={"Operations"} linkedinUsername={"monicah-kimani-561a1b69"} />
                <TeamMember imageUrl={JeremyWachira} fullName={"Jeremy Wachira"} position={"Volunteer Coordinator"} linkedinUsername={"jeremy-wachira-610a221b1"} />
                <TeamMember imageUrl={LindaApollo} fullName={"Linda Apollo"} position={"Branding, Marketing, Communication and PR"} linkedinUsername={"linda-apollo"} />
                <TeamMember imageUrl={AntonyGakuru} fullName={"Antony Gakuru"} position={"Hub"} linkedinUsername={"muriithigakuru"} />
                <TeamMember imageUrl={EugeneRaburu} fullName={"Eugine Raburu"} position={"Technology"} linkedinUsername={"eugene-raburu-kf"} />
                <TeamMember imageUrl={JoanGichuhi} fullName={"Joan Gichuhi"} position={"Lead Designer"} linkedinUsername={"joan-gichuhi"} />
                <TeamMember imageUrl={ImmanuelKibet} fullName={"Immanuel Kibet"} position={"Lead Backend"} linkedinUsername={"kibet-immanuel"} />
                <TeamMember imageUrl={KashifSaleem} fullName={"Kashif Saleem"} position={"Lead Frontend"} linkedinUsername={"kashifsaleemghuman"} style={{height:'50px'}}/>
                <TeamMember imageUrl={AnneOgongo} fullName={"Anne Ogongo"} position={"Data Engineer"} linkedinUsername={"anne-ogongo"} />
                <TeamMember imageUrl={NjengaKarori} fullName={"Njenga Karori"} position={"UI/UX Designer"} linkedinUsername={"njenga-karori-2b9bb6223"} />
                <TeamMember imageUrl={GabrielTindi} fullName={"Gabriel Tindi"} position={"Frontend"} linkedinUsername={"gabrieltindi"}/>
                <TeamMember imageUrl={GeorgeKinyanjui} fullName={"George Kinyanjui"} position={"Frontend"} linkedinUsername={"georgekinyanjui"}/>
                <TeamMember imageUrl={ObedKertich} fullName={"Obed Kertich"} position={"Frontend"} linkedinUsername={"obed-kertich"}/>





                {/* <TeamMember imageUrl={EdwardMwangi} fullName={"Edward Mwangi"} position={"Product & Innovations"} linkedinUsername={"edward-mwangi-0148b923a"} />
                <TeamMember imageUrl={AbbyRita} fullName={"Abby Rita"} position={"Volunteering"} linkedinUsername={"amwakina"} />
                <TeamMember imageUrl={MichaelMunavu} fullName={"Michael Munavu"} position={"Lead Engineer"} linkedinUsername={"michael-munavu"} />
                <TeamMember imageUrl={GraceMuthui} fullName={"Grace Muthui"} position={"Lead Frontend"} linkedinUsername={"grayce-muthui"} />
                <TeamMember imageUrl={KiprotichKimutai} fullName={"Kiprotich Kimutai"} position={"Lead Backend"} linkedinUsername={"kimutai91"} />
                <TeamMember imageUrl={StephenKimoi} fullName={"Stephen Kimoi"} position={"Lead Blockchain"} linkedinUsername={"stephen-kimoi"} />
                <TeamMember imageUrl={NemwelNyandoro} fullName={"Nemwel Boniface"} position={"Co-lead Backend"} linkedinUsername={"nemwel-nyandoro"} />
                <TeamMember imageUrl={SamiWafula} fullName={"Sami Wafula"} position={"Co-lead Frontend"} linkedinUsername={"sami-wafula"} />
                <TeamMember imageUrl={empty} fullName={"Peter Maturwe"} position={"UI/UX Designer"} linkedinUsername={"peter-o-maturwe-ab860020a"} />
                <TeamMember imageUrl={RichardOgola} fullName={"Richard Ogola"} position={"Blockchain"} linkedinUsername={"peter-o-maturwe-ab860020a"} />
                <TeamMember imageUrl={IvySifuma} fullName={"Ivy Sifuma"} position={"Frontend"} linkedinUsername={"ivy-sifuma-496650169"} />
                <TeamMember imageUrl={ObedKertich} fullName={"Obed Kertich"} position={"Frontend "} linkedinUsername={"obed-kertich"} />
                <TeamMember imageUrl={SalvatoLuis} fullName={"Salvato Luice"} position={"Frontend "} linkedinUsername={"salvato-luis"} /> */}
            </div>
        </div>
    </Layout>
)

export const Head = () => <Seo title="Team" />

export default TeamPage
