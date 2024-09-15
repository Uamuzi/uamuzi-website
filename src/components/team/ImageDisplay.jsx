import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const ImageDisplay = ({
  imageName,
  fullName,
  position,
  linkedinUsername,
  email,
}) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const image = data.allFile.edges.find(edge =>
    edge.node.relativePath.includes(imageName)
  )

  if (!image) {
    return <div>Image not found</div>
  }

  return (
    <div className="team-inner m-0 p-0 position-relative">
      <Img
        className="team-img"
        fluid={image.node.childImageSharp.fluid}
        alt={`Team member, ${fullName}`}
      />
      ;<div className="long-purple-line position-absolute"></div>
      <div className="short-grey-line position-absolute"></div>
      <div className="team-member-info text-center py-2">
        <p className="text-capitalize fw-bold">{fullName}</p>
        <p className="primary-color text-capitalize">{position}</p>
        <span className="primary-color d-flex gap-3 flex-nowrap justify-content-center align-items-center">
          <a
            href={`https://www.linkedin.com/in/${linkedinUsername}`}
            rel="noopener noreferrer"
            target="_blank"
            style={{ marginBottom: "25px" }}
          >
            <box-icon
              name="linkedin-square"
              type="logo"
              color="#8067AD"
            ></box-icon>
          </a>
          {/* {email && (
            <a href="mailto:elvis.sitati@uamuzi.org">
              <box-icon name="envelope" type="solid" color="#8067AD"></box-icon>
            </a>
          )} */}
        </span>
      </div>
    </div>
  )
  // <Img className='team-img' fluid={image.node.childImageSharp.fluid} alt="Your image description" />;
}

export default ImageDisplay
