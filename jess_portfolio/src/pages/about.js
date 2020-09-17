import React from "react"
import Container from "react-bootstrap/Container"
import { Bio } from "../components/bio"
import { Footer } from "../components/footer"
import { Header } from "../components/header"

const About = () => (
  <Container fluid style={{ height: "100vh" }}>
    <Header name="Jessica Perry" />
    <Bio />
    <Footer />
  </Container>
)

export default About
