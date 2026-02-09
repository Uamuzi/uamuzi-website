import React, {useEffect} from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogTemplate = ({ pageContext }) => {
  const { blog } = pageContext

  console.log(blog, 'this is from the blog template')
  return (
    <Layout>
      <div className="w-100 mt-4 d-flex justify-content-center align-items-center">
        <div className="px-8 w-75 align-self-center ">
          <h2 className="fw-bold">{blog.title}</h2>
          <h6 className="fw-bold my-4">
            by <i>{blog.author}</i>
          </h6>
          <div dangerouslySetInnerHTML={{ __html: blog.body }} />
        </div>
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title="Using DSG" />

export default BlogTemplate
