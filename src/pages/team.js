import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ImageDisplay from "../components/team/ImageDisplay"

const Elvis = "Elvis.jpg"
const CollinsOmondi = "CollinsOmondi.jpg"
const SamiWafula = "SamiWafula.jpeg"
const JeremyWachira = "JeremyWachira.jpg"
const TimothyMabango = "TimothyMabango.jpg"
// const NjengaKarori = "NjengaKarori.png"
// const JoanGichuhi = "JoanGichuhi.jpg"
const AntonyGakuru = "AntonyGakuru.png"
// const MonicaKimani = "MonicaKimani.jpg"
const EugeneRaburu = "EugeneRaburu.png"
// const Novat = "Novat.jpg"
// const SharonO = "SharonO.png"
// const Bisagaya = "Bisagaya.jpg"
const Monicah = "Monicah.jpg"
const Muliro = "Muliro.jpg"
const Kibet = "Kibet.jpg"
const Immanuel = "Immanuel.jpg"

const TeamPage = () => (
  <Layout>
    <div className="container">
      <p className="text-center event">OUR AMAZING TEAM</p>
      <p className="text-center h3 event-title">Meet The Team</p>
      <p className="text-center p">
        Our leadership team drives the strategy and direction of our work to
        deliver impact at scale for the most vulnerable.
      </p>

      <div className="team py-4">
        <ImageDisplay
          imageName={Elvis}
          fullName={"Elvis Sitati"}
          position={"Founder & Chief Executive Officer"}
          linkedinUsername={"elvis-sitati-2a282b79"}
          email={"elvis.sitati@uamuzi.org"}
        />
        {/* <ImageDisplay
          imageName={KarenKurgat}
          fullName={"Karen Kurgat"}
          position={"Leagal"}
          linkedinUsername={"karen-kurgat-a4b9511b9"}
        /> */}
        <ImageDisplay
          imageName={Immanuel}
          fullName={"Immanuel Nduthu"}
          position={"Finance"}
          linkedinUsername={"immanuel-nduthu-792535307"}
        />
        {/* <ImageDisplay
          imageName={SharonW}
          fullName={"Sharon Wangui"}
          position={"Administration and Programs"}
          linkedinUsername={"sharon-wangui-799a67209"}
        /> */}
        {/* <ImageDisplay
          imageName={JoeSila}
          fullName={"Joe Sila"}
          position={"Marketing and Communication"}
          linkedinUsername={"joe-sila-34823a267"}
        /> */}
        <ImageDisplay
          imageName={JeremyWachira}
          fullName={"Jeremy Wachira"}
          position={"Volunteer Coordinator"}
          linkedinUsername={"jeremy-wachira-610a221b1"}
        />

        <ImageDisplay
          imageName={EugeneRaburu}
          fullName={"Eugene Raburu"}
          position={"Technology"}
          linkedinUsername={"eugene-raburu-kf"}
        />
        <ImageDisplay
          imageName={AntonyGakuru}
          fullName={"Antony Gakuru"}
          position={"Lead Engeneer"}
          linkedinUsername={"muriithigakuru"}
        />

        {/* <ImageDisplay
          imageName={DennisWachira}
          fullName={"Dennis Wachira"}
          position={"Engineering Academy"}
          linkedinUsername={"dennis-wachira-451786258"}
        /> */}

        <ImageDisplay
          imageName={CollinsOmondi}
          fullName={"Collins Omondi"}
          position={"Lead Frontend"}
          linkedinUsername={"c-o-m-o-n"}
        />
        <ImageDisplay
          imageName={SamiWafula}
          fullName={"Sami Wafula"}
          position={"Frontend"}
          linkedinUsername={"sami-wafula"}
        />
        <ImageDisplay
          imageName={TimothyMabango}
          fullName={"Timothy Mabango"}
          position={"Resource Mobilization"}
          linkedinUsername={"mabango-timothy-capm-972343186"}
        />
        {/* <ImageDisplay
          imageName={RodgersBiwott}
          fullName={"Rodgers Biwott"}
          position={"Lead Cloud and DevOps"}
          linkedinUsername={"rodgersbiwott"}
        /> */}
        <ImageDisplay
          imageName={Monicah}
          fullName={"Monicah Ngari"}
          position={"Frontend"}
          linkedinUsername={"monicah-ngari-96459321b"}
        />
        <ImageDisplay
          imageName={Muliro}
          fullName={"Michael Muliro"}
          position={"Backend"}
          linkedinUsername={"michael-muliro-064365124"}
        />
        {/* <ImageDisplay
          imageName={JanJuma}
          fullName={"Jan Juma"}
          position={"Cloud and DevOps"}
          linkedinUsername={"jan-juma-4a1595229"}
        /> */}
        <ImageDisplay
          imageName={Kibet}
          fullName={"Ian Kibet,"}
          position={"Artificial Intelligence and Machine Learning"}
          linkedinUsername={"ian-kibet-"}
        />
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Team" />

export default TeamPage
