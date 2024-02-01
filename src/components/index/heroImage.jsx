import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';


function HeroImage({imgStyle, imageName}) {

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
  `);

  const image = data.allFile.edges.find(edge =>
    edge.node.relativePath.includes(imageName)
  );

  if (!image) {
    return <div>Image not found</div>;
  }

  return <Img style={imgStyle}  fluid={image.node.childImageSharp.fluid} alt="Your image description" />;

  
}

export default HeroImage
