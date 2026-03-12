import React, { useState } from "react"
import { Link } from "gatsby"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PapersEditRichText from "../components/PapersEditRichText"

function PapersEdit() {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [body, setBody] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("https://uamuzi.site/api/v1/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          body, // HTML string
          author,
          status: 1,
        }),
      })

      if (!res.ok) {
        const error = await res.json()
        toast.error(`An unexpected error occured. Please try again later.`, {
          position: toast.POSITION.TOP_RIGHT,
        })
        throw error
      } else {
        toast.success(`Article has been created successfully`, {
          position: toast.POSITION.TOP_RIGHT,
        })
        setTitle("")
        setBody("")
        setAuthor("")
      }
    } catch (err) {
      console.error(err)
      alert("Failed to create blog")
    } finally {
      setLoading(false)
    }
  }
  return (
    <Layout>
      <ToastContainer />
      <div className="pt-2"></div>
      <h3 className="text-center fw-bold">Write your articles</h3>
      <div className="w-full center-blog-editor">
        <form onSubmit={handleSubmit} className="contact_form">
          <input
            type="text"
            placeholder="Article title"
            className="mt-2"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Article author"
            className="my-2 w-[50%]"
            value={author}
            onChange={e => setAuthor(e.target.value)}
            required
          />

          <PapersEditRichText value={body} onChange={setBody} />

          <button className="join mt-2" type="submit" disabled={loading}>
            {loading ? "Saving..." : "Create Article"}
          </button>
        </form>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Edit Papers" />

export default PapersEdit
