import React, {useEffect} from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogTemplate = ({ pageContext }) => {
  const { blog } = pageContext

  console.log(blog, 'this is from the blog template')
  return (
    <Layout>
      <div className="w-100 d-flex justify-content-center align-items-center">
        <div className="bg-danger px-8 w-75 align-self-center ">
          <h1>{blog.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: blog.body }} />
        </div>
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title="Using DSG" />

export default BlogTemplate
