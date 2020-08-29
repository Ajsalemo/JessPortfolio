import React from "react"
import Container from "react-bootstrap/Container"
// Components
import { Header } from "../components/header"
import { LandingCards } from "../components/landingcards"
import { Footer } from "../components/footer"

const IndexPage = () => (
  <Container fluid style={{ height: "100vh" }}>
    <Header name="Jessica Perry" />
    <LandingCards />
    <Footer />
  </Container>
)

export default IndexPage
