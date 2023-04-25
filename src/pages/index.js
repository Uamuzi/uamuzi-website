import * as React from "react"
// import { Link } from "gatsby"
import Hero from "../components/index/hero"

import Layout from "../components/layout"
import Seo from "../components/seo";
import Events from "../components/index/events";
import OurStory from "../components/index/ourStory";
import SDGs from "../components/index/sdgs";
import LandingTeam from "../components/index/landingTeam";
import Technology from "../components/index/technology";
import Partnerships from "../components/index/partnerships";
import OurPartners from "../components/index/ourPartners";
import Mobile from "../components/index/mobile";
import VolunteersPage from "./Volunteers";

const IndexPage = () => (
  <Layout>
    <div>
      <Hero />
      <OurStory />
      <Events />
      <SDGs/>
      <LandingTeam />
      <Technology />
      <Mobile />
      <Partnerships />
      <OurPartners />
     </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
