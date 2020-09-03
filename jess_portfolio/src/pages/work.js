import React from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import styled from "styled-components"

// Components
import { Header } from "../components/header"
import { Footer } from "../components/footer"

// --------------------------------------- Styled Components ------------------------ //
// ---------------------------------------------------------------------------------- //

const StyledWorkRow = styled(Row)`
  display: flex;
  justify-content: center;
  height: auto;
  padding-top: 6rem;
`
// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const Work = data => (
  <Container fluid style={{ height: "100vh" }}>
    <Header name="Jessica Perry" />
    <StyledWorkRow>
      <Col lg={10} style={{ textAlign: "center" }}>
        {" "}
        <iframe
          width="1180"
          height="670"
          title={data.location.state.title}
          src={data.location.state.videoSrc}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Col>
    </StyledWorkRow>
    <Footer />
  </Container>
)

export default Work
