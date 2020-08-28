import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"

// --------------------------------------- Styled Components ------------------------ //
// ---------------------------------------------------------------------------------- //

const StyledGatsbyImg = styled(Img)`
  height: 35rem;
  width: 35rem;
`
// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export const Image = ({ fileName }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  // Loop through all images in the relative path
  // Render any images that match the name of the 'fileName' prop being passed in from the Index page
  const image = data.images.edges.find(n => {
    return n.node.relativePath.includes(fileName)
  })

  return <StyledGatsbyImg fluid={image.node.childImageSharp.fluid} />
}
