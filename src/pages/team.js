import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ImageDisplay from "../components/team/ImageDisplay"

const ElvisSitati = "team/ElvisSitati.jpg"
const MaxmillanOchango = "team/MaxmillanOchango.png"
const AntonyGakuru = "team/AntonyGakuru.jpeg"
const KarenKurgat = "team/KarenKurgat.jpg"
const SharonWangui = "team/SharonWangui.jpg"
const UrbanusMulobi = "team/UrbanusMulobi.jpg"
const TimothyMabango = "team/TimothyMabango.jpg"
const JoeSila = "team/JoeSila.jpg"
const JeremyWachira = "team/JeremyWachira.jpg"
const KilonzoMutie = "team/KilonzoMutie.jpg"
const SandraKimiring = "team/SandraKimiring.jpg"
const CollinsOmondi = "team/CollinsOmondi.jpg"
const AbigaelZawadi = "team/AbigaelZawadi.png"
const JanJuma = "team/JanJuma.jpg"
const LennoxMatwere = "team/LennoxMatwere.jpg"
const MonicahNgari = "team/MonicahNgari.jpg"

const EugeneRaburu = "team/EugeneRaburu.png"
const Muliro = "team/Muliro.jpg"
const IanKibet = "team/IanKibet.png"
const ImmanuelNduthu = "team/Immanuel.png"

const teamMembers = [
  {
    name: "Elvis Sitati",
    position: "Founder & Chief Executive Officer",
    linkedinUsername: "elvis-sitati-2a282b79",
    email: "elvis.sitati@uamuzi.org",
    imageName: ElvisSitati,
  },
  {
    name: "Maxmillan Ochango",
    position: "Chief Operations Officer",
    linkedinUsername: "maxmillan-ochango-5000",
    imageName: MaxmillanOchango,
  },
  {
    name: "Antony Gakuru",
    position: "Chief Technology Officer",
    linkedinUsername: "muriithigakuru",
    imageName: AntonyGakuru,
  },
  {
    name: "Karen Kurgat",
    position: "Legal",
    linkedinUsername: "karen-kurgat-a4b9511b9",
    imageName: KarenKurgat,
  },
  {
    name: "Sharon Wangui",
    position: "Administration and Programs",
    linkedinUsername: "sharon-wangui-799a67209",
    imageName: SharonWangui,
  },
  {
    name: "Urbanus Mulobi",
    position: "Finance",
    linkedinUsername: "urbanus-mulobi-acca-668910102",
    imageName: UrbanusMulobi,
  },

  {
    name: "Timothy Mabango",
    position: "Partnerships",
    linkedinUsername: "mabango-timothy-capm",
    imageName: TimothyMabango,
  },

  {
    name: "Joe Sila",
    position: "Marketing and Communication",
    linkedinUsername: "joe-sila-34823a267",
    imageName: JoeSila,
  },
  {
    name: "Jeremy Wachira",
    position: "Volunteers Coordinator",
    linkedinUsername: "jeremy-wachira-610a221b1",
    imageName: JeremyWachira,
  },
  {
    name: "Kilonzo Mutie",
    position: "Research",
    linkedinUsername: "kilonzo-mutie-39b3ab21a",
    imageName: KilonzoMutie,
  },
  {
    name: "Sandra Kimiring",
    position: "Hub",
    linkedinUsername: "sandra-kimiring",
    imageName: SandraKimiring,
  },
  {
    name: "Collins Omondi",
    position: "Lead Frontend ",
    linkedinUsername: "c-o-m-o-n",
    imageName: CollinsOmondi,
  },
  {
    name: "Abigael Zawadi",
    position: "Lead Machine Learning",
    linkedinUsername: "abigael-zawadi-b21b9124b",
    imageName: AbigaelZawadi,
  },

  {
    name: "Jan Juma",
    position: "Lead Cloud and DevOps",
    linkedinUsername: "jan-juma-4a1595229",
    imageName: JanJuma,
  },
  {
    name: "Lennox Matwere",
    position: "Lead Blockchain",
    linkedinUsername: "lennox-matwere",
    imageName: LennoxMatwere,
  },
  {
    name: "Monicah Ngari",
    position: "Frontend",
    linkedinUsername: "monicah-ngari-96459321b",
    imageName: MonicahNgari,
  },
]

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
        {teamMembers.map(member => (
          <ImageDisplay
            key={member.name}
            imageName={member.imageName}
            fullName={member.name}
            position={member.position}
            linkedinUsername={member.linkedinUsername}
            email={member.email}
          />
        ))}
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Team" />

export default TeamPage
