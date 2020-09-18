import React, { Fragment } from "react"
import Container from "react-bootstrap/Container"
import { Bio } from "../components/bio"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import SEO from "../components/seo"

const About = () => (
  <Fragment>
    <SEO description="About Me" lang="en" title="Jessica Perry" />
    <Container fluid style={{ height: "100vh" }}>
      <Header name="Jessica Perry" />
      <Bio />
      <Footer />
    </Container>
  </Fragment>
)

export default About
