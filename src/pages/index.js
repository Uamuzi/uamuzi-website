import * as React from "react"
// import { Link } from "gatsby"
import Hero from "../components/index/hero"

import Layout from "../components/layout"
import Seo from "../components/seo";
import Events from "../components/index/events";
import OurStory from "../components/index/ourStory";


const IndexPage = () => (
  <Layout>
    <div>
      <Hero />
      <OurStory />
      <Events />
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
