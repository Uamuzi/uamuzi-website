import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo";
import ImageDisplay from "../components/team/ImageDisplay";

const Elvis  = 'Elvis.jpg'
const CollinsOmondi = 'CollinsOmondi.jpg'
const SamiWafula = 'SamiWafula.jpeg'
const JeremyWachira = 'JeremyWachira.jpg'
const TimothyMabango = 'TimothyMabango.jpg'
const NjengaKarori = 'NjengaKarori.png'
const JoanGichuhi = 'JoanGichuhi.jpg'
const AntonyGakuru = 'AntonyGakuru.png'
const MonicaKimani = 'MonicaKimani.jpg'
const EugeneRaburu = 'EugeneRaburu.png'
const Novat = 'Novat.jpg'
const SharonO = 'SharonO.png'
const Bisagaya = 'Bisagaya.jpg'

const KarenNgugi = 'KarenNgugi.jpeg'

const TeamPage = () => (
    <Layout>
        <div className="container">
            <p className="text-center event">OUR AMAZING TEAM</p>
            <p className="text-center h3 event-title">Meet The Team</p>
            <p className="text-center p">Our leadership team drives the strategy and direction of our work to deliver impact at scale for the most vulnerable.</p>
            
            <div className="team py-4">
            <ImageDisplay imageName={Elvis} fullName={"Elvis Sitati"} position={"Founder & Chief Executive Officer"} linkedinUsername={"elvis-sitati-2a282b79"} email={"elvis.sitati@uamuzi.org"}/>
            <ImageDisplay imageName={Bisagaya} fullName={"Andrew Bisagaya"} position={"Leagal"} linkedinUsername={"bisagaya-andrew-309b9497"} />
            <ImageDisplay imageName={Novat} fullName={"Novat Matoju"} position={"Finance"} linkedinUsername={"novatmatoju"} />
            <ImageDisplay imageName={SharonO} fullName={"Sharon Ochieng"} position={"Programs"} linkedinUsername={"sharon-ochieng-2167757a"} />
            <ImageDisplay imageName={MonicaKimani} fullName={"Monica Kimani"} position={"Marketing"} linkedinUsername={"monicah-kimani-561a1b69"} />
            <ImageDisplay imageName={JeremyWachira} fullName={"Jeremy Wachira"} position={"Volunteer Coordinator"} linkedinUsername={"jeremy-wachira-610a221b1"} />
            <ImageDisplay imageName={TimothyMabango} fullName={"Timothy Mabango"} position={"Resource Mobilization"} linkedinUsername={"mabango-timothy-capm-972343186/"} />

            <ImageDisplay imageName={EugeneRaburu} fullName={"Eugene Raburu"} position={"Technology"} linkedinUsername={"eugene-raburu-kf"} />
            <ImageDisplay imageName={AntonyGakuru} fullName={"Antony Gakuru"} position={"Lead Engeneer"} linkedinUsername={"muriithigakuru"} />

            <ImageDisplay imageName={NjengaKarori} fullName={"Njenga Karori"} position={"UI/UX Designer"} linkedinUsername={"njenga-karori-2b9bb6223"}/>
            <ImageDisplay imageName={JoanGichuhi} fullName={"Joan Gichuhi"} position={"Lead Designer"} linkedinUsername={"joan-gichuhi"}/>
            
            <ImageDisplay imageName={CollinsOmondi} fullName={"Collins Omondi"} position={"Frontend"} linkedinUsername={"c-o-m-o-n"}/>
            <ImageDisplay imageName={SamiWafula} fullName={"Sami Wafula"} position={"Frontend"} linkedinUsername={"sami-wafula"}/>
            <ImageDisplay imageName={KarenNgugi} fullName={"Karen Ngugi"} position={"Cloud and Devops"} linkedinUsername={"karen-ngugi"}/>
           
                </div>
        </div>
    </Layout>
)

export const Head = () => <Seo title="Team" />

export default TeamPage
