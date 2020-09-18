import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"

// --------------------------------------- Styled Components ------------------------ //
// ---------------------------------------------------------------------------------- //

const StyledGatsbyImg = styled(Img)`
  height: ${props => (props.fileName === "headshot.png" ? "40rem" : "20rem")};
  width:  ${props => (props.fileName === "headshot.png" ? "40rem" : "20rem")};
  transition: 0.5s ease;
  &:hover {
    transition: 0.5s ease;
    opacity: ${props => (props.fileName === "headshot.png" ? null : "0.7")};
  }
  @media (min-width: 992px) {
    width:  ${props => (props.fileName === "headshot.png" ? "40rem" : "16rem")};
    height: ${props => (props.fileName === "headshot.png" ? "40rem" : "18rem")};
  }
  @media (min-width: 1100px) {
    width:  ${props => (props.fileName === "headshot.png" ? "30rem" : "18rem")};
    height: ${props => (props.fileName === "headshot.png" ? "30rem" : "20rem")};
  }
  @media (min-width: 1218px) {
    width:  ${props => (props.fileName === "headshot.png" ? "30rem" : "20rem")};
    height: ${props => (props.fileName === "headshot.png" ? "30rem" : "20rem")};
  }
  @media (min-width: 1388px) {
    width:  ${props => (props.fileName === "headshot.png" ? "34rem" : "22rem")};
    height: ${props => (props.fileName === "headshot.png" ? "34rem" : "22rem")};
  }
  @media (min-width: 1620px) {
    width:  ${props => (props.fileName === "headshot.png" ? "38rem" : "26rem")};
    height: ${props => (props.fileName === "headshot.png" ? "38rem" : "26rem")};
  }
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

  return (
    <StyledGatsbyImg
      fluid={image.node.childImageSharp.fluid}
      fileName={fileName}
    />
  )
}
