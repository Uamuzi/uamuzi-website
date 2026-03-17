import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogTemplate = ({ pageContext }) => {
  const { blog } = pageContext

  console.log(blog, 'this is from the blog template')
  function timeAgo(dateTime) {
    const now = new Date()
    const past = new Date(dateTime)
    const seconds = Math.floor((now - past) / 1000)

    const intervals = [
      { label: "year", seconds: 31536000 },
      { label: "month", seconds: 2592000 },
      { label: "day", seconds: 86400 },
      { label: "hr", seconds: 3600 },
      { label: "min", seconds: 60 },
      { label: "sec", seconds: 1 },
    ]

    for (const interval of intervals) {
      const count = Math.floor(seconds / interval.seconds)
      if (count >= 1) {
        return `${count}${interval.label}${count > 1 ? "s" : ""} ago`
      }
    }

    return "just now"
  }

  return (
    <Layout>
      <div className="w-100 mt-4 d-flex justify-content-center align-items-center">
        <div className="px-8 w-75 align-self-center ">
          <h2 className="fw-bold">{blog.title}</h2>
          <p
            className="mt-4 p-0 mb-0 font-light"
            style={{ color: "gray", fontWeight: 400 }}
          >
            by <i>{blog.author}</i>
          </p>
          <p className="mb-4 mt-0 p-0" style={{ color: "#8067AD", fontSize: '14px' }}>
            <i>{timeAgo(blog.created_at)}</i>
          </p>
          <div dangerouslySetInnerHTML={{ __html: blog.body }} />
        </div>
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title="Blog" />

export default BlogTemplate
