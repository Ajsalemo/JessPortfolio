import { graphql } from "gatsby"
import React from "react"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import styled from "styled-components"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { RoutingUI } from "../components/routingui"

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
const Work = ({ data }) => {
  const { markdownRemark } = data
  const {
    title,
    subTitle,
    secondaryTitle,
    iFrame,
    forwardLinkName,
    forwardLink,
    backLinkName,
    backLink,
    start,
    end,
  } = markdownRemark.frontmatter
  return (
    <Container fluid style={{ height: "100vh" }}>
      <Header name="Jessica Perry" />
      <StyledWorkRow>
        <Col lg={10} xl={8} style={{ textAlign: "center" }} className="embed-responsive embed-responsive-16by9">
          {" "}
          <iframe
            width="100%"
            height="670"
            title={title}
            src={iFrame}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="embed-responsive-item"
          ></iframe>
        </Col>
        <StyledWorkDescriptionCol lg={10}>
          <h2>{title}</h2>
          <StyledWorkSubTitle>{secondaryTitle}</StyledWorkSubTitle>
          <StyledWorkSubTitle>{subTitle}</StyledWorkSubTitle>
        </StyledWorkDescriptionCol>
      </StyledWorkRow>
      <RoutingUI
        forwardLinkName={forwardLinkName}
        forwardLink={forwardLink}
        backLinkName={backLinkName}
        backLink={backLink}
        start={start}
        end={end}
      />
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
        forwardLinkName
        forwardLink
        backLinkName
        backLink
        start
        end
      }
    }
  }
`
