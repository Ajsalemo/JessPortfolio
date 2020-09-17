import React from "react"
import Container from "react-bootstrap/Container"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { LandingCards } from "../components/landingcards"

const IndexPage = () => (
  <Container fluid style={{ height: "100vh" }}>
    <Header name="Jessica Perry" />
    <LandingCards />
    <Footer />
  </Container>
)

export default IndexPage
