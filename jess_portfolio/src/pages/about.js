import React from "react"
import Container from "react-bootstrap/Container"
// Components
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { Bio } from "../components/bio"

const About = () => (
  <Container fluid style={{ height: "100vh" }}>
    <Header name="Jessica Perry" />
    <Bio />
    <Footer />
  </Container>
)

export default About
