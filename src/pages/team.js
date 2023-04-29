import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo";
import Elvis from '../images/Elvis.jpg'
import bisagaya from '../images/Bisagaya.jpg'
import SharonO from '../images/SharonO.jpg'
import Novat from '../images/Novat.jpg';
import GraceMuthui from "../images/GraceMuthui.jpg"
import TeamMember from "../components/team/teamMember";
import MichaelMunavu from "../images/MichaelMunavu.png"
import EugeneRaburu from "../images/EugeneRaburu.jpg";
import MonicaKimani from "../images/MonicaKimani.jpg";
import AntonyGakuru from "../images/AntonyGakuru.jpeg";
import StephenKimoi from "../images/StephenKimoi.jpg";
import SharonKombe from "../images/SharonKombe.jpg";
import IvySifuma from "../images/IvySifuma.jpeg";
import KiprotichKimutai from "../images/KiprotichKimutai.jpg";
import NemwelNyandoro from "../images/NemwelNyandoro.jpg";
import EdwardMwangi from "../images/EdwardMwangi.jpg"
import AbbyRita from "../images/AbbyRita.jpg";
import JoanGichuhi from "../images/JoanGichuhi.jpg"
import SamiWafula from "../images/SamiWafula.jpeg"
import RichardOgola from "../images/RichardOgola.jpg";
import ObedKertich from "../images/ObedKertich.png";
import SalvatoLuis from "../images/salvato.png";

const TeamPage = () => (
    <Layout>
        <div className="container">
            <p className="text-center event">OUR AMAZING TEAM</p>
            <p className="text-center h3 event-title">Meet The Team</p>
            <p className="text-center p">Our leadership team drives the strategy and direction of our work to deliver impact at scale for the most vulnerable.</p>
            <div className="team py-4 ">

                <TeamMember imageUrl={Elvis} fullName={"elvis sitati"} position={"Founder & CEO"} linkedinUsername={"elvis-sitati-2a282b79"} />
                <TeamMember imageUrl={bisagaya} fullName={"Andrew bisagaya"} position={"General Counsel"} linkedinUsername={"bisagaya-andrew-309b9497"} />
                <TeamMember imageUrl={SharonKombe} fullName={"Sharon Kombe"} position={"Social Affairs"} linkedinUsername={"nechesa-oyuchi-llb-hons-dip-ksl-79053978"} />
                <TeamMember imageUrl={Novat} fullName={"Novat Matoju"} position={"Finance Officer"} linkedinUsername={"novatmatoju"} />
                <TeamMember imageUrl={EdwardMwangi} fullName={"Edward Mwangi"} position={"Product & Innovations Officer"} linkedinUsername={"edward-mwangi-0148b923a"} />
                <TeamMember imageUrl={EugeneRaburu} fullName={"Eugine Raburu"} position={"Technology Officer"} linkedinUsername={"eugene-raburu-kf"} />
                <TeamMember imageUrl={MonicaKimani} fullName={"Monica Kimani"} position={"Operations Officer"} linkedinUsername={"monicah-kimani-561a1b69"} />
                <TeamMember imageUrl={AntonyGakuru} fullName={"Antony Gakuru"} position={"Lead DevOps Engineer"} linkedinUsername={"muriithigakuru"} />
                <TeamMember imageUrl={SharonO} fullName={"Sharon Ochieng"} position={"Programs Officer"} linkedinUsername={"muriithigakuru"} />
                <TeamMember imageUrl={AbbyRita} fullName={"Abby Rita"} position={"Volunteering Officer"} linkedinUsername={"muriithigakuru"} />
                <TeamMember imageUrl={MichaelMunavu} fullName={"Michael Munavu"} position={"Lead Engineer"} linkedinUsername={"muriithigakuru"} />
                <TeamMember imageUrl={JoanGichuhi} fullName={"Joan Gichuhi"} position={"Lead Designer"} linkedinUsername={"muriithigakuru"} />
                <TeamMember imageUrl={KiprotichKimutai} fullName={"Kiprotich Kimutai"} position={"Lead Backend Engineer"} linkedinUsername={"muriithigakuru"} />
                <TeamMember imageUrl={GraceMuthui} fullName={"Grace Muthui"} position={"Lead Frontend Engineer"} linkedinUsername={"muriithigakuru"} />
                <TeamMember imageUrl={StephenKimoi} fullName={"Stephen Kimoi"} position={"Lead Frontend Engineer"} linkedinUsername={"muriithigakuru"} />
                <TeamMember imageUrl={NemwelNyandoro} fullName={"Nemwel Boniface"} position={"Co-lead Backend"} linkedinUsername={"muriithigakuru"} />
                <TeamMember imageUrl={SamiWafula} fullName={"Sami Wafula"} position={"Co-lead Frontend"} linkedinUsername={"muriithigakuru"} />
                <TeamMember imageUrl={bisagaya} fullName={"Njenga Karori"} position={"UI/UX Designer"} linkedinUsername={"muriithigakuru"} />
                <TeamMember imageUrl={bisagaya} fullName={"Peter Maturwe"} position={"UI/UX Designer"} linkedinUsername={"muriithigakuru"} />
                <TeamMember imageUrl={bisagaya} fullName={"Ushindi Gideon"} position={"Backend Engineer"} linkedinUsername={"muriithigakuru"} />
                <TeamMember imageUrl={RichardOgola} fullName={"Richard Ogola"} position={"Blockchain Developer"} linkedinUsername={"muriithigakuru"} />
                <TeamMember imageUrl={IvySifuma} fullName={"Ivy Sifuma"} position={"Frontend Engineer"} linkedinUsername={"muriithigakuru"} />
                <TeamMember imageUrl={ObedKertich} fullName={"Obed Kertich"} position={"Frontend Engineer"} linkedinUsername={"muriithigakuru"} />
                <TeamMember imageUrl={SalvatoLuis} fullName={"Salvato Luice"} position={"Frontend Engineer"} linkedinUsername={"salvato-luis"} />




            </div>
        </div>
    </Layout>
)

export const Head = () => <Seo title="Team" />

export default TeamPage
