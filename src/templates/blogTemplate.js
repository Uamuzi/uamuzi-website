import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogTemplate = ({ pageContext }) => {
  const {blog} = pageContext
  return (
    <Layout>
      <h1>
        {blog.title}
      </h1>
      <p>{blog.body}</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
export const Head = () => <Seo title="Using DSG" />

export default BlogTemplate
