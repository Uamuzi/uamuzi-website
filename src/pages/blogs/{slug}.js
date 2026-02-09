import React, { useEffect, useState } from "react"

const BlogPage = ({ params }) => {
  const { slug } = params
  const [blog, setBlog] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(`https://uamuzi.site/api/v1/blogs/${slug}`)
      .then(res => {
        if (!res.ok) throw new Error()
        return res.json()
      })
      .then(setBlog)
      .catch(() => setError(true))
  }, [slug])

  if (error) return <h1>Not found</h1>
  if (!blog) return <p>Loading...</p>

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
    <>
      <Layout>
        <div className="w-100 mt-4 d-flex justify-content-center align-items-center">
          <div className="px-8 w-75 align-self-center ">
            <h2 className="fw-bold">{blog.title}</h2>
            <h6 className="fw-bold my-4">
              by <i>{blog.author}</i>
            </h6>
            <p className="">
              <i>{timeAgo(blog.created_at)}</i>
            </p>
            <div dangerouslySetInnerHTML={{ __html: blog.body }} />
          </div>
        </div>
      </Layout>
    </>
  )
}
export const Head = () => <Seo title="Blog" />

export default BlogPage
