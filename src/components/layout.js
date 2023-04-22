/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header";
import Navbar from "./navbar";
import "./layout.css";
import "./extrastyle.css"
import Footer from "./footer";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar />
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Uamuzi Foundation`} /> */}
      <div
        
      >
        <main>{children}</main>
        <Footer />
        {/* <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
          className="text-center"
        >
          © {new Date().getFullYear()} &middot;
          {` `}
          <a href="https://www.uamuzi.org" >Uamuzi Foundation</a>
        </footer> */}
      </div>
    </>
  )
}

export default Layout
