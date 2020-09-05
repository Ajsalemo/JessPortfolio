import { graphql } from "gatsby"
import React from "react"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import styled from "styled-components"
import { Footer } from "../components/footer"
import { Header } from "../components/header"

// --------------------------------------- Styled Components ------------------------ //
// ---------------------------------------------------------------------------------- //

const StyledWorkRow = styled(Row)`
  display: flex;
  justify-content: center;
  flex-direction:
  height: auto;
  padding-top: 6rem;
`
const StyledWorkDescriptionCol = styled(Col)`
  text-align: center;
  padding: 6rem 0;
`
const StyledWorkSubTitle = styled(Col)`
  font-size: 1.1rem;
  font-weight: 400;
  padding-top: 2.1rem;
`
// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

// TODO - Use this in conjunction with a new component to create a logical routing path through the UI
// This component will not scale out well - this will be implemented for the time being
const determineCurrentPath = data => {
  switch (data.location.pathname) {
    case "/work/weedman": {
      const routingObject = {
        routingLink: "/work/noguchi",
        routingText: "Unfolding Noguchi",
      }
      return routingObject
    }
    case "/work/noguchi": {
      const routingObject = {
        routingLink: "/work/weedman",
        routingLinkTwo: "/work/bsmnt",
        routingText: "The Story of Weed Man & Bayer",
        routingTextTwo: "BSMNT",
      }
      return routingObject
    }
    case "/work/BSMNT": {
      const routingObject = {
        routingLink: "/work/noguchi",
        routingText: "BSMNT",
      }
      return routingObject
    }
    default:
      break
  }
}

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
const Work = ({ data }) => {
  const { markdownRemark } = data
  const { title, subTitle, secondaryTitle, iFrame } = markdownRemark.frontmatter
  return (
    <Container fluid style={{ height: "100vh" }}>
      <Header name="Jessica Perry" />
      <StyledWorkRow>
        <Col lg={10} style={{ textAlign: "center" }}>
          {" "}
          <iframe
            width="1180"
            height="670"
            title={title}
            src={iFrame}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Col>
        <StyledWorkDescriptionCol lg={10}>
          <h2>{title}</h2>
          <StyledWorkSubTitle>{secondaryTitle}</StyledWorkSubTitle>
          <StyledWorkSubTitle>{subTitle}</StyledWorkSubTitle>
        </StyledWorkDescriptionCol>
      </StyledWorkRow>
      <Footer />
    </Container>
  )
}

export default Work

// Query to grab the associated fields with the current path from the markdown directory
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        subTitle
        secondaryTitle
        iFrame
      }
    }
  }
`
